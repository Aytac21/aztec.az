# Server-side migration (Partner created separately on server).
# Locally Partner is created in 0025_partner_teammember_..., so no operations here.

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0025_partner_teammember_alter_projectimage_id_and_more'),
    ]

    operations = [
    ]
