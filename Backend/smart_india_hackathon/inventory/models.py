from django.db import models
from django.utils.translation import gettext_lazy as _
from users.models import NewUser


class PatientData(models.Model):
    class Meta:
        verbose_name = _("Patient Data")
        verbose_name_plural = _("Patient Data")

    hospital_name = models.CharField(
        max_length=100,
        blank=False,
        null=False,
        unique=False,
        verbose_name=_("Hospital Name"),
    )

    problem_dignosed = models.CharField(
        max_length=200,
        blank=False,
        null=False,
        unique=False,
        verbose_name=_("Problem Dignosed"),
    )

    surgery_name = models.CharField(
        max_length=100,
        blank=True,
        null=True,
        unique=False,
        verbose_name=_("Surgery Name"),
    )

    cost = models.IntegerField(
        blank=False,
        null=False,
        unique=False,
        verbose_name=_("Cost of Surgery/Procedure"),
    )

    receipt_file = models.FileField(
        upload_to="",
        help_text="max. 42 megabytes",
        verbose_name=_("Receipt File"),
    )

    patient = models.ForeignKey(
        NewUser,
        unique=False,
        on_delete=models.PROTECT,
        verbose_name=_("Patient ID"),
    )
