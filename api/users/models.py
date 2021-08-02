from django.db import models
from django.contrib.auth.models import AbstractUser

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
    
    REQUIRED_FIELDS = ['name', 'email']
    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        
        self.username = self.email

    objects = UserManager()


# 1. Visitor    --- Aditya
'''
    name
    phone
    .
    .
    .
'''

# 2. Member     --- Sanyam
'''
    BITS ID
    BITS Email
    department
    githubHandle
    ...
'''

class Member(models.Model):
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
    department = models.CharField(choices=departments, blank=False, null=False)
    github = models.CharField(max_length=20, blank=False, null=False)
    linked_in = models.CharField(max_length=20)
    summary = models.TextField()

    def __str__(self):
        return f"{self.user.name}'s Profile"

# 3. Candidate  --- Dhruv
'''
    DomainOfInterest 
    Gender 
    .
    .
    .
'''
