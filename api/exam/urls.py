from .views import QuestionGetView,CreateQuestionView
from django.urls import path


urlpatterns = [
    path('questions',QuestionGetView.as_view()),
    path('createquestions',CreateQuestionView.as_view()),
    # path('answerpost',Ans)

]
