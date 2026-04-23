# Merge migration: reconciles local and server migration histories.

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0025_teammember_alter_projectimage_id_and_more'),
        ('core', '0026_partner'),
        ('core', '0027_add_partner_logo'),
    ]

    operations = [
    ]
