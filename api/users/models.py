# from typing_extensions import Required
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
# from phonenumber_field.modelfields import PhoneNumberField
from PIL import Image
from django.db.models.expressions import F
from jsonfield import JSONField
# from django.contrib.postgres.fields import ArrayField

from .managers import UserManager

# Base User
class CustomUser(AbstractUser):
    """
    Parent model of all Users in the system. When a user first registers on the site, an 
    instance of this model is created for the user and becomes the indexing model for all 
    other models (eg. Visitor, Candidate, Member).
    """
    email = models.EmailField(verbose_name = "Email", max_length=254, unique = True)
    name = models.CharField(verbose_name = "Name", max_length=50)
    username = models.CharField(max_length=255, blank = True, null = True, default = "user")    
    is_visitor = models.BooleanField(default=False)
    is_candidate = models.BooleanField(default=False)
    is_member = models.BooleanField(default=False)
    REQUIRED_FIELDS = ['name']
    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email
    
    def save(self, *args, **kwargs):
        self.username = self.email
        super().save(*args, **kwargs)
        
    # def check_password(raw_password, hashed_password):           //dont use right now
    #     if self.password == raw_password:
    #         return True
    #     else:
    #         return False
        

    objects = UserManager()


# 1. Visitor    --- Aditya

class Visitor(models.Model):
    '''
    Visitor class inherits CustomUser and has additional fields of phone, interests and city
    '''

    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True,related_name="visitor")
    # phone = PhoneNumberField(unique=True, null=True)
    interests = models.TextField(blank=True, max_length=100) #optional field
    city = models.CharField(blank=True, max_length=100) #optional field


# 2. Member     --- Sanyam
class Member(models.Model):
    '''
    BITS ID
    BITS Email
    department
    githubHandle
    '''

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="member")   
    
    bits_id = models.CharField(max_length=50, blank=False, null=False, verbose_name="BITS ID", default="20XXXXXSXXXX")
    department = models.ForeignKey('main.Department', on_delete=models.CASCADE, related_name="department", blank=True,null=True)    
    github = models.CharField(max_length=20, blank=True, null=True)
    codeforces_id=models.CharField(max_length=30,blank=True)
    linked_in = models.CharField(max_length=20,blank=True)
    profile_pic = models.FileField(upload_to='profile_pics', blank=True, null=True)
    skills = []
    summary = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.name}'s Profile"



class Candidate (models.Model) :
    '''
    A user who registers for recrutiment is a candidate. 
    Candidate class inerits CustomUser and had additionally gender , githubid , first to fifth priority of any candidate
    field_validate function checks if any choice is repeated in the priority of candidate
    '''
    departments=  (
        ('cp', 'Competetive Programming'),
        ('fe', 'Frontend Web Development'),
        ('be', 'Backend Web Development'),
        ('ap', 'App Development'),
        ('ui', 'UI/UX'),
        ('gd', 'Game Development'),
        ('vi', 'Video Editing'),
        ('gr', 'Graphic Design'),
    )
    gender_choices = (
        ('M','Male'),
        ('F','Female'),
        ('O','Others')
    )
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, primary_key=True,related_name="candidate")
    
    gender= models.CharField(max_length=1,choices=gender_choices)
    bits_id = models.CharField(verbose_name="BITS ID",max_length=13,blank=False,null=False,default="2021XXXXXXXXP")
    # bits_email = models.EmailField(max_length=100, verbose_name="BITS Email", blank=False, null=False, default="f20xxxxxx@pilani.bits-pilani.ac.in")
    github = models.CharField(max_length=100, blank=True, null=True, default="")
    
    pr1 = models.CharField(verbose_name="First Priority",max_length=2,choices=departments,default=None)
    pr2 = models.CharField(verbose_name="Second Priority",max_length=2,choices=departments,default=None)
    pr3 = models.CharField(verbose_name="Third Priority",max_length=2,choices=departments,default=None)
    pr4 = models.CharField(verbose_name="Fourth Priority",max_length=2,choices=departments,default=None)
    pr5 = models.CharField(verbose_name="Fifth Priority",max_length=2,choices=departments,default=None)
    pr6 = models.CharField(verbose_name="Sixth Priority",max_length=2,choices=departments,default=None)
    pr7 = models.CharField(verbose_name="Seventh Priority",max_length=2,choices=departments,default=None)
    pr8 = models.CharField(verbose_name="Eigth Priority",max_length=2,choices=departments,default=None)
    
    phone_number=models.CharField(max_length=20,blank=True,null=True,default="")
 
    answer_json=JSONField()
    exam_given=models.BooleanField(default=False)
    exam_attempt_time=models.TextField(default="null")
    exam_given_time = models.TextField(default="null") 
    score=models.IntegerField(default=-1,blank=True)
    
    #a phone number field is required over here, or link it using visitor upgrade to candidate


    # department_priorties=ArrayField(
    # models.CharField(verbose_name="Department Priorities",max_length=2,choices=departments,default=None,validators=[field_validate]),
    # size=5
    # )

    def __str__(self):
         return f"{self.user.name}'s Profile"
    
   

    
    
