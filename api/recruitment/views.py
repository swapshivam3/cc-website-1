from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status
from users.models import Candidate,CustomUser
from exam.models import Question
from rest_framework.views import APIView
from rest_framework.response import Response
import csv


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
                    # print(q.answer)
                    # print(ans_data['answer'])
                    try:
                        if q.blank_answer == ans_data['answertext']:
                            score+=q.score
                        print("checked")
                    except:
                        pass
                    try:
                        if q.answer==int(ans_data['answer']):
                            score+=q.score
                        print("checkedFI")
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
        writer.writerow(['Username', 'pr1', 'pr2', 'pr3','pr4','pr5','pr6','pr7','pr8','score','bits_id','bits_email'])
        candidates = Candidate.objects.all().values_list(     
            'user', 'pr1', 'pr2', 'pr3','pr4','pr5','pr6','pr7','pr8','score','bits_id')
        # related_user=CustomUser.objects.filter(id=can)
        #fix this to get email/name/number of candidate user, user.email does not work
        for candidate in candidates:
            candidate=list(candidate)
            related_user=CustomUser.objects.filter(id=candidate[0])[0].email
            candidate.append(related_user)
            # related_user=CustomUser.objects.filter(id=candidate[0])
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





