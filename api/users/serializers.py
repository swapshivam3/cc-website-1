from rest_framework import serializers
from .models import Candidate, CustomUser, Visitor, Member
import re
from datetime import date

from rest_framework.authtoken.models import Token


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



class TokenSerializer(serializers.ModelSerializer):

    class Meta:
        model = Token
        fields = ('key', 'user')

class CandidateSerializer(serializers.ModelSerializer): 
    user=CustomUserSerializer(required=False)
    exam_given = serializers.BooleanField(required=False)
    class Meta:
        model = Candidate
        exclude = ("answer_json","score","exam_given_time","exam_attempt_time",)
 
    def validate(self, attrs):        
        # Checking if all priorities are unique 
        list=[attrs['pr1'],attrs['pr2'],attrs['pr3'],attrs['pr4'],attrs['pr5'],attrs['pr6'],attrs['pr7']]
        if len(list) != len(set(list)):
            raise serializers.ValidationError("All preference choices should be different ")
    
        #Checking if BITS ID is correct 
        # yr = date.today().year
        # id= re.match("((%s)+(((A[1-8AB]{1})((B[1-5]{1})|(PS)))|((B[1-5]{1})((A[1-8AB]{1})|(PS))))[0-9]{4}[pgh])" %yr,  attrs['bits_id'],re.IGNORECASE)
        # if id : pass
        # else :
        #       raise serializers.ValidationError("Invalid BITS ID ")
        # mail = re.match("f(%s)[0-9]{4}@((pilani)|(goa)|(hyderabad)).bits-pilani.ac.in" %yr ,attrs['bits_email'],re.IGNORECASE)
        # if mail == None : 
        #       raise serializers.ValidationError("Invalid BITS Email ")   
        # return attrs

class MemberSerializer(serializers.ModelSerializer):
    bits_email = serializers.EmailField(required=True)
    bits_id = serializers.CharField(required=True)
    class Meta:
        model = Member
        exclude = ('user', )   

    def validate(self, attrs):
        yr = date.today().year
        id = re.match("(%s|%s|%s|%s|%s)(((A[1-8AB]{1})((B[1-5]{1})|(PS)))|((B[1-5]{1})((A[1-8AB]{1})|(PS))))[0-9]{4}([PGH])" %(str(yr),str(yr-1),str(yr-2),str(yr-3),str(yr-4)) ,attrs['bits_id'],re.IGNORECASE)
        if id == None : 
             raise serializers.ValidationError("Invalid BITS ID ")     
       
        mail = re.match("f(%s)[0-9]{4}@((pilani)|(goa)|(hyderabad)).bits-pilani.ac.in" %(str(yr),str(yr-1),str(yr-2),str(yr-3),str(yr-4)) ,attrs['bits_email'],re.IGNORECASE)
        if mail == None : 
             raise serializers.ValidationError("Invalid BITS Email ")   
        return attrs

