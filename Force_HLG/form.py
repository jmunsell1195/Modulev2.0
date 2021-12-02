from django import forms
from .models import *

class pretestForm(forms.ModelForm):
    class Meta:
        model = pretest
        fields = ('choice',)
    choice_field = [('1',''),
    ('2',''),
    ('3',''),('4','')]
    choice = forms.CharField(widget=forms.RadioSelect(choices=choice_field,attrs={'style':"width:1.2rem; height:1.2rem"}))

class vectorLogForm(forms.ModelForm):
        class Meta:
            model = vectorsLog
            fields = ('event','timeStamp')

class vectorForm(forms.ModelForm):
    class Meta:
        model = Vectors
        fields = ('choice',)
    choice_field = [('1',''),
    ('2',''),
    ('3',''),('4','')]
    choice = forms.CharField(widget=forms.RadioSelect(choices=choice_field,attrs={'style':"width:1.2rem; height:1.2rem"}))

class vectorLogForm(forms.ModelForm):
        class Meta:
            model = vectorsLog
            fields = ('event','timeStamp','videoTime','videoNumber')




