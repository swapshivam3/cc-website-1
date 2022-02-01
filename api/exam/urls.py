from .views import QuestionGetView,CreateQuestionView,AnswerPostView,GetTime
from django.urls import path
from django.views.decorators.cache import cache_page



urlpatterns = [
    path('GetQuestions',cache_page(60*60)(QuestionGetView.as_view())),
    path('CreateQuestions',CreateQuestionView.as_view()),
    path('PostAnswers',AnswerPostView.as_view()),
    path('GetTime',GetTime.as_view()),
]
