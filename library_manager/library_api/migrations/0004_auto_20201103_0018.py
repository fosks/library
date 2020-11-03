# Generated by Django 2.2.16 on 2020-11-03 03:18

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library_api', '0003_auto_20201102_2216'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookdata',
            name='author',
            field=models.CharField(blank=True, default='', max_length=70),
        ),
        migrations.AlterField(
            model_name='bookdata',
            name='category',
            field=models.CharField(blank=True, default='', max_length=70),
        ),
        migrations.AlterField(
            model_name='bookdata',
            name='publisher',
            field=models.CharField(blank=True, default='', max_length=70),
        ),
        migrations.AlterField(
            model_name='bookdata',
            name='release_date',
            field=models.DateField(blank=True, default=datetime.date.today),
        ),
        migrations.AlterField(
            model_name='bookdata',
            name='summary',
            field=models.CharField(blank=True, default='', max_length=200),
        ),
    ]
