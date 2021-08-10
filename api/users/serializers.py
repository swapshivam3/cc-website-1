from rest_framework import serializers
from .models import  Visitor


class VisitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visitor
        fields = '__all__'  # change later
        extra_kwargs = {'password': {'write_only': True}}

