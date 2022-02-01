from django.contrib.auth.hashers import make_password,check_password
from django.views.decorators.csrf import ensure_csrf_cookie
import time
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, render
from rest_framework.views import APIView
import requests
from .models import CustomUser, Member, Visitor, Candidate
from main.models import Feedback, Department
from rest_framework import serializers, status,generics
import time,json
from .serializers import VisitorSerializer,CustomUserSerializer, MemberSerializer, CandidateSerializer
from main.serializers import FeedbackSerializer
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_bytes,smart_str,force_bytes,force_str,DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode,urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from .utils import Util
from django.contrib.auth import login,authenticate,logout
from django.http import HttpResponsePermanentRedirect
import os
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from rest_framework.permissions import AllowAny
from django.http import JsonResponse    
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.shortcuts import redirect
from rest_auth.registration.views import SocialLoginView
from rest_auth.registration.serializers import SocialLoginSerializer
from .adapters import GoogleOAuth2AdapterIdToken

from django.http import HttpResponseRedirect

from django.middleware import csrf
class VisitorRegistrationView(APIView):
    """
    Create a new Visitor
    """
    def get(self,request,format=None):
        visitors = Visitor.objects.all()
        serializer = VisitorSerializer(visitors, many=True)
        return Response(serializer.data)


    # def post(self, request, format=None):
    #     request.data['is_visitor']=True
    #     serializer = CustomUserSerializer(data=request.data)
    #     if serializer.is_valid():
    #         queryset = CustomUser.objects.filter(email=request.data['email'])
    #         if queryset.exists():
    #             return Response({'msg': 'User already exists'}, status=status.HTTP_406_NOT_ACCEPTABLE)

    #         serializer.validated_data['password'] = make_password(serializer.validated_data['password'])    
    #         serializer.save()
    #         user=CustomUser.objects.filter(email=request.data['email'])[0]
    #         Visitor.objects.create(user=user)
    #         return Response({'msg': 'User Created'}, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        request.data['is_visitor'] = True
        serializer = CustomUserSerializer(data=request.data)
        visitor_serializer = VisitorSerializer(data=request.data)

        if serializer.is_valid():
            if visitor_serializer.is_valid():
                queryset = CustomUser.objects.filter(
                    email=request.data['email'])

                if queryset.exists():
                    return Response({'msg': 'User already exists'}, status=status.HTTP_406_NOT_ACCEPTABLE)

                serializer.validated_data['password'] = make_password(
                    serializer.validated_data['password'])
                serializer.save()
                user = CustomUser.objects.filter(
                    email=request.data['email'])[0]

                Visitor.objects.create(user=user)
                visitor = Visitor.objects.get(user=user)

                allowed_updates = [ 'interests', 'city']


                for update in allowed_updates:
                    if update in request.data:
                        setattr(visitor, update, request.data[update])

                visitor.save()
                return Response({'msg': 'User Created'}, status=status.HTTP_201_CREATED)
            else:
                return Response({"error_visitor": visitor_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error_user": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

@ensure_csrf_cookie
def getkeys(request):
    #response['csrftoken']=csrf.get_token(request)
    #response['sessionid']=request.session.session_key
#    context = RequestContext(request)
 #   print(context)
    # print(request.user)
    # candidate=CustomUser.objects.filter(user=)
    try:
        candidate=Candidate.objects.filter(user=CustomUser.objects.filter(email=request.user)[0])[0]
    except:
        return JsonResponse({'msg':'Not User'})
    
   if(request.user.is_anonymous):
        return JsonRepsonse({'msg':'Not User'})
        
    elif(request.user.email[0:5]!='f2021' and request.user.is_staff==False):
        logout(request)
        return JsonResponse({'msg':'Not in 2021'})
    timer=0
    if candidate.exam_attempt_time == "null":
        timer=3600
    else:
        timer=3600-time.time()+float(candidate.exam_attempt_time)

    if(candidate.bits_id=='2021XXXXXXXXP'):
        return JsonResponse({'sessionid':request.session.session_key, 'name':request.user.name, 'email':request.user.email, 'first_time_login':'yes', 'exam_given':candidate.exam_given, 'time':timer})
    else:
        return JsonResponse({'sessionid':request.session.session_key, 'name':request.user.name, 'email':request.user.email, 'first_time_login':'no','exam_given':candidate.exam_given, 'time':timer})

  #  context = RequestContext(request)

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client
    serializer_class = SocialLoginSerializer
    callback_url='https://api.cc-recruitments.tech/rest-auth/google/callback/'

    def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        kwargs['context'] = self.get_serializer_context()
        return serializer_class(*args, **kwargs)


def social_login(request):
    token = request.GET["code"]
    # print(token)
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}

    response = requests.post('https://oauth2.googleapis.com/token', data={'code': token, 'grant_type':'authorization_code','client_id':'754009890523-f8r6n04j7k09grmf1auf8c872a7j1nbm.apps.googleusercontent.com'
    ,'client_secret':'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','redirect_uri':'https://api.cc-recruitments.tech/rest-auth/google/callback/'}, headers=headers)
    # print(response)
    my_json = response.content.decode('utf8').strip().replace("'", '"')
    data = json.loads(my_json)
    # print(data)
    # return JsonResponse({'code':token,'access_token':data['access_token']})
    
# def login_helper(request):

    response2=requests.post('https://api.cc-recruitments.tech/rest-auth/google/',data={'code':token,'access_token':data['access_token']}, headers={'withCredentials': 'true'})
  
    user=response2.json()['user']
    user=CustomUser.objects.filter(id=user)[0]
    # print(response2.user)
    user.is_candidate=True
    user.name=user.first_name+" "+ user.last_name
    user.save()

    user.backend = 'django.contrib.auth.backends.ModelBackend'
    # queryset=CustomUser.objects.filter(email=user.email)
    candidatequery=Candidate.objects.filter(user=user)
    responsef=redirect('https://cc-recruitments.tech')
    if candidatequery.exists():
        login(request,user)
        responsef['first_time']=False
    else:
        Candidate.objects.create(user=user,pr1='ap',pr2='fe',pr3='be',pr4='cp',pr5='ui',pr6='gd',pr7='vi',pr8='gr',gender='M')
        login(request,user)
        responsef['first_time']=True
    responsef['name']=user.name
    responsef['email']=user.email
    responsef['key']=response2.json()['key']
    return responsef

class VisitorUpdateView(APIView):
    """
    get_object fetches an instance, put method to update it
    """
    # Could not make get_object return properly so temporarily shifted that part inside put method

    def get(self, request):
        try:
            user = request.user
            visitor = Visitor.objects.get(user=user)
            # serializer = VisitorSerializer(visitor)

            # return Response(serializer.data, status=status.HTTP_200_OK)
            visitor_profile = {"name": user.name, "email": user.email, "interests": visitor.interests, "city": visitor.city}
            return Response(visitor_profile, status=status.HTTP_200_OK)
        except:
            return Response({"msg": "Please authenticate."}, status=status.HTTP_404_NOT_FOUND)

    # def put(self, request, format=None):
    #     try:
    #         user=CustomUser.objects.get(email=request.data['email'])
    #         visitor=Visitor.objects.get(pk=user.id)
    #     except Visitor.DoesNotExist:
    #         return Response({'msg', 'User Not Found'}, status=status.HTTP_404_NOT_FOUND)
    #     serializer = VisitorSerializer(visitor, data=request.data)
    #     if serializer.is_valid():
    #         # Update values here
    #         return Response({'msg': 'User Updated'}, status=status.HTTP_200_OK)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        try:
            user = request.user
            visitor = Visitor.objects.get(user=user)

            allowed_updates = ['interests','city']
            for update in allowed_updates:
                if update in request.data:
                    setattr(visitor, update, request.data[update])

            visitor.save()

            return Response({"msg": "Profile updated."}, status=status.HTTP_200_OK)

        except Visitor.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)




# Login/Logout --- Swapnil
# Change Password ---  Swapnil


class LoginView(APIView):
    """
    Login a user (any type)
    """
    permission_classes = (AllowAny,)
    def post(self, request, format=None):
        time.sleep(0.01)
        if request.user.is_authenticated:
            return Response({"msg": "Already Logged In"})
        data = request.data
        username = data['email']
        password = data['password']
        try:
            encoded_password=CustomUser.objects.filter(email=username)[0].password
            if check_password(password, encoded_password):
                user = authenticate(username=username, password=password)
                if user is not None:
                    login(request, user)
                    return Response(status=status.HTTP_200_OK)
                else:
                    return Response({'msg': 'Provided Credentials do not match'})
            else:
                return Response({'msg': 'Provided Credentials do not match'})
        except:
            return Response({'msg': 'User does not exist'})  
        

class LogoutView(APIView):
    """
    Logout a user
    """
    def get(self,request,format=None):
        logout(request)
        return Response({'msg':'Logged Out'},status=status.HTTP_200_OK)


class RequestPasswordResetEmail(APIView):
    """
    Views to request a password reset email, generates a token
    """
    def post(self, request):
   
        email = request.data['email']

        if CustomUser.objects.filter(email=email).exists():
            user = CustomUser.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            current_site = get_current_site(
                request=request).domain
            relativeLink = reverse(
                'PasswordReset', kwargs={'uidb64': uidb64, 'token': token})

            absurl = 'https://'+current_site + relativeLink
            email_body = 'Hello, \nUse link below to reset your password  \n' + \
                absurl
            data = {'email_body': email_body, 'to_email': user.email,
                    'email_subject': 'Reset your passsword'}
            Util.send_email(data)
        return Response({'success': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)


class PasswordTokenCheck(APIView):
    """
    Class to check the validity of the generated tokens with user, 
    the link is generated and sent to mail to access this view
    """
    def get(self, request, *args,**kwargs):
        token = kwargs['token']
        uidb64= kwargs['uidb64']

        try:
            id = force_str(urlsafe_base64_decode(uidb64))
            user = CustomUser.objects.get(id=id)
            # print(user)

            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response({'msg': 'Invalid Token'}, status=status.HTTP_401_UNAUTHORIZED)


            return Response({'msg': 'Valid Token', 'uidb64': uidb64, 'token': token}, status=status.HTTP_200_OK)
           
        except DjangoUnicodeDecodeError as identifier:
            if not PasswordResetTokenGenerator().check_token(user):
                return Response({'msg': 'Invalid Token'}, status=status.HTTP_401_UNAUTHORIZED)


class SetNewPasswordView(APIView):
    """
    View to set the new password after validity checks
    """
    def put(self, request):
        try:
            password=request.data['password']
            uidb64=request.data['uidb64']
            token=request.data['token']
            id=force_str(urlsafe_base64_decode(uidb64))
            user=CustomUser.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response({'msg':'Error'},status=status.HTTP_401_UNAUTHORIZED)

            user.password=make_password(password)
            user.save()
            return (user)
        except:
            return Response({'msg': 'Error'}, status=status.HTTP_401_UNAUTHORIZED)
            
# Member Views  ----- Sanyam
class MemberRegistrationView(APIView):
    '''
        Registration for a member of the club.
    '''

    def get(self, request, format=None):
        members = Member.objects.all()
        serializer = MemberSerializer(members, many=True)
        return Response(serializer.data)

    def post(self, request):
        request.data['is_member'] = True
        serializer = CustomUserSerializer(data=request.data)
        member_serializer=MemberSerializer(data=request.data)

        if serializer.is_valid():
            if member_serializer.is_valid():
                queryset = CustomUser.objects.filter(email=request.data['email'])

                if queryset.exists():
                    return Response({'msg': 'User already exists'}, status=status.HTTP_406_NOT_ACCEPTABLE)

                serializer.validated_data['password'] = make_password(serializer.validated_data['password'])
                serializer.save()
                user = CustomUser.objects.filter(email=request.data['email'])[0]

                Member.objects.create(user=user)
                member = Member.objects.get(user=user)

                allowed_updates = ['bits_id', 'bits_email',
                                    'github', 'linked_in', 'summary']

                dept_name=request.data['department']
                department=Department.objects.filter(name=dept_name)[0]     #this should always work because depts are fixed
                department.members.add(member)
                member.department = department
                for update in allowed_updates:
                    if update in request.data:
                        setattr(member, update, request.data[update])

                member.save()
                return Response({'msg': 'User Created'}, status=status.HTTP_201_CREATED)
            else:
                return Response({"error_member": member_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)   
        else:
            return Response({"error_user": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)        



class MemberProfileView(APIView):
    '''
        Get and Update member profile information.
    '''

    parser_classes = [JSONParser, MultiPartParser, FormParser]
    def get(self, request):
        try:
            user = request.user
            member = Member.objects.get(user=user)
            member_profile = {"name": user.name, "email": user.email, "bits_id": member.bits_id, "bits_email": member.bits_email, "department": str(member.department), "github": member.github, "codeforces_id": member.codeforces_id, "linked_in": member.linked_in, "skills": member.skills, "summary": member.summary}

            try:
                member_profile["pp"] = member.profile_pic.url
            except:
                pass    
            return Response(member_profile, status=status.HTTP_200_OK)
        except:
            return Response({"msg": "Please authenticate."}, status=status.HTTP_404_NOT_FOUND)

    
    def put(self, request):
        try:
            user = request.user
            member = Member.objects.get(user=user)

            allowed_updates = ['bits_id', 'bits_email', 'github', 'linked_in', 'summary']

            for skill in request.data["skills"]:
                member.skills.append(skill)
            for update in allowed_updates:
                if update in request.data:
                    setattr(member, update, request.data[update])
            member.profile_pic = request.FILES["pp"]

            member.save()

            return Response({"msg": "Profile updated."}, status=status.HTTP_200_OK)
                
        except Member.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)



class CandidateRegistrationView(APIView):
    """
    Creates a new Candidate
    """
    def get(self,request,format=None):
        candidate = Candidate.objects.all()
        serializer = CandidateSerializer(candidate, many=True)
        return Response(serializer.data)



    def post(self, request):
        request.data['is_candidate'] = True
        if 'github' not in request.data:
            request.data['github'] = 'my_github'
        user_serializer = CustomUserSerializer(data=request.data)
        candidate_serializer=CandidateSerializer(data=request.data)
        if user_serializer.is_valid():
            if candidate_serializer.is_valid():
                queryset = CustomUser.objects.filter(email=request.data['email'])

                if queryset.exists():
                    return Response({'msg': 'User already exists'}, status=status.HTTP_406_NOT_ACCEPTABLE)

                user_serializer.validated_data['password'] = make_password(user_serializer.validated_data['password'])
                user_serializer.save()
                user = CustomUser.objects.filter(email=request.data['email'])[0]

                Candidate.objects.create(user=user,pr1=request.data["pr1"],pr2=request.data["pr2"],pr3=request.data["pr3"],pr4=request.data["pr4"],
                pr5=request.data["pr5"],pr6=request.data["pr6"],pr7=request.data["pr7"],pr8=request.data["pr8"],bits_id=request.data['bits_id'],phone_number=request.data['phone_number'],bits_email=request.data['bits_email'],github=request.data['github'],gender=request.data['gender'])

                return Response({'msg': 'Candidate Registered'}, status=status.HTTP_201_CREATED)
            else:
                return Response({"error_candidate": candidate_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)   
        else:
            return Response({"error_user": user_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)        


class CandidateProfileView(APIView):
    '''
        Get and Update candidate profile information.
    '''
    def get(self, request):
        try:
            user = request.user
            member = Candidate.objects.get(user=user)
            serializer = CandidateSerializer(member)
            
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return Response({"msg": "Please authenticate."}, status=status.HTTP_404_NOT_FOUND)

    
    def put(self, request):
        try:
            user = request.user
            candidate = Candidate.objects.get(user=user)

            allowed_updates = ['bits_id', 'bits_email', 'github','phone_number', 'pr1', 'pr2', 'pr3', 'pr4','pr5','pr6','pr7','pr8']
            # print(request)
            for update in allowed_updates:
                if update in request.data:
                    setattr(candidate, update, request.data[update])
            candidate.save()
            return Response({"msg": "Profile updated."}, status=status.HTTP_200_OK)
                
        except Candidate.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
