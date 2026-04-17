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
