/* Aztec Construction v4 - Full Translation + All JS */

/* Backend API base.
   - On localhost dev: http://127.0.0.1:8000 (Django runserver)
   - On production: '' (same-origin, nginx reverse-proxies /api/ to gunicorn)
   Override manually: set window.API_BASE before including shared.js. */
(function(){
  if(window.API_BASE !== undefined) return;
  var h = location.hostname;
  window.API_BASE = (h === 'localhost' || h === '127.0.0.1' || h === '') ? 'http://127.0.0.1:8000' : '';
})();

/* Append ?lang=xx to API paths so backend serves translated model fields */
window.apiUrl = function(path){
  var lang = localStorage.getItem('aztec-lang') || 'az';
  var sep = path.indexOf('?') > -1 ? '&' : '?';
  return window.API_BASE + path + sep + 'lang=' + encodeURIComponent(lang);
};

/* Mobile Menu */
function toggleMenu(){var m=document.getElementById('mm');m.classList.toggle('open');document.body.style.overflow=m.classList.contains('open')?'hidden':''}

/* Sticky Nav */
window.addEventListener('scroll',function(){document.getElementById('nav').classList.toggle('scrolled',window.scrollY>60)});

/* Reveal Animation */
document.querySelectorAll('.reveal').forEach(function(el){new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add('visible')});},{threshold:0.1}).observe(el)});

/* Mega Menu */
function openMega(){document.getElementById('megaMenu').classList.add('show');document.getElementById('megaOv').classList.add('show');document.getElementById('nav').classList.add('mega-open')}
function closeMega(){document.getElementById('megaMenu').classList.remove('show');document.getElementById('megaOv').classList.remove('show');document.getElementById('nav').classList.remove('mega-open')}

/* ======== FULL TRANSLATION SYSTEM ========
   Strings are loaded from backend (/api/i18n/<lang>/), translated via Rosetta.
   Local fallback below covers AZ in case backend is unavailable. */
var TR={
  az:{
    'navHome':'Əsas',
    'navAbout':'Haqqımızda',
    'navServices':'Xidmətlər',
    'navProjects':'Layihələr',
    'navCareer':'Karyera',
    'navNews':'Xəbərlər',
    'navContact':'Əlaqə',
    'ftCopy':'Bütün hüquqlar qorunur.',
    'ftTerms':'İstifadə Şərtləri',
    'ftPrivacy':'Gizlilik Politikası',
    'heroTitle':'Möhkəm Təməl.<br>Peşəkar İcra.<br><em>Davamlı Nəticə.</em>',
    'heroCta':'İşlərimizlə tanış olun',
    'stat1':'Tamamlanmış layihə',
    'stat2':'Peşəkar əməkdaş',
    'stat3':'Region əhatəsi',
    'stat4':'Fəaliyyətə başlama',
    'aboutTag':'Haqqımızda',
    'aboutTitle':'Gələcəyi inşa edirik',
    'aboutP1':'Aztec Construction 2017-ci ildən tikinti, təmir və dizayn sahəsində fəaliyyət göstərən, dinamik və etibarlı şirkətdir. Fərdi yaşayış evlərindən kommersiya obyektlərinə, ictimai məkanlardan otel layihələrinə qədər geniş spektrdə xidmət göstəririk. Bu günə qədər 500-dən çox layihəni uğurla tamamlamışıq.',
    'aboutP2':'4 ofis, 100-dən çox peşəkar əməkdaşla Azərbaycanın hər 12 regionunda xidmət göstəririk. Layihənin ilk eskizindən açar təhvilinə qədər bütün mərhələləri öz üzərimizə götürürük.',
    'aboutMore':'Ətraflı oxuyun',
    'badgeL':'Layihə',
    'badgeO':'Ofis',
    'badgeE':'Əməkdaş',
    'svcTag':'Xidmətlər',
    'svcTitle':'Xidmətlərimiz',
    'svcDesc':'Aztec Construction layihənin konsepsiyasından açar təhvilinə qədər bütün mərhələləri öz bünyəsində birləşdirir. Hər layihədə planlama mərhələsindən təhvilə qədər tam nəzarət edirik.',
    'svc1':'Memarlıq və layihələndirmə',
    'svc1d':'Eskiz layihədən texniki planlara qədər funksional və estetik həllər. Torpaq analizi, bünövrə hesablaması, 3D vizualizasiya.',
    'svc2':'İnteryer dizayn',
    'svc2d':'Neoklasika, klassika, ağır klassika və müasir üslublarda açar təhvili layihə planlaması və icra.',
    'svc3':'Fasad işləri',
    'svc3d':'Şüşə, metal, kompozit və pen panel ilə müasir tələblərə uyğun bütün materiallarla fasad həlləri.',
    'svc4':'Təmir-tikinti',
    'svc4d':'Fərdi evlərdən kommersiya obyektlərinə qədər bünövrədən son dekorasiyaya kimi açar təhvil tikinti.',
    'svc5':'Landşaft, hovuz və besetka',
    'svc5d':'Yaşıllaşdırma, bütün növ hovuzlar, müasir yay mətbəxi konseptli besetkalar və xarici işıqlandırma.',
    'svc6':'Konsaltinq',
    'svc6d':'Tikinti planlaması, smeta hazırlanması, torpaq sənədləri və icazələr üzrə texniki məsləhət. İlkin konsultasiya pulsuz.',
    'svcAll':'Bütün xidmətlər',
    'more':'Ətraflı',
    'projTag':'Portfolio',
    'projTitle':'Son layihələrimiz',
    'projDesc':'İcra etdiyimiz layihələr və əldə etdiyimiz nəticələr potensialımızın ən real göstəricisidir.',
    'projAll':'Hamısına bax',
    'galTag':'Media',
    'galTitle':'Qalereya',
    'whyTag':'Üstünlüklər',
    'whyTitle':'Niyə Aztec Construction?',
    'why1':'Peşəkar komanda',
    'why1d':'100-dən çox mütəxəssis, 4 regional ofis, ciddi iş qrafiki və keyfiyyət nəzarəti.',
    'why2':'Operativ icra',
    'why2d':'Razılaşdırılmış müddətlərə riayət. İş qrafiki müştəri ilə şəffaf paylaşılır.',
    'why3':'Keyfiyyətə nəzarət',
    'why3d':'Hər mərhələdə keyfiyyət standartlarına uyğunluq yoxlanılır. Material seçimində kompromis yox.',
    'why4':'Zəmanətli nəticə',
    'why4d':'Planlamadan təhvilə qədər tam nəzarət. Layihə sonrası texniki dəstək və zəmanət.',
    'ctaTitle':'Layihənizi bizimlə həyata keçirin',
    'ctaDesc':'Pulsuz ilkin konsultasiya. Komandamız 24 saat ərzində sizə geri dönüş edəcək.',
    'ctaBtn':'Əlaqə saxlayın',
    'ha_tag':'Şirkət haqqında',
    'ha_h1':'Aztec Construction haqqında',
    'ha_desc':'Gələcəyi inşa edirik. 2017-ci ildən etibarlı tikinti tərəfdaşınız.',
    'ha_profTag':'Profil',
    'ha_profTitle':'Şirkət profili',
    'ha_p1':'Aztec Construction 2017-ci ildən tikinti, təmir və dizayn sahəsində fəaliyyət göstərən, dinamik və etibarlı şirkətdir. Müasir yanaşma və yüksək keyfiyyət standartları ilə bazarda mövqeyimizi gücləndiririk.',
    'ha_p2':'Bu günə qədər 500-dən çox yaşayış və qeyri-yaşayış obyektinin, həmçinin bir çox dövlət əhəmiyyətli layihənin tikintisində və təmirində iştirak etmişik. Hər layihədə planlama mərhələsindən təhvilə qədər tam nəzarət edirik. Peşəkar komanda, operativ icra, zəmanətli nəticə, keyfiyyətə nəzarət.',
    'ha_p3':'Ərazi üzrə 4 ofis və 100-dən çox peşəkar əməkdaşımızla Ümumi Azərbaycan ərazisində, hər 12 regionda xidmət göstəririk.',
    'ha_valTag':'Dəyərlər',
    'ha_valTitle':'Dəyərlərimiz',
    'ha_valDesc':'Dürüstlük, şəffaflıq və peşəkarlıq. Regional bazarda əldə etdiyimiz real nəticələr bu dəyərlərin təzahürüdür.',
    'ha_vmTag':'Hədəflər',
    'ha_vmTitle':'Baxışımız və missiyamız',
    'ha_vision':'Baxışımız',
    'ha_visionP':'Azərbaycanın tikinti bazarında keyfiyyət, dəqiqlik və müştəri məmnuniyyəti ilə tanınan aparıcı şirkət olmaq.',
    'ha_mission':'Missiyamız',
    'ha_missionP':'Hər layihədə müştərinin ehtiyaclarını dəqiq anlayaraq, peşəkar komandamız və keyfiyyətli materiallarla davamlı, estetik və funksional məkanlar yaratmaq.',
    'ha_prinTag':'Prinsiplər',
    'ha_prinTitle':'İş prinsiplərimiz',
    'prin1t':'Şəffaf smeta',
    'prin1d':'Hər xərc qalemi müştəri ilə razılaşdırılır. Gizli ödənişlər yoxdur.',
    'prin2t':'Müqavilə əsaslı iş',
    'prin2d':'Bütün layihələr yazılı müqavilə ilə başlayır.',
    'prin3t':'Peşəkar nəzarət',
    'prin3d':'Hər mərhələdə ciddi keyfiyyət nəzarəti.',
    'prin4t':'Vaxtında təhvil',
    'prin4d':'Razılaşdırılmış müddətlərə riayət olunur.',
    'prin5t':'Sonrakı dəstək',
    'prin5d':'Layihə sonrası texniki dəstək və zəmanət.',
    'xs_tag':'Nə edirik',
    'xs_h1':'Xidmətlərimiz',
    'xs_desc':'Layihənin konsepsiyasından açar təhvilinə qədər bütün mərhələlər.',
    'lp_tag':'Portfolio',
    'lp_h1':'Layihələrimiz',
    'lp_desc':'İcra etdiyimiz layihələr potensialımızın ən real göstəricisidir.',
    'fAll':'Hamısı',
    'fDone':'Tamamlanmış',
    'fOngoing':'Cari',
    'fGov':'Dövlət',
    'fCom':'Kommersiya',
    'fRes':'Yaşayış',
    'fPub':'İctimai',
    'kr_tag':'Komandamıza qoşulun',
    'kr_h1':'Karyera',
    'kr_desc':'100+ peşəkar əməkdaşdan ibarət komandamıza qoşulun.',
    'kr_openTitle':'Açıq vakansiyalar',
    'xb_tag':'Yeniliklər',
    'xb_h1':'Xəbərlər və yeniliklər',
    'xb_desc':'Son layihələrimiz, korporativ yeniliklər və faydalı məlumatlar.',
    'xb_latest':'Son xəbərlər',
    'xb_blog':'Bilik bazası',
    'el_tag':'Əlaqə',
    'el_h1':'Bizimlə əlaqə saxlayın',
    'el_desc':'Pulsuz konsultasiya. 24 saat ərzində geri dönüş.',
    'el_infoTitle':'Əlaqə məlumatları',
    'el_formTitle':'Mesaj göndərin',
    'el_phone':'Telefon',
    'el_addr':'Ünvan',
    'el_hours':'İş saatları',
    'el_wa':'WhatsApp',
    'el_send':'WhatsApp ilə göndər',
    'formName':'Ad və soyad',
    'formPhone':'Telefon',
    'formEmail':'E-poçt',
    'formType':'Layihə növü',
    'formMsg':'Mesaj',
    'km_tag':'Komanda',
    'km_h1':'Komandamız',
    'km_desc':'100-dən çox peşəkar əməkdaşımız hər layihədə keyfiyyəti təmin edir.',
    'km_mgmt':'Rəhbərlik',
    'km_mgmtTitle':'İdarəetmə heyəti',
    'km_specTag':'Mütəxəssislər',
    'km_specTitle':'Əsas mütəxəssislər',
    'tf_tag':'Əməkdaşlıq',
    'tf_h1':'Tərəfdaşlarımız',
    'tf_desc':'30-dan çox dövlət və özəl şirkət ilə etibarlı əməkdaşlıq.',
    'tf_matTag':'Material',
    'tf_matTitle':'Tikinti material təchizatçıları',
    'tf_govTag':'Dövlət',
    'tf_govTitle':'Dövlət müəssisələri',
    'us_tag':'Niyə biz?',
    'us_h1':'Üstünlüklərimiz',
    'us_desc':'Bünövrədən açar təhvilinə qədər hər mərhələdə fərq yaradırıq.',
    'us_mainTag':'Fərqimiz',
    'us_mainTitle':'Əsas üstünlüklərimiz',
    'us_mainDesc':'Bünövrədən son təhvilə qədər hər mərhələdə təmin etdiyimiz üstünlüklər.',
    'det_backNews':'Xəbərlərə qayıt',
    'det_allProj':'Bütün layihələr',
    'det_allSvc':'Bütün xidmətlər',
    'det_consult':'Konsultasiya alın',
    'nb_projInfo':'Layihə məlumatları',
    'nb_projScope':'Layihə əhatəsi',
    'nb_execScope':'İcra əhatəsi',
    'nb_stages':'İcra mərhələləri',
    'nb_photos':'Layihə fotoları',
    'nb_video':'Video',
    'nb_outro':'Hər layihə peşəkar komandamızın, keyfiyyətli materialların və ciddi iş qrafikiinin nəticəsidir.',
    'x1_tag':'Yaşayış','x1_h1':'Yeni yaşayış evi layihəsinə start',
    'x1_p1':'232.84 kv.m ümumi sahəli, 5 otaqlı yeni yaşayış evi. Layihələndirmədən tikintiyə qədər tam nəzarət altında icra olunur.',
    'x1_s1p':'Tikintialtı sahə 140.45 kv.m, ümumi sahə 232.84 kv.m, 2 mərtəbə, 5 otaq, müasir planlaşdırma.',
    'x1_st1h':'Torpaq analizi və bünövrə','x1_st1p':'Torpaq tipinə uyğun bünövrə həlli, keyfiyyətli beton və armatur.',
    'x1_st2h':'Daşıyıcı konstruksiya','x1_st2p':'Dəmir-beton karkas, divar hörgüsü, dam.',
    'x1_st3h':'Kommunikasiyalar','x1_st3p':'Su, kanalizasiya, elektrik, istilik.',
    'x1_st4h':'Daxili təmir','x1_st4p':'Suvaq, boya, kafel, parket.',
    'x1_st5h':'Fasad və xarici işlər','x1_st5p':'İzolyasiya, fasad örtüyü, landşaft.',
    'x2_tag':'Kommersiya','x2_h1':'Ağdaş Ləki kommersiya layihələri tamamlandı',
    'x2_p1':'Ağdaş şəhərinin Ləki qəsəbəsində iki kommersiya obyekti uğurla icra edildi.',
    'x2_s1p':'Daxili təmir, fasad işləri, elektrik və santexnika kommunikasiyaları, interyer dizayn.',
    'x2_st1h':'Layihələndirmə və smeta','x2_st1p':'Konsepsiya, texniki planlar, smeta təsdiqi.',
    'x2_st2h':'Tikinti və təmir','x2_st2p':'Daxili və xarici işlər, kommunikasiyalar.',
    'x2_st3h':'Fasad yeniləmə','x2_st3p':'Müasir materiallarla fasad.',
    'x2_st4h':'Təhvil','x2_st4p':'Keyfiyyət testi, rəsmi təhvil.',
    'x3_tag':'Dövlət','x3_h1':'Qəbələ Olimpiya Kompleksi fasad işləri',
    'x3_p1':'Dövlət layihəsi çərçivəsində Qəbələ Olimpiya Kompleksinin fasad yeniləmə və daxili təmir işləri icra olundu.',
    'x3_s1p':'Fasad yeniləmə, daxili bərpa, kommunikasiyaların modernizasiyası. Şüşə, metal və kompozit materiallar.',
    'x3_st1h':'Texniki qiymətləndirmə','x3_st1p':'Mövcud vəziyyət analizi.',
    'x3_st2h':'Fasad yeniləmə','x3_st2p':'Köhnə örtüklərin sökülməsi, yeni panel.',
    'x3_st3h':'Daxili bərpa','x3_st3p':'İdman zalları, ictimai zonalar.',
    'x3_st4h':'Təhvil','x3_st4p':'Keyfiyyət nəzarəti, sənədləşdirmə.',
    'giz_tag':'Gizlilik','giz_h1':'Gizlilik Politikası',
    'legal_updated':'Son yenilənmə tarixi:',
    'giz_s1':'1. Giriş','giz_p1':'Aztec Construction MMC ("Şirkət") olaraq biz istifadəçilərimizin şəxsi məlumatlarının qorunmasını ciddi şəkildə yanaşırıq. Bu Gizlilik Politikası Azərbaycan Respublikasının "Fərdi məlumatlar haqqında" Qanununa və Avropa İttifaqının Ümumi Məlumatların Qorunması Reqlamentinə (GDPR) uyğun olaraq hazırlanmışdır.',
    'giz_s2':'2. Toplanan məlumatlar','giz_p2':'Saytımızda aşağıdakı məlumatlar toplanır: əlaqə formu vasitəsilə təqdim olunan ad, soyad, telefon nömrəsi, e-poçt ünvanı və mesaj məzmunu. Texniki məlumatlar (IP ünvanı, brauzer tipi, səhifə baxış statistikası) avtomatik olaraq toplanır.',
    'giz_s3':'3. Məlumatların istifadə məqsədi','giz_p3':'Toplanan məlumatlar aşağıdakı məqsədlərlə istifadə olunur: sizinlə əlaqə saxlamaq, xidmət təklifi hazırlamaq, saytın funksionallığını yaxşılaşdırmaq, qanuni öhdəlikləri yerinə yetirmək.',
    'giz_s4':'4. Məlumatların paylaşılması','giz_p4':'Şəxsi məlumatlarınız aşağıdakı hallar istisna olmaqla üçüncü tərəflərə verilmir: qanunvericiliyin tələbi ilə, sizin yazılı razılığınız olduqda, xidmət göstərilməsi üçün zəruri olduqda (məsələn, tikinti materialı təchizatçıları ilə layihə koordinasiyası).',
    'giz_s5':'5. Məlumatların qorunması','giz_p5':'Şirkət şəxsi məlumatların qorunması üçün texniki və təşkilati tədbirlər görür: SSL şifrələmə, giriş nəzarəti, müntəzəm təhlükəsizlik yeniləmələri.',
    'giz_s6':'6. İstifadəçi hüquqları','giz_p6':'Siz aşağıdakı hüquqlara maliksiniz: şəxsi məlumatlarınıza daxil olmaq, düzəliş etmək, silmək, etiraz etmək. Bu hüquqlarınızı həyata keçirmək üçün bizimlə əlaqə saxlayın.',
    'giz_s7':'7. Kukilər (Cookies)','giz_p7':'Saytımız funksionallığı təmin etmək və istifadəçi təcrübəsini yaxşılaşdırmaq üçün kukilərdən istifadə edir. Brauzer parametrlərinizdən kukiləri idarə edə bilərsiniz.',
    'giz_s8':'8. GDPR uyğunluğu','giz_p8':'Avropa İttifaqı vətəndaşları üçün GDPR-ın tələblərinə uyğun olaraq əlavə qorunma təmin edirik. Məlumat müdafiəsi ilə bağlı şikayətlərinizi müvafiq nəzarət orqanına yönəldə bilərsiniz.',
    'giz_s9':'9. Əlaqə','giz_p9':'Gizlilik siyasəti ilə bağlı suallarınız üçün:<br>Aztec Construction MMC<br>Ünvan: Mingəçevir ş., Şəhriyar küç. 75<br>Telefon: +994 55 975 89 00<br>Sayt: aztec.az',
    'sh_tag':'Hüquqi','sh_h1':'İstifadə Şərtləri',
    'sh_s1':'1. Ümumi müddəalar','sh_p1a':'Bu İstifadə Şərtləri Aztec Construction MMC ("Şirkət") tərəfindən idarə olunan aztec.az veb saytının ("Sayt") istifadə qaydalarını müəyyən edir. Sayta daxil olmaqla siz bu şərtləri qəbul etmiş olursunuz.',
    'sh_p1b':'Aztec Construction MMC Azərbaycan Respublikasının qanunvericiliyinə uyğun olaraq qeydiyyatdan keçmiş hüquqi şəxsdir. Hüquqi ünvan: Mingəçevir şəhəri, Məhəmmədhüseyn Şəhriyar küçəsi 75.',
    'sh_s2':'2. Xidmətlər','sh_p2':'Aztec Construction MMC tikinti, təmir, memarlıq layihələndirmə, interyer və eksteryer dizayn, fasad işləri, landşaft dizaynı və konsaltinq xidmətləri göstərir. Saytda təqdim olunan məlumatlar informasiya xarakterlidir və müqavilə təklifi deyildir.',
    'sh_s3':'3. Əqli mülkiyyət hüquqları','sh_p3':'Saytdakı bütün məzmun, o cümlədən mətnlər, şəkillər, loqotiplər, dizayn elementləri və proqram təminatı Aztec Construction MMC-nin əqli mülkiyyətidir. Bu materialların Şirkətin yazılı razılığı olmadan surətinin çıxarılması, paylaşılması və ya kommersiya məqsədi ilə istifadəsi qadağandır.',
    'sh_s4':'4. İstifadəçi öhdəlikləri','sh_p4':'Saytdan istifadə edərkən qanuna zidd hərəkətlər etmək, saytın işinə müdaxilə etmək, zərərli proqram təminatı yaymaq, yanlış məlumat təqdim etmək qadağandır.',
    'sh_s5':'5. Məsuliyyətin məhdudlaşdırılması','sh_p5':'Aztec Construction MMC saytda təqdim olunan məlumatların tam dəqiqliyi barədə zəmanət vermir. Şirkət üçüncü tərəf saytlara keçidlər üçün məsuliyyət daşımır. Xidmət şərtləri hər bir layihə üçün ayrıca müqavilə ilə müəyyən edilir.',
    'sh_s6':'6. Əlaqə formu və şəxsi məlumatlar','sh_p6':'Saytdakı əlaqə formu vasitəsilə göndərilən məlumatlar yalnız sizinlə əlaqə saxlamaq və xidmət təklifi hazırlamaq üçün istifadə olunur. Ətraflı məlumat üçün Gizlilik Politikasına baxın.',
    'sh_s7':'7. Tətbiq olunan qanunvericilik','sh_p7':'Bu İstifadə Şərtləri Azərbaycan Respublikasının qanunvericiliyinə uyğun olaraq tənzimlənir. Mübahisələr Mingəçevir şəhər məhkəməsinin yurisdiksiyasına tabedir.',
    'sh_s8':'8. Dəyişikliklər','sh_p8':'Şirkət bu şərtləri istənilən vaxt dəyişdirmək hüququnu özündə saxlayır. Dəyişikliklər saytda dərc edildiyi andan qüvvəyə minir.',
    'sh_s9':'Əlaqə','sh_p9':'Aztec Construction MMC<br>Ünvan: Mingəçevir ş., Şəhriyar küç. 75<br>Telefon: +994 55 975 89 00<br>Sayt: aztec.az'
  },
  ru:{
    'navHome':'Главная',
    'navAbout':'О нас',
    'navServices':'Услуги',
    'navProjects':'Проекты',
    'navCareer':'Карьера',
    'navNews':'Новости',
    'navContact':'Контакт',
    'ftCopy':'Все права защищены.',
    'ftTerms':'Условия использования',
    'ftPrivacy':'Политика конфиденциальности',
    'heroTitle':'Прочный Фундамент.<br>Профессиональное Исполнение.<br><em>Устойчивый Результат.</em>',
    'heroCta':'Ознакомьтесь с нашими работами',
    'stat1':'Завершённых проектов',
    'stat2':'Профессионалов',
    'stat3':'Охват регионов',
    'stat4':'Начало деятельности',
    'aboutTag':'О нас',
    'aboutTitle':'Строим будущее',
    'aboutP1':'Aztec Construction — динамичная и надёжная компания, работающая в сфере строительства, ремонта и дизайна с 2017 года. Мы предоставляем широкий спектр услуг — от частных домов до коммерческих объектов, от общественных пространств до гостиничных проектов. На сегодня мы успешно завершили более 500 проектов.',
    'aboutP2':'4 офиса и более 100 профессионалов обслуживают все 12 регионов Азербайджана. Мы берём на себя все этапы — от первого эскиза до сдачи под ключ.',
    'aboutMore':'Подробнее',
    'badgeL':'Проектов',
    'badgeO':'Офисов',
    'badgeE':'Сотрудников',
    'svcTag':'Услуги',
    'svcTitle':'Наши услуги',
    'svcDesc':'Aztec Construction объединяет все этапы — от концепции проекта до сдачи под ключ. Полный контроль от планирования до завершения каждого проекта.',
    'svc1':'Архитектура и проектирование',
    'svc1d':'Функциональные и эстетичные решения от эскиза до технических чертежей. Анализ грунта, расчёт фундамента, 3D-визуализация.',
    'svc2':'Дизайн интерьера',
    'svc2d':'Неоклассика, классика, тяжёлая классика и современные стили. Планирование и исполнение под ключ.',
    'svc3':'Фасадные работы',
    'svc3d':'Фасадные решения со стеклом, металлом, композитом и пен-панелями — все материалы по современным стандартам.',
    'svc4':'Ремонт и строительство',
    'svc4d':'Строительство под ключ от частных домов до коммерческих объектов — от фундамента до финальной отделки.',
    'svc5':'Ландшафт, бассейны и беседки',
    'svc5d':'Озеленение, бассейны всех типов, беседки с концепцией летней кухни и наружное освещение.',
    'svc6':'Консалтинг',
    'svc6d':'Планирование строительства, составление смет, техническая консультация по документации. Первичная консультация бесплатна.',
    'svcAll':'Все услуги',
    'more':'Подробнее',
    'projTag':'Портфолио',
    'projTitle':'Последние проекты',
    'projDesc':'Выполненные проекты и достигнутые результаты — лучший показатель нашего потенциала.',
    'projAll':'Смотреть все',
    'galTag':'Медиа',
    'galTitle':'Галерея',
    'whyTag':'Преимущества',
    'whyTitle':'Почему Aztec Construction?',
    'why1':'Профессиональная команда',
    'why1d':'Более 100 специалистов, 4 региональных офиса, строгий график и контроль качества.',
    'why2':'Оперативное исполнение',
    'why2d':'Соблюдение согласованных сроков. Прозрачный график работ для клиента.',
    'why3':'Контроль качества',
    'why3d':'Проверка соответствия стандартам на каждом этапе. Без компромиссов в выборе материалов.',
    'why4':'Гарантированный результат',
    'why4d':'Полный контроль от планирования до сдачи. Техническая поддержка и гарантия после проекта.',
    'ctaTitle':'Реализуйте проект с нами',
    'ctaDesc':'Бесплатная первичная консультация. Наша команда ответит вам в течение 24 часов.',
    'ctaBtn':'Связаться',
    'ha_tag':'О компании',
    'ha_h1':'Об Aztec Construction',
    'ha_desc':'Строим будущее. Ваш надёжный строительный партнёр с 2017 года.',
    'ha_profTag':'Профиль',
    'ha_profTitle':'Профиль компании',
    'ha_p1':'Aztec Construction — динамичная и надёжная компания, работающая в сфере строительства, ремонта и дизайна с 2017 года. Мы укрепляем свои позиции на рынке благодаря современному подходу и высоким стандартам качества.',
    'ha_p2':'К настоящему времени мы участвовали в строительстве и ремонте более 500 жилых и нежилых объектов, а также многих государственно важных проектов. Полный контроль от планирования до сдачи. Профессиональная команда, оперативное исполнение, гарантированный результат.',
    'ha_p3':'4 офиса и более 100 профессионалов обслуживают все 12 регионов Азербайджана.',
    'ha_valTag':'Ценности',
    'ha_valTitle':'Наши ценности',
    'ha_valDesc':'Честность, прозрачность и профессионализм. Реальные результаты на региональном рынке — проявление этих ценностей.',
    'ha_vmTag':'Цели',
    'ha_vmTitle':'Наши видение и миссия',
    'ha_vision':'Наше видение',
    'ha_visionP':'Стать ведущей компанией на строительном рынке Азербайджана, известной качеством, точностью и удовлетворённостью клиентов.',
    'ha_mission':'Наша миссия',
    'ha_missionP':'Точно понимая потребности клиента в каждом проекте, создавать долговечные, эстетичные и функциональные пространства с помощью профессиональной команды и качественных материалов.',
    'ha_prinTag':'Принципы',
    'ha_prinTitle':'Наши рабочие принципы',
    'prin1t':'Прозрачная смета',
    'prin1d':'Каждая статья расходов согласовывается с клиентом. Никаких скрытых платежей.',
    'prin2t':'Работа по договору',
    'prin2d':'Все проекты начинаются с письменного договора.',
    'prin3t':'Профессиональный контроль',
    'prin3d':'Строгий контроль качества на каждом этапе.',
    'prin4t':'Сдача в срок',
    'prin4d':'Соблюдение согласованных сроков.',
    'prin5t':'Последующая поддержка',
    'prin5d':'Техническая поддержка и гарантия после проекта.',
    'xs_tag':'Что мы делаем',
    'xs_h1':'Наши услуги',
    'xs_desc':'Все этапы — от концепции проекта до сдачи под ключ.',
    'lp_tag':'Портфолио',
    'lp_h1':'Наши проекты',
    'lp_desc':'Наши проекты — лучший показатель нашего потенциала.',
    'fAll':'Все',
    'fDone':'Завершённые',
    'fOngoing':'Текущие',
    'fGov':'Государственные',
    'fCom':'Коммерческие',
    'fRes':'Жилые',
    'fPub':'Общественные',
    'kr_tag':'Присоединяйтесь',
    'kr_h1':'Карьера',
    'kr_desc':'Присоединяйтесь к нашей команде из 100+ профессионалов.',
    'kr_openTitle':'Открытые вакансии',
    'xb_tag':'Новости',
    'xb_h1':'Новости и обновления',
    'xb_desc':'Последние проекты, корпоративные новости и полезная информация.',
    'xb_latest':'Последние новости',
    'xb_blog':'База знаний',
    'el_tag':'Контакт',
    'el_h1':'Свяжитесь с нами',
    'el_desc':'Бесплатная консультация. Ответ в течение 24 часов.',
    'el_infoTitle':'Контактная информация',
    'el_formTitle':'Отправить сообщение',
    'el_phone':'Телефон',
    'el_addr':'Адрес',
    'el_hours':'Рабочие часы',
    'el_wa':'WhatsApp',
    'el_send':'Отправить через WhatsApp',
    'formName':'Имя и фамилия',
    'formPhone':'Телефон',
    'formEmail':'Эл. почта',
    'formType':'Тип проекта',
    'formMsg':'Сообщение',
    'km_tag':'Команда',
    'km_h1':'Наша команда',
    'km_desc':'Более 100 наших профессионалов обеспечивают качество каждого проекта.',
    'km_mgmt':'Руководство',
    'km_mgmtTitle':'Управленческий состав',
    'km_specTag':'Специалисты',
    'km_specTitle':'Ключевые специалисты',
    'tf_tag':'Сотрудничество',
    'tf_h1':'Наши партнёры',
    'tf_desc':'Надёжное сотрудничество с более чем 30 государственными и частными компаниями.',
    'tf_matTag':'Материалы',
    'tf_matTitle':'Поставщики стройматериалов',
    'tf_govTag':'Государство',
    'tf_govTitle':'Государственные учреждения',
    'us_tag':'Почему мы?',
    'us_h1':'Наши преимущества',
    'us_desc':'Мы создаём разницу на каждом этапе — от фундамента до сдачи под ключ.',
    'us_mainTag':'Наше отличие',
    'us_mainTitle':'Наши ключевые преимущества',
    'us_mainDesc':'Преимущества, которые мы обеспечиваем на каждом этапе — от фундамента до финальной сдачи.',
    'det_backNews':'Назад к новостям',
    'det_allProj':'Все проекты',
    'det_allSvc':'Все услуги',
    'det_consult':'Получить консультацию',
    'nb_projInfo':'Информация о проекте',
    'nb_projScope':'Охват проекта',
    'nb_execScope':'Охват исполнения',
    'nb_stages':'Этапы исполнения',
    'nb_photos':'Фотографии проекта',
    'nb_video':'Видео',
    'nb_outro':'Каждый проект — результат работы профессиональной команды, качественных материалов и строгого рабочего графика.',
    'x1_tag':'Жилое','x1_h1':'Старт нового жилого проекта',
    'x1_p1':'Новый жилой дом площадью 232,84 кв.м, 5 комнат. Полный контроль от проектирования до строительства.',
    'x1_s1p':'Площадь застройки 140,45 кв.м, общая площадь 232,84 кв.м, 2 этажа, 5 комнат, современная планировка.',
    'x1_st1h':'Анализ грунта и фундамент','x1_st1p':'Фундаментное решение с учётом типа грунта, качественный бетон и арматура.',
    'x1_st2h':'Несущая конструкция','x1_st2p':'Железобетонный каркас, кладка стен, кровля.',
    'x1_st3h':'Коммуникации','x1_st3p':'Водоснабжение, канализация, электричество, отопление.',
    'x1_st4h':'Внутренняя отделка','x1_st4p':'Штукатурка, покраска, плитка, паркет.',
    'x1_st5h':'Фасад и наружные работы','x1_st5p':'Изоляция, фасадное покрытие, ландшафт.',
    'x2_tag':'Коммерческое','x2_h1':'Завершены коммерческие проекты в Лаки (Агдаш)',
    'x2_p1':'В посёлке Лаки города Агдаш успешно реализованы два коммерческих объекта.',
    'x2_s1p':'Внутренняя отделка, фасадные работы, электрика и сантехника, дизайн интерьера.',
    'x2_st1h':'Проектирование и смета','x2_st1p':'Концепция, технические планы, утверждение сметы.',
    'x2_st2h':'Строительство и отделка','x2_st2p':'Внутренние и наружные работы, коммуникации.',
    'x2_st3h':'Обновление фасада','x2_st3p':'Фасад с современными материалами.',
    'x2_st4h':'Сдача объекта','x2_st4p':'Тест качества, официальная сдача.',
    'x3_tag':'Государственный','x3_h1':'Фасадные работы Габалинского олимпийского комплекса',
    'x3_p1':'В рамках государственного проекта выполнены работы по обновлению фасада и внутреннему ремонту Габалинского олимпийского комплекса.',
    'x3_s1p':'Обновление фасада, внутреннее восстановление, модернизация коммуникаций. Стеклянные, металлические и композитные материалы.',
    'x3_st1h':'Техническая оценка','x3_st1p':'Анализ текущего состояния.',
    'x3_st2h':'Обновление фасада','x3_st2p':'Демонтаж старых покрытий, новые панели.',
    'x3_st3h':'Внутреннее восстановление','x3_st3p':'Спортивные залы, общественные зоны.',
    'x3_st4h':'Сдача объекта','x3_st4p':'Контроль качества, документация.',
    'giz_tag':'Конфиденциальность','giz_h1':'Политика конфиденциальности',
    'legal_updated':'Дата последнего обновления:',
    'giz_s1':'1. Введение','giz_p1':'Мы, Aztec Construction MMC («Компания»), серьёзно относимся к защите персональных данных. Настоящая Политика разработана в соответствии с Законом АР «О персональных данных» и Общим регламентом ЕС о защите данных (GDPR).',
    'giz_s2':'2. Собираемые данные','giz_p2':'На Сайте собираются: имя, фамилия, телефон, e-mail и содержание сообщения из контактной формы. Технические данные (IP, тип браузера, статистика просмотров) собираются автоматически.',
    'giz_s3':'3. Цели использования данных','giz_p3':'Данные используются для: связи с вами, подготовки предложений, улучшения функциональности сайта, выполнения законных обязательств.',
    'giz_s4':'4. Передача данных','giz_p4':'Данные не передаются третьим лицам, кроме случаев: требования законодательства, вашего письменного согласия, необходимости для оказания услуг.',
    'giz_s5':'5. Защита данных','giz_p5':'Компания применяет технические и организационные меры: SSL-шифрование, контроль доступа, регулярные обновления безопасности.',
    'giz_s6':'6. Права пользователя','giz_p6':'Вы вправе: получить доступ к своим данным, исправить, удалить или возразить против их обработки. Для реализации прав — свяжитесь с нами.',
    'giz_s7':'7. Файлы cookie (Cookies)','giz_p7':'Сайт использует файлы cookie для функциональности и улучшения опыта пользователя. Управляйте ими в настройках браузера.',
    'giz_s8':'8. Соответствие GDPR','giz_p8':'Для граждан ЕС обеспечивается дополнительная защита согласно GDPR. Жалобы по защите данных можно направить в надзорный орган.',
    'giz_s9':'9. Контакт','giz_p9':'По вопросам политики конфиденциальности:<br>Aztec Construction MMC<br>Адрес: г. Мингечевир, ул. Шахрияр, 75<br>Телефон: +994 55 975 89 00<br>Сайт: aztec.az',
    'sh_tag':'Правовое','sh_h1':'Условия использования',
    'sh_s1':'1. Общие положения','sh_p1a':'Настоящие Условия регулируют правила использования сайта aztec.az («Сайт»), управляемого Aztec Construction MMC («Компания»). Используя Сайт, вы принимаете эти условия.',
    'sh_p1b':'Aztec Construction MMC является юридическим лицом, зарегистрированным в соответствии с законодательством АР. Юридический адрес: г. Мингечевир, ул. М. Шахрияр, 75.',
    'sh_s2':'2. Услуги','sh_p2':'Aztec Construction MMC оказывает услуги в области строительства, ремонта, архитектурного проектирования, дизайна, фасадных и ландшафтных работ, консалтинга. Информация на Сайте носит справочный характер.',
    'sh_s3':'3. Права интеллектуальной собственности','sh_p3':'Всё содержимое Сайта является интеллектуальной собственностью Aztec Construction MMC. Копирование и коммерческое использование без письменного разрешения Компании запрещено.',
    'sh_s4':'4. Обязательства пользователя','sh_p4':'При использовании Сайта запрещено: совершать противоправные действия, вмешиваться в его работу, распространять вредоносное ПО, предоставлять ложную информацию.',
    'sh_s5':'5. Ограничение ответственности','sh_p5':'Компания не гарантирует полной точности информации на Сайте и не несёт ответственности за ссылки на сторонние ресурсы. Условия услуг определяются отдельным договором.',
    'sh_s6':'6. Контактная форма и персональные данные','sh_p6':'Данные контактной формы используются исключительно для связи и подготовки предложений. Подробнее — в Политике конфиденциальности.',
    'sh_s7':'7. Применимое законодательство','sh_p7':'Настоящие Условия регулируются законодательством АР. Споры рассматриваются в городском суде Мингечевира.',
    'sh_s8':'8. Изменения','sh_p8':'Компания вправе изменять настоящие Условия в любое время. Изменения вступают в силу с момента публикации на Сайте.',
    'sh_s9':'Контакт','sh_p9':'Aztec Construction MMC<br>Адрес: г. Мингечевир, ул. Шахрияр, 75<br>Телефон: +994 55 975 89 00<br>Сайт: aztec.az'
  },
  en:{
    'navHome':'Home',
    'navAbout':'About',
    'navServices':'Services',
    'navProjects':'Projects',
    'navCareer':'Career',
    'navNews':'News',
    'navContact':'Contact',
    'ftCopy':'All rights reserved.',
    'ftTerms':'Terms of Use',
    'ftPrivacy':'Privacy Policy',
    'heroTitle':'Solid Foundation.<br>Professional Execution.<br><em>Lasting Results.</em>',
    'heroCta':'Explore our work',
    'stat1':'Completed projects',
    'stat2':'Professionals',
    'stat3':'Regional coverage',
    'stat4':'Year established',
    'aboutTag':'About us',
    'aboutTitle':'Building the future',
    'aboutP1':'Aztec Construction is a dynamic and reliable company in construction, renovation and design since 2017. We provide a wide range of services from private houses to commercial properties, from public spaces to hotel projects. To date, we have successfully completed over 500 projects.',
    'aboutP2':'4 offices and 100+ professionals serving all 12 regions of Azerbaijan. We handle every stage from the first sketch to turnkey delivery.',
    'aboutMore':'Read more',
    'badgeL':'Projects',
    'badgeO':'Offices',
    'badgeE':'Team',
    'svcTag':'Services',
    'svcTitle':'Our services',
    'svcDesc':'Aztec Construction integrates all stages from project concept to turnkey delivery. Full oversight from planning to completion of every project.',
    'svc1':'Architecture & Planning',
    'svc1d':'Functional and aesthetic solutions from sketch to technical plans. Soil analysis, foundation calculations, 3D visualization.',
    'svc2':'Interior Design',
    'svc2d':'Neoclassical, classical, heavy classical and modern styles. Turnkey planning and execution.',
    'svc3':'Facade Works',
    'svc3d':'Facade solutions with glass, metal, composite and pen panels — all materials meeting modern standards.',
    'svc4':'Construction & Renovation',
    'svc4d':'Turnkey construction from private homes to commercial properties — from foundation to final decoration.',
    'svc5':'Landscape, Pools & Gazebos',
    'svc5d':'Landscaping, all types of pools, gazebos with summer kitchen concepts and outdoor lighting.',
    'svc6':'Consulting',
    'svc6d':'Construction planning, cost estimates, technical consultation on documentation. Initial consultation is free.',
    'svcAll':'All services',
    'more':'Details',
    'projTag':'Portfolio',
    'projTitle':'Recent projects',
    'projDesc':'Our completed projects and achieved results are the best indicator of our potential.',
    'projAll':'View all',
    'galTag':'Media',
    'galTitle':'Gallery',
    'whyTag':'Advantages',
    'whyTitle':'Why Aztec Construction?',
    'why1':'Professional team',
    'why1d':'100+ specialists, 4 regional offices, strict schedule and quality control.',
    'why2':'Fast execution',
    'why2d':'On-time delivery per agreed schedule. Transparent work schedule shared with client.',
    'why3':'Quality control',
    'why3d':'Standards compliance checked at every stage. No compromise in material selection.',
    'why4':'Guaranteed results',
    'why4d':'Full control from planning to delivery. Technical support and warranty after project.',
    'ctaTitle':'Bring your project to life with us',
    'ctaDesc':'Free initial consultation. Our team will respond within 24 hours.',
    'ctaBtn':'Get in touch',
    'ha_tag':'About company',
    'ha_h1':'About Aztec Construction',
    'ha_desc':'Building the future. Your reliable construction partner since 2017.',
    'ha_profTag':'Profile',
    'ha_profTitle':'Company profile',
    'ha_p1':'Aztec Construction is a dynamic and reliable company in construction, renovation and design since 2017. We strengthen our market position through modern approach and high quality standards.',
    'ha_p2':'To date, we have participated in construction and renovation of over 500 residential and non-residential properties, as well as many state-important projects. Full oversight from planning to delivery. Professional team, fast execution, guaranteed results.',
    'ha_p3':'4 offices and 100+ professionals serving all 12 regions of Azerbaijan.',
    'ha_valTag':'Values',
    'ha_valTitle':'Our values',
    'ha_valDesc':'Honesty, transparency and professionalism. Real results in the regional market are a manifestation of these values.',
    'ha_vmTag':'Goals',
    'ha_vmTitle':'Our vision and mission',
    'ha_vision':'Our vision',
    'ha_visionP':'To become the leading company in Azerbaijan\'s construction market, known for quality, precision and customer satisfaction.',
    'ha_mission':'Our mission',
    'ha_missionP':'Precisely understanding client needs in every project, creating durable, aesthetic and functional spaces with our professional team and quality materials.',
    'ha_prinTag':'Principles',
    'ha_prinTitle':'Our work principles',
    'prin1t':'Transparent estimate',
    'prin1d':'Every cost item is agreed with the client. No hidden charges.',
    'prin2t':'Contract-based work',
    'prin2d':'All projects start with a written contract.',
    'prin3t':'Professional oversight',
    'prin3d':'Strict quality control at every stage.',
    'prin4t':'On-time delivery',
    'prin4d':'Agreed deadlines are met.',
    'prin5t':'After-sales support',
    'prin5d':'Technical support and warranty after project.',
    'xs_tag':'What we do',
    'xs_h1':'Our services',
    'xs_desc':'All stages from project concept to turnkey delivery.',
    'lp_tag':'Portfolio',
    'lp_h1':'Our projects',
    'lp_desc':'Our projects are the best indicator of our potential.',
    'fAll':'All',
    'fDone':'Completed',
    'fOngoing':'Ongoing',
    'fGov':'Government',
    'fCom':'Commercial',
    'fRes':'Residential',
    'fPub':'Public',
    'kr_tag':'Join our team',
    'kr_h1':'Career',
    'kr_desc':'Join our team of 100+ professionals.',
    'kr_openTitle':'Open positions',
    'xb_tag':'Updates',
    'xb_h1':'News and updates',
    'xb_desc':'Latest projects, corporate news and useful information.',
    'xb_latest':'Latest news',
    'xb_blog':'Knowledge base',
    'el_tag':'Contact',
    'el_h1':'Get in touch',
    'el_desc':'Free consultation. Response within 24 hours.',
    'el_infoTitle':'Contact information',
    'el_formTitle':'Send a message',
    'el_phone':'Phone',
    'el_addr':'Address',
    'el_hours':'Working hours',
    'el_wa':'WhatsApp',
    'el_send':'Send via WhatsApp',
    'formName':'Full name',
    'formPhone':'Phone',
    'formEmail':'Email',
    'formType':'Project type',
    'formMsg':'Message',
    'km_tag':'Team',
    'km_h1':'Our team',
    'km_desc':'Our 100+ professionals ensure quality in every project.',
    'km_mgmt':'Management',
    'km_mgmtTitle':'Management team',
    'km_specTag':'Specialists',
    'km_specTitle':'Key specialists',
    'tf_tag':'Partnerships',
    'tf_h1':'Our partners',
    'tf_desc':'Reliable partnership with over 30 government and private companies.',
    'tf_matTag':'Materials',
    'tf_matTitle':'Building material suppliers',
    'tf_govTag':'Government',
    'tf_govTitle':'Government institutions',
    'us_tag':'Why us?',
    'us_h1':'Our advantages',
    'us_desc':'We make a difference at every stage from foundation to turnkey delivery.',
    'us_mainTag':'Our difference',
    'us_mainTitle':'Our key advantages',
    'us_mainDesc':'Advantages we provide at every stage from foundation to final delivery.',
    'det_backNews':'Back to news',
    'det_allProj':'All projects',
    'det_allSvc':'All services',
    'det_consult':'Get a consultation',
    'nb_projInfo':'Project information',
    'nb_projScope':'Project scope',
    'nb_execScope':'Execution scope',
    'nb_stages':'Implementation stages',
    'nb_photos':'Project photos',
    'nb_video':'Video',
    'nb_outro':'Every project is the result of our professional team, quality materials and strict work schedule.',
    'x1_tag':'Residential','x1_h1':'New residential project launched',
    'x1_p1':'New 5-room residential house with a total area of 232.84 sq.m. Fully supervised from design to construction.',
    'x1_s1p':'Built-up area 140.45 sq.m, total area 232.84 sq.m, 2 floors, 5 rooms, modern layout.',
    'x1_st1h':'Soil analysis and foundation','x1_st1p':'Foundation solution adapted to soil type, quality concrete and reinforcement.',
    'x1_st2h':'Load-bearing structure','x1_st2p':'Reinforced concrete frame, wall masonry, roof.',
    'x1_st3h':'Communications','x1_st3p':'Water, sewage, electricity, heating.',
    'x1_st4h':'Interior finishing','x1_st4p':'Plaster, paint, tiles, parquet.',
    'x1_st5h':'Facade and exterior works','x1_st5p':'Insulation, facade cladding, landscaping.',
    'x2_tag':'Commercial','x2_h1':'Aghdash Laki commercial projects completed',
    'x2_p1':'Two commercial facilities were successfully completed in the Laki settlement of Aghdash.',
    'x2_s1p':'Interior renovation, facade works, electrical and plumbing, interior design.',
    'x2_st1h':'Design and estimate','x2_st1p':'Concept, technical plans, estimate approval.',
    'x2_st2h':'Construction and renovation','x2_st2p':'Interior and exterior works, communications.',
    'x2_st3h':'Facade renewal','x2_st3p':'Facade with modern materials.',
    'x2_st4h':'Delivery','x2_st4p':'Quality test, official handover.',
    'x3_tag':'Government','x3_h1':'Gabala Olympic Complex facade works',
    'x3_p1':'Within the government project, facade renewal and interior renovation works were carried out at the Gabala Olympic Complex.',
    'x3_s1p':'Facade renewal, interior restoration, communications modernisation. Glass, metal and composite materials.',
    'x3_st1h':'Technical assessment','x3_st1p':'Analysis of current condition.',
    'x3_st2h':'Facade renewal','x3_st2p':'Removal of old cladding, new panels.',
    'x3_st3h':'Interior restoration','x3_st3p':'Sports halls, public areas.',
    'x3_st4h':'Delivery','x3_st4p':'Quality control, documentation.',
    'giz_tag':'Privacy','giz_h1':'Privacy Policy',
    'legal_updated':'Last updated:',
    'giz_s1':'1. Introduction','giz_p1':'At Aztec Construction MMC ("Company"), we take the protection of our users\' personal data very seriously. This Privacy Policy has been prepared in accordance with the Law of the Republic of Azerbaijan "On Personal Data" and the EU General Data Protection Regulation (GDPR).',
    'giz_s2':'2. Data collected','giz_p2':'Our website collects: name, surname, phone number, email and message content submitted via the contact form. Technical data (IP address, browser type, page view statistics) is collected automatically.',
    'giz_s3':'3. Purpose of data use','giz_p3':'Collected data is used for: contacting you, preparing service offers, improving website functionality, fulfilling legal obligations.',
    'giz_s4':'4. Data sharing','giz_p4':'Your personal data is not shared with third parties except: as required by law, with your written consent, or when necessary to provide services.',
    'giz_s5':'5. Data protection','giz_p5':'The Company takes technical and organisational measures: SSL encryption, access control, regular security updates.',
    'giz_s6':'6. User rights','giz_p6':'You have the right to access, rectify, erase or object to the processing of your personal data. To exercise these rights, please contact us.',
    'giz_s7':'7. Cookies','giz_p7':'Our website uses cookies to ensure functionality and improve user experience. You can manage cookies through your browser settings.',
    'giz_s8':'8. GDPR compliance','giz_p8':'For EU citizens, we provide additional protection in accordance with GDPR requirements. Complaints related to data protection can be directed to the relevant supervisory authority.',
    'giz_s9':'9. Contact','giz_p9':'For questions regarding the privacy policy:<br>Aztec Construction MMC<br>Address: 75 Shahriyar St., Mingachevir<br>Phone: +994 55 975 89 00<br>Website: aztec.az',
    'sh_tag':'Legal','sh_h1':'Terms of Use',
    'sh_s1':'1. General provisions','sh_p1a':'These Terms of Use define the rules for using the aztec.az website ("Site") managed by Aztec Construction MMC ("Company"). By accessing the Site, you accept these terms.',
    'sh_p1b':'Aztec Construction MMC is a legal entity registered under the laws of the Republic of Azerbaijan. Legal address: 75 M. Shahriyar St., Mingachevir.',
    'sh_s2':'2. Services','sh_p2':'Aztec Construction MMC provides construction, renovation, architectural design, interior and exterior design, facade works, landscape design and consulting services. Information on the Site is informational and does not constitute a contract offer.',
    'sh_s3':'3. Intellectual property rights','sh_p3':'All content on the Site is the intellectual property of Aztec Construction MMC. Copying or commercial use without the Company\'s written consent is prohibited.',
    'sh_s4':'4. User obligations','sh_p4':'When using the Site, it is prohibited to engage in illegal activities, interfere with its operation, distribute malware, or provide false information.',
    'sh_s5':'5. Limitation of liability','sh_p5':'The Company does not guarantee the full accuracy of information on the Site and is not liable for links to third-party websites. Service terms are defined by separate contract.',
    'sh_s6':'6. Contact form and personal data','sh_p6':'Information submitted via the contact form is used solely to contact you and prepare service proposals. See the Privacy Policy for more details.',
    'sh_s7':'7. Applicable law','sh_p7':'These Terms are governed by the laws of the Republic of Azerbaijan. Disputes are subject to the jurisdiction of the Mingachevir city court.',
    'sh_s8':'8. Amendments','sh_p8':'The Company reserves the right to amend these terms at any time. Changes take effect from the moment of publication on the Site.',
    'sh_s9':'Contact','sh_p9':'Aztec Construction MMC<br>Address: 75 Shahriyar St., Mingachevir<br>Phone: +994 55 975 89 00<br>Website: aztec.az'
  },
};


function _applyLang(l){
  document.documentElement.lang=l;
  document.querySelectorAll('.lang-sw button,.mob-lang button').forEach(function(b){
    b.classList.toggle('active',b.textContent.trim()===l.toUpperCase());
  });
  var d=TR[l];if(!d)return;

  /* Nav links */
  var nv=document.querySelectorAll('.nav-center>a:not(.mega-trigger)');
  ['navHome','navServices','navProjects','navCareer','navNews','navContact'].forEach(function(k,i){if(nv[i]&&d[k])nv[i].textContent=d[k]});

  /* Mega trigger */
  var mt=document.querySelector('.mega-trigger');
  if(mt)mt.innerHTML=(d.navAbout||'Haqqımızda')+' <i class="fas fa-chevron-down" style="font-size:8px;margin-left:2px"></i>';

  /* Mobile menu links */
  var ml=document.querySelectorAll('.mob-link'),mi=0;
  ['navHome','navServices','navProjects','navCareer','navNews','navContact'].forEach(function(k){if(ml[mi]&&d[k]){ml[mi].textContent=d[k];mi++}});
  var gt=document.querySelector('.mob-group-title');
  if(gt)gt.innerHTML=(d.navAbout||'Haqqımızda')+' <i class="fas fa-chevron-down"></i>';

  /* Mobile menu — Haqqımızda submenu items */
  var mgi=document.querySelectorAll('.mob-group-items a');
  ['ha_tag','mega_kmTitle','mega_tfTitle','mega_usTitle'].forEach(function(k,i){
    if(mgi[i]&&d[k])mgi[i].textContent=d[k];
  });

  /* Mega menu items */
  var mh=document.querySelectorAll('.mega-item h4');
  var megaKeys=['ha_tag','km_h1','tf_h1','us_h1','svcTitle','navContact'];
  mh.forEach(function(el,i){if(megaKeys[i]&&d[megaKeys[i]])el.textContent=d[megaKeys[i]]});
  var mft=document.querySelector('.mf-tag');
  if(mft)mft.textContent=l==='az'?'Seçilmiş layihə':l==='ru'?'Избранный проект':'Featured project';

  /* Footer */
  var ftn=document.querySelectorAll('.ft-nav a');
  ['navAbout','navServices','navProjects','navNews','navCareer','navContact'].forEach(function(k,i){if(ftn[i]&&d[k])ftn[i].textContent=d[k]});
  var ftc=document.querySelector('.ft-copy');
  if(ftc)ftc.innerHTML='&copy; 2026 Aztec Construction MMC. '+(d.ftCopy||'');
  var fti=document.querySelector('.ft-info');
  if(fti&&d.ft_info)fti.innerHTML=d.ft_info;
  var ftl=document.querySelectorAll('.ft-legal a');
  if(ftl[0]&&d.ftTerms)ftl[0].textContent=d.ftTerms;
  if(ftl[1]&&d.ftPrivacy)ftl[1].textContent=d.ftPrivacy;

  /* "Made by neOtwork" credit — injected once per page */
  var ftBot=document.querySelector('.ft-bot');
  if(ftBot && !ftBot.querySelector('.ft-madeby')){
    var mb=document.createElement('div');
    mb.className='ft-madeby';
    mb.style.cssText='margin-top:12px;font-size:12px;color:var(--g4);text-align:center;width:100%';
    mb.innerHTML='Made by <a href="https://neotwork.com/" target="_blank" rel="noopener noreferrer" style="color:var(--accent);text-decoration:none;font-weight:500">neOtwork</a>';
    ftBot.appendChild(mb);
  }

  /* ALL data-tr elements (covers ALL page content) */
  document.querySelectorAll('[data-tr]').forEach(function(el){
    var k=el.getAttribute('data-tr');
    if(d[k]){
      if(el.tagName==='H1'||el.tagName==='H2'||el.innerHTML.indexOf('<')>-1)
        el.innerHTML=d[k];
      else
        el.textContent=d[k];
    }
  });

  /* ALL data-trl elements (link-style with arrow) */
  document.querySelectorAll('[data-trl]').forEach(function(el){
    var k=el.getAttribute('data-trl');
    if(d[k])el.innerHTML=d[k]+' <i class="fas fa-arrow-right"></i>';
  });

  /* Filter buttons */
  document.querySelectorAll('.fbtn[data-tr]').forEach(function(btn){
    var k=btn.getAttribute('data-tr');
    if(d[k])btn.textContent=d[k];
  });

  /* Placeholder attributes */
  document.querySelectorAll('[data-tr-ph]').forEach(function(el){
    var k=el.getAttribute('data-tr-ph');
    if(d[k])el.setAttribute('placeholder',d[k]);
  });
}

/* Fetch translations from backend, merge into TR, then apply */
function _loadLang(l, cb){
  if(TR[l] && TR[l].__fromBackend){ cb && cb(); return; }
  var base = window.API_BASE || '';
  fetch(base + '/api/i18n/' + l + '/', {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('i18n '+r.status); return r.json(); })
    .then(function(data){
      TR[l] = Object.assign({}, TR[l]||{}, data.strings||{});
      TR[l].__fromBackend = true;
      cb && cb();
    })
    .catch(function(err){ console.warn('[i18n] fetch failed:', err); cb && cb(); });
}

function setLang(l){
  var prev = localStorage.getItem('aztec-lang') || 'az';
  localStorage.setItem('aztec-lang', l);
  /* If lang changes, reload so backend-driven content (services, projects, news,
     heroes, etc.) is re-fetched in the new language. */
  if(prev !== l){ location.reload(); return; }
  _loadLang(l, function(){ _applyLang(l); });
}

/* Auto-restore saved language */
(function(){var sl=localStorage.getItem('aztec-lang');if(sl&&sl!=='az')setLang(sl);else _loadLang('az');})();

/* Counter Animation */
document.querySelectorAll('.stat-n[data-t]').forEach(function(c){
  new IntersectionObserver(function(e){e.forEach(function(x){
    if(x.isIntersecting&&!x.target._d){x.target._d=1;var t=+x.target.dataset.t,st=null;
    (function step(ts){if(!st)st=ts;var p=Math.min((ts-st)/1400,1);x.target.textContent=Math.floor(p*t)+'+';if(p<1)requestAnimationFrame(step)})(performance.now())}
  })},{threshold:0.5}).observe(c);
});

/* Gallery Lightbox */
var galleryItems=[];function initGallery(items){galleryItems=items}
var currentLB=0;
function openLB(i){currentLB=i;renderLB();document.getElementById('lb').classList.add('open');document.body.style.overflow='hidden'}
function closeLB(){document.getElementById('lb').classList.remove('open');document.body.style.overflow='';document.getElementById('lbContent').innerHTML=''}
function navLB(dir){currentLB=(currentLB+dir+galleryItems.length)%galleryItems.length;renderLB()}
function renderLB(){var item=galleryItems[currentLB],ct=document.getElementById('lbContent');if(!item)return;if(item.type==='video')ct.innerHTML='<iframe src="'+item.src+'?autoplay=1" allow="autoplay;encrypted-media" allowfullscreen></iframe>';else ct.innerHTML='<img src="'+item.src+'" alt="Layihə">'}
document.addEventListener('keydown',function(e){var lb=document.getElementById('lb');if(!lb||!lb.classList.contains('open'))return;if(e.key==='Escape')closeLB();if(e.key==='ArrowLeft')navLB(-1);if(e.key==='ArrowRight')navLB(1)});

/* ======== BACKEND GALLERY LOADER ======== */
document.addEventListener('DOMContentLoaded', function(){
  var grid = document.getElementById('galleryGrid');
  if(!grid) return;

  fetch(window.apiUrl('/api/gallery/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('gal '+r.status); return r.json(); })
    .then(function(data){
      var list = data.gallery;
      if(!list || !list.length) return;

      initGallery(list.map(function(g){ return {type: g.type, src: g.src}; }));

      list.forEach(function(g, idx){
        var el = document.createElement('div');
        if(g.type === 'video'){
          el.className = 'g-item video';
          el.onclick = function(){ openLB(idx); };
          var ph = g.image
            ? '<img src="' + g.image + '" alt="' + (g.title||'Video') + '" style="width:100%;height:100%;object-fit:cover">'
            : '<div class="g-item-ph"><i class="fas fa-image"></i>' + (g.title||'Video') + '</div>';
          el.innerHTML = ph + '<div class="g-play"><i class="fas fa-play"></i></div>';
        } else {
          el.className = 'g-item';
          el.onclick = function(){ openLB(idx); };
          if(g.src){
            el.innerHTML = '<img src="' + g.src + '" alt="' + (g.title||'Foto') + '" style="width:100%;height:100%;object-fit:cover;border-radius:var(--r)">';
          } else {
            el.innerHTML = '<div class="g-item-ph"><i class="fas fa-image"></i>' + (g.title||'Foto') + '</div>';
          }
        }
        grid.appendChild(el);
      });
    })
    .catch(function(err){ console.warn('[gallery] backend load failed:', err); });
});

/* AZ Form Validation */
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('input[required],select[required],textarea[required]').forEach(function(i){
    i.addEventListener('invalid',function(e){e.target.setCustomValidity('');if(!e.target.validity.valid&&e.target.validity.valueMissing)e.target.setCustomValidity('Bu sahəni doldurmaq məcburidir.')});
    i.addEventListener('input',function(e){e.target.setCustomValidity('')});
  });
});

/* ======== BACKEND PAGE HERO LOADER ======== */
document.addEventListener('DOMContentLoaded', function(){
  var hero = document.querySelector('section.page-hero[data-page]');
  if(!hero) return;
  var slug = hero.getAttribute('data-page');
  if(!slug) return;

  fetch(window.apiUrl('/api/hero/' + slug + '/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('hero '+r.status); return r.json(); })
    .then(function(d){
      var tagEl  = hero.querySelector('.tag');
      var h1El   = hero.querySelector('h1');
      var descEl = hero.querySelector('.desc');
      var bgEl   = hero.querySelector('.page-hero-bg');

      if(tagEl){
        if(d.tag){ tagEl.textContent = d.tag; tagEl.removeAttribute('data-tr'); tagEl.style.display=''; }
        else { tagEl.style.display='none'; }
      }
      if(h1El && d.title){ h1El.textContent = d.title; h1El.removeAttribute('data-tr'); }
      if(descEl){
        if(d.description){ descEl.textContent = d.description; descEl.removeAttribute('data-tr'); descEl.style.display=''; }
        else { descEl.style.display='none'; }
      }
      if(bgEl && d.background){
        bgEl.style.backgroundImage = "url('" + d.background + "')";
      }

      /* --- SEO META --- */
      function setMeta(selector, attr, value){
        if(!value) return;
        var el = document.head.querySelector(selector);
        if(!el){
          el = document.createElement('meta');
          if(selector.indexOf('name=')>-1) el.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
          else if(selector.indexOf('property=')>-1) el.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
          document.head.appendChild(el);
        }
        el.setAttribute(attr, value);
      }

      if(d.meta_title){
        document.title = d.meta_title;
        setMeta('meta[property="og:title"]', 'content', d.meta_title);
        setMeta('meta[name="twitter:title"]', 'content', d.meta_title);
      }
      if(d.meta_description){
        setMeta('meta[name="description"]', 'content', d.meta_description);
        setMeta('meta[property="og:description"]', 'content', d.meta_description);
        setMeta('meta[name="twitter:description"]', 'content', d.meta_description);
      }
      if(d.meta_keywords){
        setMeta('meta[name="keywords"]', 'content', d.meta_keywords);
      }
    })
    .catch(function(err){ console.warn('[hero] backend load failed:', err); });
});

/* ======== NAVBAR BACKEND LOADER (all pages) ======== */
document.addEventListener('DOMContentLoaded', function(){
  var megaGrid = document.querySelector('.mega-grid');
  if(!megaGrid) return;

  /* About description in mega menu */
  fetch(window.apiUrl('/api/about/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('about-nav '+r.status); return r.json(); })
    .then(function(d){
      if(d.mega_description){
        var megaAboutItem = megaGrid.querySelector('a[href="haqqimizda"] p');
        if(megaAboutItem) megaAboutItem.textContent = d.mega_description;
      }
    })
    .catch(function(err){ console.warn('[nav-about] load failed:', err); });

  /* Featured project in mega menu */
  var megaFeatured = document.querySelector('.mega-featured');
  if(megaFeatured){
    fetch(window.apiUrl('/api/projects/featured/'), {cache:'no-store'})
      .then(function(r){ if(!r.ok) throw new Error('feat '+r.status); return r.json(); })
      .then(function(data){
        var f = data.featured;
        if(!f) return;
        var h3 = megaFeatured.querySelector('h3');
        var p = megaFeatured.querySelector('p');
        var link = megaFeatured.querySelector('a.u-link');
        if(h3) h3.textContent = f.title;
        if(p) p.textContent = f.description;
        if(link) link.href = 'layihe-detail?slug=' + f.slug;
        if(f.image){
          megaFeatured.style.backgroundImage =
            "linear-gradient(0deg,rgba(28,28,30,0.88) 0%,rgba(28,28,30,0.35) 55%,rgba(28,28,30,0.05) 100%), url('" + f.image + "')";
          megaFeatured.style.backgroundSize = 'cover';
          megaFeatured.style.backgroundPosition = 'center';
          megaFeatured.classList.add('has-img');
        }
      })
      .catch(function(err){ console.warn('[nav-featured] load failed:', err); });
  }
});

/* ======== BACKEND ABOUT LOADER (index + haqqimizda) ======== */
document.addEventListener('DOMContentLoaded', function(){
  var homeAboutText = document.getElementById('homeAboutText');
  var homeAboutImg = document.getElementById('homeAboutImg');
  var aboutProfile = document.getElementById('aboutProfile');
  var aboutImg = document.getElementById('aboutImg');
  var aboutValues = document.getElementById('aboutValues');
  var aboutVM = document.getElementById('aboutVM');

  if(!homeAboutText && !aboutProfile) return;

  fetch(window.apiUrl('/api/about/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('about '+r.status); return r.json(); })
    .then(function(d){

      /* --- INDEX.HTML about summary --- */
      if(homeAboutText){
        var _curLang = localStorage.getItem('aztec-lang') || 'az';
        var _moreTxt = (TR[_curLang] && TR[_curLang].aboutMore) || 'Ətraflı oxuyun';
        homeAboutText.innerHTML =
          '<div class="s-tag">' + d.tag + '</div>' +
          '<h2 class="s-title">' + d.title + '</h2>' +
          '<p>' + d.summary_p1 + '</p>' +
          '<p>' + d.summary_p2 + '</p>' +
          '<div class="a-badges">' +
            '<div class="a-badge"><div class="n">' + d.badge1_number + '</div><div class="l">' + d.badge1_label + '</div></div>' +
            '<div class="a-badge"><div class="n">' + d.badge2_number + '</div><div class="l">' + d.badge2_label + '</div></div>' +
            '<div class="a-badge"><div class="n">' + d.badge3_number + '</div><div class="l">' + d.badge3_label + '</div></div>' +
          '</div>' +
          '<a href="haqqimizda" class="u-link" style="margin-top:20px" data-trl="aboutMore">' + _moreTxt + ' <i class="fas fa-arrow-right"></i></a>';
      }
      if(homeAboutImg && d.image){
        homeAboutImg.innerHTML = '<img src="' + d.image + '" alt="Aztec Construction" style="width:100%;height:100%;object-fit:cover">';
      }

      /* --- HAQQIMIZDA.HTML profile section --- */
      if(aboutProfile){
        aboutProfile.innerHTML =
          '<div class="s-tag">' + d.profile_tag + '</div>' +
          '<h2 class="s-title">' + d.profile_title + '</h2>' +
          d.profile_text;
      }
      if(aboutImg && d.image){
        aboutImg.innerHTML = '<img src="' + d.image + '" alt="Aztec Construction" style="width:100%;height:100%;object-fit:cover">';
      }

      /* --- HAQQIMIZDA.HTML values section --- */
      if(aboutValues){
        var vc = aboutValues.querySelector('.container');
        if(vc){
          vc.innerHTML =
            '<div style="display:inline-block;text-align:left">' +
              '<div class="s-tag">' + d.values_tag + '</div>' +
              '<h2 class="s-title" style="display:block;margin:0">' + d.values_title + '</h2>' +
            '</div>' +
            '<p class="s-desc" style="margin:16px auto 0;text-align:center">' + d.values_text + '</p>';
        }
      }

      /* --- HAQQIMIZDA.HTML vision/mission section --- */
      if(aboutVM){
        var vmc = aboutVM.querySelector('.container');
        if(vmc){
          vmc.innerHTML =
            '<div style="text-align:center"><div style="display:inline-block;text-align:left;margin-bottom:20px">' +
              '<div class="s-tag">' + d.vm_tag + '</div>' +
              '<h2 class="s-title" style="display:block;margin:0">' + d.vm_title + '</h2>' +
            '</div></div>' +
            '<div class="vm-row">' +
              '<div class="vm reveal visible"><h3><i class="fas fa-eye" style="margin-right:8px;color:var(--accent)"></i>' + d.vision_title + '</h3><p>' + d.vision_text + '</p></div>' +
              '<div class="vm reveal visible"><h3><i class="fas fa-bullseye" style="margin-right:8px;color:var(--accent)"></i>' + d.mission_title + '</h3><p>' + d.mission_text + '</p></div>' +
            '</div>';
        }
      }
    })
    .catch(function(err){ console.warn('[about] backend load failed:', err); });
});

/* ======== BACKEND VACANCIES LOADER ======== */
document.addEventListener('DOMContentLoaded', function(){
  var vacList = document.getElementById('vacancyList');
  if(!vacList) return;

  fetch(window.apiUrl('/api/vacancies/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('vac '+r.status); return r.json(); })
    .then(function(data){
      var list = data.vacancies;
      if(!list || !list.length){
        vacList.innerHTML = '<p>Hal-hazırda açıq vakansiya yoxdur.</p>';
        return;
      }

      list.forEach(function(v){
        var el = document.createElement('div');
        var waLink = 'https://wa.me/994559758900?text=' + encodeURIComponent(v.whatsapp_text || v.title);

        if(v.type === 'intern'){
          el.className = 'intern reveal visible';
          el.innerHTML =
            '<h3><i class="fas fa-graduation-cap" style="margin-right:8px;color:var(--accent)"></i>' + v.title + '</h3>' +
            '<p>' + v.description + '</p>' +
            '<a href="' + waLink + '" target="_blank" class="u-link" data-tr="kr_apply">' + ((TR[localStorage.getItem('aztec-lang')||'az']||{}).kr_apply || 'Müraciət et') + ' <i class="fab fa-whatsapp"></i></a>';
        } else {
          el.className = 'job reveal visible';
          var meta = '';
          if(v.location) meta += '<span><i class="fas fa-map-marker-alt"></i>' + v.location + '</span>';
          if(v.work_type) meta += '<span><i class="fas fa-briefcase"></i>' + v.work_type + '</span>';
          el.innerHTML =
            '<h3>' + v.title + '</h3>' +
            (meta ? '<div class="jm">' + meta + '</div>' : '') +
            '<p>' + v.description + '</p>' +
            '<a href="' + waLink + '" target="_blank" class="u-link" data-tr="kr_apply">' + ((TR[localStorage.getItem('aztec-lang')||'az']||{}).kr_apply || 'Müraciət et') + ' <i class="fab fa-whatsapp"></i></a>';
        }
        vacList.appendChild(el);
      });
    })
    .catch(function(err){ console.warn('[vacancies] backend load failed:', err); });
});

/* ======== BACKEND NEWS LIST LOADER ======== */
document.addEventListener('DOMContentLoaded', function(){
  var newsGrid = document.getElementById('newsGrid');
  if(!newsGrid) return;

  fetch(window.apiUrl('/api/news/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('news '+r.status); return r.json(); })
    .then(function(data){
      var list = data.news;
      if(!list || !list.length) return;

      list.forEach(function(n){
        var card = document.createElement('div');
        card.className = 'nc reveal visible';
        var imgHtml = n.image
          ? '<img src="' + n.image + '" alt="' + n.title + '" style="width:100%;height:100%;object-fit:cover;border-radius:var(--r) var(--r) 0 0">'
          : '<i class="fas fa-image"></i>';
        card.innerHTML =
          '<a href="xeber?slug=' + n.slug + '" style="text-decoration:none;color:inherit">' +
          '<div class="nimg">' + imgHtml + '</div>' +
          '<div class="nb">' +
            '<div class="nd">' + (n.date_label || '') + '</div>' +
            '<h3>' + n.title + '</h3>' +
            '<p>' + (n.short_description || '') + '</p>' +
            '<span class="u-link" style="font-size:11px" data-tr="more">' + ((TR[localStorage.getItem('aztec-lang')||'az']||{}).more || 'Ətraflı') + ' <i class="fas fa-arrow-right"></i></span>' +
          '</div></a>';
        newsGrid.appendChild(card);
      });
    })
    .catch(function(err){ console.warn('[news] backend load failed:', err); });
});

/* ======== BACKEND KNOWLEDGE BASE LOADER ======== */
document.addEventListener('DOMContentLoaded', function(){
  var kbGrid = document.getElementById('kbGrid');
  if(!kbGrid) return;

  fetch(window.apiUrl('/api/knowledge-base/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('kb '+r.status); return r.json(); })
    .then(function(data){
      var list = data.knowledge_base;
      if(!list || !list.length) return;

      list.forEach(function(kb){
        var card = document.createElement('div');
        card.className = 'bc reveal visible';
        card.innerHTML =
          '<span class="btg">' + kb.tag + '</span>' +
          '<h3>' + kb.title + '</h3>' +
          '<p>' + kb.description + '</p>';
        kbGrid.appendChild(card);
      });
    })
    .catch(function(err){ console.warn('[kb] backend load failed:', err); });
});

/* ======== NEWS DETAIL PAGE LOADER ======== */
document.addEventListener('DOMContentLoaded', function(){
  var newsDetailContent = document.getElementById('newsDetailContent');
  if(!newsDetailContent) return;

  var params = new URLSearchParams(window.location.search);
  var slug = params.get('slug');
  if(!slug){ newsDetailContent.innerHTML = '<p>Xəbər tapılmadı.</p>'; return; }

  fetch(window.apiUrl('/api/news/' + slug + '/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('news-d '+r.status); return r.json(); })
    .then(function(d){
      /* Hero fields */
      var tagEl = document.getElementById('newsDetailTag');
      var titleEl = document.getElementById('newsDetailTitle');
      var dateEl = document.getElementById('newsDetailDate');
      var heroBg = document.getElementById('newsDetailHeroBg');
      if(tagEl) tagEl.textContent = d.tag || '';
      if(titleEl) titleEl.textContent = d.title;
      if(dateEl) dateEl.textContent = d.date_label || '';
      if(heroBg && d.image) heroBg.style.backgroundImage = 'url(' + d.image + ')';

      /* Page title */
      document.title = d.title + ' | Aztec Construction';

      /* Content */
      var html = d.content || '';
      if(d.video_url){
        html += '<h2>Video</h2><div class="detail-video"><iframe src="' + d.video_url + '" allow="autoplay;encrypted-media" allowfullscreen></iframe></div>';
      }
      html += '<div style="margin-top:40px;text-align:center"><a href="elaqe" class="u-link lg" data-tr="det_consult">' + ((TR[localStorage.getItem('aztec-lang')||'az']||{}).det_consult || 'Konsultasiya alın') + ' <i class="fas fa-arrow-right"></i></a></div>';
      newsDetailContent.innerHTML = html;
    })
    .catch(function(err){
      console.warn('[news-detail] load failed:', err);
      newsDetailContent.innerHTML = '<p>Xəbər tapılmadı.</p>';
    });
});

/* ======== BACKEND SERVICES LOADER ======== */
document.addEventListener('DOMContentLoaded', function(){
  var svcGrid = document.getElementById('svcGrid');
  var svcContainer = document.getElementById('svcBlocksContainer');
  if(!svcGrid && !svcContainer) return;

  fetch(window.apiUrl('/api/services/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('svc '+r.status); return r.json(); })
    .then(function(data){
      var list = data.services;
      if(!list || !list.length) return;

      /* --- HOMEPAGE RENDER (.svc-grid) — last 3 services --- */
      if(svcGrid){
        var homeList = list.slice(-3);
        homeList.forEach(function(s){
          var card = document.createElement('a');
          card.href = 'xidmet-detail?slug=' + s.slug;
          card.className = 'svc reveal visible';
          card.style.textDecoration = 'none';
          card.style.color = 'inherit';
          var topHtml = s.image
            ? '<img src="' + s.image + '" alt="' + s.title + '" loading="lazy">'
            : '<i class="' + s.icon + '"></i>';
          card.innerHTML =
            '<div class="svc-top">' + topHtml + '</div>' +
            '<div class="svc-body">' +
              '<h3>' + s.title + '</h3>' +
              '<p>' + s.short_description + '</p>' +
              '<span class="u-link" data-tr="more">' + ((TR[localStorage.getItem('aztec-lang')||'az']||{}).more || 'Ətraflı') + ' <i class="fas fa-arrow-right"></i></span>' +
            '</div>';
          svcGrid.appendChild(card);
        });
      }

      /* --- SERVICES PAGE RENDER (.svc-block) --- */
      if(svcContainer){
        list.forEach(function(s){
          var block = document.createElement('div');
          block.className = 'svc-block reveal visible';

          var imgPlaceholder = s.image
            ? '<img src="' + s.image + '" alt="' + s.title + '" style="width:100%;height:100%;object-fit:cover;border-radius:12px">'
            : '<i class="' + s.icon + ' ph"></i><span>' + s.title + ' şəkli</span>';

          var catHtml = '';
          if(s.category_name){
            catHtml = '<div class="inc"><h4>' + s.category_name + '</h4><p>' + s.category_items + '</p></div>';
          }

          block.innerHTML =
            '<div class="svc-img">' + imgPlaceholder + '</div>' +
            '<div class="svc-txt">' +
              '<div class="ic"><i class="' + s.icon + '"></i></div>' +
              '<h2>' + s.title + '</h2>' +
              '<p>' + s.description + '</p>' +
              catHtml +
              '<a href="xidmet-detail?slug=' + s.slug + '" class="u-link" data-tr="more">' + ((TR[localStorage.getItem('aztec-lang')||'az']||{}).more || 'Ətraflı') + ' <i class="fas fa-arrow-right"></i></a>' +
            '</div>';
          svcContainer.appendChild(block);
        });
      }
    })
    .catch(function(err){ console.warn('[services] backend load failed:', err); });
});

/* ======== BACKEND PROJECTS LOADER ======== */
document.addEventListener('DOMContentLoaded', function(){
  var projGrid = document.getElementById('projGrid');
  var homeProjGrid = document.getElementById('homeProjGrid');
  var statusFilters = document.getElementById('projStatusFilters');
  var catFilters = document.getElementById('projCatFilters');
  if(!projGrid && !homeProjGrid) return;

  fetch(window.apiUrl('/api/projects/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('proj '+r.status); return r.json(); })
    .then(function(data){
      var list = data.projects;
      if(!list || !list.length) return;

      /* --- HOMEPAGE: first 3 projects --- */
      if(homeProjGrid){
        list.slice(0, 3).forEach(function(p){
          var card = document.createElement('a');
          card.href = 'layihe-detail?slug=' + p.slug;
          card.className = 'proj reveal visible';
          var imgHtml = p.image
            ? '<img src="' + p.image + '" alt="' + p.title + '" style="width:100%;height:100%;object-fit:cover">'
            : '<i class="fas fa-image"></i>' + p.title;
          var subtitle = p.description || p.location || '';
          card.innerHTML =
            '<div class="proj-ph">' + imgHtml + '</div>' +
            '<div class="proj-ov"></div>' +
            '<div class="proj-badge">' + p.category_display + '</div>' +
            '<div class="proj-ct">' +
              '<div class="proj-cat">' + p.category_display + '</div>' +
              '<h3>' + p.title + '</h3>' +
              '<p>' + subtitle + '</p>' +
            '</div>';
          homeProjGrid.appendChild(card);
        });
      }

      /* --- PROJECTS PAGE: cascading filters + grid --- */
      if(projGrid && statusFilters){
        var allProjects = list;
        var currentStatus = 'all';
        var currentCat = 'all';

        var _lang = localStorage.getItem('aztec-lang') || 'az';
        var _T = (typeof TR !== 'undefined' && TR[_lang]) || {};
        var LBL_ALL = _T.fAll || 'Hamısı';
        var LBL_DONE = _T.fDone || 'Tamamlanmış';
        var LBL_ON = _T.fOngoing || 'Cari';
        var CAT_LABELS = {
          gov: _T.fGov || 'Dövlət',
          com: _T.fCom || 'Kommersiya',
          res: _T.fRes || 'Yaşayış',
          pub: _T.fPub || 'İctimai'
        };

        function renderGrid(){
          projGrid.innerHTML = '';
          allProjects.forEach(function(p){
            var matchStatus = currentStatus === 'all' || p.status === currentStatus;
            var matchCat = currentCat === 'all' || p.category === currentCat;
            if(!matchStatus || !matchCat) return;

            var card = document.createElement('a');
            card.href = 'layihe-detail?slug=' + p.slug;
            card.className = 'proj reveal visible';
            card.style.textDecoration = 'none';
            var imgHtml = p.image
              ? '<img src="' + p.image + '" alt="' + p.title + '" style="width:100%;height:100%;object-fit:cover">'
              : '<i class="fas fa-image"></i>' + p.title;
            var badgeClass = p.status === 'on' ? 'proj-badge on' : 'proj-badge';
            var subtitle = p.description || '';
            card.innerHTML =
              '<div class="proj-ph">' + imgHtml + '</div>' +
              '<div class="proj-ov"></div>' +
              '<div class="' + badgeClass + '">' + p.status_display + '</div>' +
              '<div class="proj-ct">' +
                '<div class="proj-cat">' + p.category_display + '</div>' +
                '<h3>' + p.title + '</h3>' +
                '<p>' + subtitle + '</p>' +
              '</div>';
            projGrid.appendChild(card);
          });
        }

        function buildCatFilters(){
          catFilters.innerHTML = '';
          if(currentStatus === 'all'){
            catFilters.style.display = 'none';
            currentCat = 'all';
            return;
          }
          var filtered = allProjects.filter(function(p){ return p.status === currentStatus; });
          var cats = {};
          filtered.forEach(function(p){ cats[p.category] = true; });
          var catKeys = Object.keys(cats);
          if(catKeys.length === 0){
            catFilters.style.display = 'none';
            currentCat = 'all';
            return;
          }
          catFilters.style.display = '';
          var allBtn = document.createElement('button');
          allBtn.className = 'fbtn active';
          allBtn.textContent = LBL_ALL;
          allBtn.onclick = function(){ currentCat = 'all'; setCatActive(this); renderGrid(); };
          catFilters.appendChild(allBtn);
          catKeys.forEach(function(c){
            var btn = document.createElement('button');
            btn.className = 'fbtn';
            btn.textContent = CAT_LABELS[c] || c;
            btn.onclick = function(){ currentCat = c; setCatActive(this); renderGrid(); };
            catFilters.appendChild(btn);
          });
        }

        function setCatActive(btn){
          catFilters.querySelectorAll('.fbtn').forEach(function(b){ b.classList.remove('active'); });
          btn.classList.add('active');
        }
        function setStatusActive(btn){
          statusFilters.querySelectorAll('.fbtn').forEach(function(b){ b.classList.remove('active'); });
          btn.classList.add('active');
        }

        /* Build status buttons: Hamısı, Tamamlanmış, Cari */
        var statusAll = document.createElement('button');
        statusAll.className = 'fbtn active';
        statusAll.textContent = LBL_ALL;
        statusAll.onclick = function(){ currentStatus = 'all'; currentCat = 'all'; setStatusActive(this); buildCatFilters(); renderGrid(); };
        statusFilters.appendChild(statusAll);

        var hasDone = allProjects.some(function(p){ return p.status === 'done'; });
        var hasOn = allProjects.some(function(p){ return p.status === 'on'; });

        if(hasDone){
          var btnDone = document.createElement('button');
          btnDone.className = 'fbtn';
          btnDone.textContent = LBL_DONE;
          btnDone.onclick = function(){ currentStatus = 'done'; currentCat = 'all'; setStatusActive(this); buildCatFilters(); renderGrid(); };
          statusFilters.appendChild(btnDone);
        }
        if(hasOn){
          var btnOn = document.createElement('button');
          btnOn.className = 'fbtn';
          btnOn.textContent = LBL_ON;
          btnOn.onclick = function(){ currentStatus = 'on'; currentCat = 'all'; setStatusActive(this); buildCatFilters(); renderGrid(); };
          statusFilters.appendChild(btnOn);
        }

        catFilters.style.display = 'none';
        renderGrid();
      }
    })
    .catch(function(err){ console.warn('[projects] backend load failed:', err); });
});

/* ======== PROJECT DETAIL PAGE LOADER ======== */
document.addEventListener('DOMContentLoaded', function(){
  var detailContent = document.getElementById('projDetailContent');
  if(!detailContent) return;

  var params = new URLSearchParams(window.location.search);
  var slug = params.get('slug');
  if(!slug){ detailContent.innerHTML = '<p>Layihə tapılmadı.</p>'; return; }

  fetch(window.apiUrl('/api/projects/' + slug + '/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('detail '+r.status); return r.json(); })
    .then(function(d){
      /* Hero */
      var titleEl = document.getElementById('projDetailTitle');
      var catEl = document.getElementById('projDetailCat');
      var descEl = document.getElementById('projDetailDesc');
      var bgEl = document.getElementById('projDetailBg');

      if(titleEl) titleEl.textContent = d.title;
      if(catEl){ catEl.textContent = d.category_display; }
      if(descEl) descEl.textContent = d.description;
      if(bgEl && d.image){
        bgEl.style.backgroundImage = "url('" + d.image + "')";
      }

      document.title = d.title + ' | Aztec Construction';

      /* Detail content */
      var html = '';

      /* Info cards row */
      html += '<div style="display:flex;flex-wrap:wrap;gap:16px;margin-bottom:36px">';
      html += '<div style="flex:1;min-width:180px;padding:20px;background:var(--g1);border-radius:var(--r);border-left:3px solid var(--accent)">';
      html += '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--accent);margin-bottom:4px" data-tr="det_status">' + ((TR[localStorage.getItem('aztec-lang')||'az']||{}).det_status || 'Status') + '</div>';
      html += '<div style="font-size:16px;color:var(--dark);font-weight:600">' + d.status_display + '</div></div>';

      html += '<div style="flex:1;min-width:180px;padding:20px;background:var(--g1);border-radius:var(--r);border-left:3px solid var(--accent)">';
      html += '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--accent);margin-bottom:4px" data-tr="det_category">' + ((TR[localStorage.getItem('aztec-lang')||'az']||{}).det_category || 'Kateqoriya') + '</div>';
      html += '<div style="font-size:16px;color:var(--dark);font-weight:600">' + d.category_display + '</div></div>';

      if(d.location){
        html += '<div style="flex:1;min-width:180px;padding:20px;background:var(--g1);border-radius:var(--r);border-left:3px solid var(--accent)">';
        html += '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--accent);margin-bottom:4px" data-tr="det_location">' + ((TR[localStorage.getItem('aztec-lang')||'az']||{}).det_location || 'Məkan') + '</div>';
        html += '<div style="font-size:16px;color:var(--dark);font-weight:600">' + d.location + '</div></div>';
      }

      if(d.area){
        html += '<div style="flex:1;min-width:180px;padding:20px;background:var(--g1);border-radius:var(--r);border-left:3px solid var(--accent)">';
        html += '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--accent);margin-bottom:4px" data-tr="det_area">' + ((TR[localStorage.getItem('aztec-lang')||'az']||{}).det_area || 'Sahə') + '</div>';
        html += '<div style="font-size:16px;color:var(--dark);font-weight:600">' + d.area + '</div></div>';
      }
      html += '</div>';

      /* Project image */
      if(d.image){
        html += '<div style="width:100%;aspect-ratio:16/9;border-radius:var(--r2);overflow:hidden;margin-bottom:32px;background:var(--g1)">';
        html += '<img src="' + d.image + '" alt="' + d.title + '" style="width:100%;height:100%;object-fit:cover">';
        html += '</div>';
      }

      /* Description */
      if(d.description){
        html += '<h2 data-tr="det_about">' + ((TR[localStorage.getItem('aztec-lang')||'az']||{}).det_about || 'Layihə haqqında') + '</h2>';
        html += '<p>' + d.description + '</p>';
      }

      /* Gallery */
      if(d.images && d.images.length){
        html += '<h2 style="margin-top:40px" data-tr="det_gallery">' + ((TR[localStorage.getItem('aztec-lang')||'az']||{}).det_gallery || 'Qalereya') + '</h2>';
        html += '<div class="detail-gallery" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin-top:20px">';
        for(var i=0;i<d.images.length;i++){
          var gi = d.images[i];
          if(!gi.image) continue;
          html += '<a href="' + gi.image + '" target="_blank" rel="noopener" style="display:block;aspect-ratio:4/3;border-radius:var(--r);overflow:hidden;background:var(--g1)">';
          html += '<img src="' + gi.image + '" alt="' + (gi.caption || d.title) + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;transition:transform .3s" onmouseover="this.style.transform=\'scale(1.04)\'" onmouseout="this.style.transform=\'\'">';
          html += '</a>';
        }
        html += '</div>';
      }

      detailContent.innerHTML = html;
    })
    .catch(function(err){
      console.warn('[project-detail] load failed:', err);
      detailContent.innerHTML = '<p>Layihə yüklənə bilmədi.</p>';
    });
});

/* ======== SERVICE DETAIL PAGE LOADER ======== */
document.addEventListener('DOMContentLoaded', function(){
  var svcDetailContent = document.getElementById('svcDetailContent');
  if(!svcDetailContent) return;

  var params = new URLSearchParams(window.location.search);
  var slug = params.get('slug');
  if(!slug){ svcDetailContent.innerHTML = '<p>Xidmət tapılmadı.</p>'; return; }

  fetch(window.apiUrl('/api/services/' + slug + '/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('svc-detail '+r.status); return r.json(); })
    .then(function(d){
      /* Hero */
      var titleEl = document.getElementById('svcDetailTitle');
      var tagEl = document.getElementById('svcDetailTag');
      var descEl = document.getElementById('svcDetailDesc');
      var bgEl = document.getElementById('svcDetailBg');

      if(titleEl) titleEl.textContent = d.title;
      if(tagEl) tagEl.innerHTML = '<i class="' + d.icon + '" style="margin-right:8px"></i> Xidmət';
      if(descEl) descEl.textContent = d.short_description;
      if(bgEl && d.image){
        bgEl.style.backgroundImage = "url('" + d.image + "')";
      }

      document.title = d.title + ' | Aztec Construction';

      /* Detail content */
      var html = '';

      /* Icon + title header */
      html += '<div style="display:flex;align-items:center;gap:16px;margin-bottom:28px">';
      html += '<div style="width:56px;height:56px;border:2px solid var(--accent);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0">';
      html += '<i class="' + d.icon + '" style="font-size:20px;color:var(--accent)"></i></div>';
      html += '<h2 style="font-family:var(--display);font-size:28px;color:var(--dark);font-weight:500;margin:0">' + d.title + '</h2>';
      html += '</div>';

      /* Image */
      if(d.image){
        html += '<div style="width:100%;aspect-ratio:16/9;border-radius:var(--r2);overflow:hidden;margin-bottom:32px;background:var(--g1)">';
        html += '<img src="' + d.image + '" alt="' + d.title + '" style="width:100%;height:100%;object-fit:cover">';
        html += '</div>';
      }

      /* Video (mp4) */
      if(d.video){
        html += '<div class="detail-video" style="width:100%;aspect-ratio:16/9;border-radius:var(--r2);overflow:hidden;margin-bottom:32px;background:#000">';
        html += '<video src="' + d.video + '" controls playsinline preload="metadata" style="width:100%;height:100%;object-fit:cover"></video>';
        html += '</div>';
      }

      /* Description */
      html += '<p>' + d.description + '</p>';

      /* Category (includes) */
      if(d.category_name){
        html += '<div class="inc"><h4>' + d.category_name + '</h4><p>' + d.category_items + '</p></div>';
      }

      /* Gallery */
      if(d.images && d.images.length){
        html += '<h2 style="margin-top:40px" data-tr="det_gallery">' + ((TR[localStorage.getItem('aztec-lang')||'az']||{}).det_gallery || 'Qalereya') + '</h2>';
        html += '<div class="detail-gallery" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin-top:20px">';
        for(var i=0;i<d.images.length;i++){
          var gi = d.images[i];
          if(!gi.image) continue;
          html += '<a href="' + gi.image + '" target="_blank" rel="noopener" style="display:block;aspect-ratio:4/3;border-radius:var(--r);overflow:hidden;background:var(--g1)">';
          html += '<img src="' + gi.image + '" alt="' + (gi.caption || d.title) + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;transition:transform .3s" onmouseover="this.style.transform=\'scale(1.04)\'" onmouseout="this.style.transform=\'\'">';
          html += '</a>';
        }
        html += '</div>';
      }

      svcDetailContent.innerHTML = html;
    })
    .catch(function(err){
      console.warn('[svc-detail] load failed:', err);
      svcDetailContent.innerHTML = '<p>Xidmət yüklənə bilmədi.</p>';
    });
});

/* ======== BACKEND TEAM LOADER (komandamiz.html) ======== */
document.addEventListener('DOMContentLoaded', function(){
  var mgmt = document.getElementById('teamMgmt');
  var spec = document.getElementById('teamSpec');
  if(!mgmt && !spec) return;

  fetch(window.apiUrl('/api/team/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('team '+r.status); return r.json(); })
    .then(function(data){
      var list = data.team || [];
      if(!list.length) return;

      function card(m){
        var visual = m.photo
          ? '<div class="tm-ph" style="background:url(\'' + m.photo + '\') center/cover;border:none"></div>'
          : '<div class="tm-ph"><i class="fas fa-user"></i></div>';
        return '<div class="tm reveal visible">' + visual +
               '<h4>' + m.name + '</h4>' +
               '<p>' + m.role + '</p></div>';
      }

      var mgmtHtml = '', specHtml = '';
      list.forEach(function(m){
        var html = card(m);
        if(m.group === 'mgmt') mgmtHtml += html;
        else specHtml += html;
      });

      if(mgmt) mgmt.innerHTML = mgmtHtml;
      if(spec) spec.innerHTML = specHtml;
    })
    .catch(function(err){ console.warn('[team] load failed:', err); });
});

/* ======== BACKEND ADVANTAGES LOADER (ustunlukler.html) ======== */
document.addEventListener('DOMContentLoaded', function(){
  var grid = document.getElementById('advGrid');
  if(!grid) return;

  fetch(window.apiUrl('/api/advantages/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('advantages '+r.status); return r.json(); })
    .then(function(data){
      var list = (data && data.advantages) || [];
      if(!list.length){
        grid.innerHTML = '<p style="text-align:center;color:var(--g4);grid-column:1/-1">Tezliklə əlavə olunacaq.</p>';
        return;
      }
      var html = '';
      list.forEach(function(a){
        var icon = a.icon || 'fas fa-check';
        html += '<div class="adv reveal visible">' +
                  '<div class="adv-ic"><i class="' + icon + '"></i></div>' +
                  '<div class="adv-t">' +
                    '<h4>' + (a.title || '') + '</h4>' +
                    (a.description ? '<p>' + a.description + '</p>' : '') +
                  '</div>' +
                '</div>';
      });
      grid.innerHTML = html;
    })
    .catch(function(err){
      console.warn('[advantages] load failed:', err);
      grid.innerHTML = '<p style="text-align:center;color:var(--g4);grid-column:1/-1">Üstünlüklər yüklənmədi.</p>';
    });
});

/* ======== BACKEND PARTNERS LOADER (terefdashlar.html) ======== */
document.addEventListener('DOMContentLoaded', function(){
  var container = document.getElementById('partnersContainer');
  if(!container) return;

  fetch(window.apiUrl('/api/partners/'), {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('partners '+r.status); return r.json(); })
    .then(function(data){
      var groups = (data && data.groups) || [];
      if(!groups.length){
        container.innerHTML = '<p style="text-align:center;color:var(--g4)">Tərəfdaşlar haqqında məlumat tezliklə əlavə olunacaq.</p>';
        return;
      }

      var html = '';
      groups.forEach(function(g){
        html += '<div class="reveal visible" style="margin-bottom:48px">' +
                  '<div class="s-tag" style="margin-bottom:8px">' + g.category_display + '</div>' +
                  '<h2 class="s-title" style="margin-bottom:24px">' + g.category_display + '</h2>' +
                  '<div class="partner-grid">';
        g.items.forEach(function(it){
          var icon = it.icon || 'fas fa-handshake';
          html += '<div class="ptr">' +
                    '<div class="ptr-logo"><i class="' + icon + '"></i></div>' +
                    '<h4>' + (it.name || '') + '</h4>' +
                    (it.description ? '<p>' + it.description + '</p>' : '') +
                  '</div>';
        });
        html += '</div></div>';
      });
      container.innerHTML = html;
    })
    .catch(function(err){
      console.warn('[partners] load failed:', err);
      container.innerHTML = '<p style="text-align:center;color:var(--g4)">Tərəfdaşlar siyahısı yüklənmədi.</p>';
    });
});
