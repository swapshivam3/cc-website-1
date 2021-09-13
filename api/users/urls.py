from .views import VisitorRegistrationView,VisitorUpdateView, MemberRegistrationView, MemberProfileView, LoginView, LogoutView, VisitorRegistrationView,VisitorUpdateView,PasswordTokenCheck,SetNewPasswordView,RequestPasswordResetEmail,CandidateRegistrationView,CandidateProfileView
from django.urls import path


urlpatterns = [
    path('VisitorRegistration', VisitorRegistrationView.as_view()),
    path('VisitorUpdate', VisitorUpdateView.as_view()),
    path('MemberRegistration/', MemberRegistrationView.as_view()),
    path('MemberProfile/', MemberProfileView.as_view()),
    path('CandidateRegistration', CandidateRegistrationView.as_view()),
    path('CandidateProfile/', CandidateProfileView.as_view()),
    path('LoginView',LoginView.as_view()),
    path('LogoutView',LogoutView.as_view()),
    path('RequestPasswordReset', RequestPasswordResetEmail.as_view()),
    path('PasswordReset/<uidb64>/<token>',
         PasswordTokenCheck.as_view(), name="PasswordReset"),
    path('PasswordResetComplete', SetNewPasswordView.as_view()),
]
