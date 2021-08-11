from rest_framework import serializers


class DepartmentSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100, default="Department")
    description = serializers.CharField()
    tech_stack = serializers.CharField(max_length=200)