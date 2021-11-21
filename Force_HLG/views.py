from django.shortcuts import render
from django.http import HttpResponse
from .form import *
import pandas as pd

# Create your views here.
def info(request):
    return render(request,'Force_HLG/details.html')

def pretest(request):
    if request.method == "POST":
        form = pretestForm(request.POST)
        if form.is_valid():
            form = form.save(commit=False)
            form.user = request.user
            form.question = request.headers['question']
            form.quiz1Time = request.headers['quiz1time']
            form.timeStamp = pd.Timestamp.now()
            form.save()
            return HttpResponse('There was a problem')
        else: 
            print(form.errors)
    
    else:
        form_list = [pretestForm() for i in range(10)]
        form_label_list = ['form'+str(i+1) for i in range(10)]
        forms = dict(zip(form_label_list,form_list))
        return render(request,'Force_HLG/pretest.html',{'forms':forms})

def vectors(request):
    return render(request,"Force_HLG/vectors.html")