# from typing_extensions import Required
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError

from PIL import Image
from django.db.models.enums import Choices
from django.db.models.expressions import F

from users.managers import UserManager

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
    
    REQUIRED_FIELDS = ['name']
    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        
        self.username = self.email

    objects = UserManager()


# 1. Visitor    --- Aditya

class Visitor(CustomUser):
    '''
    Visitor class inherits CustomUser and has additional fields of phone, interests and city
    '''
    phone = models.PhoneNumberField(unique=True)
    interests = models.TextField(blank=True, max_length=100) #optional field
    city = models.CharField(blank=True,max_length=20) #optional field


# 2. Member     --- Sanyam
class Member(models.Model):
    '''
    BITS ID
    BITS Email
    department
    githubHandle
    '''
    
    departments = (
        ('cp', 'Competetive Programming'),
        ('fe', 'Frontend Web Development'),
        ('be', 'Backend Web Development'),
        ('ap', 'App Development'),
        ('ui', 'UI/UX'),
    )

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="member")
    bits_id = models.CharField(max_length=50, blank=False, null=False, verbose_name="BITS ID")
    bits_email = models.EmailField(max_length=100, verbose_name="BITS Email", blank=False, null=False)
    department = models.CharField(choices=departments, blank=False, null=False,max_length=2)
    github = models.CharField(max_length=20, blank=False, null=False)
    linked_in = models.CharField(max_length=20)
    summary = models.TextField()

    def __str__(self):
        return f"{self.user.name}'s Profile"

departments=  (
        ('cp', 'Competitive Programing'),
        ('fe', 'Frontend Web Dvelopment'),
        ('be', 'Backend Web Dvelopment'),
				('ap', 'App Devlpment '),
				( 'ui', 'UI/UX ')
    )
gender_choices = (
	('M','Male'),
	('F','Female'),
	('O','Others')
)

class Candidate (CustomUser) :
	
    '''
    A user who registers for recrutiment is a candidate. 
    Candidate class inerits CustomUser and had additionally gender , githubid , first to fifth priority of any candidate
    field_validate function checks if any choice is repeated in the priority of candidate
    '''
    gender= models.CharField(max_length=1,choices=gender_choices)
    bits_id = models.CharField(verbose_name="BITS ID",max_length=13,unique=True,blank=False)
    githubid=models.CharField(verbose_name="Github ID",max_length=30,unique=True,blank=True)

    pr1 = models.CharField(verbose_name="First Priority",max_length=2,choices=departments,default=None)
    pr2 = models.CharField(verbose_name="Second Priority",max_length=2,choices=departments,default=None)
    pr3 = models.CharField(verbose_name="Third Priority",max_length=2,choices=departments,default=None)
    pr4 = models.CharField(verbose_name="Fourth Priority",max_length=2,choices=departments,default=None)
    pr5 = models.CharField(verbose_name="Fifth Priority",max_length=2,choices=departments,default=None)

    def __str__(self):
        return self.name
    
    def save(self,*args,**kwargs) :
        super().save(*args,**kwargs)

    def field_validate(self):
        list=[pr1,pr2,pr3,pr4,pr5]
        if len(list) != len(set(list)):
            raise ValidationError("All preference choices should be different ")
