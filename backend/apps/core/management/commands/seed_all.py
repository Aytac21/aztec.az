"""Run every seed_* command in one go."""
from django.core.management import call_command
from django.core.management.base import BaseCommand

SEED_COMMANDS = [
    'seed_heroes',
    'seed_about',
    'seed_advantages',
    'seed_services',
    'seed_projects',
    'seed_gallery',
    'seed_news',
    'seed_knowledge_base',
    'seed_vacancies',
    'seed_team',
    'seed_contact',
]


class Command(BaseCommand):
    help = 'Populate the database with initial content by running all seed_* commands.'

    def add_arguments(self, parser):
        parser.add_argument(
            '--skip',
            nargs='*',
            default=[],
            help='Space-separated list of seed command names to skip.',
        )

    def handle(self, *args, **options):
        skip = set(options['skip'] or [])
        for name in SEED_COMMANDS:
            if name in skip:
                self.stdout.write(self.style.WARNING(f'skip  {name}'))
                continue
            self.stdout.write(self.style.NOTICE(f'→ {name}'))
            try:
                call_command(name)
            except Exception as exc:  # noqa: BLE001
                self.stdout.write(self.style.ERROR(f'  FAILED: {exc}'))
                continue
        self.stdout.write(self.style.SUCCESS('All done.'))
