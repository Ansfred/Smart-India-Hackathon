from django.contrib import admin
from .models import PatientData


class PatientDataAdminConfig(admin.ModelAdmin):
    model = PatientData
    search_fields = (
        "hospital_name",
        "problem_dignosed",
        "surgery_name",
        "cost",
        "receipt_file",
        "patient",
    )
    list_filter = (
        "hospital_name",
        "problem_dignosed",
        "surgery_name",
        "cost",
    )
    ordering = ("-pk",)
    list_display = (
        "hospital_name",
        "problem_dignosed",
        "surgery_name",
        "cost",
        "receipt_file",
        "patient",
    )
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "hospital_name",
                    "problem_dignosed",
                    "surgery_name",
                    "cost",
                    "receipt_file",
                    "patient",
                ),
            },
        ),
    )

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "hospital_name",
                    "problem_dignosed",
                    "surgery_name",
                    "cost",
                    "receipt_file",
                    "patient",
                ),
            },
        ),
    )


admin.site.register(PatientData, PatientDataAdminConfig)
