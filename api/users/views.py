from rest_framework.response import Response
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import serializers, status
from .serializers import VisitorSerializer, FeedbackSerializer
from .models import Feedback, Visitor ,Candidate
# from django.http import JsonResponse


class VisitorRegistrationView(APIView):
    """
    Create a new Visitor
    """
    # def get(self,request,format=None):
    #     visitors = Visitor.objects.all()
    #     serializer = VisitorSerializer(visitors, many=True)
    #     return Response(serializer.data)


    def post(self, request, format=None):
        serializer = VisitorSerializer(data=request.data)
        if serializer.is_valid():
            queryset = Visitor.objects.filter(email=request.data['email'])
            if queryset.exists():
                return Response({'msg': 'User already exists'}, status=status.HTTP_406_NOT_ACCEPTABLE)
            serializer.save()
            return Response({'msg': 'User Created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VisitorUpdateView(APIView):
    """
    get_object fetches an instance, put method to update it
    """

    def get_object(self, pk):
        try:
            return Visitor.objects.get(pk=pk)
        except Visitor.DoesNotExist:
            return Response({'msg', 'User Not Found'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk, format=None):
        visitor = self.get_object(pk)
        serializer = VisitorSerializer(visitor, data=request.data)
        if serializer.is_valid():
            queryset = Visitor.objects.filter(email=request.data['email'])
            if queryset.exists():
                # Update values here
                return Response({'msg': 'User Updated'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# Login/Logout --- Swapnil
# Change Password ---  Swapnil

# Member Views  ----- Sanyam
