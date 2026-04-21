"""Populate DB from content_seed_az.json (source of truth).

Unlike the legacy seed_* commands, this one:
- Reads every entity from the JSON file
- Uses update_or_create by slug/page
- DELETES any existing rows whose slug/page is no longer in the JSON

Run:
    python manage.py seed_from_json
    python manage.py seed_from_json --prune        # delete rows not in JSON
    python manage.py seed_from_json --only projects services
"""
import json
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError

from apps.core.models import (
    AboutContent,
    Advantage,
    ContactInfo,
    KnowledgeBase,
    PageHero,
    Project,
    Service,
)


DEFAULT_PATH = Path(__file__).resolve().parents[4] / 'content_seed_az.json'


class Command(BaseCommand):
    help = 'Seed database from content_seed_az.json (single source of truth).'

    def add_arguments(self, parser):
        parser.add_argument(
            '--path', default=str(DEFAULT_PATH),
            help='Path to content_seed_az.json',
        )
        parser.add_argument(
            '--prune', action='store_true',
            help='Delete rows whose slug/page is not in JSON.',
        )
        parser.add_argument(
            '--only', nargs='+', default=None,
            choices=['heroes', 'about', 'advantages', 'services',
                     'projects', 'knowledge_base', 'contact'],
            help='Only run listed sections.',
        )

    def handle(self, *args, **opts):
        path = Path(opts['path'])
        if not path.exists():
            raise CommandError(f'JSON file not found: {path}')
        with path.open(encoding='utf-8') as fh:
            data = json.load(fh)

        prune = opts['prune']
        sections = opts['only'] or [
            'heroes', 'about', 'advantages', 'services',
            'projects', 'knowledge_base', 'contact',
        ]

        if 'heroes' in sections:
            self._seed_heroes(data.get('page_heroes', []), prune)
        if 'about' in sections:
            self._seed_about(data.get('about_content'))
        if 'advantages' in sections:
            self._seed_advantages(data.get('advantages', []), prune)
        if 'services' in sections:
            self._seed_services(data.get('services', []), prune)
        if 'projects' in sections:
            self._seed_projects(data.get('projects', []), prune)
        if 'knowledge_base' in sections:
            self._seed_kb(data.get('knowledge_base', []), prune)
        if 'contact' in sections:
            self._seed_contact(data.get('contact_info'))

        self.stdout.write(self.style.SUCCESS('seed_from_json complete.'))

    # ------------------------------------------------------------------ helpers

    def _upsert(self, model, lookup, defaults, label):
        obj, created = model.objects.update_or_create(**lookup, defaults=defaults)
        status = 'CREATED' if created else 'UPDATED'
        self.stdout.write(f'  {status}: {label}')
        return obj

    def _prune(self, model, field, keep_values, verbose):
        qs = model.objects.exclude(**{f'{field}__in': list(keep_values)})
        count = qs.count()
        if count:
            removed = list(qs.values_list(field, flat=True))
            qs.delete()
            self.stdout.write(self.style.WARNING(
                f'  PRUNED {count} stale {verbose}: {removed}'
            ))

    # ------------------------------------------------------------------ sections

    def _seed_heroes(self, items, prune):
        self.stdout.write(self.style.NOTICE('\n→ page_heroes'))
        keep = set()
        for it in items:
            page = it['page']
            keep.add(page)
            defaults = {k: v for k, v in it.items() if k != 'page'}
            self._upsert(PageHero, {'page': page}, defaults, page)
        if prune:
            self._prune(PageHero, 'page', keep, 'heroes')

    def _seed_about(self, obj):
        if not obj:
            return
        self.stdout.write(self.style.NOTICE('\n→ about_content'))
        AboutContent.objects.update_or_create(pk=1, defaults=obj)
        self.stdout.write('  UPDATED: about singleton')

    def _seed_advantages(self, items, prune):
        self.stdout.write(self.style.NOTICE('\n→ advantages'))
        keep = set()
        for it in items:
            title = it['title']
            keep.add(title)
            self._upsert(Advantage, {'title': title}, it, title)
        if prune:
            self._prune(Advantage, 'title', keep, 'advantages')

    def _seed_services(self, items, prune):
        self.stdout.write(self.style.NOTICE('\n→ services'))
        keep = set()
        for it in items:
            slug = it['slug']
            keep.add(slug)
            self._upsert(Service, {'slug': slug}, it, it['title'])
        if prune:
            self._prune(Service, 'slug', keep, 'services')

    def _seed_projects(self, items, prune):
        self.stdout.write(self.style.NOTICE('\n→ projects'))
        keep = set()
        for it in items:
            slug = it['slug']
            keep.add(slug)
            self._upsert(Project, {'slug': slug}, it, it['title'])
        if prune:
            self._prune(Project, 'slug', keep, 'projects')

    def _seed_kb(self, items, prune):
        self.stdout.write(self.style.NOTICE('\n→ knowledge_base'))
        keep = set()
        for it in items:
            slug = it['slug']
            keep.add(slug)
            self._upsert(KnowledgeBase, {'slug': slug}, it, it['title'])
        if prune:
            self._prune(KnowledgeBase, 'slug', keep, 'knowledge_base')

    def _seed_contact(self, obj):
        if not obj:
            return
        self.stdout.write(self.style.NOTICE('\n→ contact_info'))
        ContactInfo.objects.update_or_create(pk=1, defaults=obj)
        self.stdout.write('  UPDATED: contact singleton')
