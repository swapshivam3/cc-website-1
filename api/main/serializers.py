from rest_framework import serializers

from .models import Feedback


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'  



class DepartmentSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100, default="Department")
    description = serializers.CharField()
    tech_stack = serializers.CharField(max_length=200)

