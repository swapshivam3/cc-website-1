# from .serializers import DepartmentSerializer
from .models import Question
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
# from .serializers import FeedbackSerializer, AchievementSerializer
# from .models import Feedback, Department, Achievement
from rest_framework import serializers
from django.shortcuts import render, get_object_or_404
from users.models import CustomUser
from django.http import JsonResponse
import random

# Create your views here.
class QuestionGetView(APIView):
    def get(self,request):
        # fix the image fields here as well
        raw_questions=Question.objects.all()
        questions=[]
        for raw_question in raw_questions:
            question={}
            question['id']=raw_question.id
            question['qtxt']=raw_question.question
            question['is_blank'] = raw_question.is_blank
            question['question_image'] = str(raw_question.question_image)
            # question['answer'] = raw_question.is_blank (duh)
            options=[]
            option={}
            option['text'] = raw_question.option_one_text
            option['image'] = str(raw_question.option_one_image)
            options.append(option)
            option['text'] = raw_question.option_two_text
            option['image'] = str(raw_question.option_two_image)
            options.append(option)
            option['text'] = raw_question.option_three_text
            option['image'] = str(raw_question.option_three_image)
            options.append(option)
            option['text'] = raw_question.option_four_text
            option['image'] = str(raw_question.option_four_image)
            options.append(option)
            question['options']=options
            questions.append(question)
            # random.shuffle(questions) (discuss later)
        return JsonResponse(questions,safe=False)

# class AnswerPostView(APIView):
# #TODO Receive an array of answers with the question id, link to candidate model to calc scores
# [{"qid":"1", "answer":"", "answertxt":""}]  if is_blank,use answertxt to compare string else use answer to compare mcq answer no  
