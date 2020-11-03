from rest_framework import serializers
from library_api.models import BookData


class BookDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookData
        fields = ('id',
                  'title',
                  'author',
                  'publisher',
                  'summary',
                  'release_date',
                  'category')