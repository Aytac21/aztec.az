from django.core.management.base import BaseCommand

from apps.core.models import KnowledgeBase


class Command(BaseCommand):
    help = 'Seed knowledge base articles'

    def handle(self, *args, **options):
        items = [
            {
                'slug': 'pesekar-usta-secmek-6-sual',
                'tag': 'Məsləhət',
                'title': 'Peşəkar Usta Seçmək Üçün Verməli Olduğunuz 6 Sual',
                'description': 'Sertifikat, rəylər, material, müqavilə və texniki dəstək — ustanı seçərkən soruşmalı olduğunuz suallar.',
                'meta_title': 'Usta Seçərkən Verməli Olduğunuz 6 Vacib Sual | Aztec Construction Bloq',
                'meta_description': 'Təmir-tikinti üçün usta seçərkən sertifikat, müştəri rəyləri, material təchizatı, müqavilə və texniki dəstək barədə soruşmalı olduğunuz suallar.',
                'content': (
                    '<p>Evinizin və ya obyektinizin təmirini həvalə edəcəyiniz ustanı seçərkən '
                    'aşağıdakı sualları mütləq verin:</p>'
                    '<ol>'
                    '<li><strong>Sertifikat və ya iş nümunələri varmı?</strong> Əvvəlki layihələrin şəkillərini və ya video sənədlərini tələb edin.</li>'
                    '<li><strong>Əvvəlki müştərilərin rəyləri necədir?</strong> Mümkündürsə birbaşa əvvəlki müştərilərlə əlaqə qurun.</li>'
                    '<li><strong>Materialları kim alır?</strong> Material seçiminin kimin öhdəsində olduğunu və hansı keyfiyyət standartlarına riayət edildiyini öyrənin.</li>'
                    '<li><strong>İşə müqavilə ilə başlayırmı?</strong> Yazılı müqavilə olmadan işə başlayan usta risk deməkdir.</li>'
                    '<li><strong>Gecikmə halında nə edir?</strong> İş qrafiki və gecikmə halında tətbiq olunan şərtləri əvvəlcədən müzakirə edin.</li>'
                    '<li><strong>Təmir sonrası texniki dəstək göstərirmi?</strong> Təhvildən sonra yaranan kiçik problemlərin həlli barədə razılığa gəlin.</li>'
                    '</ol>'
                    '<p>Bu suallar sizi keyfiyyətsiz xidmət və əlavə xərclərdən qoruyacaq.</p>'
                ),
                'order': 1,
            },
            {
                'slug': 'tikintide-5-kritik-sehv',
                'tag': 'Xəbərdarlıq',
                'title': 'Tikintidə Ən Çox Yol Verilən 5 Səhv',
                'description': 'Plansız tikinti, ucuz material, layihəsiz iş, təcrübəsiz usta və su izolyasiyasına laqeydlik.',
                'meta_title': 'Tikintidə Yol Verilən 5 Kritik Səhv | Aztec Construction Bloq',
                'meta_description': 'Plansız tikinti, ucuz material, layihəsiz iş, təcrübəsiz usta və su izolyasiyasına laqeydlik — bu səhvlər sizə baha başa gələ bilər.',
                'content': (
                    '<ol>'
                    '<li><strong>Planlaşdırmadan işə başlamaq.</strong> Layihəsiz tikinti olunan ev uzunmüddətli problemlər yaradır. Bünövrə, daşıyıcı divar və kommunikasiya xətləri əvvəlcədən hesablanmalıdır.</li>'
                    '<li><strong>Ucuz materiallara üstünlük vermək.</strong> İlkin xərci azaldır, lakin qısa ömürlü bina deməkdir. Keyfiyyətli beton, armatur və izolyasiya materialları uzunmüddətli investisiyadır.</li>'
                    '<li><strong>Peşəkar layihə olmadan tikinti aparmaq.</strong> Eskiz layihə, konstruksiya həlli və texniki çertyojlar olmadan başlayan tikinti riskdir.</li>'
                    '<li><strong>Təcrübəsiz usta seçimi.</strong> Usta briqadasının əvvəlki işlərini görmədən əməkdaşlığa başlamayın.</li>'
                    '<li><strong>Su izolyasiyasına laqeyd yanaşmaq.</strong> Xüsusilə bünövrə, sanuzel və dam izolyasiyası düzgün icra olunmalıdır. Əks halda nəmlik və küf problemləri qaçılmazdır.</li>'
                    '</ol>'
                ),
                'order': 2,
            },
            {
                'slug': 'yangin-tehlukesizliyi-5-tedbir',
                'tag': 'Təhlükəsizlik',
                'title': 'Yanğın Təhlükəsizliyi Üçün Vacib 5 Tədbir',
                'description': 'Elektrik qoruyucuları, qaz sensoru, ayrıca xətlər, yanğına davamlı materiallar və yanğınsöndürən.',
                'meta_title': 'Evdə Yanğın Təhlükəsizliyi Üçün 5 Vacib Tədbir | Aztec Construction Bloq',
                'meta_description': 'Elektrik qoruyucuları, qaz sensoru, ayrıca elektrik xətləri, yanğına davamlı materiallar və yanğınsöndürən haqqında bilməli olduqlarınız.',
                'content': (
                    '<ol>'
                    '<li><strong>Elektrik sistemləri üçün avtomat qoruyuculardan istifadə edin.</strong> Qısa qapanma halında qoruyucu cərəyanı avtomatik kəsir.</li>'
                    '<li><strong>Mətbəxdə qaz sızmalarını aşkar edən sensor quraşdırın.</strong> Erkən xəbərdarlıq sistemi ailənizi qoruyur.</li>'
                    '<li><strong>Ağır elektrik cihazları üçün ayrıca elektrik xətləri çəkin.</strong> Kondisioner, kombi və paltaryuyan maşın üçün müstəqil xətlər lazımdır.</li>'
                    '<li><strong>Aşağı yanma təhlükəsi olan materiallara üstünlük verin.</strong> Xüsusilə tavan örtükləri və divar panellərində yanğına davamlı materiallar seçin.</li>'
                    '<li><strong>Əlverişli yerlərdə yanğınsöndürən quraşdırın.</strong> Mətbəx, qaraj və dəhliz əsas yerləşdirmə nöqtələridir.</li>'
                    '</ol>'
                ),
                'order': 3,
            },
            {
                'slug': 'tikinti-sirketi-secerken-4-amil',
                'tag': 'Bələdçi',
                'title': 'Tikinti Şirkəti Seçərkən Diqqət Etməli Olduğunuz Amillər',
                'description': 'Usta briqadası, materiallar, düzgün layihələndirmə və iş prinsipi — əsas 4 amil.',
                'meta_title': 'Tikinti Şirkəti Seçmək Üçün 4 Əsas Amil | Aztec Construction Bloq',
                'meta_description': 'Usta briqadası, tikinti materialları, düzgün layihələndirmə və iş prinsipi — tikinti şirkətini seçməzdən əvvəl araşdırmalı olduğunuz amillər.',
                'content': (
                    '<p>Evinizi hər hansı bir şirkətə həvalə etməzdən əvvəl aşağıdakı amilləri araşdırın:</p>'
                    '<ol>'
                    '<li><strong>Usta briqadası:</strong> ustalarının təcrübəsini, əvvəlki işlərini soruşun.</li>'
                    '<li><strong>Tikinti materialları:</strong> şirkətin hansı materiallara üstünlük verdiyini, təchizat mənbələrini öyrənin.</li>'
                    '<li><strong>Düzgün layihələndirmə:</strong> layihəsiz tikintiyə razı olan şirkətdən uzaq durun.</li>'
                    '<li><strong>Sürətli və nizamlı iş prinsipi:</strong> iş qrafiki, nəzarət mexanizmi və təhvil müddəti barədə ətraflı məlumat alın.</li>'
                    '</ol>'
                    '<p>Şirkəti seçməzdən əvvəl prinsiplərini öyrənin, sonra əməkdaşlıq edin.</p>'
                ),
                'order': 4,
            },
            {
                'slug': 'ev-tikintisinin-5-merhelesi',
                'tag': 'Bələdçi',
                'title': 'Ev Tikintisinin Düzgün Başlanğıcı: 5 Əsas Mərhələ',
                'description': 'Torpaq sənədləri, layihələndirmə, icazələr, ilkin smeta və material seçimi.',
                'meta_title': 'Ev Tikintisinin 5 Əsas Başlanğıc Mərhələsi | Aztec Construction Bloq',
                'meta_description': 'Torpaq sənədləri, layihələndirmə, tikinti icazələri, ilkin smeta və material seçimi — tikintiyə düzgün başlamaq üçün bilməli olduqlarınız.',
                'content': (
                    '<ol>'
                    '<li><strong>Torpaq sənədləri:</strong> mülkiyyət hüququnu təsdiqləyən bütün sənədlər tam qaydasında olmalıdır.</li>'
                    '<li><strong>Layihələndirmə:</strong> peşəkar memar tərəfindən hazırlanmış layihə həm estetik, həm təhlükəsizlik tələblərinə cavab verməlidir.</li>'
                    '<li><strong>İcazələr:</strong> tikinti üçün lazımi rəsmi icazələri almaq vacibdir.</li>'
                    '<li><strong>İlkin smeta:</strong> xərcləri əvvəlcədən planlaşdırmaq sonrakı çətinliklərin qarşısını alır.</li>'
                    '<li><strong>Material seçimi:</strong> keyfiyyətli materiallar evin ömrünü müəyyən edən əsas amildir.</li>'
                    '</ol>'
                ),
                'order': 5,
            },
            {
                'slug': 'temel-islerinin-ehemiyyeti',
                'tag': 'Texniki',
                'title': 'Təməl İşlərinin Əhəmiyyəti',
                'description': 'Torpaq analizi, keyfiyyətli beton qarışığı və gücləndirilmiş armatur — düzgün təməlin üç əsas şərti.',
                'meta_title': 'Təməl İşləri Niyə Vacibdir? | Aztec Construction Bloq',
                'meta_description': 'Torpaq analizi, keyfiyyətli beton qarışığı və gücləndirilmiş armatur — düzgün təməlin üç əsas şərti.',
                'content': (
                    '<p>Təməl evin dayanıqlılığını müəyyən edən ən vacib hissədir. Səhv atılan təməl illər sonra '
                    'çatlar, çökmələr və ciddi struktur problemləri yaradır.</p>'
                    '<p>Diqqət edilməli üç əsas məqam:</p>'
                    '<ul>'
                    '<li><strong>Torpaq analizi:</strong> torpaq tipi mütləq uyğun olmalıdır.</li>'
                    '<li><strong>Yüksək keyfiyyətli beton qarışığı</strong> istifadəsi.</li>'
                    '<li><strong>Gücləndirilmiş armatur sisteminin qurulması.</strong></li>'
                    '</ul>'
                    '<p>Aztec Construction olaraq hər tikintidə torpaq analizindən başlayırıq. Betonun markası və '
                    'armaturun parametrləri layihə mühəndisi tərəfindən hesablanır.</p>'
                ),
                'order': 6,
            },
        ]

        for item in items:
            KnowledgeBase.objects.update_or_create(
                slug=item['slug'],
                defaults=item,
            )
            self.stdout.write(self.style.SUCCESS(f'  ✓ {item["title"]}'))

        self.stdout.write(self.style.SUCCESS(f'\n{len(items)} knowledge base items seeded.'))
