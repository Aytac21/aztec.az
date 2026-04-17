from django.contrib import admin

from .models import PageHero


@admin.register(PageHero)
class PageHeroAdmin(admin.ModelAdmin):
    list_display = ('page', 'title', 'tag', 'updated_at')
    list_filter = ('page',)
    search_fields = ('title', 'tag', 'description')
    fieldsets = (
        ('Səhifə', {'fields': ('page',)}),
        ('Məzmun', {'fields': ('tag', 'title', 'description')}),
        ('Vizual', {'fields': ('background',)}),
        ('SEO / Meta', {'fields': ('meta_title', 'meta_description', 'meta_keywords')}),
    )
