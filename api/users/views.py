from rest_framework.response import Response
from django.shortcuts import get_object_or_404, render
from rest_framework.views import APIView
from rest_framework import serializers, status
from .serializers import VisitorSerializer, MemberSerializer
from .models import CustomUser, Member, Visitor
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
class MemberRegistrationView(APIView):
    '''
        Registration for a member of the club.
    '''
    
    def post(self, request):
        request.data['is_member'] = True
        serializer = CustomUserSerializer(data=request.data)

        if serializer.is_valid():
            queryset = CustomUser.objects.filter(email=request.data['email'])

            if queryset.exists():
                return Response({'msg': 'User already exists'}, status=status.HTTP_406_NOT_ACCEPTABLE)

            serializer.save()
            user = CustomUser.objects.filter(email=request.data['email'])[0]
            Member.objects.create(user=user)
            return Response({'msg': 'User Created'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)        



class MemberProfileView(APIView):
    '''
        Get and Update member profile information.
    '''
    def get(self, request):
        try:
            user = request.user
            member = Member.objects.get(user=user)
            serializer = MemberSerializer(member)

            return Response(serializer.data, status=status.HTTP_200_OK)
        except Member.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request):
        try:
            user = request.user
            member = Member.objects.get(user=user)
            serializer = MemberSerializer(data=request.data, instance=member)
            if serializer.is_valid():
                serializer.save()
                return Response({'msg': 'User profile updated.'}, status=status.HTTP_201_CREATED)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)    
        except Member.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)



