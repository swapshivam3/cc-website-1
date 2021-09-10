from django.db import models

# Create your models here.


class Question(models.Model):
    #Images are to be handled properly as too heavy, change this, will probably need Image processors
    #Considering 5KB images, 5 images per question, 20 questions, 1000 students -> ~ 500 MB transfer
    is_blank=models.BooleanField()
    question=models.CharField(max_length=500)
    question_image=models.ImageField(blank=True)
    answer=models.IntegerField(blank=False)
    blank_answer = models.CharField(max_length=500)
    option_one_text = models.CharField(max_length=500)
    option_one_image=models.ImageField()
    option_two_text = models.CharField(max_length=500)
    option_two_image=models.ImageField()
    option_three_text = models.CharField(max_length=500)
    option_three_image = models.ImageField()
    option_four_text = models.CharField(max_length=500)
    option_four_image = models.ImageField()
