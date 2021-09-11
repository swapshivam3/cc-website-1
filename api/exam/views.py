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
        # fix the file fields here as well if wanted
        #will fail if db is empty, create an object first using admin 
        raw_questions=Question.objects.all()
        questions=[]
        # print(raw_questions)
        for raw_question in raw_questions:
            # print(raw_question)
            question={}
            question['id']=raw_question.id
            question['qtxt']=raw_question.question
            question['is_blank'] = raw_question.is_blank
            try:
                question['question_file.url'] = (raw_question.question_file.url)
            except:
                question['question_file.url']="null"
            # question['answer'] = raw_question.is_blank (duh)
            options=[]
            option={}
            option['text'] = raw_question.option_one_text
            try:
                option['file'] = (raw_question.option_one_file.url)
            except:
                option['file']="null"
            options.append(option.copy())
            option['text'] = raw_question.option_two_text
            try:
                option['file'] = (raw_question.option_two_file.url)
            except:
                option['file'] = "null"
            options.append(option.copy())
            option['text'] = raw_question.option_three_text
            try:
                option['file'] = (raw_question.option_three_file.url)
            except:
                option['file'] = "null"
            options.append(option.copy())
            # print(options)
            option['text'] = raw_question.option_four_text
            try:
                option['file'] = (raw_question.option_four_file.url)
            except:
                option['file'] = "null"
            options.append(option.copy())
            question['options']=options
            # print(options)
            questions.append(question.copy())
            # print(question)
                # random.shuffle(questions) (discuss later)
        return JsonResponse(questions,safe=False)

# class AnswerPostView(APIView):
    # def post(self,request):

# TODO Receive an array of answers with the question id, and save to some model with candidate as foreign key
# [{"qid":"1", "answer":"", "answertxt":""}]  if is_blank,use answertxt to compare  else use answer to compare mcq answer no  


#TODO write an endpoint to start uploading of image questions to s3bucket using file names (like q1_q as question q1_a as option)
