from django.shortcuts import render
from django.http import HttpResponse
from .form import *
import pandas as pd

# Create your views here.
def info(request):
    return render(request,'Force_HLG/details.html')

def pretest(request):
    if request.method == "POST":
        if request.headers['event'] == 'submission':
            form = pretestForm(request.POST)
            if form.is_valid():
                form = form.save(commit=False)
                form.user = request.user
                form.question = request.headers['question']
                form.timeStamp = request.headers['timeStamp']
                form.save()
                return HttpResponse('There was a problem')
            else: 
                print(form.errors)
        elif request.headers['event'] == 'page':
            form = pretestLogForm(request.POST)
            if form.is_valid():
                form = form.save(commit=False)
                form.user = request.user
                form.save()
                print(request.user)
                print('log form saved')
                return HttpResponse('yay')
        elif request.headers['event'] == 'mouse':
            print('mouse')
            form = pretestMouseForm(request.POST)
            if form.is_valid():
                form = form.save(commit=False)
                form.user = request.user
                form.save()
                return HttpResponse('There was a problem')
            
    else:
        form_list = [pretestForm() for i in range(10)]
        form_label_list = ['form'+str(i+1) for i in range(10)]
        forms = dict(zip(form_label_list,form_list))
        forms['log'] = pretestLogForm()
        forms['mouse'] = pretestMouseForm()
        forms['mouse2'] = pretestMouseForm()
        return render(request,'Force_HLG/pretest.html',{'forms':forms})



def vectors(request):
    if request.method == "POST":
        print('post')
        if request.headers['event'] == 'submission':
            form = vectorForm(request.POST)
            if form.is_valid():
                form = form.save(commit=False)
                form.user = request.user
                form.timeStamp = request.headers['datetime']
                form.save()
                print("choice_form_saved")
                return HttpResponse('yay')
        elif request.headers['event'] == 'page':
            form = vectorLogForm(request.POST)
            if form.is_valid():
                form.save(commit=False)
                form.user = request.user
                form.save()
                print(request.user)
                print('log form saved')
                return HttpResponse('yay')
        else:
            form = vectorMouseForm(request.POST)
            if form.is_valid():
                form.save(commit=False)
                form.user = request.user
                form.save()
                return HttpResponse('yay')
            else:
                print(form.errors)
    else:    
        form = vectorForm()
        log = vectorLogForm()
        mouse = vectorMouseForm()
        mouse2 = vectorMouseForm2()
        context = {'form':form,'log':log,'mouse':mouse,'mouse2':mouse2}
        return render(request,'Force_HLG/vectors.html',{"context":context})

def forces(request):
    return render(request,'Force_HLG/n2.html')
