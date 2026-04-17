from django.core.management.base import BaseCommand

from apps.core.models import ContactInfo


class Command(BaseCommand):
    help = 'Seed contact info (singleton)'

    def handle(self, *args, **options):
        obj, created = ContactInfo.objects.update_or_create(
            pk=1,
            defaults={
                'phone1': '+994 55 555 79 05',
                'phone2': '+994 55 975 89 00',
                'address': 'Mingəçevir şəhəri, Məhəmmədhüseyn Şəhriyar küçəsi 75',
                'work_hours': 'Bazar ertəsi – Şənbə, 09:00 – 18:00',
                'whatsapp_number': '994555557905',
                'instagram_url': 'https://www.instagram.com/azteconstruction/',
                'tiktok_url': 'https://www.tiktok.com/@aztec.constructionn',
                'facebook_url': 'https://www.facebook.com/profile.php?id=61575721733333',
            },
        )
        action = 'Created' if created else 'Updated'
        self.stdout.write(self.style.SUCCESS(f'{action} contact info.'))
