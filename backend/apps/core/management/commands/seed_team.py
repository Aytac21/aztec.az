"""Seed initial TeamMember records from komandamiz.html."""
from django.core.management.base import BaseCommand

from apps.core.models import TeamMember

MEMBERS = [
    # Management
    ('mgmt', 'Rəşad Hüseynov',   'Baş direktor'),
    ('mgmt', 'Elçin Məmmədov',   'Tikinti direktoru'),
    ('mgmt', 'Nigar Əliyeva',    'Dizayn rəhbəri'),
    ('mgmt', 'Tural Qasımov',    'Layihə meneceri'),
    # Specialists
    ('spec', 'Vüqar Həsənli',    'Baş mühəndis'),
    ('spec', 'Aynur Rəhimova',   'İnteryer dizayner'),
    ('spec', 'Orxan Babayev',    'Fasad mütəxəssisi'),
    ('spec', 'Səbinə Nəzərova',  'Smeta mühəndisi'),
    ('spec', 'Fərid İsmayılov',  'Tikinti briqadiri'),
    ('spec', 'Lalə Əhmədova',    'Müştəri əlaqələri'),
    ('spec', 'Rauf Hüseynzadə',  'Landşaft mühəndisi'),
    ('spec', 'Günay Səfərova',   'Keyfiyyət nəzarətçisi'),
]


class Command(BaseCommand):
    help = 'Seed TeamMember records.'

    def handle(self, *args, **options):
        for order, (group, name, role) in enumerate(MEMBERS):
            obj, created = TeamMember.objects.update_or_create(
                name=name,
                defaults={
                    'group': group,
                    'role': role,
                    'order': order,
                    'is_active': True,
                },
            )
            mark = '  ✓' if created else '  ↻'
            self.stdout.write(f'{mark} {obj.name} — {obj.role}')
        self.stdout.write(self.style.SUCCESS(f'{len(MEMBERS)} team members seeded.'))
