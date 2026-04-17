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
                'summary_p1': 'Aztec Construction Azərbaycanın mərkəzi bölgələrində fəaliyyət göstərən tikinti və layihələndirmə şirkətidir. Baş ofisimiz Mingəçevir şəhərində yerləşir. Fərdi yaşayış evləri, kommersiya obyektləri, iaşə məkanları və dövlət layihələri üzrə ixtisaslaşmışıq.',
                'summary_p2': 'Bu günə qədər 100-dən çox layihəni uğurla tamamlamışıq. 30-dan çox dövlət müəssisəsi ilə əməkdaşlıq etmişik. Fəaliyyət coğrafiyamız Mingəçevir, Yevlax, Ağdaş, Bərdə, Tərtər və Lənkəranı əhatə edir.',
                'badge1_number': '100+',
                'badge1_label': 'Layihə',
                'badge2_number': '30+',
                'badge2_label': 'Dövlət əməkdaşlığı',
                'badge3_number': '6+',
                'badge3_label': 'Region',
                'profile_tag': 'Profil',
                'profile_title': 'Şirkət profili',
                'profile_text': (
                    '<p>Aztec Construction Azərbaycanın mərkəzi bölgələrində fəaliyyət göstərən tikinti və '
                    'layihələndirmə şirkətidir. Baş ofisimiz Mingəçevir şəhərində, Məhəmmədhüseyn Şəhriyar '
                    'küçəsi 75 ünvanında yerləşir. Şirkətimiz fərdi yaşayış evləri, kommersiya obyektləri, '
                    'iaşə məkanları və dövlət layihələri üzrə ixtisaslaşmışdır.</p>'
                    '<p>Bu günə qədər 100-dən çox layihəni uğurla tamamlamışıq. 30-dan çox dövlət müəssisəsi '
                    'ilə əməkdaşlıq etmişik. Fəaliyyət coğrafiyamız Mingəçevir, Yevlax, Ağdaş, Bərdə, Tərtər '
                    'və Lənkəranı əhatə edir.</p>'
                    '<p><strong>Aztec Construction — etibarlı tərəfdaşınız.</strong></p>'
                ),
                'values_tag': 'Dəyərlər',
                'values_title': 'Dəyərlərimiz',
                'values_text': 'Dürüstlük, şəffaflıq və peşəkarlıq. Regional bazarda əldə etdiyimiz real nəticələr bu dəyərlərin təzahürüdür.',
                'vm_tag': 'Hədəflər',
                'vm_title': 'Baxışımız və missiyamız',
                'vision_title': 'Baxışımız',
                'vision_text': 'Azərbaycanın regional tikinti bazarında keyfiyyət, dəqiqlik və müştəri məmnuniyyəti ilə tanınan aparıcı şirkət olmaq.',
                'mission_title': 'Missiyamız',
                'mission_text': 'Hər layihədə müştərinin ehtiyaclarını dəqiq anlayaraq, peşəkar komandamız və keyfiyyətli materiallarla davamlı, estetik və funksional məkanlar yaratmaq.',
                'mega_description': '100+ layihə, 30+ dövlət əməkdaşlığı, 6+ region.',
            },
        )
        action = 'Created' if created else 'Updated'
        self.stdout.write(self.style.SUCCESS(f'{action} about content.'))
