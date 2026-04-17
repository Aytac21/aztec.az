from django.http import Http404, JsonResponse
from django.shortcuts import get_object_or_404

from .models import PageHero


def _cors(response):
    response['Access-Control-Allow-Origin'] = '*'
    response['Access-Control-Allow-Methods'] = 'GET, OPTIONS'
    return response


def health(request):
    return _cors(JsonResponse({'status': 'ok'}))


def page_hero(request, slug):
    try:
        obj = PageHero.objects.get(page=slug)
    except PageHero.DoesNotExist:
        raise Http404('PageHero not found')

    bg = ''
    if obj.background:
        try:
            bg = request.build_absolute_uri(obj.background.url)
        except Exception:
            bg = obj.background.url

    data = {
        'page': obj.page,
        'tag': obj.tag,
        'title': obj.title,
        'description': obj.description,
        'background': bg,
        'meta_title': obj.meta_title,
        'meta_description': obj.meta_description,
        'meta_keywords': obj.meta_keywords,
    }
    return _cors(JsonResponse(data))
