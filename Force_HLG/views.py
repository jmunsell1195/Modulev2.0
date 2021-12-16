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
            print(request.headers)
            form = form.save(commit=False)
            form.user = request.user
            form.question = request.headers['Question']
            form.quiz1Time = request.headers['quiz1time']
            form.timeStamp = request.headers['timeStamp']
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
    if request.method == "POST":
        if request.headers['event'] == 'submission':
            form = vectorForm(request.POST)
            if form.is_valid():
                form = form.save(commit=False)
                form.event = 'submission'
                form.user = request.user
                form.timeStamp = request.headers['datetime']
                form.numClicks = request.headers['clicks']
                form.save()
                print('saved')
                return HttpResponse('okay!')
        else:
            form = vectorLogForm(request.POST)
            print(form.errors)
            if form.is_valid():
                print(form['event'])
                form.save()
                return HttpResponse('AWESOME')

    else:
        form = vectorForm()
        log = vectorLogForm()
        context = {'form':form,'log':log}
        return render(request,"Force_HLG/vectors.html",{"context":context})

def forces(request):
    return render(request,"Force_HLG/n2.html")