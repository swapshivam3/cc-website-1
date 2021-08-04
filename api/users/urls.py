from .views import VisitorRegistrationView,VisitorUpdateView
from django.urls import path


urlpatterns = [
    # path('admin/', admin.site.urls),
    path('VisitorRegistration', VisitorRegistrationView.as_view()),
    path('VisitorUpdate', VisitorUpdateView.as_view()),
]
