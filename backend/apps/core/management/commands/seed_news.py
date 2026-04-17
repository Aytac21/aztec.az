from django.core.management.base import BaseCommand

from apps.core.models import News


class Command(BaseCommand):
    help = 'Seed news articles'

    def handle(self, *args, **options):
        items = [
            {
                'slug': 'yeni-yasayis-evi-layihesine-start',
                'title': 'Yeni yaşayış evi layihəsinə start',
                'tag': 'Yaşayış',
                'date_label': 'Aprel 2026',
                'short_description': '232 kv.m, 5 otaqlı yaşayış evi layihəsinin tikintisi başladı.',
                'content': (
                    '<p>232.84 kv.m ümumi sahəli, 5 otaqlı yeni yaşayış evi. Layihələndirmədən tikintiyə qədər tam nəzarət altında icra olunur.</p>'
                    '<h2>Layihə məlumatları</h2>'
                    '<p>Tikintialtı sahə 140.45 kv.m, ümumi sahə 232.84 kv.m, 2 mərtəbə, 5 otaq, müasir planlaşdırma.</p>'
                    '<h2>İcra mərhələləri</h2>'
                    '<div style="margin:32px 0">'
                    '<div class="stage"><div class="stage-num">01</div><div class="stage-t"><h4>Torpaq analizi və bünövrə</h4><p>Torpaq tipinə uyğun bünövrə həlli, keyfiyyətli beton və armatur.</p></div></div>'
                    '<div class="stage"><div class="stage-num">02</div><div class="stage-t"><h4>Daşıyıcı konstruksiya</h4><p>Dəmir-beton karkas, divar hörgüsü, dam.</p></div></div>'
                    '<div class="stage"><div class="stage-num">03</div><div class="stage-t"><h4>Kommunikasiyalar</h4><p>Su, kanalizasiya, elektrik, istilik.</p></div></div>'
                    '<div class="stage"><div class="stage-num">04</div><div class="stage-t"><h4>Daxili təmir</h4><p>Suvaq, boya, kafel, parket.</p></div></div>'
                    '<div class="stage"><div class="stage-num">05</div><div class="stage-t"><h4>Fasad və xarici işlər</h4><p>İzolyasiya, fasad örtüyü, landşaft.</p></div></div>'
                    '</div>'
                    '<p>Hər layihə peşəkar komandamızın, keyfiyyətli materialların və ciddi iş qrafikiinin nəticəsidir.</p>'
                ),
                'video_url': '',
                'order': 1,
            },
            {
                'slug': 'agdas-layiheleri-tamamlandi',
                'title': 'Ağdaş layihələri tamamlandı',
                'tag': 'Kommersiya',
                'date_label': 'Mart 2026',
                'short_description': 'Ləki qəsəbəsində kommersiya obyektləri uğurla icra edildi.',
                'content': (
                    '<p>Ağdaş şəhərinin Ləki qəsəbəsində iki kommersiya obyekti uğurla icra edildi.</p>'
                    '<h2>Layihə əhatəsi</h2>'
                    '<p>Daxili təmir, fasad işləri, elektrik və santexnika kommunikasiyaları, interyer dizayn.</p>'
                    '<h2>İcra mərhələləri</h2>'
                    '<div style="margin:32px 0">'
                    '<div class="stage"><div class="stage-num">01</div><div class="stage-t"><h4>Layihələndirmə və smeta</h4><p>Konsepsiya, texniki planlar, smeta təsdiqi.</p></div></div>'
                    '<div class="stage"><div class="stage-num">02</div><div class="stage-t"><h4>Tikinti və təmir</h4><p>Daxili və xarici işlər, kommunikasiyalar.</p></div></div>'
                    '<div class="stage"><div class="stage-num">03</div><div class="stage-t"><h4>Fasad yeniləmə</h4><p>Müasir materiallarla fasad.</p></div></div>'
                    '<div class="stage"><div class="stage-num">04</div><div class="stage-t"><h4>Təhvil</h4><p>Keyfiyyət testi, rəsmi təhvil.</p></div></div>'
                    '</div>'
                    '<p>Hər layihə peşəkar komandamızın, keyfiyyətli materialların və ciddi iş qrafikiinin nəticəsidir.</p>'
                ),
                'video_url': '',
                'order': 2,
            },
            {
                'slug': 'qebele-olimpiya-kompleksi',
                'title': 'Qəbələ Olimpiya Kompleksi',
                'tag': 'Dövlət',
                'date_label': '2025',
                'short_description': 'Fasad işləri uğurla tamamlandı.',
                'content': (
                    '<p>Dövlət layihəsi çərçivəsində Qəbələ Olimpiya Kompleksinin fasad yeniləmə və daxili təmir işləri icra olundu.</p>'
                    '<h2>İcra əhatəsi</h2>'
                    '<p>Fasad yeniləmə, daxili bərpa, kommunikasiyaların modernizasiyası. Şüşə, metal və kompozit materiallar.</p>'
                    '<h2>İcra mərhələləri</h2>'
                    '<div style="margin:32px 0">'
                    '<div class="stage"><div class="stage-num">01</div><div class="stage-t"><h4>Texniki qiymətləndirmə</h4><p>Mövcud vəziyyət analizi.</p></div></div>'
                    '<div class="stage"><div class="stage-num">02</div><div class="stage-t"><h4>Fasad yeniləmə</h4><p>Köhnə örtüklərin sökülməsi, yeni panel.</p></div></div>'
                    '<div class="stage"><div class="stage-num">03</div><div class="stage-t"><h4>Daxili bərpa</h4><p>İdman zalları, ictimai zonalar.</p></div></div>'
                    '<div class="stage"><div class="stage-num">04</div><div class="stage-t"><h4>Təhvil</h4><p>Keyfiyyət nəzarəti, sənədləşdirmə.</p></div></div>'
                    '</div>'
                    '<p>Hər layihə peşəkar komandamızın, keyfiyyətli materialların və ciddi iş qrafikiinin nəticəsidir.</p>'
                ),
                'video_url': '',
                'order': 3,
            },
        ]

        for item in items:
            News.objects.update_or_create(
                slug=item['slug'],
                defaults=item,
            )
            self.stdout.write(self.style.SUCCESS(f'  ✓ {item["title"]}'))

        self.stdout.write(self.style.SUCCESS(f'\n{len(items)} news seeded.'))
