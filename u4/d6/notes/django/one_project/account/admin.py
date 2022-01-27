from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Account


class AccountAdmin(UserAdmin):
    list_display = ("email", "name", "surname", "date_joined", "last_login", "is_admin", "is_staff")
    search_field = ("email", "name", "surname")
    readonly_fields = ("id", "date_joined", "last_login")

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()
    ordering = ("email",)


admin.site.register(Account, AccountAdmin)

# Register your models here.
