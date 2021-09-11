from django.db import models

# Create your models here.


class Question(models.Model):
    is_blank=models.BooleanField()
    question = models.CharField(max_length=500, blank=True,null=True)
    question_file = models.FileField(blank=True, null=True)
    answer = models.IntegerField(blank=True, null=True)
    blank_answer = models.CharField(max_length=500, blank=True,null=True)
    option_one_text = models.CharField(max_length=500, blank=True, null=True)
    option_one_file = models.FileField(blank=True, null=True)
    option_two_text = models.CharField(max_length=500, blank=True, null=True)
    option_two_file = models.FileField(blank=True, null=True)
    option_three_text = models.CharField(max_length=500, blank=True, null=True)
    option_three_file = models.FileField(blank=True, null=True)
    option_four_text = models.CharField(max_length=500, blank=True, null=True)
    option_four_file = models.FileField(blank=True, null=True)

    def __str__(self):
        return self.question
