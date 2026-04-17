from django.core.management.base import BaseCommand

from apps.core.models import Advantage


class Command(BaseCommand):
    help = 'Seed advantages (Üstünlüklər)'

    def handle(self, *args, **options):
        items = [
            {
                'icon': 'fas fa-mountain',
                'title': 'Torpaq analizi və bünövrə',
                'description': 'Hər tikinti torpaq analizindən başlayır. Keyfiyyətli beton və armatur.',
                'order': 1,
            },
            {
                'icon': 'fas fa-pencil-ruler',
                'title': 'Peşəkar layihələndirmə',
                'description': 'Lisenziyalı planlar, 3D vizualizasiya. Fərdi yanaşma.',
                'order': 2,
            },
            {
                'icon': 'fas fa-gem',
                'title': 'Keyfiyyətli materiallar',
                'description': 'Etibarlı təchizatçılardan birinci sinif materiallar.',
                'order': 3,
            },
            {
                'icon': 'fas fa-hard-hat',
                'title': 'Peşəkar icra',
                'description': '100+ təcrübəli mütəxəssis. Ciddi iş qrafiki.',
                'order': 4,
            },
            {
                'icon': 'fas fa-shield-alt',
                'title': 'Keyfiyyət nəzarəti',
                'description': 'Hər mərhələdə standartlara uyğunluq yoxlanışı.',
                'order': 5,
            },
            {
                'icon': 'fas fa-clock',
                'title': 'Vaxtında təhvil',
                'description': 'Razılaşdırılmış müddətlərə riayət. Gecikmə məsuliyyəti.',
                'order': 6,
            },
            {
                'icon': 'fas fa-file-contract',
                'title': 'Şəffaf müqavilə',
                'description': 'Yazılı müqavilə, əvvəlcədən smeta. Gizli xərclər yox.',
                'order': 7,
            },
            {
                'icon': 'fas fa-headset',
                'title': 'Açar təhvili zəmanət',
                'description': 'Təhvildən sonra texniki dəstək. Pulsuz təmir zəmanəti.',
                'order': 8,
            },
        ]

        for item in items:
            Advantage.objects.update_or_create(
                title=item['title'],
                defaults=item,
            )
            self.stdout.write(self.style.SUCCESS(f'  ✓ {item["title"]}'))

        self.stdout.write(self.style.SUCCESS(f'\n{len(items)} advantages seeded.'))
