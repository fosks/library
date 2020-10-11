# from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from library_api.models import BookData
from library_api.serializers import BookDataSerializer
from rest_framework.decorators import api_view


# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def book_list(request):
    # GET list of books, POST a new book, DELETE all books

    if request.method == 'GET':
        books = BookData.objects.all()

        title = request.GET.get('title', None)
        if title is not None:
            books = books.filter(title__icontains=title)

        books_serializer = BookDataSerializer(books, many=True)
        return JsonResponse(books_serializer.data, safe=False)
        # 'safe=False' for objects serialization

    elif request.method == 'POST':
        book_data = JSONParser().parse(request)
        book_serializer = BookDataSerializer(data=book_data)
        if book_serializer.is_valid():
            book_serializer.save()
            return JsonResponse(book_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(book_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = BookData.objects.all().delete()
        return JsonResponse({'message': '{} Books were deleted successfully!'.format(count[0])},
                            status=status.HTTP_204_NO_CONTENT)

    return None


@api_view(['GET', 'PUT', 'DELETE'])
def book_detail(request, pk):
    # find book by pk (id)
    try:
        book = BookData.objects.get(pk=pk)
    except BookData.DoesNotExist:
        return JsonResponse({'message': 'The book does not exist'}, status=status.HTTP_404_NOT_FOUND)

    # GET / PUT / DELETE book
    if request.method == 'GET':
        book_serializer = BookDataSerializer(book)
        return JsonResponse(book_serializer.data)

    elif request.method == 'PUT':
        book_data = JSONParser().parse(request)
        book_serializer = BookDataSerializer(book, data=book_data)
        if book_serializer.is_valid():
            book_serializer.save()
            return JsonResponse(book_serializer.data)
        return JsonResponse(book_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        book.delete()
        return JsonResponse({'message': 'Book was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

    return None

@api_view(['GET'])
def book_list_published(request):

    books = BookData.objects.filter(published=True)

    # GET all published books
    if request.method == 'GET':
        books_serializer = BookDataSerializer(books, many=True)
        return JsonResponse(books_serializer.data, safe=False)

    return None