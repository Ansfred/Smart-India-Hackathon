from django.contrib import admin

# Register your models here.
from dataclasses import field
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Register your models here.
from .models import NewUser


class UserAdminConfig(UserAdmin):
    model = NewUser
    search_fields = ("first_name", "last_name", "email")
    list_filter = (
        "first_name",
        "last_name",
        "email",
        "is_verified",
        "is_active",
        "is_staff",
    )
    ordering = ("-pk",)
    list_display = (
        "first_name",
        "last_name",
        "email",
        "is_verified",
        "is_active",
        "is_staff",
    )
    fieldsets = (
        (
            None,
            {
                "fields": ("first_name", "last_name", "email"),
            },
        ),
        (
            "Permissions",
            {
                "fields": ("is_verified", "is_staff", "is_active"),
            },
        ),
    )

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "first_name",
                    "last_name",
                    "email",
                    "password1",
                    "password2",
                    "is_verified",
                    "is_active",
                    "is_staff",
                ),
            },
        ),
    )


admin.site.register(NewUser, UserAdminConfig)
