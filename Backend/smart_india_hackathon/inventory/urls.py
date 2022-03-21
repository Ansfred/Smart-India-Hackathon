from django.urls import path
from . import views
app_name = "inventory"


urlpatterns = [
    # A django function that is used to define the url patterns.
    path(
        "patient-data/",
        views.PatientListAPIView.as_view(),
        name="patient-data",
    ),
]