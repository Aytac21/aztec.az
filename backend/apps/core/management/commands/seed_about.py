from django.core.management.base import BaseCommand

from apps.core.models import AboutContent


class Command(BaseCommand):
    help = 'Seed about content (singleton)'

    def handle(self, *args, **options):
        obj, created = AboutContent.objects.update_or_create(
            pk=1,
            defaults={
                'tag': 'Haqqımızda',
                'title': 'Gələcəyi inşa edirik',
                'summary_p1': 'Aztec Construction 2017-ci ildən tikinti, təmir və dizayn sahəsində fəaliyyət göstərən, dinamik və etibarlı şirkətdir. 500-dən çox yaşayış və qeyri-yaşayış obyektinin tikintisində iştirak etmişik.',
                'summary_p2': '4 ofis, 100-dən çox peşəkar əməkdaşla Azərbaycanın hər 12 regionunda xidmət göstəririk.',
                'badge1_number': '500+',
                'badge1_label': 'Layihə',
                'badge2_number': '4',
                'badge2_label': 'Ofis',
                'badge3_number': '100+',
                'badge3_label': 'Əməkdaş',
                'profile_tag': 'Profil',
                'profile_title': 'Şirkət profili',
                'profile_text': (
                    '<p>Aztec Construction 2017-ci ildən tikinti, təmir və dizayn sahəsində fəaliyyət göstərən, '
                    'dinamik və etibarlı şirkətdir. Müasir yanaşma və yüksək keyfiyyət standartları ilə bazarda '
                    'mövqeyimizi gücləndiririk.</p>'
                    '<p>Bu günə qədər 500-dən çox yaşayış və qeyri-yaşayış obyektinin, həmçinin bir çox dövlət '
                    'əhəmiyyətli layihənin tikintisində və təmirində iştirak etmişik. Hər layihədə planlama '
                    'mərhələsindən təhvilə qədər tam nəzarət edirik. Peşəkar komanda, operativ icra, zəmanətli '
                    'nəticə, keyfiyyətə nəzarət.</p>'
                    '<p>Ərazi üzrə 4 ofis və 100-dən çox peşəkar əməkdaşımızla Ümumi Azərbaycan ərazisində, '
                    'hər 12 regionda xidmət göstəririk.</p>'
                    '<p><strong>Aztec Construction — etibarlı tərəfdaşınız.</strong></p>'
                ),
                'values_tag': 'Dəyərlər',
                'values_title': 'Dəyərlərimiz',
                'values_text': 'Dürüstlük, şəffaflıq və peşəkarlıq. Regional bazarda əldə etdiyimiz real nəticələr bu dəyərlərin təzahürüdür.',
                'vm_tag': 'Hədəflər',
                'vm_title': 'Baxışımız və missiyamız',
                'vision_title': 'Baxışımız',
                'vision_text': 'Azərbaycanın tikinti bazarında keyfiyyət, dəqiqlik və müştəri məmnuniyyəti ilə tanınan aparıcı şirkət olmaq.',
                'mission_title': 'Missiyamız',
                'mission_text': 'Hər layihədə müştərinin ehtiyaclarını dəqiq anlayaraq, peşəkar komandamız və keyfiyyətli materiallarla davamlı, estetik və funksional məkanlar yaratmaq.',
                'mega_description': '2017-ci ildən fəaliyyət, 500+ layihə.',
            },
        )
        action = 'Created' if created else 'Updated'
        self.stdout.write(self.style.SUCCESS(f'{action} about content.'))
