from .views import FeedbackView,DepartmentDetailView, DepartmentListView
from django.urls import path


urlpatterns = [


    path('FeedbackPost', FeedbackView.as_view()),
    path('departments', DepartmentListView.as_view()),
    path('department/<str:name>', DepartmentDetailView.as_view()),
    


]




