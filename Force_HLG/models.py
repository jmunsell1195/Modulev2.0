from django.db import models

class pretest(models.Model):
    timeStamp = models.CharField(max_length=100,blank=True)
    user = models.CharField(max_length=25,blank=True)
    question = models.CharField(max_length=25,blank=True)
    choice = models.CharField(max_length=25)
    instructionTime = models.CharField(max_length=25,blank=True)
    quiz1Time = models.CharField(max_length=25,blank=True)
    quiz2Time = models.CharField(max_length=25,blank=True)
    feedbackTime = models.CharField(max_length=25,blank=True)
    duration = models.CharField(max_length=25,blank=True)
    numClicks = models.CharField(max_length=25,blank=True)
    
class log(models.Model):
    event = models.CharField(max_length=25)
    user = models.CharField(max_length=25)
    timeStamp = models.CharField(max_length=25)
    videoTime = models.CharField(max_length=25)

