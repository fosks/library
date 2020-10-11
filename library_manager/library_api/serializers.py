from rest_framework import serializers
from library_api.models import BookData


class BookDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookData
        fields = ('id',
                  'title',
                  'description',
                  'published')