
from .serializers import DepartmentSerializer
from .models import Department
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import  FeedbackSerializer, AchievementSerializer
from .models import Feedback,Department, Achievement
from rest_framework import serializers
from django.shortcuts import render, get_object_or_404
from users.models import CustomUser


class FeedbackView(APIView):
    """
    Posts and gets review given by visitor
    """
    def post(self, request, format=None):
        # request.data['user']=request.user.pk
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({'msg': 'Feedback Submitted'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

   
    def get(self, request):
        try:
            user = request.user
            if user.is_member:
              feedbacks= Feedback.objects.all()
              serializer = FeedbackSerializer(feedbacks,many=True)
              return Response(serializer.data, status=status.HTTP_200_OK)
            else: 
                return Response(status=status.HTTP_403_FORBIDDEN)
        except Feedback.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)



# Create your views here.

class DepartmentListView(APIView):
    '''
    Gets a list of all Department objects
    '''

    def get(self, request):
        departments = Department.objects.all()
        # the many param informs the serializer that it will be serializing more than a single article.
        serializer = DepartmentSerializer(departments, many=True)
        return Response(serializer.data)




class DepartmentDetailView(APIView):
    '''
    Gets a specific Department object corresponding to its name
    '''
    def get(self, request, name):
        department = get_object_or_404(Department,name=name)
        serializer = DepartmentSerializer(department)
        return Response(serializer.data)

class AchievementView(APIView):
    '''
    Get all the club achievements from the database.
    '''
    def get(self, request):
        achievements = Achievement.objects.all()
        serializer = AchievementSerializer(achievements, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

