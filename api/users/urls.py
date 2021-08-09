from .views import VisitorRegistrationView,VisitorUpdateView, MemberRegistrationView, MemberProfileView
from django.urls import path


urlpatterns = [
    path('VisitorRegistration', VisitorRegistrationView.as_view()),
    
    path('VisitorUpdate', VisitorUpdateView.as_view()),
    path('MemberRegistration/', MemberRegistrationView.as_view()),
    path('MemberProfile/', MemberProfileView.as_view())
]
