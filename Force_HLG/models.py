from django.db import models

class pretest(models.Model):
    timeStamp = models.CharField(max_length=100,blank=True)
    user = models.CharField(max_length=25,blank=True)
    question = models.CharField(max_length=25,blank=True)
    choice = models.CharField(max_length=25)


class pretestLog2(models.Model):
    event = models.CharField(max_length=25)
    user = models.CharField(max_length=25,blank=True)
    timeStamp = models.CharField(max_length=100)
    clickX = models.CharField(max_length=25,blank=True)
    clickY = models.CharField(max_length=25,blank=True)

class pretestMouseEvent(models.Model):
    event = models.CharField(max_length=100)
    user = models.CharField(max_length=25,blank=True)
    timeStamp = models.CharField(max_length=100)
    mouseX = models.CharField(max_length=25,blank=True)
    mouseY = models.CharField(max_length=25,blank=True)
    clickX = models.CharField(max_length=25,blank=True)
    clickY = models.CharField(max_length=25,blank=True)
    clickedITMtl = models.CharField(max_length=25,blank=True)
    clickedITMbr = models.CharField(max_length=25,blank=True)

class pretestLog(models.Model):
    event = models.CharField(max_length=25)
    user = models.CharField(max_length=25,blank=True)
    timeStamp = models.CharField(max_length=100)

class Vectors(models.Model):
    event = models.CharField(max_length=100,blank=True)
    timeStamp = models.CharField(max_length=100,blank=True)
    user = models.CharField(max_length=25,blank=True)
    question = models.CharField(max_length=25,blank=True)
    choice = models.CharField(max_length=25)
    
class vectorsLog(models.Model):
    event = models.CharField(max_length=25)
    user = models.CharField(max_length=25,blank=True)
    videoNumber = models.CharField(max_length=25,blank=True)
    videoTime = models.CharField(max_length=25,blank=True)
    timeStamp = models.CharField(max_length=100)
    clickX = models.CharField(max_length=25,blank=True)
    clickY = models.CharField(max_length=25,blank=True)

class vectorsMouseEvent(models.Model):
    event = models.CharField(max_length=100)
    user = models.CharField(max_length=25,blank=True)
    timeStamp = models.CharField(max_length=100)
    mouseX = models.CharField(max_length=25,blank=True)
    mouseY = models.CharField(max_length=25,blank=True)
    clickX = models.CharField(max_length=25,blank=True)
    clickY = models.CharField(max_length=25,blank=True)
    clickedITMtl = models.CharField(max_length=25,blank=True)
    clickedITMbr = models.CharField(max_length=25,blank=True)

