from django.db import models


class PageHero(models.Model):
    PAGE_CHOICES = [
        ('haqqimizda', 'Haqqımızda'),
        ('komandamiz', 'Komandamız'),
        ('xidmetler', 'Xidmətlər'),
        ('layiheler', 'Layihələr'),
        ('ustunlukler', 'Üstünlüklər'),
        ('terefdashlar', 'Tərəfdaşlar'),
        ('karyera', 'Karyera'),
        ('xeberler', 'Xəbərlər'),
        ('elaqe', 'Əlaqə'),
        ('gizlilik', 'Gizlilik'),
        ('shertler', 'Şərtlər'),
        ('xeber-1', 'Xəbər 1'),
        ('xeber-2', 'Xəbər 2'),
        ('xeber-3', 'Xəbər 3'),
    ]

    page = models.CharField(
        max_length=32,
        unique=True,
        choices=PAGE_CHOICES,
        verbose_name='Səhifə',
    )
    tag = models.CharField(max_length=100, blank=True, verbose_name='Tag')
    title = models.CharField(max_length=200, verbose_name='Başlıq (H1)')
    description = models.TextField(blank=True, verbose_name='Açıqlama')
    background = models.ImageField(
        upload_to='heroes/',
        blank=True,
        null=True,
        verbose_name='Fon şəkli',
    )

    meta_title = models.CharField(max_length=200, blank=True, verbose_name='Meta Title')
    meta_description = models.TextField(blank=True, verbose_name='Meta Description')
    meta_keywords = models.TextField(blank=True, verbose_name='Meta Keywords')

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Səhifə Hero'
        verbose_name_plural = 'Səhifə Hero-lar'
        ordering = ['page']

    def __str__(self):
        return f'{self.get_page_display()} — {self.title}'


class Service(models.Model):
    slug = models.SlugField(max_length=64, unique=True, verbose_name='Slug')
    icon = models.CharField(
        max_length=100,
        verbose_name='İkon (FA class)',
        help_text='Məs: fas fa-drafting-compass',
    )
    title = models.CharField(max_length=200, verbose_name='Başlıq')
    short_description = models.TextField(
        verbose_name='Qısa açıqlama (ana səhifə)',
    )
    description = models.TextField(
        verbose_name='Ətraflı açıqlama (xidmətlər səhifəsi)',
    )
    image = models.ImageField(
        upload_to='services/',
        blank=True,
        null=True,
        verbose_name='Şəkil',
    )
    video = models.FileField(
        upload_to='services/videos/',
        blank=True,
        null=True,
        verbose_name='Video (mp4)',
        help_text='MP4 video faylı yüklə',
    )
    category_name = models.CharField(
        max_length=100,
        blank=True,
        verbose_name='Kateqoriya adı',
        help_text='Məs: Xidmətə daxildir, Üslublar',
    )
    category_items = models.TextField(
        blank=True,
        verbose_name='Kateqoriya elementləri',
        help_text='Kateqoriya altındakı mətn',
    )
    order = models.PositiveIntegerField(default=0, verbose_name='Sıralama')

    class Meta:
        verbose_name = 'Xidmət'
        verbose_name_plural = 'Xidmətlər'
        ordering = ['order']

    def __str__(self):
        return self.title


class Vacancy(models.Model):
    TYPE_CHOICES = [
        ('job', 'Vakansiya'),
        ('intern', 'Təcrübə proqramı'),
    ]

    title = models.CharField(max_length=200, verbose_name='Başlıq')
    vacancy_type = models.CharField(
        max_length=10, choices=TYPE_CHOICES, default='job',
        verbose_name='Növ',
    )
    location = models.CharField(max_length=200, blank=True, verbose_name='Məkan')
    work_type = models.CharField(
        max_length=100, blank=True, verbose_name='İş rejimi',
        help_text='Məs: Tam ştat, Layihə əsaslı',
    )
    description = models.TextField(verbose_name='Açıqlama')
    whatsapp_text = models.CharField(
        max_length=300, blank=True, verbose_name='WhatsApp mesaj mətni',
        help_text='URL encode olunmamış mətn',
    )
    is_active = models.BooleanField(default=True, verbose_name='Aktiv')
    order = models.PositiveIntegerField(default=0, verbose_name='Sıralama')

    class Meta:
        verbose_name = 'Vakansiya'
        verbose_name_plural = 'Vakansiyalar'
        ordering = ['order']

    def __str__(self):
        return self.title


class News(models.Model):
    slug = models.SlugField(max_length=200, unique=True, verbose_name='Slug')
    title = models.CharField(max_length=300, verbose_name='Başlıq')
    tag = models.CharField(max_length=100, blank=True, verbose_name='Tag / Kateqoriya')
    date_label = models.CharField(max_length=100, blank=True, verbose_name='Tarix etiketi', help_text='Məs: Aprel 2026, 2025')
    short_description = models.CharField(max_length=500, blank=True, verbose_name='Qısa açıqlama')
    content = models.TextField(blank=True, verbose_name='Tam məzmun (HTML)')
    image = models.ImageField(upload_to='news/', blank=True, null=True, verbose_name='Şəkil')
    video_url = models.URLField(blank=True, verbose_name='Video URL (embed)')
    is_published = models.BooleanField(default=True, verbose_name='Dərc olunub')
    order = models.PositiveIntegerField(default=0, verbose_name='Sıralama')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Xəbər'
        verbose_name_plural = 'Xəbərlər'
        ordering = ['order']

    def __str__(self):
        return self.title


class KnowledgeBase(models.Model):
    slug = models.SlugField(max_length=200, unique=True, blank=True, verbose_name='Slug')
    tag = models.CharField(max_length=100, verbose_name='Tag')
    title = models.CharField(max_length=300, verbose_name='Başlıq')
    description = models.CharField(max_length=500, verbose_name='Qısa açıqlama')
    content = models.TextField(blank=True, verbose_name='Tam məzmun (HTML)')
    meta_title = models.CharField(max_length=200, blank=True, verbose_name='Meta Title')
    meta_description = models.TextField(blank=True, verbose_name='Meta Description')
    order = models.PositiveIntegerField(default=0, verbose_name='Sıralama')
    is_active = models.BooleanField(default=True, verbose_name='Aktiv')

    class Meta:
        verbose_name = 'Bilik bazası məqaləsi'
        verbose_name_plural = 'Bilik bazası'
        ordering = ['order']

    def __str__(self):
        return self.title


class AboutContent(models.Model):
    # Index / summary
    tag = models.CharField(max_length=100, blank=True, verbose_name='Tag (ana səhifə)')
    title = models.CharField(max_length=200, blank=True, verbose_name='Başlıq (ana səhifə)')
    summary_p1 = models.TextField(verbose_name='Ana səhifə — abzas 1')
    summary_p2 = models.TextField(verbose_name='Ana səhifə — abzas 2')
    badge1_number = models.CharField(max_length=20, blank=True, verbose_name='Badge 1 rəqəm')
    badge1_label = models.CharField(max_length=50, blank=True, verbose_name='Badge 1 etiket')
    badge2_number = models.CharField(max_length=20, blank=True, verbose_name='Badge 2 rəqəm')
    badge2_label = models.CharField(max_length=50, blank=True, verbose_name='Badge 2 etiket')
    badge3_number = models.CharField(max_length=20, blank=True, verbose_name='Badge 3 rəqəm')
    badge3_label = models.CharField(max_length=50, blank=True, verbose_name='Badge 3 etiket')
    image = models.ImageField(upload_to='about/', blank=True, null=True, verbose_name='Şəkil')

    # Haqqımızda page — profile
    profile_tag = models.CharField(max_length=100, blank=True, verbose_name='Profil tag')
    profile_title = models.CharField(max_length=200, blank=True, verbose_name='Profil başlıq')
    profile_text = models.TextField(verbose_name='Profil mətni (HTML / paraqraflar)')

    # Dəyərlər
    values_tag = models.CharField(max_length=100, blank=True, verbose_name='Dəyərlər tag')
    values_title = models.CharField(max_length=200, blank=True, verbose_name='Dəyərlər başlıq')
    values_text = models.TextField(verbose_name='Dəyərlər mətni')

    # Baxış / Missiya
    vm_tag = models.CharField(max_length=100, blank=True, verbose_name='Baxış/Missiya tag')
    vm_title = models.CharField(max_length=200, blank=True, verbose_name='Baxış/Missiya başlıq')
    vision_title = models.CharField(max_length=100, blank=True, verbose_name='Baxış başlıq')
    vision_text = models.TextField(verbose_name='Baxış mətni')
    mission_title = models.CharField(max_length=100, blank=True, verbose_name='Missiya başlıq')
    mission_text = models.TextField(verbose_name='Missiya mətni')

    # Mega menu
    mega_description = models.CharField(
        max_length=200, blank=True,
        verbose_name='Mega menu açıqlaması',
    )

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Haqqımızda məzmunu'
        verbose_name_plural = 'Haqqımızda məzmunu'

    def __str__(self):
        return 'Haqqımızda məzmunu'

    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)

    @classmethod
    def load(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj


class GalleryItem(models.Model):
    TYPE_CHOICES = [
        ('img', 'Şəkil'),
        ('video', 'Video'),
    ]

    title = models.CharField(max_length=200, blank=True, verbose_name='Başlıq')
    item_type = models.CharField(
        max_length=10, choices=TYPE_CHOICES, default='img',
        verbose_name='Növ',
    )
    image = models.ImageField(
        upload_to='gallery/',
        blank=True,
        null=True,
        verbose_name='Şəkil',
        help_text='Şəkil növü üçün yüklə',
    )
    video_url = models.URLField(
        blank=True,
        verbose_name='Video URL (embed)',
        help_text='YouTube embed link, məs: https://www.youtube.com/embed/VIDEO_ID',
    )
    order = models.PositiveIntegerField(default=0, verbose_name='Sıralama')

    class Meta:
        verbose_name = 'Qalereya elementi'
        verbose_name_plural = 'Qalereya'
        ordering = ['order']

    def __str__(self):
        return self.title or f'{self.get_item_type_display()} #{self.pk}'


class ContactInfo(models.Model):
    phone1 = models.CharField(max_length=30, blank=True, verbose_name='Telefon 1')
    phone2 = models.CharField(max_length=30, blank=True, verbose_name='Telefon 2')
    address = models.CharField(max_length=300, blank=True, verbose_name='Ünvan')
    work_hours = models.CharField(max_length=200, blank=True, verbose_name='İş saatları')
    whatsapp_number = models.CharField(max_length=30, blank=True, verbose_name='WhatsApp nömrəsi', help_text='Məs: 994559758900')
    instagram_url = models.URLField(blank=True, verbose_name='Instagram URL')
    tiktok_url = models.URLField(blank=True, verbose_name='TikTok URL')
    facebook_url = models.URLField(blank=True, verbose_name='Facebook URL')
    map_embed_url = models.TextField(blank=True, verbose_name='Google Maps embed URL')
    map_link = models.URLField(blank=True, verbose_name='Google Maps link')
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Əlaqə məlumatları'
        verbose_name_plural = 'Əlaqə məlumatları'

    def __str__(self):
        return 'Əlaqə məlumatları'

    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)

    @classmethod
    def load(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj


class Project(models.Model):
    STATUS_CHOICES = [
        ('done', 'Tamamlanmış'),
        ('on', 'Cari'),
    ]
    CATEGORY_CHOICES = [
        ('gov', 'Dövlət'),
        ('com', 'Kommersiya'),
        ('res', 'Yaşayış'),
        ('pub', 'İctimai'),
    ]

    slug = models.SlugField(max_length=128, unique=True, verbose_name='Slug')
    title = models.CharField(max_length=200, verbose_name='Başlıq')
    description = models.CharField(
        max_length=300, blank=True, verbose_name='Qısa açıqlama',
    )
    status = models.CharField(
        max_length=10, choices=STATUS_CHOICES, default='done',
        verbose_name='Status',
    )
    category = models.CharField(
        max_length=10, choices=CATEGORY_CHOICES, default='com',
        verbose_name='Kateqoriya',
    )
    image = models.ImageField(
        upload_to='projects/', blank=True, null=True,
        verbose_name='Şəkil',
    )
    location = models.CharField(
        max_length=200, blank=True, verbose_name='Məkan',
    )
    area = models.CharField(
        max_length=100, blank=True, verbose_name='Sahə / ölçü',
        help_text='Məs: 240 kv.m · 5 otaq',
    )
    is_featured = models.BooleanField(
        default=False, verbose_name='Seçilmiş layihə (mega menu)',
    )
    featured_description = models.TextField(
        blank=True, verbose_name='Seçilmiş layihə açıqlaması',
        help_text='Mega menuda göstəriləcək açıqlama',
    )
    order = models.PositiveIntegerField(default=0, verbose_name='Sıralama')

    class Meta:
        verbose_name = 'Layihə'
        verbose_name_plural = 'Layihələr'
        ordering = ['order']

    def __str__(self):
        return self.title


class ProjectImage(models.Model):
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name='images',
        verbose_name='Layihə',
    )
    image = models.ImageField(
        upload_to='projects/gallery/',
        verbose_name='Şəkil',
    )
    caption = models.CharField(
        max_length=200, blank=True, verbose_name='Altyazı',
    )
    order = models.PositiveIntegerField(default=0, verbose_name='Sıralama')

    class Meta:
        verbose_name = 'Layihə şəkli'
        verbose_name_plural = 'Layihə şəkilləri (qalereya)'
        ordering = ['order', 'id']

    def __str__(self):
        return f'{self.project.title} — #{self.pk}'


class ServiceImage(models.Model):
    service = models.ForeignKey(
        Service,
        on_delete=models.CASCADE,
        related_name='images',
        verbose_name='Xidmət',
    )
    image = models.ImageField(
        upload_to='services/gallery/',
        verbose_name='Şəkil',
    )
    caption = models.CharField(
        max_length=200, blank=True, verbose_name='Altyazı',
    )
    order = models.PositiveIntegerField(default=0, verbose_name='Sıralama')

    class Meta:
        verbose_name = 'Xidmət şəkli'
        verbose_name_plural = 'Xidmət şəkilləri (qalereya)'
        ordering = ['order', 'id']

    def __str__(self):
        return f'{self.service.title} — #{self.pk}'


class Advantage(models.Model):
    icon = models.CharField(
        max_length=100,
        verbose_name='İkon (FA class)',
        help_text='Məs: fas fa-drafting-compass',
    )
    title = models.CharField(max_length=200, verbose_name='Başlıq')
    description = models.TextField(verbose_name='Açıqlama')
    order = models.PositiveIntegerField(default=0, verbose_name='Sıralama')

    class Meta:
        verbose_name = 'Üstünlük'
        verbose_name_plural = 'Üstünlüklər'
        ordering = ['order']

    def __str__(self):
        return self.title


class ContactSubmission(models.Model):
    name = models.CharField(max_length=200, verbose_name='Ad')
    phone = models.CharField(max_length=30, verbose_name='Telefon')
    project_type = models.CharField(max_length=100, blank=True, verbose_name='Növ')
    message = models.TextField(blank=True, verbose_name='Mesaj')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Əlaqə müraciəti'
        verbose_name_plural = 'Əlaqə müraciətləri'
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.name} — {self.phone} ({self.created_at:%d.%m.%Y %H:%M})'


class CareerApplication(models.Model):
    name = models.CharField(max_length=200, verbose_name='Ad')
    phone = models.CharField(max_length=30, verbose_name='Telefon')
    area = models.CharField(max_length=100, blank=True, verbose_name='Sahə')
    message = models.TextField(blank=True, verbose_name='Məlumat')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Karyera müraciəti'
        verbose_name_plural = 'Karyera müraciətləri'
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.name} — {self.phone} ({self.created_at:%d.%m.%Y %H:%M})'
