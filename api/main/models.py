
from django.db import models

from users.models import Visitor ,Member,CustomUser





# Feedback ----  Dhruv

class Feedback(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    review = models.TextField(help_text="Write your valuable feedback")


# Departments ---- Aditya

# Create your models here.

class Department(models.Model):
    '''
    Department class contains the different departments of the club. 
    It has the fields of name, a short description, details of the tech stack used and members field.
    The members class and Department class have a ManyToMany relationship

    '''
    departments = (
        ('cp', 'Competetive Programming'),
        ('fe', 'Frontend Web Development'),
        ('be', 'Backend Web Development'),
        ('ap', 'App Development'),
        ('ui', 'UI/UX'),
        ('gd', 'Game Development'),
    )
    name = models.CharField(choices=departments, blank=False, max_length=2, primary_key=True)
    description = models.TextField()
    tech_stack = models.CharField(max_length=200)
    members = models.ManyToManyField(Member, related_name= "dept_member")


    def __str__(self):
        return self.name

class Achievement(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    description = models.TextField()
    slug = models.SlugField(max_length=420, unique=True)
    image = models.ImageField(upload_to="", blank=True, null=True) # Update this.

    def __str__(self):
        return self.title 