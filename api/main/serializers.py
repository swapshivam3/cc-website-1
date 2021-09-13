from rest_framework import serializers
from users.serializers import MemberSerializer
from .models import Department, Feedback, Achievement


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        exclude=('user',)



class DepartmentSerializer(serializers.ModelSerializer):
    # name = serializers.CharField(max_length=100, default="Department")
    # description = serializers.CharField()
    # tech_stack = serializers.CharField(max_length=200)
    # member = MemberSerializer(required=False)
    longname=serializers.CharField(source='get_name_display')
    class Meta:
        model=Department
        fields='__all__'

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["members"] = MemberSerializer(instance.members.all(), many=True).data
        return rep

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        exclude = ('slug', )
