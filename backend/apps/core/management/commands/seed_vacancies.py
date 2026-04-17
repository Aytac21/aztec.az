from django.core.management.base import BaseCommand

from apps.core.models import Vacancy


class Command(BaseCommand):
    help = 'Seed vacancies'

    def handle(self, *args, **options):
        items = [
            {
                'title': 'Tikinti mühəndisi',
                'vacancy_type': 'job',
                'location': 'Mingəçevir',
                'work_type': 'Tam ştat',
                'description': 'Minimum 3 il təcrübə. Layihə nəzarəti, smeta, usta koordinasiyası, keyfiyyət yoxlaması. AutoCAD biliyinə üstünlük.',
                'whatsapp_text': 'Tikinti mühəndisi vakansiyası',
                'order': 1,
            },
            {
                'title': 'İnteryer dizayner',
                'vacancy_type': 'job',
                'location': 'Mingəçevir',
                'work_type': 'Tam ştat',
                'description': '3D Max, SketchUp və ya Revit-də 2+ il təcrübə. Neoklasika/klassika/müasir üslublar üzrə portfolio.',
                'whatsapp_text': 'Dizayner vakansiyası',
                'order': 2,
            },
            {
                'title': 'Peşəkar usta',
                'vacancy_type': 'job',
                'location': 'Ümumi Azərbaycan',
                'work_type': 'Layihə əsaslı',
                'description': 'Kafel, boya, elektrik, santexnik, izolyasiya, fasad. 5+ il təcrübə. Rəqabətli əmək haqqı.',
                'whatsapp_text': 'Usta vakansiyası',
                'order': 3,
            },
            {
                'title': 'Təcrübə proqramı',
                'vacancy_type': 'intern',
                'location': '',
                'work_type': '',
                'description': '2-6 aylıq təcrübə. Real layihələr, mentorluq, karyera inkişafı. Uğurlu təcrübəçilərə daimi iş.',
                'whatsapp_text': 'Təcrübə proqramı',
                'order': 4,
            },
        ]

        for item in items:
            Vacancy.objects.update_or_create(
                title=item['title'],
                defaults=item,
            )
            self.stdout.write(self.style.SUCCESS(f'  ✓ {item["title"]}'))

        self.stdout.write(self.style.SUCCESS(f'\n{len(items)} vacancy seeded.'))
