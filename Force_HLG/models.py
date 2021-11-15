from django.db import models

class quiz(models.Model):
    user = models.CharField(max_length=25)
    question = models.CharField(max_length=25)
    choice = models.CharField(max_length=25)
    instruction_time = models.CharField(max_length=25,blank=True)
    quiz1_time = models.CharField(max_length=25,blank=True)
    quiz2_time = models.CharField(max_length=25,blank=True)
    feedback_time = models.CharField(max_length=25,blank=True)
    duration = models.CharField(max_length=25,blank=True)
