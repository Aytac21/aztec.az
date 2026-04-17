import json

from django.http import Http404, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import AboutContent, Advantage, ContactInfo, ContactSubmission, GalleryItem, KnowledgeBase, News, PageHero, Project, Service, Vacancy


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


def services_list(request):
    qs = Service.objects.all()
    items = []
    for s in qs:
        img = ''
        if s.image:
            try:
                img = request.build_absolute_uri(s.image.url)
            except Exception:
                img = s.image.url
        items.append({
            'slug': s.slug,
            'icon': s.icon,
            'title': s.title,
            'short_description': s.short_description,
            'description': s.description,
            'image': img,
            'category_name': s.category_name,
            'category_items': s.category_items,
            'order': s.order,
        })
    return _cors(JsonResponse({'services': items}))


def service_detail(request, slug):
    try:
        s = Service.objects.get(slug=slug)
    except Service.DoesNotExist:
        raise Http404('Service not found')

    img = ''
    if s.image:
        try:
            img = request.build_absolute_uri(s.image.url)
        except Exception:
            img = s.image.url

    data = {
        'slug': s.slug,
        'icon': s.icon,
        'title': s.title,
        'short_description': s.short_description,
        'description': s.description,
        'image': img,
        'category_name': s.category_name,
        'category_items': s.category_items,
    }
    return _cors(JsonResponse(data))


def news_list(request):
    qs = News.objects.filter(is_published=True)
    items = []
    for n in qs:
        img = ''
        if n.image:
            try:
                img = request.build_absolute_uri(n.image.url)
            except Exception:
                img = n.image.url
        items.append({
            'slug': n.slug,
            'title': n.title,
            'tag': n.tag,
            'date_label': n.date_label,
            'short_description': n.short_description,
            'image': img,
        })
    return _cors(JsonResponse({'news': items}))


def news_detail(request, slug):
    try:
        n = News.objects.get(slug=slug, is_published=True)
    except News.DoesNotExist:
        raise Http404('News not found')

    img = ''
    if n.image:
        try:
            img = request.build_absolute_uri(n.image.url)
        except Exception:
            img = n.image.url

    data = {
        'slug': n.slug,
        'title': n.title,
        'tag': n.tag,
        'date_label': n.date_label,
        'short_description': n.short_description,
        'content': n.content,
        'image': img,
        'video_url': n.video_url,
    }
    return _cors(JsonResponse(data))


def knowledge_base_list(request):
    qs = KnowledgeBase.objects.filter(is_active=True)
    items = []
    for kb in qs:
        items.append({
            'slug': kb.slug,
            'tag': kb.tag,
            'title': kb.title,
            'description': kb.description,
        })
    return _cors(JsonResponse({'knowledge_base': items}))


def knowledge_base_detail(request, slug):
    try:
        kb = KnowledgeBase.objects.get(slug=slug, is_active=True)
    except KnowledgeBase.DoesNotExist:
        raise Http404('Article not found')
    data = {
        'slug': kb.slug,
        'tag': kb.tag,
        'title': kb.title,
        'description': kb.description,
        'content': kb.content,
        'meta_title': kb.meta_title,
        'meta_description': kb.meta_description,
    }
    return _cors(JsonResponse(data))


def advantages_list(request):
    qs = Advantage.objects.all()
    items = []
    for a in qs:
        items.append({
            'icon': a.icon,
            'title': a.title,
            'description': a.description,
            'order': a.order,
        })
    return _cors(JsonResponse({'advantages': items}))


def vacancies_list(request):
    qs = Vacancy.objects.filter(is_active=True)
    items = []
    for v in qs:
        items.append({
            'title': v.title,
            'type': v.vacancy_type,
            'type_display': v.get_vacancy_type_display(),
            'location': v.location,
            'work_type': v.work_type,
            'description': v.description,
            'whatsapp_text': v.whatsapp_text,
        })
    return _cors(JsonResponse({'vacancies': items}))


def about_content(request):
    obj = AboutContent.load()
    img = ''
    if obj.image:
        try:
            img = request.build_absolute_uri(obj.image.url)
        except Exception:
            img = obj.image.url
    data = {
        'tag': obj.tag,
        'title': obj.title,
        'summary_p1': obj.summary_p1,
        'summary_p2': obj.summary_p2,
        'badge1_number': obj.badge1_number,
        'badge1_label': obj.badge1_label,
        'badge2_number': obj.badge2_number,
        'badge2_label': obj.badge2_label,
        'badge3_number': obj.badge3_number,
        'badge3_label': obj.badge3_label,
        'image': img,
        'profile_tag': obj.profile_tag,
        'profile_title': obj.profile_title,
        'profile_text': obj.profile_text,
        'values_tag': obj.values_tag,
        'values_title': obj.values_title,
        'values_text': obj.values_text,
        'vm_tag': obj.vm_tag,
        'vm_title': obj.vm_title,
        'vision_title': obj.vision_title,
        'vision_text': obj.vision_text,
        'mission_title': obj.mission_title,
        'mission_text': obj.mission_text,
        'mega_description': obj.mega_description,
    }
    return _cors(JsonResponse(data))


def gallery_list(request):
    qs = GalleryItem.objects.all()
    items = []
    for g in qs:
        img = ''
        if g.image:
            try:
                img = request.build_absolute_uri(g.image.url)
            except Exception:
                img = g.image.url
        items.append({
            'type': g.item_type,
            'title': g.title,
            'src': img if g.item_type == 'img' else g.video_url,
            'image': img,
            'order': g.order,
        })
    return _cors(JsonResponse({'gallery': items}))


def projects_list(request):
    qs = Project.objects.all()
    items = []
    for p in qs:
        img = ''
        if p.image:
            try:
                img = request.build_absolute_uri(p.image.url)
            except Exception:
                img = p.image.url
        items.append({
            'slug': p.slug,
            'title': p.title,
            'description': p.description,
            'status': p.status,
            'status_display': p.get_status_display(),
            'category': p.category,
            'category_display': p.get_category_display(),
            'image': img,
            'location': p.location,
            'area': p.area,
            'is_featured': p.is_featured,
            'order': p.order,
        })
    return _cors(JsonResponse({'projects': items}))


def featured_project(request):
    obj = Project.objects.filter(is_featured=True).first()
    if not obj:
        return _cors(JsonResponse({'featured': None}))
    img = ''
    if obj.image:
        try:
            img = request.build_absolute_uri(obj.image.url)
        except Exception:
            img = obj.image.url
    data = {
        'slug': obj.slug,
        'title': obj.title,
        'description': obj.featured_description or obj.description,
        'image': img,
        'status_display': obj.get_status_display(),
        'category_display': obj.get_category_display(),
    }
    return _cors(JsonResponse({'featured': data}))


def contact_info(request):
    obj = ContactInfo.load()
    data = {
        'phone1': obj.phone1,
        'phone2': obj.phone2,
        'address': obj.address,
        'work_hours': obj.work_hours,
        'whatsapp_number': obj.whatsapp_number,
        'instagram_url': obj.instagram_url,
        'tiktok_url': obj.tiktok_url,
        'facebook_url': obj.facebook_url,
        'map_embed_url': obj.map_embed_url,
        'map_link': obj.map_link,
    }
    return _cors(JsonResponse(data))


@csrf_exempt
def submit_contact(request):
    if request.method == 'OPTIONS':
        resp = JsonResponse({})
        resp['Access-Control-Allow-Origin'] = '*'
        resp['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
        resp['Access-Control-Allow-Headers'] = 'Content-Type'
        return resp
    if request.method != 'POST':
        return _cors(JsonResponse({'error': 'POST only'}, status=405))
    try:
        body = json.loads(request.body)
    except (json.JSONDecodeError, ValueError):
        return _cors(JsonResponse({'error': 'Invalid JSON'}, status=400))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    if not name or not phone:
        return _cors(JsonResponse({'error': 'name and phone required'}, status=400))
    ContactSubmission.objects.create(
        name=name,
        phone=phone,
        email=body.get('email', ''),
        project_type=body.get('project_type', ''),
        message=body.get('message', ''),
    )
    return _cors(JsonResponse({'ok': True}))


def project_detail(request, slug):
    try:
        p = Project.objects.get(slug=slug)
    except Project.DoesNotExist:
        raise Http404('Project not found')

    img = ''
    if p.image:
        try:
            img = request.build_absolute_uri(p.image.url)
        except Exception:
            img = p.image.url

    data = {
        'slug': p.slug,
        'title': p.title,
        'description': p.description,
        'status': p.status,
        'status_display': p.get_status_display(),
        'category': p.category,
        'category_display': p.get_category_display(),
        'image': img,
        'location': p.location,
        'area': p.area,
        'is_featured': p.is_featured,
    }
    return _cors(JsonResponse(data))
