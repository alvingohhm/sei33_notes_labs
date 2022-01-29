from django.urls import path
from . import views

urlpatterns = [
    path("blog/index", views.BlogShowAll.as_view()),
    path("blog/<str:pk>", views.BlogDetail.as_view()),
    path("blog", views.BlogCreate.as_view()),
    path("blog/update/<str:pk>", views.BlogUpdate.as_view()),
    path("blog/delete/<str:pk>", views.BlogDelete.as_view()),
]
