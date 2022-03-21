
from django.urls import path
from .views import (
    RegisterAPI,
    RequestPasswordResetMail,
    VerifyEmail,
    LoginAPIView,
    PasswordTokenCheckAPI,
    SetNewPasswordAPIView,
    LogoutAPIView,
)
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path("register/", RegisterAPI.as_view(), name="register"),
    path("email-verify/", VerifyEmail.as_view(), name="email-verify"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("login/", LoginAPIView.as_view(), name="login"),
    path(
        "request-reset-password/",
        RequestPasswordResetMail.as_view(),
        name="request-reset-password",
    ),
    path(
        "password-reset/<uidb64>/<token>/",
        PasswordTokenCheckAPI.as_view(),
        name="password_reset_confirm",
    ),
    path(
        "password-reset-confirm/",
        SetNewPasswordAPIView.as_view(),
        name="password_reset_confirm",
    ),
    path("logout/", LogoutAPIView.as_view(), name="logout"),
]
