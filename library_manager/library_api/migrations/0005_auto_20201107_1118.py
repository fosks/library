# Generated by Django 2.2.16 on 2020-11-07 11:18
import os

from django.contrib.auth.models import User
from django.db import migrations


def forwards_func(apps, schema_editor):
    # build the user you now have access to via Django magic
    User.objects.create_superuser(username=os.environ.get('ADMIN_USERNAME', default='admin'),
                                  email=os.environ.get('ADMIN_EMAIL', default='admin@admin'),
                                  password=os.environ.get('ADMIN_PASSWORD', default='~[_6#"D<z>&*.^Y/'),)


def reverse_func(apps, schema_editor):
    # destroy what forward_func builds
    pass


class Migration(migrations.Migration):

    dependencies = [
        ('library_api', '0004_auto_20201103_0018'),
    ]

    operations = [
        migrations.RunPython(forwards_func, reverse_func),
    ]