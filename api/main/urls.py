from .views import DepartmentDetailView, DepartmentListView
from django.urls import path


urlpatterns = [
    path('departments', DepartmentListView.as_view()),
    path('department/<str:name>', DepartmentDetailView.as_view()),
]
