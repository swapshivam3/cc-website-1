from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError

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
	gender= models.Choices(max_length=1,Choices=gender_choices)
	githubid=models.CharField(max_length=30,unique=True)
    
	pr1 = models.CharField(verbose_name="First Priority",max_length=2,choices=departments,default=None)
	pr2 = models.CharField(verbose_name="Second Priority",max_length=2,choices=departments,default=None)
	pr3 = models.CharField(verbose_name="Third Priority",max_length=2,choices=departments,default=None)
	pr4 = models.CharField(verbose_name="Fourth Priority",max_length=2,choices=departments,default=None)
	pr5 = models.CharField(verbose_name="Fifth Priority",max_length=2,choices=departments,default=None)

	def __str__(self):
		return f"{self.user.username}'s Profile"
	
	def save(self,*args,**kwargs) :
		super().save(*args,**kwargs)

	def field_validate(self):
		if (self.pr1 == self.pr2 or self.pr1 == self.pr3 or self.pr1 == self.pr4 or self.pr1 == self.pr5 or self.pr2 == self.pr3 or self.pr2 == self.pr4 or self.pr2 == self.pr5 or self.pr3 == self.pr4 or self.pr3 == self.pr5 or self.pr4 == self.pr5  ):
			raise ValidationError("All preference choices should be different ")
