"""Activate request language from ?lang=xx query parameter for /api/ requests."""
from django.conf import settings
from django.utils import translation


class ApiLanguageMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        self.supported = {code for code, _ in settings.LANGUAGES}

    def __call__(self, request):
        activated = False
        if request.path.startswith('/api/'):
            lang = request.GET.get('lang', '')
            if lang in self.supported:
                translation.activate(lang)
                request.LANGUAGE_CODE = lang
                activated = True
        response = self.get_response(request)
        if activated:
            translation.deactivate()
        return response
