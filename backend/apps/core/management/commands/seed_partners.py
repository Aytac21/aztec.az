"""Seed Partners (Tərəfdaşlar) from backend/seed_data/partners.json.

Each JSON item may contain localized keys (name_az/ru/en, description_az/ru/en)
plus the shared fields: icon, category, order.

Usage:
    python manage.py seed_partners
    python manage.py seed_partners --prune
"""
import json
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError

from apps.core.models import Partner


DEFAULT_PATH = Path(__file__).resolve().parents[4] / 'seed_data' / 'partners.json'
LANGS = ('az', 'ru', 'en')


class Command(BaseCommand):
    help = 'Seed Partners from seed_data/partners.json (multilingual).'

    def add_arguments(self, parser):
        parser.add_argument('--path', default=str(DEFAULT_PATH),
                            help='Path to partners JSON file.')
        parser.add_argument('--prune', action='store_true',
                            help='Delete DB rows whose (name_az) are not in JSON.')

    def handle(self, *args, **opts):
        path = Path(opts['path'])
        if not path.exists():
            raise CommandError(f'JSON file not found: {path}')

        with path.open('r', encoding='utf-8') as fh:
            items = json.load(fh)
        if not isinstance(items, list):
            raise CommandError('Partners JSON must be a top-level array.')

        kept = set()
        for idx, item in enumerate(items, 1):
            name_az = item.get('name_az') or item.get('name') or ''
            if not name_az:
                self.stdout.write(self.style.WARNING(f'  skip #{idx}: missing name_az'))
                continue

            defaults = {
                'icon': item.get('icon') or 'fas fa-handshake',
                'category': item.get('category') or 'material',
                'order': int(item.get('order', idx)),
                'is_active': bool(item.get('is_active', True)),
                'name': name_az,
                'description': item.get('description_az') or item.get('description') or '',
            }
            for lang in LANGS:
                n = item.get(f'name_{lang}')
                d = item.get(f'description_{lang}')
                if n is not None:
                    defaults[f'name_{lang}'] = n
                if d is not None:
                    defaults[f'description_{lang}'] = d

            obj, created = Partner.objects.update_or_create(
                name=name_az,
                defaults=defaults,
            )
            kept.add(obj.pk)
            status = 'created' if created else 'updated'
            self.stdout.write(self.style.SUCCESS(f'  ✓ {status}: {name_az} [{defaults["category"]}]'))

        if opts['prune']:
            removed = Partner.objects.exclude(pk__in=kept).delete()
            self.stdout.write(self.style.WARNING(f'  pruned: {removed}'))

        self.stdout.write(self.style.SUCCESS(f'\n{len(items)} partner(s) processed.'))
