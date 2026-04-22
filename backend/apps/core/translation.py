"""Register translatable model fields for django-modeltranslation."""
from modeltranslation.translator import TranslationOptions, register

from .models import (
    AboutContent,
    Advantage,
    GalleryItem,
    KnowledgeBase,
    News,
    PageHero,
    Partner,
    Project,
    Service,
    TeamMember,
    Vacancy,
    ContactInfo,
)


@register(PageHero)
class PageHeroTR(TranslationOptions):
    fields = ('tag', 'title', 'description', 'meta_title', 'meta_description', 'meta_keywords')


@register(Service)
class ServiceTR(TranslationOptions):
    fields = ('title', 'short_description', 'description', 'category_name', 'category_items')


@register(Vacancy)
class VacancyTR(TranslationOptions):
    fields = ('title', 'location', 'work_type', 'description', 'whatsapp_text')


@register(News)
class NewsTR(TranslationOptions):
    fields = ('title', 'tag', 'date_label', 'short_description', 'content')


@register(KnowledgeBase)
class KnowledgeBaseTR(TranslationOptions):
    fields = ('tag', 'title', 'description', 'content', 'meta_title', 'meta_description')


@register(AboutContent)
class AboutContentTR(TranslationOptions):
    fields = (
        'tag', 'title', 'summary_p1', 'summary_p2',
        'badge1_label', 'badge2_label', 'badge3_label',
        'profile_tag', 'profile_title', 'profile_text',
        'values_tag', 'values_title', 'values_text',
        'vm_tag', 'vm_title',
        'vision_title', 'vision_text',
        'mission_title', 'mission_text',
        'mega_description',
    )


@register(GalleryItem)
class GalleryItemTR(TranslationOptions):
    fields = ('title',)


@register(Project)
class ProjectTR(TranslationOptions):
    fields = ('title', 'description', 'location', 'area', 'featured_description')


@register(Advantage)
class AdvantageTR(TranslationOptions):
    fields = ('title', 'description')


@register(ContactInfo)
class ContactInfoTR(TranslationOptions):
    fields = ('address', 'work_hours')


@register(TeamMember)
class TeamMemberTR(TranslationOptions):
    fields = ('name', 'role')


@register(Partner)
class PartnerTR(TranslationOptions):
    fields = ('name', 'description')
