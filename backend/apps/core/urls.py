from django.urls import path

from . import views

urlpatterns = [
    path('health/', views.health, name='health'),
    path('hero/<slug:slug>/', views.page_hero, name='page-hero'),
]
