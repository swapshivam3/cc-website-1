from .views import FeedbackView,DepartmentDetailView, DepartmentListView, AchievementView
from django.urls import path


urlpatterns = [


    path('FeedbackPost', FeedbackView.as_view()),
    path('departments', DepartmentListView.as_view()),
    path('department/<str:name>', DepartmentDetailView.as_view()),
    path('achievements/', AchievementView.as_view()),
    


]




