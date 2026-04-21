#!/usr/bin/env bash
# Aztec Construction — one-shot deploy script for Ubuntu 22.04+ server.
# Run as root (or with sudo). Re-runnable: updates code, deps, migrations, static.
#
#   sudo bash deploy.sh
#
set -euo pipefail

APP_DIR=/var/www/aztec.az
REPO_URL=${REPO_URL:-https://github.com/Aytac21/aztec.az.git}
BRANCH=${BRANCH:-main}
PY=python3

# ---------- 1. System packages ----------
apt-get update
apt-get install -y python3 python3-venv python3-pip git nginx \
    postgresql postgresql-contrib libpq-dev build-essential \
    gettext certbot python3-certbot-nginx

# ---------- 2. Clone / pull repo ----------
if [ ! -d "$APP_DIR/.git" ]; then
    mkdir -p "$(dirname "$APP_DIR")"
    git clone -b "$BRANCH" "$REPO_URL" "$APP_DIR"
else
    git -C "$APP_DIR" fetch --all
    git -C "$APP_DIR" reset --hard "origin/$BRANCH"
fi

# ---------- 3. Frontend assets stay at repo root; link into nginx root ----------
mkdir -p "$APP_DIR/frontend"
# If your frontend HTML/CSS/JS lives in repo root, symlink them:
for f in "$APP_DIR"/*.html "$APP_DIR"/shared.js; do
    [ -e "$f" ] && ln -sfn "$f" "$APP_DIR/frontend/$(basename "$f")"
done
# Optional asset folders
for d in assets img images css js static; do
    [ -d "$APP_DIR/$d" ] && ln -sfn "$APP_DIR/$d" "$APP_DIR/frontend/$d"
done

# ---------- 4. Python virtualenv + backend deps ----------
cd "$APP_DIR/backend"
if [ ! -d .venv ]; then
    $PY -m venv .venv
fi
. .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt

# ---------- 5. .env sanity check ----------
if [ ! -f .env ]; then
    echo "ERROR: $APP_DIR/backend/.env is missing. Copy .env.example and fill in values."
    exit 1
fi

# ---------- 6. Django: migrate, collectstatic, compilemessages ----------
python manage.py migrate --noinput
python manage.py collectstatic --noinput
python manage.py compilemessages || true

# ---------- 7. Ownership ----------
chown -R www-data:www-data "$APP_DIR"
mkdir -p /run/gunicorn /var/log/gunicorn
chown www-data:www-data /run/gunicorn /var/log/gunicorn

# ---------- 8. systemd units ----------
install -m 644 "$APP_DIR/deploy/gunicorn.service" /etc/systemd/system/gunicorn.service
install -m 644 "$APP_DIR/deploy/gunicorn.socket"  /etc/systemd/system/gunicorn.socket
systemctl daemon-reload
systemctl enable --now gunicorn.socket
systemctl restart gunicorn.service

# ---------- 9. Nginx ----------
install -m 644 "$APP_DIR/deploy/nginx-aztec.conf" /etc/nginx/sites-available/aztec.az
ln -sfn /etc/nginx/sites-available/aztec.az /etc/nginx/sites-enabled/aztec.az
# Optional: disable default site
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

echo
echo "=========================================="
echo " Deploy completed."
echo " Site:  http://aztec.az   (or http://187.127.74.175)"
echo " Admin: http://aztec.az/admin/"
echo
echo " Next steps:"
echo "   1. DNS A-record: aztec.az -> 187.127.74.175"
echo "   2. SSL:  certbot --nginx -d aztec.az -d www.aztec.az"
echo "   3. Uncomment HTTPS block in /etc/nginx/sites-available/aztec.az"
echo "=========================================="
