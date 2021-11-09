from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def info(request):
    return render(request,'Force_HLG/details.html')