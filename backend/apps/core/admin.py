from django.contrib import admin

from .models import AboutContent, GalleryItem, KnowledgeBase, News, PageHero, Project, Service, Vacancy


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


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'icon', 'order')
    list_editable = ('order',)
    search_fields = ('title', 'description')
    prepopulated_fields = {'slug': ('title',)}
    fieldsets = (
        ('Əsas', {'fields': ('slug', 'icon', 'title', 'order')}),
        ('Məzmun', {'fields': ('short_description', 'description')}),
        ('Vizual', {'fields': ('image',)}),
        ('Kateqoriya', {'fields': ('category_name', 'category_items')}),
    )


@admin.register(KnowledgeBase)
class KnowledgeBaseAdmin(admin.ModelAdmin):
    list_display = ('title', 'tag', 'is_active', 'order')
    list_editable = ('order', 'is_active')
    list_filter = ('is_active', 'tag')
    search_fields = ('title', 'description')


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'tag', 'date_label', 'is_published', 'order')
    list_editable = ('order', 'is_published')
    list_filter = ('is_published', 'tag')
    search_fields = ('title', 'short_description', 'content')
    prepopulated_fields = {'slug': ('title',)}
    fieldsets = (
        ('Əsas', {'fields': ('slug', 'title', 'tag', 'date_label', 'order', 'is_published')}),
        ('Xülasə', {'fields': ('short_description', 'image')}),
        ('Tam məzmun', {'fields': ('content', 'video_url')}),
    )


@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('title', 'vacancy_type', 'location', 'work_type', 'is_active', 'order')
    list_editable = ('order', 'is_active')
    list_filter = ('vacancy_type', 'is_active')
    search_fields = ('title', 'description')
    fieldsets = (
        ('Əsas', {'fields': ('title', 'vacancy_type', 'order', 'is_active')}),
        ('Detallar', {'fields': ('location', 'work_type', 'description')}),
        ('WhatsApp', {'fields': ('whatsapp_text',)}),
    )


@admin.register(AboutContent)
class AboutContentAdmin(admin.ModelAdmin):
    fieldsets = (
        ('Ana səhifə xülasə', {'fields': ('tag', 'title', 'summary_p1', 'summary_p2', 'image')}),
        ('Badge-lər', {'fields': ('badge1_number', 'badge1_label', 'badge2_number', 'badge2_label', 'badge3_number', 'badge3_label')}),
        ('Profil (haqqımızda səhifəsi)', {'fields': ('profile_tag', 'profile_title', 'profile_text')}),
        ('Dəyərlər', {'fields': ('values_tag', 'values_title', 'values_text')}),
        ('Baxış / Missiya', {'fields': ('vm_tag', 'vm_title', 'vision_title', 'vision_text', 'mission_title', 'mission_text')}),
        ('Mega menu', {'fields': ('mega_description',)}),
    )

    def has_add_permission(self, request):
        return not AboutContent.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'item_type', 'order')
    list_editable = ('order',)
    list_filter = ('item_type',)
    fieldsets = (
        ('Əsas', {'fields': ('title', 'item_type', 'order')}),
        ('Media', {'fields': ('image', 'video_url')}),
    )


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'category', 'location', 'is_featured', 'order')
    list_editable = ('order', 'is_featured')
    list_filter = ('status', 'category', 'is_featured')
    search_fields = ('title', 'description', 'location')
    prepopulated_fields = {'slug': ('title',)}
    fieldsets = (
        ('Əsas', {'fields': ('slug', 'title', 'description', 'order')}),
        ('Filterasiya', {'fields': ('status', 'category')}),
        ('Vizual', {'fields': ('image',)}),
        ('Detallar', {'fields': ('location', 'area')}),
        ('Seçilmiş layihə', {'fields': ('is_featured', 'featured_description')}),
    )
