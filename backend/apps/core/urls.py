from django.urls import path

from . import views

urlpatterns = [
    path('health/', views.health, name='health'),
    path('hero/<slug:slug>/', views.page_hero, name='page-hero'),
    path('about/', views.about_content, name='about-content'),
    path('news/', views.news_list, name='news-list'),
    path('news/<slug:slug>/', views.news_detail, name='news-detail'),
    path('knowledge-base/', views.knowledge_base_list, name='knowledge-base-list'),
    path('vacancies/', views.vacancies_list, name='vacancies-list'),
    path('gallery/', views.gallery_list, name='gallery-list'),
    path('services/', views.services_list, name='services-list'),
    path('services/<slug:slug>/', views.service_detail, name='service-detail'),
    path('projects/', views.projects_list, name='projects-list'),
    path('projects/featured/', views.featured_project, name='featured-project'),
    path('projects/<slug:slug>/', views.project_detail, name='project-detail'),
]
