from .views import QuestionGetView
from django.urls import path


urlpatterns = [
    path('questions',QuestionGetView.as_view()),
    # path('answerpost',Ans)

]
