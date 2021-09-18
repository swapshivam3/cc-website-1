from .views import CalculateScores, GetCandidateScore, GetScoreSheet
from django.urls import path


urlpatterns = [

    path('GetScoreSheet',GetScoreSheet.as_view()),
    path('CalculateScores', CalculateScores.as_view()),
    path('GetCandidateScore',GetCandidateScore.as_view())
]
