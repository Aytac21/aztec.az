/* Aztec Construction v4 - Full Translation + All JS */

/* Mobile Menu */
function toggleMenu(){var m=document.getElementById('mm');m.classList.toggle('open');document.body.style.overflow=m.classList.contains('open')?'hidden':''}

/* Sticky Nav */
window.addEventListener('scroll',function(){document.getElementById('nav').classList.toggle('scrolled',window.scrollY>60)});

/* Reveal Animation */
document.querySelectorAll('.reveal').forEach(function(el){new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add('visible')});},{threshold:0.1}).observe(el)});

/* Mega Menu */
function openMega(){document.getElementById('megaMenu').classList.add('show');document.getElementById('megaOv').classList.add('show');document.getElementById('nav').classList.add('mega-open')}
function closeMega(){document.getElementById('megaMenu').classList.remove('show');document.getElementById('megaOv').classList.remove('show');document.getElementById('nav').classList.remove('mega-open')}

/* ======== FULL TRANSLATION SYSTEM ======== */
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
    'us_mainDesc':'Bünövrədən son təhvilə qədər hər mərhələdə təmin etdiyimiz üstünlüklər.'
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
    'us_mainDesc':'Преимущества, которые мы обеспечиваем на каждом этапе — от фундамента до финальной сдачи.'
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
    'us_mainDesc':'Advantages we provide at every stage from foundation to final delivery.'
  },
};


function setLang(l){
  localStorage.setItem('aztec-lang',l);
  document.documentElement.lang=l;
  /* Update all lang buttons */
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
  var ftl=document.querySelectorAll('.ft-legal a');
  if(ftl[0]&&d.ftTerms)ftl[0].textContent=d.ftTerms;
  if(ftl[1]&&d.ftPrivacy)ftl[1].textContent=d.ftPrivacy;

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
}

/* Auto-restore saved language */
(function(){var sl=localStorage.getItem('aztec-lang');if(sl&&sl!=='az')setLang(sl)})();

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

  fetch(window.API_BASE + '/api/gallery/', {cache:'no-store'})
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
/* Override with window.API_BASE='https://...' before shared.js if needed */
window.API_BASE = window.API_BASE || 'http://127.0.0.1:8000';

document.addEventListener('DOMContentLoaded', function(){
  var hero = document.querySelector('section.page-hero[data-page]');
  if(!hero) return;
  var slug = hero.getAttribute('data-page');
  if(!slug) return;

  fetch(window.API_BASE + '/api/hero/' + slug + '/', {cache:'no-store'})
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
  fetch(window.API_BASE + '/api/about/', {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('about-nav '+r.status); return r.json(); })
    .then(function(d){
      if(d.mega_description){
        var megaAboutItem = megaGrid.querySelector('a[href="haqqimizda.html"] p');
        if(megaAboutItem) megaAboutItem.textContent = d.mega_description;
      }
    })
    .catch(function(err){ console.warn('[nav-about] load failed:', err); });

  /* Featured project in mega menu */
  var megaFeatured = document.querySelector('.mega-featured');
  if(megaFeatured){
    fetch(window.API_BASE + '/api/projects/featured/', {cache:'no-store'})
      .then(function(r){ if(!r.ok) throw new Error('feat '+r.status); return r.json(); })
      .then(function(data){
        var f = data.featured;
        if(!f) return;
        var h3 = megaFeatured.querySelector('h3');
        var p = megaFeatured.querySelector('p');
        var link = megaFeatured.querySelector('a.u-link');
        if(h3) h3.textContent = f.title;
        if(p) p.textContent = f.description;
        if(link) link.href = 'layihe-detail.html?slug=' + f.slug;
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

  fetch(window.API_BASE + '/api/about/', {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('about '+r.status); return r.json(); })
    .then(function(d){

      /* --- INDEX.HTML about summary --- */
      if(homeAboutText){
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
          '<a href="haqqimizda.html" class="u-link" style="margin-top:20px">Ətraflı oxuyun <i class="fas fa-arrow-right"></i></a>';
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
            '<div class="s-tag" style="justify-content:center">' + d.values_tag + '</div>' +
            '<h2 class="s-title" style="display:inline-block">' + d.values_title + '</h2>' +
            '<p class="s-desc" style="margin:16px auto 0;text-align:center">' + d.values_text + '</p>';
        }
      }

      /* --- HAQQIMIZDA.HTML vision/mission section --- */
      if(aboutVM){
        var vmc = aboutVM.querySelector('.container');
        if(vmc){
          vmc.innerHTML =
            '<div style="text-align:center"><div class="s-tag" style="justify-content:center">' + d.vm_tag + '</div>' +
            '<h2 class="s-title" style="display:inline-block">' + d.vm_title + '</h2></div>' +
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

  fetch(window.API_BASE + '/api/vacancies/', {cache:'no-store'})
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
            '<a href="' + waLink + '" target="_blank" class="u-link">Müraciət et <i class="fab fa-whatsapp"></i></a>';
        } else {
          el.className = 'job reveal visible';
          var meta = '';
          if(v.location) meta += '<span><i class="fas fa-map-marker-alt"></i>' + v.location + '</span>';
          if(v.work_type) meta += '<span><i class="fas fa-briefcase"></i>' + v.work_type + '</span>';
          el.innerHTML =
            '<h3>' + v.title + '</h3>' +
            (meta ? '<div class="jm">' + meta + '</div>' : '') +
            '<p>' + v.description + '</p>' +
            '<a href="' + waLink + '" target="_blank" class="u-link">Müraciət et <i class="fab fa-whatsapp"></i></a>';
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

  fetch(window.API_BASE + '/api/news/', {cache:'no-store'})
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
          '<a href="xeber.html?slug=' + n.slug + '" style="text-decoration:none;color:inherit">' +
          '<div class="nimg">' + imgHtml + '</div>' +
          '<div class="nb">' +
            '<div class="nd">' + (n.date_label || '') + '</div>' +
            '<h3>' + n.title + '</h3>' +
            '<p>' + (n.short_description || '') + '</p>' +
            '<span class="u-link" style="font-size:11px">Ətraflı <i class="fas fa-arrow-right"></i></span>' +
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

  fetch(window.API_BASE + '/api/knowledge-base/', {cache:'no-store'})
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

  fetch(window.API_BASE + '/api/news/' + slug + '/', {cache:'no-store'})
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
      html += '<div style="margin-top:40px;text-align:center"><a href="elaqe.html" class="u-link lg">Konsultasiya alın <i class="fas fa-arrow-right"></i></a></div>';
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

  fetch(window.API_BASE + '/api/services/', {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('svc '+r.status); return r.json(); })
    .then(function(data){
      var list = data.services;
      if(!list || !list.length) return;

      /* --- HOMEPAGE RENDER (.svc-grid) --- */
      if(svcGrid){
        list.forEach(function(s){
          var card = document.createElement('a');
          card.href = 'xidmet-detail.html?slug=' + s.slug;
          card.className = 'svc reveal visible';
          card.style.textDecoration = 'none';
          card.style.color = 'inherit';
          card.innerHTML =
            '<div class="svc-top"><i class="' + s.icon + '"></i></div>' +
            '<div class="svc-body">' +
              '<h3>' + s.title + '</h3>' +
              '<p>' + s.short_description + '</p>' +
              '<span class="u-link">Ətraflı <i class="fas fa-arrow-right"></i></span>' +
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
              '<a href="xidmet-detail.html?slug=' + s.slug + '" class="u-link">Ətraflı bax <i class="fas fa-arrow-right"></i></a>' +
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

  fetch(window.API_BASE + '/api/projects/', {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error('proj '+r.status); return r.json(); })
    .then(function(data){
      var list = data.projects;
      if(!list || !list.length) return;

      /* --- HOMEPAGE: first 3 projects --- */
      if(homeProjGrid){
        list.slice(0, 3).forEach(function(p){
          var card = document.createElement('a');
          card.href = 'layihe-detail.html?slug=' + p.slug;
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

        var CAT_LABELS = {gov:'Dövlət', com:'Kommersiya', res:'Yaşayış', pub:'İctimai'};

        function renderGrid(){
          projGrid.innerHTML = '';
          allProjects.forEach(function(p){
            var matchStatus = currentStatus === 'all' || p.status === currentStatus;
            var matchCat = currentCat === 'all' || p.category === currentCat;
            if(!matchStatus || !matchCat) return;

            var card = document.createElement('a');
            card.href = 'layihe-detail.html?slug=' + p.slug;
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
          if(catKeys.length <= 1){
            catFilters.style.display = 'none';
            currentCat = 'all';
            return;
          }
          catFilters.style.display = '';
          var allBtn = document.createElement('button');
          allBtn.className = 'fbtn active';
          allBtn.textContent = 'Hamısı';
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
        statusAll.textContent = 'Hamısı';
        statusAll.onclick = function(){ currentStatus = 'all'; currentCat = 'all'; setStatusActive(this); buildCatFilters(); renderGrid(); };
        statusFilters.appendChild(statusAll);

        var hasDone = allProjects.some(function(p){ return p.status === 'done'; });
        var hasOn = allProjects.some(function(p){ return p.status === 'on'; });

        if(hasDone){
          var btnDone = document.createElement('button');
          btnDone.className = 'fbtn';
          btnDone.textContent = 'Tamamlanmış';
          btnDone.onclick = function(){ currentStatus = 'done'; currentCat = 'all'; setStatusActive(this); buildCatFilters(); renderGrid(); };
          statusFilters.appendChild(btnDone);
        }
        if(hasOn){
          var btnOn = document.createElement('button');
          btnOn.className = 'fbtn';
          btnOn.textContent = 'Cari';
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

  fetch(window.API_BASE + '/api/projects/' + slug + '/', {cache:'no-store'})
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
      html += '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--accent);margin-bottom:4px">Status</div>';
      html += '<div style="font-size:16px;color:var(--dark);font-weight:600">' + d.status_display + '</div></div>';

      html += '<div style="flex:1;min-width:180px;padding:20px;background:var(--g1);border-radius:var(--r);border-left:3px solid var(--accent)">';
      html += '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--accent);margin-bottom:4px">Kateqoriya</div>';
      html += '<div style="font-size:16px;color:var(--dark);font-weight:600">' + d.category_display + '</div></div>';

      if(d.location){
        html += '<div style="flex:1;min-width:180px;padding:20px;background:var(--g1);border-radius:var(--r);border-left:3px solid var(--accent)">';
        html += '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--accent);margin-bottom:4px">Məkan</div>';
        html += '<div style="font-size:16px;color:var(--dark);font-weight:600">' + d.location + '</div></div>';
      }

      if(d.area){
        html += '<div style="flex:1;min-width:180px;padding:20px;background:var(--g1);border-radius:var(--r);border-left:3px solid var(--accent)">';
        html += '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--accent);margin-bottom:4px">Sahə</div>';
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
        html += '<h2>Layihə haqqında</h2>';
        html += '<p>' + d.description + '</p>';
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

  fetch(window.API_BASE + '/api/services/' + slug + '/', {cache:'no-store'})
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

      /* Description */
      html += '<p>' + d.description + '</p>';

      /* Category (includes) */
      if(d.category_name){
        html += '<div class="inc"><h4>' + d.category_name + '</h4><p>' + d.category_items + '</p></div>';
      }

      svcDetailContent.innerHTML = html;
    })
    .catch(function(err){
      console.warn('[svc-detail] load failed:', err);
      svcDetailContent.innerHTML = '<p>Xidmət yüklənə bilmədi.</p>';
    });
});
