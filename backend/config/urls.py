"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from pathlib import Path

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.static import serve as static_serve

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rosetta/', include('rosetta.urls')),
    path('api/', include('apps.core.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    # Serve the static frontend (index.html, haqqimizda.html, ...) from the
    # repo root so http://127.0.0.1:8000/ opens the website during development.
    FRONTEND_ROOT = Path(settings.BASE_DIR).parent

    def _frontend_index(request):
        return static_serve(request, 'index.html', document_root=str(FRONTEND_ROOT))

    urlpatterns += [
        path('', _frontend_index),
        re_path(
            r'^(?P<path>[^/]+\.(?:html|css|js|png|jpg|jpeg|webp|svg|ico|woff2?|ttf))$',
            static_serve,
            {'document_root': str(FRONTEND_ROOT)},
        ),
        re_path(
            r'^(?P<path>(?:assets|backend/media|media)/.*)$',
            static_serve,
            {'document_root': str(FRONTEND_ROOT)},
        ),
        # Pretty URLs: /haqqimizda → haqqimizda.html
        re_path(
            r'^(?P<page>[a-z0-9\-]+)/?$',
            lambda request, page: static_serve(
                request, f'{page}.html', document_root=str(FRONTEND_ROOT)
            ),
        ),
    ]
