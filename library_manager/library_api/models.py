from datetime import date
from django.db import models

# Create your models here.
class BookData(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    author = models.CharField(max_length=70, blank=True, default='')
    publisher = models.CharField(max_length=70, blank=True, default='')
    summary = models.CharField(max_length=200, blank=True, default='')
    release_date = models.DateField(blank=True, default=date.today)
    category = models.CharField(max_length=70, blank=True, default='')