from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin

from .models import AboutContent, Advantage, CareerApplication, ContactInfo, ContactSubmission, GalleryItem, KnowledgeBase, News, PageHero, Partner, Project, ProjectImage, Service, ServiceImage, TeamMember, Vacancy

admin.site.index_title = 'İdarə bölməsi'


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 3
    fields = ('image', 'caption', 'order')


class ServiceImageInline(admin.TabularInline):
    model = ServiceImage
    extra = 3
    fields = ('image', 'caption', 'order')


@admin.register(PageHero)
class PageHeroAdmin(TabbedTranslationAdmin):
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
class ServiceAdmin(TabbedTranslationAdmin):
    list_display = ('title', 'slug', 'icon', 'order')
    list_editable = ('order',)
    search_fields = ('title', 'description')
    prepopulated_fields = {'slug': ('title',)}
    inlines = [ServiceImageInline]
    fieldsets = (
        ('Əsas', {'fields': ('slug', 'icon', 'title', 'order')}),
        ('Məzmun', {'fields': ('short_description', 'description')}),
        ('Vizual', {'fields': ('image', 'video')}),
        ('Kateqoriya', {'fields': ('category_name', 'category_items')}),
    )


@admin.register(KnowledgeBase)
class KnowledgeBaseAdmin(TabbedTranslationAdmin):
    list_display = ('title', 'slug', 'tag', 'is_active', 'order')
    list_editable = ('order', 'is_active')
    list_filter = ('is_active', 'tag')
    search_fields = ('title', 'description', 'content')
    prepopulated_fields = {'slug': ('title',)}
    fieldsets = (
        ('Əsas', {'fields': ('slug', 'tag', 'title', 'order', 'is_active')}),
        ('Məzmun', {'fields': ('description', 'image', 'content')}),
        ('SEO', {'fields': ('meta_title', 'meta_description')}),
    )


@admin.register(News)
class NewsAdmin(TabbedTranslationAdmin):
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
class VacancyAdmin(TabbedTranslationAdmin):
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
class AboutContentAdmin(TabbedTranslationAdmin):
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
class GalleryItemAdmin(TabbedTranslationAdmin):
    list_display = ('title', 'item_type', 'order')
    list_editable = ('order',)
    list_filter = ('item_type',)
    fieldsets = (
        ('Əsas', {'fields': ('title', 'item_type', 'order')}),
        ('Media', {'fields': ('image', 'video_url')}),
    )


@admin.register(ContactInfo)
class ContactInfoAdmin(TabbedTranslationAdmin):
    fieldsets = (
        ('Telefon', {'fields': ('phone1', 'phone2')}),
        ('Ünvan & İş saatları', {'fields': ('address', 'work_hours')}),
        ('WhatsApp', {'fields': ('whatsapp_number',)}),
        ('Sosial şəbəkələr', {'fields': ('instagram_url', 'tiktok_url', 'facebook_url')}),
        ('Xəritə', {'fields': ('map_embed_url', 'map_link')}),
    )

    def has_add_permission(self, request):
        return not ContactInfo.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'project_type', 'created_at')
    list_filter = ('project_type', 'created_at')
    search_fields = ('name', 'phone', 'message')
    readonly_fields = ('name', 'phone', 'project_type', 'message', 'created_at')

    def has_add_permission(self, request):
        return False


@admin.register(CareerApplication)
class CareerApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'area', 'created_at')
    list_filter = ('area', 'created_at')
    search_fields = ('name', 'phone', 'message')
    readonly_fields = ('name', 'phone', 'area', 'message', 'created_at')

    def has_add_permission(self, request):
        return False


@admin.register(Partner)
class PartnerAdmin(TabbedTranslationAdmin):
    list_display = ('name', 'category', 'is_active', 'order')
    list_editable = ('order', 'is_active')
    list_filter = ('category', 'is_active')
    search_fields = ('name', 'description')
    fieldsets = (
        ('Əsas', {'fields': ('category', 'name', 'logo', 'icon', 'order', 'is_active')}),
        ('Açıqlama', {'fields': ('description',)}),
    )


@admin.register(Advantage)
class AdvantageAdmin(TabbedTranslationAdmin):
    list_display = ('title', 'icon', 'order')
    list_editable = ('order',)
    search_fields = ('title', 'description')
    fieldsets = (
        ('Əsas', {'fields': ('icon', 'title', 'order')}),
        ('Məzmun', {'fields': ('description',)}),
    )


@admin.register(TeamMember)
class TeamMemberAdmin(TabbedTranslationAdmin):
    list_display = ('name', 'role', 'group', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    list_filter = ('group', 'is_active')
    search_fields = ('name', 'role')
    fieldsets = (
        ('Əsas', {'fields': ('group', 'name', 'role', 'order', 'is_active')}),
        ('Şəkil', {'fields': ('photo',)}),
    )


@admin.register(Project)
class ProjectAdmin(TabbedTranslationAdmin):
    list_display = ('title', 'status', 'category', 'location', 'is_featured', 'order')
    list_editable = ('order', 'is_featured')
    list_filter = ('status', 'category', 'is_featured')
    search_fields = ('title', 'description', 'location')
    prepopulated_fields = {'slug': ('title',)}
    inlines = [ProjectImageInline]
    fieldsets = (
        ('Əsas', {'fields': ('slug', 'title', 'description', 'order')}),
        ('Filterasiya', {'fields': ('status', 'category')}),
        ('Vizual', {'fields': ('image',)}),
        ('Detallar', {'fields': ('location', 'area')}),
        ('Seçilmiş layihə', {'fields': ('is_featured', 'featured_description')}),
    )
