from django.urls import path

# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    # path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/", views.CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
