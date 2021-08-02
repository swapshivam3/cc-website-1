from django.db import models
from django.contrib.auth.models import AbstractUser

from PIL import Image

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

# 3. Candidate  --- Dhruv
'''
    DomainOfInterest 
    Gender 
    .
    .
    .
'''
