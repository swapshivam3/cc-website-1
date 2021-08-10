from api.users.models import Visitor
from api import users
from django.db import models
from users.models import Visitor

# Feedback ----  Dhruv

class Feedback(models.Model):
    user = models.ForeignKey(Visitor)
    date = models.DateField(auto_now_add=True)
    review = models.TextField(help_text="Write your valuable feedback")


# Departments ---- Aditya

# Create your models here.
