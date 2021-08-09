from rest_framework import serializers
from .models import Visitor
from .models import Member


class VisitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visitor
        fields = '__all__'  # change later
        extra_kwargs = {'password': {'write_only': True}}

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        exclude = ('user', )        
