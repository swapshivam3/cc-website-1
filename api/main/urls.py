from .views import FeedbackView
from django.urls import path


urlpatterns = [

    path('FeedbackPost', FeedbackView.as_view( ))
    


]




