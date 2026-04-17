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
