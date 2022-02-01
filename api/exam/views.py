from rest_framework import serializers,status
from rest_framework.views import APIView
from rest_framework.response import Response

from django.shortcuts import render, get_object_or_404
from users.models import CustomUser, Candidate
from django.http import JsonResponse
import random
from .models import Question
import os.path
from .questions import question_list
from api.settings import MEDIA_ROOT,START_TIME,START_BUFFER_TIME
import boto3
import time
from datetime import datetime
import pytz
from dateutil import tz
questions = []
# from django.views.decorators.cache import cache_page



# Create your views here.
class QuestionGetView(APIView):
    # @cache_page(60*60)
    def get(self, request):
        time.sleep(0.02)
        # questions=request.session.get('questions')     
        # if(request.user.is_staff==False):
        #     return JsonResponse({"msg":"Unauthorized"},status=status.HTTP_401_UNAUTHORIZED)
        questions=[]
        if(request.user.is_anonymous or time.time()<START_TIME):
            return JsonResponse({"msg":"Unauthorized"},status=status.HTTP_401_UNAUTHORIZED)
        # global questions
        # fix the file fields here as well if wanted
        #will fail if db is empty, create an object first using admin or the CreateQuestions view
        raw_questions_fetch = Question.objects.all()
        raw_questions=raw_questions_fetch.order_by('pk')
        i=0
        if questions is None or len(questions) != 20:
            questions=[]
            print("SHIT")
            # print(raw_questions)
            for raw_question in raw_questions:
                # print(raw_question)
                question = {}
                question['id'] = raw_question.id
                question['qtxt'] = raw_question.question
                question['is_blank'] = raw_question.is_blank
                question['sno']=i
                question['score']=raw_question.score
               #question['hint_text'] = raw_question.hint_text
              # question['hint_link']= raw_question.hint_link
                try:
                    question['question_file.url'] = (
                        raw_question.question_file.url)
                except:
                    question['question_file.url'] = "null"
                try:
                    question['hint_text']= raw_question.hint_text
                except:
                    question['hint_text']= "null"
                try:
                    question['hint_link']= raw_question.hint_link
                except:
                    question['hint_link']= "null"
                options = []
                option = {}
                option['text'] = raw_question.option_one_text
                try:
                    option['file'] = (raw_question.option_one_file.url)
                except:
                    option['file'] = "null"
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

                option['text'] = raw_question.option_four_text
                try:
                    option['file'] = (raw_question.option_four_file.url)
                except:
                    option['file'] = "null"
                options.append(option.copy())
                question['options'] = options
                questions.append(question.copy())
                i+=1
                # time.sleep(1)
            # print('executed')
            # request.session['questions'] = questions
        return JsonResponse(questions, safe=False)


class GetTime(APIView):
    #does this need to be separate? or can we return with the question array only
    def get(self, request):
        user = request.user
        try:
            c = Candidate.objects.filter(user=user)[0]
            if c.exam_attempt_time == "null":
                if time.time()<START_BUFFER_TIME:
                    c.exam_attempt_time = time.time()
                    c.save()
                    return JsonResponse({"time": 3600}, status=status.HTTP_200_OK)
                else:
                    # c.exam_attempt_time=time.time()-START_BUFFER_TIME
                    penalty=time.time()-START_BUFFER_TIME
                    c.exam_attempt_time=START_BUFFER_TIME
                    c.save()
                    return JsonResponse({"time":3600-penalty},status=status.HTTP_200_OK)
                # print(time.time())
            elif c.exam_given==True:
                return JsonResponse({"time":-1})
            else:
                # print(time.time())
                return JsonResponse({"time":3600-time.time()+float(c.exam_attempt_time)})
        except:
            return Response({"msg": "Unauthorized"}, status=status.HTTP_401_UNAUTHORIZED)


class AnswerPostView(APIView):
    def post(self, request):
        # return Response({"msg": "Success"}, status=status.HTTP_401_UNAUTHORIZED)
        try:
            user = request.user
            candidate = Candidate.objects.filter(user=user)[0]
        except:
            return Response({"error": "Not authorized"}, status=status.HTTP_401_UNAUTHORIZED)   
            # candidate=Candidate.objects.all()[0]
        candidate.answer_json = request.data
        candidate.exam_given = True
        candidate.exam_given_time = time.time()
        candidate.save()
        return Response({"msg": "Success"}, status=status.HTTP_200_OK)


class CreateQuestionView(APIView):
    #Hit this endpoint to add questions to DB and upload images to aws, NOT SUPPOSED to be done again and again
    #DO NOT call this endpoint by mistake after answers have been saved as the question id changes and will give errors
    def get(self, request):
        if request.user:
            Question.objects.all().delete()
            i = 1
            s3 = boto3.resource('s3')
            for question in question_list[1:]:

                q_image_path = 'questions/q'+str(i)+'.jpg'
                q_op1_path = 'questions/q'+str(i)+'a.jpg'
                q_op2_path = 'questions/q'+str(i)+'b.jpg'
                q_op3_path = 'questions/q'+str(i)+'c.jpg'
                q_op4_path = 'questions/q'+str(i)+'d.jpg'
                q = Question.objects.create(is_blank=question['is_blank'], question=question['question'],
                                            answer=question['answer'], blank_answer=question['blank_answer'],
                                            option_one_text=question['option_one_text'], option_two_text=question['option_two_text'],
                                            option_three_text=question['option_three_text'], option_four_text=question['option_four_text'],hint_text=question['hint_text'],hint_link=question['hint_link'],score=question['score'])
                if os.path.exists(MEDIA_ROOT+q_image_path):
                    q.question_file = q_image_path
                    s3.meta.client.upload_file(
                        MEDIA_ROOT+q_image_path, 'cc-quiz', q_image_path, ExtraArgs={'ContentType': "image/jpeg"})

                if os.path.exists(MEDIA_ROOT+q_op1_path):
                    q.option_one_file = q_op1_path
                    s3.meta.client.upload_file(
                        MEDIA_ROOT+q_op1_path, 'cc-quiz', q_op1_path, ExtraArgs={'ContentType': "image/jpeg"})

                if os.path.exists(MEDIA_ROOT+q_op2_path):
                    q.option_two_file = q_op2_path
                    s3.meta.client.upload_file(
                        MEDIA_ROOT+q_op1_path, 'cc-quiz', q_op2_path, ExtraArgs={'ContentType': "image/jpeg"})

                if os.path.exists(MEDIA_ROOT+q_op3_path):
                    q.option_three_file = q_op3_path
                    s3.meta.client.upload_file(
                        MEDIA_ROOT+q_op3_path, 'cc-quiz', q_op3_path, ExtraArgs={'ContentType': "image/jpeg"})

                if os.path.exists(MEDIA_ROOT+q_op4_path):
                    q.option_four_file = q_op4_path
                    s3.meta.client.upload_file(
                        MEDIA_ROOT+q_op4_path, 'cc-quiz', q_op4_path, ExtraArgs={'ContentType': "image/jpeg"})

                q.save()
                i += 1

            return JsonResponse({"success": "done"})
