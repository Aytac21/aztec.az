from django.core.management.base import BaseCommand

from apps.core.models import PageHero

HEROES = [
    {
        'page': 'haqqimizda',
        'tag': 'Şirkət haqqında',
        'title': 'Aztec Construction haqqında',
        'description': 'Gələcəyi inşa edirik. 2017-ci ildən etibarlı tikinti tərəfdaşınız.',
        'meta_title': 'Haqqımızda | Aztec Construction MMC — Etibarlı Tikinti Şirkəti',
        'meta_description': 'Aztec Construction MMC — 2017-ci ildən 500+ layihə. Mingəçevir mərkəzli, 4 ofis, 100+ peşəkar əməkdaş. 12 regionda xidmət.',
        'meta_keywords': 'Aztec Construction haqqında, tikinti şirkəti Mingəçevir, etibarlı tikinti, Azərbaycan tikinti şirkəti',
    },
    {
        'page': 'komandamiz',
        'tag': 'Komanda',
        'title': 'Komandamız',
        'description': '100-dən çox peşəkar əməkdaşımız hər layihədə keyfiyyəti təmin edir.',
        'meta_title': 'Komandamız | 100+ Peşəkar | Aztec Construction',
        'meta_description': 'Aztec Construction komandası — idarəetmə heyəti və əsas mütəxəssislər. 100+ peşəkar əməkdaş.',
        'meta_keywords': 'Aztec Construction komanda, tikinti mütəxəssisləri, peşəkar mühəndislər',
    },
    {
        'page': 'xidmetler',
        'tag': '',
        'title': 'Xidmətlərimiz',
        'description': 'Layihənin konsepsiyasından açar təhvilinə qədər bütün mərhələlər.',
        'meta_title': 'Xidmətlərimiz | Memarlıq, Dizayn, Tikinti | Aztec Construction',
        'meta_description': 'Memarlıq, interyer dizayn, fasad işləri, təmir-tikinti, landşaft, hovuz, konsaltinq. A-dan Z-yə açar təhvili həll. Aztec.az',
        'meta_keywords': 'tikinti xidmətləri, memarlıq layihəsi, interyer dizayn Azərbaycan, fasad işləri, açar təhvil tikinti, landşaft dizayn',
    },
    {
        'page': 'layiheler',
        'tag': 'Portfolio',
        'title': 'Layihələrimiz',
        'description': 'İcra etdiyimiz layihələr potensialımızın ən real göstəricisidir.',
        'meta_title': 'Layihələrimiz | 500+ Uğurlu Layihə | Aztec Construction',
        'meta_description': 'Dövlət, kommersiya, yaşayış və ictimai layihələr. Yevlax Olimpiya, Qəbələ Olimpiya və daha çox. Aztec.az',
        'meta_keywords': 'Aztec Construction layihələr, Yevlax Olimpiya, Qəbələ Olimpiya, tikinti portfolio Azərbaycan',
    },
    {
        'page': 'ustunlukler',
        'tag': 'Niyə biz?',
        'title': 'Üstünlüklərimiz',
        'description': 'Bünövrədən açar təhvilinə qədər hər mərhələdə fərq yaradırıq.',
        'meta_title': 'Üstünlüklər | Bünövrədən Açar Təhvilinə | Aztec Construction',
        'meta_description': 'Torpaq analizi, peşəkar layihələndirmə, keyfiyyətli materiallar, vaxtında təhvil, zəmanət.',
        'meta_keywords': 'tikinti üstünlükləri, keyfiyyətli tikinti, açar təhvil zəmanət, Aztec Construction fərqi',
    },
    {
        'page': 'terefdashlar',
        'tag': 'Əməkdaşlıq',
        'title': 'Tərəfdaşlarımız',
        'description': '30-dan çox dövlət və özəl şirkət ilə etibarlı əməkdaşlıq.',
        'meta_title': 'Tərəfdaşlar | Əməkdaşlıq | Aztec Construction',
        'meta_description': '30+ dövlət müəssisəsi və özəl şirkət ilə əməkdaşlıq. Material təchizatçıları və dövlət tərəfdaşları.',
        'meta_keywords': 'Aztec Construction tərəfdaşlar, tikinti material təchizatçıları, dövlət əməkdaşlığı',
    },
    {
        'page': 'karyera',
        'tag': 'Komandamıza qoşulun',
        'title': 'Karyera',
        'description': '100+ peşəkar əməkdaşdan ibarət komandamıza qoşulun.',
        'meta_title': 'Karyera | İş İmkanları | Aztec Construction MMC',
        'meta_description': 'Tikinti mühəndisi, interyer dizayner, peşəkar usta vakansiyaları. Təcrübə proqramı. Aztec.az karyera',
        'meta_keywords': 'tikinti vakansiya, mühəndis iş, dizayner vakansiya Azərbaycan, usta iş, Aztec Construction karyera',
    },
    {
        'page': 'xeberler',
        'tag': 'Yeniliklər',
        'title': 'Xəbərlər və yeniliklər',
        'description': 'Son layihələrimiz, korporativ yeniliklər və faydalı məlumatlar.',
        'meta_title': 'Xəbərlər və Yeniliklər | Aztec Construction',
        'meta_description': 'Son layihələr, korporativ yeniliklər, tikinti sahəsində faydalı məlumatlar və bilik bazası. Aztec.az',
        'meta_keywords': 'tikinti xəbərləri, Aztec Construction yeniliklər, tikinti bloq, ev tikintisi məsləhətlər',
    },
    {
        'page': 'elaqe',
        'tag': 'Əlaqə',
        'title': 'Bizimlə əlaqə saxlayın',
        'description': 'Pulsuz konsultasiya. 24 saat ərzində geri dönüş.',
        'meta_title': 'Əlaqə | Pulsuz Konsultasiya | Aztec Construction MMC',
        'meta_description': 'Aztec Construction ilə əlaqə: +994 55 975 89 00. Mingəçevir ş., Şəhriyar küç. 75. Pulsuz ilkin konsultasiya. Aztec.az',
        'meta_keywords': 'Aztec Construction əlaqə, tikinti konsultasiya, Mingəçevir tikinti şirkəti, təklif al',
    },
    {
        'page': 'gizlilik',
        'tag': 'Gizlilik',
        'title': 'Gizlilik Politikası',
        'description': '',
        'meta_title': 'Gizlilik Politikası | Aztec Construction MMC',
        'meta_description': 'Aztec Construction MMC-nin şəxsi məlumatların qorunması və gizlilik politikası.',
        'meta_keywords': 'gizlilik politikası, fərdi məlumatlar, GDPR, Aztec Construction',
    },
    {
        'page': 'shertler',
        'tag': 'Hüquqi',
        'title': 'İstifadə Şərtləri',
        'description': '',
        'meta_title': 'İstifadə Şərtləri | Aztec Construction MMC',
        'meta_description': 'Aztec Construction MMC veb saytının istifadə şərtləri və qaydaları.',
        'meta_keywords': 'istifadə şərtləri, hüquqi qaydalar, Aztec Construction',
    },
    {
        'page': 'xeber-1',
        'tag': 'Yaşayış',
        'title': 'Yeni yaşayış evi layihəsinə start',
        'description': 'Aprel 2026',
        'meta_title': 'Yeni yaşayış evi layihəsinə start | Aztec Construction',
        'meta_description': 'Yeni yaşayış evi layihəsinə start - Aztec Construction',
        'meta_keywords': 'yaşayış evi tikintisi, layihə, Aztec Construction',
    },
    {
        'page': 'xeber-2',
        'tag': 'Kommersiya',
        'title': 'Ağdaş Ləki kommersiya layihələri tamamlandı',
        'description': 'Mart 2026',
        'meta_title': 'Ağdaş Ləki kommersiya layihələri tamamlandı | Aztec Construction',
        'meta_description': 'Ağdaş Ləki kommersiya layihələri tamamlandı - Aztec Construction',
        'meta_keywords': 'kommersiya tikinti, Ağdaş Ləki, Aztec Construction',
    },
    {
        'page': 'xeber-3',
        'tag': 'Dövlət',
        'title': 'Qəbələ Olimpiya Kompleksi fasad işləri',
        'description': '2025',
        'meta_title': 'Qəbələ Olimpiya Kompleksi fasad işləri | Aztec Construction',
        'meta_description': 'Qəbələ Olimpiya Kompleksi fasad işləri - Aztec Construction',
        'meta_keywords': 'Qəbələ Olimpiya, fasad işləri, dövlət layihəsi, Aztec Construction',
    },
]


class Command(BaseCommand):
    help = 'Mövcud HTML səhifələrdəki hero + meta məzmununu DB-ə yazır (idempotent).'

    def handle(self, *args, **options):
        created, updated = 0, 0
        for data in HEROES:
            obj, was_created = PageHero.objects.update_or_create(
                page=data['page'],
                defaults={
                    'tag': data['tag'],
                    'title': data['title'],
                    'description': data['description'],
                    'meta_title': data['meta_title'],
                    'meta_description': data['meta_description'],
                    'meta_keywords': data['meta_keywords'],
                },
            )
            if was_created:
                created += 1
            else:
                updated += 1
        self.stdout.write(self.style.SUCCESS(
            f'Tamamlandı. Yaradıldı: {created}, yeniləndi: {updated}.'
        ))
