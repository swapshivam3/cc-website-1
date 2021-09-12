from .views import QuestionGetView,CreateQuestionView,AnswerPostView
from django.urls import path


urlpatterns = [
    path('GetQuestions',QuestionGetView.as_view()),
    path('CreateQuestions',CreateQuestionView.as_view()),
    path('PostAnswers',AnswerPostView.as_view())

]
