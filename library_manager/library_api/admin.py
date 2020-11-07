from django.contrib import admin
import os

# Register your models here.
admin.site.site_url = os.environ.get("ACCEPT_URL", default="/")
