from django.core.management.base import BaseCommand

from apps.core.models import GalleryItem


class Command(BaseCommand):
    help = 'Seed gallery items'

    def handle(self, *args, **options):
        items = [
            {'title': 'Foto 1', 'item_type': 'img', 'image': '', 'video_url': '', 'order': 1},
            {'title': 'Foto 2', 'item_type': 'img', 'image': '', 'video_url': '', 'order': 2},
            {'title': 'Video 1', 'item_type': 'video', 'image': '', 'video_url': 'https://www.youtube.com/embed/VIDEO_ID', 'order': 3},
            {'title': 'Foto 3', 'item_type': 'img', 'image': '', 'video_url': '', 'order': 4},
            {'title': 'Foto 4', 'item_type': 'img', 'image': '', 'video_url': '', 'order': 5},
            {'title': 'Video 2', 'item_type': 'video', 'image': '', 'video_url': 'https://www.youtube.com/embed/VIDEO_ID', 'order': 6},
            {'title': 'Foto 5', 'item_type': 'img', 'image': '', 'video_url': '', 'order': 7},
            {'title': 'Foto 6', 'item_type': 'img', 'image': '', 'video_url': '', 'order': 8},
        ]

        for item in items:
            GalleryItem.objects.update_or_create(
                title=item['title'],
                defaults=item,
            )
            self.stdout.write(self.style.SUCCESS(f'  ✓ {item["title"]}'))

        self.stdout.write(self.style.SUCCESS(f'\n{len(items)} gallery item seeded.'))
