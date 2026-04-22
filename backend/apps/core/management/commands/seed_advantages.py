"""Seed Advantages (Üstünlüklər) from backend/seed_data/advantages.json.

Each JSON item may contain localized keys (title_az/ru/en, description_az/ru/en)
plus the shared fields: icon, order.

Usage:
    python manage.py seed_advantages
    python manage.py seed_advantages --path /abs/path/to/file.json
    python manage.py seed_advantages --prune     # delete DB rows not in JSON
"""
import json
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError

from apps.core.models import Advantage


DEFAULT_PATH = Path(__file__).resolve().parents[4] / 'seed_data' / 'advantages.json'
LANGS = ('az', 'ru', 'en')


class Command(BaseCommand):
    help = 'Seed Advantages from seed_data/advantages.json (multilingual).'

    def add_arguments(self, parser):
        parser.add_argument('--path', default=str(DEFAULT_PATH),
                            help='Path to advantages JSON file.')
        parser.add_argument('--prune', action='store_true',
                            help='Delete DB rows whose (icon, order) are not in JSON.')

    def handle(self, *args, **opts):
        path = Path(opts['path'])
        if not path.exists():
            raise CommandError(f'JSON file not found: {path}')

        with path.open('r', encoding='utf-8') as fh:
            items = json.load(fh)
        if not isinstance(items, list):
            raise CommandError('Advantages JSON must be a top-level array.')

        kept_keys = set()
        for idx, item in enumerate(items, 1):
            icon = item.get('icon') or 'fas fa-check'
            order = int(item.get('order', idx))
            # AZ title is the lookup key (matches Advantage.title default lang)
            title_az = item.get('title_az') or item.get('title') or ''
            if not title_az:
                self.stdout.write(self.style.WARNING(f'  skip item #{idx}: missing title_az'))
                continue

            defaults = {
                'icon': icon,
                'order': order,
                'title': title_az,
                'description': item.get('description_az') or item.get('description') or '',
            }
            # Per-language translated fields (django-modeltranslation creates
            # title_az/title_ru/title_en columns automatically)
            for lang in LANGS:
                t = item.get(f'title_{lang}')
                d = item.get(f'description_{lang}')
                if t is not None:
                    defaults[f'title_{lang}'] = t
                if d is not None:
                    defaults[f'description_{lang}'] = d

            obj, created = Advantage.objects.update_or_create(
                title=title_az,
                defaults=defaults,
            )
            kept_keys.add(obj.pk)
            status = 'created' if created else 'updated'
            self.stdout.write(self.style.SUCCESS(f'  ✓ {status}: {title_az}'))

        if opts['prune']:
            removed = Advantage.objects.exclude(pk__in=kept_keys).delete()
            self.stdout.write(self.style.WARNING(f'  pruned: {removed}'))

        self.stdout.write(self.style.SUCCESS(f'\n{len(items)} advantage(s) processed.'))
