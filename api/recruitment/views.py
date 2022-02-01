from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status
from users.models import Candidate,CustomUser
from exam.models import Question
from rest_framework.views import APIView
from rest_framework.response import Response
import csv
import time
# import datetime
# from time import strftime


# Create your views here.

class CalculateScores(APIView):
    #REVIEW: has not been tested yet
    def get(self,request):
        candidate_list=Candidate.objects.all()
        for candidate in candidate_list:
            if candidate.exam_given==True:
                score=0
                answer_json=candidate.answer_json
                for ans_data in answer_json:
                    if ans_data == None:
                        continue
                    q=Question.objects.filter(id=ans_data['qid'])[0]
                    try:
                        # if q.id==1497:
                        #     if q.blank_answer == str(180):
                        #         score+=q.score
                        # if q.id==1510:
                        #     if q.blank_answer == str(350000):
                        #         score+=q.score
                        if q.blank_answer == ans_data['answertext']:
                            score+=q.score
                        # print("checked")
                    except:
                        pass
                    try:
                        if q.answer==int(ans_data['answer']):
                            score+=2
                        # print("checkedFI")
                    except:
                        pass
                candidate.score=score
                candidate.save()
        return Response({"msg":"success"},status=status.HTTP_200_OK)

class GetScoreSheet(APIView):
    #NOT Tested
    def get(self,request):
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="scores.csv"'
        writer = csv.writer(response)
        writer.writerow(['Username', 'pr1', 'pr2', 'pr3','pr4','pr5','pr6','pr7','pr8','score','exam_given','bits_id','phone_number','bits_email','exam_start','exam_end','time_taken','Name'])
        candidates = Candidate.objects.all().values_list(     
            'user', 'pr1', 'pr2', 'pr3','pr4','pr5','pr6','pr7','pr8','score','exam_given','bits_id','phone_number')
        # print("1")
        # related_user=CustomUser.objects.filter(id=can)
        #fix this to get email/name/number of candidate user, user.email does not work
        for candidate in candidates:
            # print("2")
            candidate=list(candidate)
            related_user=CustomUser.objects.filter(id=candidate[0])[0]
            related_candidate=Candidate.objects.filter(user=related_user)[0]
            email=related_user.email
            # related_candidate=Candidate.objects.filter()
            # user_email=related_user.email
            candidate.append(email)
            try:
                start_time=related_candidate.exam_attempt_time
            except:
                start_time=" "
            try:
                submission_time=related_candidate.exam_given_time
            except:
                submission_time=" "
            candidate.append(start_time)
            candidate.append(submission_time)
            try:
                candidate.append(float(submission_time)-float(start_time))
            except:
                candidate.append(0)
            try:
                name=related_user.name
                candidate.append(name)
            except:
                pass
            writer.writerow(candidate)
        return response
        
# class CalculateDepartment(APIView):
#     #write dept code here



class GetCandidateScore(APIView):
    #REVIEW: Not tested
    def get(self,request):
        try:
            user=request.user
            candidate=Candidate.objects.get(user=user)
            if candidate.exam_given:
                return Response({"score":candidate.score},status=status.HTTP_200_OK) #Extend this later to return department also
            else:
                return Response({"msg":"Exam not given"},status=status.HTTP_404_NOT_FOUND)
        except:
            return Response({'msg':"Unauthorized"},status=status.HTTP_401_UNAUTHORIZED)





