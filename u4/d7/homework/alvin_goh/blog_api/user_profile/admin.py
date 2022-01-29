from django.contrib import admin
from user_profile import models


admin.site.register(models.UserProfile)
# from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin
# from .models import UserProfile


# class AccountAdmin(UserAdmin):
#     list_display = ("email", "name", "date_joined", "last_login", "is_admin", "is_staff")
#     search_field = ("email", "name")
#     readonly_fields = ("id", "date_joined", "last_login")

#     filter_horizontal = ()
#     list_filter = ()
#     fieldsets = (
#         (None, {"fields": ("email", "name", "date_joined", "last_login")}),
#         ("Permissions", {"fields": ("is_admin", "is_staff")}),
#     )

#     add_fieldsets = (
#         None,
#         {
#             "classes": ("wide",),
#             "fields": ("email", "name", "password1", "password2"),
#         },
#     )
#     ordering = ("email",)


# admin.site.register(UserProfile, AccountAdmin)
