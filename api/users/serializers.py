from rest_framework import serializers
from .models import Candidate, CustomUser, Visitor, Member
import re
from datetime import date



class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
        # extra_kwargs = {'password': {'write_only': True}}


class VisitorSerializer(serializers.ModelSerializer):
    user=CustomUserSerializer(required=False)
    class Meta:
        model = Visitor
        fields = '__all__'  # change later
        # extra_kwargs = {'password': {'write_only': True}}

class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = '__all__'
    def validate(self, attrs):
        list=[attrs['pr1'],attrs['pr2'],attrs['pr3'],attrs['pr4'],attrs['pr5']]
        if len(list) != len(set(list)):
            raise serializers.ValidationError("All preference choices should be different ")
        yr = date.today().year
        p= re.match("(%s)+(((A[1-7A]{1})((B[1-5]{1})|(PS)))|((B[1-5]{1})((A[1-7A]{1})|(PS))))[0-9]{4}P" %yr,  attrs['bits_id'],re.IGNORECASE)

        if p : pass
        else :
             raise serializers.ValidationError("Invalid BITS ID ")
        return attrs


class MemberSerializer(serializers.ModelSerializer):
    # user = CustomUserSerializer(required=False)
    class Meta:
        model = Member
        # extra_kwargs = {'password': {'write_only': True}}
        exclude = ('user', 'id', )   

    def validate(self, attrs):
        yr = date.today().year
        id = id = re.match("(%s|%s|%s|%s|%s)(((A[1-7A]{1})((B[1-5]{1})|(PS)))|((B[1-5]{1})((A[1-7A]{1})|(PS))))[0-9]{4}P" %(str(yr),str(yr-1),str(yr-2),str(yr-3),str(yr-4)) ,attrs['bits_id'],re.IGNORECASE)
        if id == None : 
             raise serializers.ValidationError("Invalid BITS ID ")     
       
        mail = re.match("f20[0-9]{6}@pilani.bits-pilani.ac.in" ,attrs['bits_email'],re.IGNORECASE)
        if mail == None : 
             raise serializers.ValidationError("Invalid BITS Email ")   
        return attrs

