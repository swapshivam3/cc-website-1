from rest_framework import serializers
from .models import Visitor, CustomUser, Member

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

class VisitorSerializer(serializers.ModelSerializer):
    user=CustomUserSerializer(required=False)
    class Meta:
        model = Visitor
        fields = '__all__'  # change later
        extra_kwargs = {'password': {'write_only': True}}

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        exclude = ('user', )        
