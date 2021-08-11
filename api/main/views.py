from django.shortcuts import render, get_object_or_404
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import DepartmentSerializer

from .models import Department

# Create your views here.

class DepartmentListView(APIView):
    '''
    Gets a list of all Department objects
    '''

    def get(self, request):
        departments = Department.objects.all()
        # the many param informs the serializer that it will be serializing more than a single article.
        serializer = DepartmentSerializer(departments, many=True)
        return Response({"departments": departments})




class DepartmentDetailView(APIView):
    '''
    Gets a specific Department object corresponding to its name
    '''
    def get(self, request, name):
        department = get_object_or_404(Department,name=name)
        serializer = DepartmentSerializer(department)
        return Response(serializer.data)
