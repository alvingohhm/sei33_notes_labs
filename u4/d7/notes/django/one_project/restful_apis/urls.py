from django.urls import path
from . import views

urlpatterns = [
    path("task-list/", views.TaskList.as_view()),
    path("task-detail/<str:pk>/", views.TaskDetail.as_view()),
    path("task-create/", views.TaskCreate.as_view()),
    path("task-update/<str:pk>/", views.TaskUpdate.as_view()),
    path("task-delete/<str:pk>/", views.TaskDelete.as_view()),
    path("jwt-details/", views.JwtDetails.as_view(), name="jwt-details"),
]
