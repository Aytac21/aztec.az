# Aztec.az — Deployment Guide

Server: **`94.20.59.240`** · Domain: **`aztec.az`**
Stack: **nginx → gunicorn (unix socket) → Django 6 + PostgreSQL + static HTML frontend**

---

## 0. Prerequisites

- Ubuntu 22.04 / 24.04 server with root/sudo access
- DNS A record: `aztec.az → 94.20.59.240` (and `www.aztec.az`)

## 1. One-command bootstrap

```bash
ssh root@94.20.59.240
wget -qO /tmp/deploy.sh https://raw.githubusercontent.com/Aytac21/aztec.az/main/deploy/deploy.sh
# or scp deploy/deploy.sh root@94.20.59.240:/tmp/
bash /tmp/deploy.sh
```

This script installs packages, clones the repo into `/var/www/aztec.az`, sets up the virtualenv, runs migrations, collects static files, installs systemd + nginx configs, and starts gunicorn.

## 2. Configure `.env`

Before (or right after) the first run:

```bash
cd /var/www/aztec.az/backend
cp .env.example .env
nano .env
```

Set at minimum:

```ini
SECRET_KEY=<long-random-string>
DEBUG=False

USE_POSTGRES=true
POSTGRES_DB=aztec
POSTGRES_USER=aztec_user
POSTGRES_PASSWORD=<strong-password>
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
```

## 3. Create PostgreSQL DB & user

```bash
sudo -u postgres psql <<'EOF'
CREATE DATABASE aztec;
CREATE USER aztec_user WITH PASSWORD 'REPLACE_ME';
ALTER ROLE aztec_user SET client_encoding TO 'utf8';
ALTER ROLE aztec_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE aztec_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE aztec TO aztec_user;
\c aztec
GRANT ALL ON SCHEMA public TO aztec_user;
EOF
```

Re-run `bash /tmp/deploy.sh` to apply migrations against Postgres.

## 4. Create admin user

```bash
cd /var/www/aztec.az/backend
source .venv/bin/activate
python manage.py createsuperuser
```

## 5. SSL with Let's Encrypt

```bash
certbot --nginx -d aztec.az -d www.aztec.az
```

Then edit `/etc/nginx/sites-available/aztec.az` and uncomment the HTTPS block + the HTTP→HTTPS redirect. Reload:

```bash
nginx -t && systemctl reload nginx
```

## 6. Verify

- `http://aztec.az/` — static HTML (`index.html`)
- `http://aztec.az/admin/` — Django admin (jazzmin UI)
- `http://aztec.az/api/services/?lang=ru` — JSON from gunicorn
- `http://aztec.az/media/services/…` — uploaded videos/images

---

## File layout on server

```
/var/www/aztec.az/
├── backend/                  # Django project (config/, apps/, manage.py, .env)
│   ├── .venv/
│   ├── staticfiles/          # collectstatic output
│   ├── media/                # user uploads
│   └── locale/               # rosetta .po/.mo
├── frontend/                 # symlinks into repo root (index.html, shared.js, …)
└── deploy/                   # this folder (nginx + systemd units + script)
```

## Service commands

```bash
# Backend
systemctl status gunicorn
systemctl restart gunicorn
journalctl -u gunicorn -n 200 -f

# Nginx
nginx -t
systemctl reload nginx
tail -f /var/log/nginx/access.log /var/log/nginx/error.log

# Gunicorn logs
tail -f /var/log/gunicorn/aztec-error.log
```

## Re-deploy (after git push)

```bash
bash /var/www/aztec.az/deploy/deploy.sh
```

The script pulls latest code, runs `migrate`, `collectstatic`, `compilemessages` and restarts gunicorn.

## Frontend → Backend wiring

`shared.js` auto-detects the environment:
- On `localhost` / `127.0.0.1`: calls `http://127.0.0.1:8000/api/…` (Django dev server)
- On any other hostname (production): calls `/api/…` **same-origin** (nginx proxies to gunicorn)

No CORS headers are needed in production.

## Troubleshooting

| Problem | Fix |
|---|---|
| `502 Bad Gateway` | `systemctl status gunicorn` — socket/permission issues |
| `DisallowedHost` | Add hostname to `ALLOWED_HOSTS` in `settings.py` |
| Static files 404 | Re-run `collectstatic`; check `nginx` alias path |
| Media uploads missing | Ensure `media/` exists and is writable by `www-data` |
| CSRF errors on admin | Add scheme+host to `CSRF_TRUSTED_ORIGINS` |
