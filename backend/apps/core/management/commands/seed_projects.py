from django.core.management.base import BaseCommand

from apps.core.models import Project

PROJECTS = [
    {
        'slug': 'yevlax-olimpiya',
        'title': 'Yevlax Olimpiya Kompleksi',
        'description': 'Fasad və təmir işləri',
        'status': 'done',
        'category': 'gov',
        'location': 'Yevlax',
        'area': '',
        'is_featured': True,
        'featured_description': 'Dövlət əhəmiyyətli layihə. Fasad və tam təmir işləri.',
        'order': 1,
    },
    {
        'slug': 'qebele-olimpiya',
        'title': 'Qəbələ Olimpiya Kompleksi',
        'description': 'Fasad və təmir işləri',
        'status': 'done',
        'category': 'gov',
        'location': 'Qəbələ',
        'area': '',
        'is_featured': False,
        'featured_description': '',
        'order': 2,
    },
    {
        'slug': 'mrt-hotel',
        'title': 'MRT Hotel',
        'description': 'Mingəçevir',
        'status': 'done',
        'category': 'com',
        'location': 'Mingəçevir',
        'area': '',
        'is_featured': False,
        'featured_description': '',
        'order': 3,
    },
    {
        'slug': 'qarabag-market',
        'title': 'Qarabağ Market',
        'description': 'Mingəçevir',
        'status': 'done',
        'category': 'com',
        'location': 'Mingəçevir',
        'area': '',
        'is_featured': False,
        'featured_description': '',
        'order': 4,
    },
    {
        'slug': 'ferdi-yasayis-evi',
        'title': 'Fərdi yaşayış evi',
        'description': 'Yevlax, Salahlı · 240 kv.m',
        'status': 'done',
        'category': 'res',
        'location': 'Yevlax, Salahlı',
        'area': '240 kv.m',
        'is_featured': False,
        'featured_description': '',
        'order': 5,
    },
    {
        'slug': '2-mertebeli-yasayis-evi',
        'title': '2 mərtəbəli yaşayış evi',
        'description': '232 kv.m · 5 otaq',
        'status': 'on',
        'category': 'res',
        'location': '',
        'area': '232 kv.m · 5 otaq',
        'is_featured': False,
        'featured_description': '',
        'order': 6,
    },
    {
        'slug': 'ticaret-eylence-kompleksi',
        'title': 'Ticarət və əyləncə kompleksi',
        'description': 'Yevlax',
        'status': 'done',
        'category': 'com',
        'location': 'Yevlax',
        'area': '',
        'is_featured': False,
        'featured_description': '',
        'order': 7,
    },
    {
        'slug': 'usaq-parki',
        'title': 'Uşaq parkı',
        'description': 'Yevlax',
        'status': 'done',
        'category': 'pub',
        'location': 'Yevlax',
        'area': '',
        'is_featured': False,
        'featured_description': '',
        'order': 8,
    },
    {
        'slug': 'ticaret-obyekti-terter',
        'title': 'Ticarət obyekti',
        'description': 'Tərtər',
        'status': 'done',
        'category': 'com',
        'location': 'Tərtər',
        'area': '',
        'is_featured': False,
        'featured_description': '',
        'order': 9,
    },
]


class Command(BaseCommand):
    help = 'Seed Project data'

    def handle(self, *args, **options):
        for data in PROJECTS:
            obj, created = Project.objects.update_or_create(
                slug=data['slug'],
                defaults=data,
            )
            status = 'CREATED' if created else 'UPDATED'
            self.stdout.write(f'  {status}: {obj.title}')
        self.stdout.write(self.style.SUCCESS(f'Done – {len(PROJECTS)} projects.'))
