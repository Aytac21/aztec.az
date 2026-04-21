from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0023_remove_service_video_url_service_video'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='projects/gallery/', verbose_name='Şəkil')),
                ('caption', models.CharField(blank=True, max_length=200, verbose_name='Altyazı')),
                ('order', models.PositiveIntegerField(default=0, verbose_name='Sıralama')),
                ('project', models.ForeignKey(
                    on_delete=django.db.models.deletion.CASCADE,
                    related_name='images',
                    to='core.project',
                    verbose_name='Layihə',
                )),
            ],
            options={
                'verbose_name': 'Layihə şəkli',
                'verbose_name_plural': 'Layihə şəkilləri (qalereya)',
                'ordering': ['order', 'id'],
            },
        ),
        migrations.CreateModel(
            name='ServiceImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='services/gallery/', verbose_name='Şəkil')),
                ('caption', models.CharField(blank=True, max_length=200, verbose_name='Altyazı')),
                ('order', models.PositiveIntegerField(default=0, verbose_name='Sıralama')),
                ('service', models.ForeignKey(
                    on_delete=django.db.models.deletion.CASCADE,
                    related_name='images',
                    to='core.service',
                    verbose_name='Xidmət',
                )),
            ],
            options={
                'verbose_name': 'Xidmət şəkli',
                'verbose_name_plural': 'Xidmət şəkilləri (qalereya)',
                'ordering': ['order', 'id'],
            },
        ),
    ]
