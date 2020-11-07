# routes
from django.conf.urls import url
from library_api import views

urlpatterns = [
    url(r'^api/library_api$', views.book_list),
    url(r'^api/library_api/(?P<pk>[0-9]+)$', views.book_detail),
    url(r'^api/library_api/published$', views.book_list_published),
]