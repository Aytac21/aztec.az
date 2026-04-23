# Server-side migration (TeamMember created separately on server).
# Locally TeamMember is created in 0025_partner_teammember_..., so no operations here.

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0024_projectimage_serviceimage'),
    ]

    operations = [
    ]
