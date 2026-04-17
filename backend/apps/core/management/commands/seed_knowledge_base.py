from django.core.management.base import BaseCommand

from apps.core.models import KnowledgeBase


class Command(BaseCommand):
    help = 'Seed knowledge base articles'

    def handle(self, *args, **options):
        items = [
            {
                'tag': 'Məsləhət',
                'title': 'Peşəkar usta seçmək üçün 6 sual',
                'description': 'Sertifikat, rəylər, material, müqavilə, texniki dəstək.',
                'order': 1,
            },
            {
                'tag': 'Xəbərdarlıq',
                'title': 'Tikintidə 5 kritik səhv',
                'description': 'Plansız tikinti, ucuz material, su izolyasiyasına laqeydlik.',
                'order': 2,
            },
            {
                'tag': 'Təhlükəsizlik',
                'title': 'Yanğın təhlükəsizliyi: 5 tədbir',
                'description': 'Elektrik qoruyucuları, qaz sensoru, yanğına davamlı materiallar.',
                'order': 3,
            },
            {
                'tag': 'Bələdçi',
                'title': 'Ev tikintisinin 5 mərhələsi',
                'description': 'Torpaq sənədləri, layihələndirmə, icazələr, smeta, material.',
                'order': 4,
            },
        ]

        for item in items:
            KnowledgeBase.objects.update_or_create(
                title=item['title'],
                defaults=item,
            )
            self.stdout.write(self.style.SUCCESS(f'  ✓ {item["title"]}'))

        self.stdout.write(self.style.SUCCESS(f'\n{len(items)} knowledge base items seeded.'))
