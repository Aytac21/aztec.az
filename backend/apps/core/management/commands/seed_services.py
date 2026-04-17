from django.core.management.base import BaseCommand

from apps.core.models import Service

SERVICES = [
    {
        'slug': 'mearliq',
        'icon': 'fas fa-drafting-compass',
        'title': 'Memarlıq və layihələndirmə',
        'short_description': 'Eskiz layihədən texniki planlara qədər funksional və estetik həllər.',
        'description': (
            'Binanın funksional planlaşdırılmasından fasad konseptinə qədər '
            'bütün mərhələlər. Torpaq analizi, müştəri tələbləri, texniki şərtlər.'
        ),
        'category_name': 'Xidmətə daxildir',
        'category_items': (
            'Eskiz layihə, texniki planlar, konstruksiya həlli, '
            'bünövrə hesablaması, 3D vizualizasiya.'
        ),
        'order': 1,
    },
    {
        'slug': 'interyer-dizayn',
        'icon': 'fas fa-couch',
        'title': 'İnteryer dizayn',
        'short_description': (
            'Neoklasika, klassika, ağır klassika və müasir üslublarda '
            'açar təhvili icra.'
        ),
        'description': (
            'Hər məkan üçün fərdi konsepsiya. Qonaq otağı, yataq otağı, '
            'mətbəx, sanuzel, dəhliz, gənc otağı.'
        ),
        'category_name': 'Üslublar',
        'category_items': (
            'Neoklasika, Klassika, Ağır klassika, Müasir minimalizm. '
            'Açar təhvili icra.'
        ),
        'order': 2,
    },
    {
        'slug': 'fasad-isleri',
        'icon': 'fas fa-building',
        'title': 'Fasad işləri',
        'short_description': 'Şüşə, metal, kompozit və pen panel ilə müasir fasad həlləri.',
        'description': (
            'Müasir tələblərə uyğun bütün materiallarla həllər. '
            'Şüşə, metal, kompozit, pen panel.'
        ),
        'category_name': '',
        'category_items': '',
        'order': 3,
    },
    {
        'slug': 'temir-tikinti',
        'icon': 'fas fa-hard-hat',
        'title': 'Təmir-tikinti',
        'short_description': 'Bünövrədən son dekorasiyaya kimi açar təhvil tikinti.',
        'description': (
            'Açar təhvil tikinti. Bünövrədən son dekorasiyaya. '
            'Armatur, beton, su izolyasiyası, istilik izolyasiyası.'
        ),
        'category_name': '',
        'category_items': '',
        'order': 4,
    },
    {
        'slug': 'landsaft-hovuz-besetka',
        'icon': 'fas fa-tree',
        'title': 'Landşaft, hovuz və besetka',
        'short_description': (
            'Yaşıllaşdırma, hovuzlar, müasir yay mətbəxi konseptli besetkalar.'
        ),
        'description': (
            'Yaşıllaşdırma, bütün növ hovuzlar, müasir yay mətbəxi '
            'konseptli besetkalar, xarici işıqlandırma.'
        ),
        'category_name': '',
        'category_items': '',
        'order': 5,
    },
    {
        'slug': 'konsaltinq',
        'icon': 'fas fa-pencil-ruler',
        'title': 'Konsaltinq',
        'short_description': (
            'Tikinti planlaması, smeta, torpaq sənədləri üzrə texniki məsləhət.'
        ),
        'description': (
            'Tikinti planlaması, smeta, texniki məsləhət. Torpaq sənədləri '
            'və icazələr. İlkin konsultasiya pulsuz.'
        ),
        'category_name': '',
        'category_items': '',
        'order': 6,
    },
]


class Command(BaseCommand):
    help = 'Seed Service data'

    def handle(self, *args, **options):
        for data in SERVICES:
            obj, created = Service.objects.update_or_create(
                slug=data['slug'],
                defaults=data,
            )
            status = 'CREATED' if created else 'UPDATED'
            self.stdout.write(f'  {status}: {obj.title}')
        self.stdout.write(self.style.SUCCESS(f'Done – {len(SERVICES)} services.'))
