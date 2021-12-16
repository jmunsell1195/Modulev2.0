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

class pretestLogForm(forms.ModelForm):
        class Meta:
            model = pretestLog
            fields = ('event','timeStamp','clickX','clickY')

class pretestMouseForm(forms.ModelForm):
        class Meta:
            model = pretestMouseEvent
            fields = ('event','timeStamp','mouseX','mouseY','clickX','clickY','clickedITMtl','clickedITMbr')

class pretestMouseForm2(forms.ModelForm):
        class Meta:
            model = pretestMouseEvent
            fields = ('event','timeStamp','mouseX','mouseY','clickX','clickY','clickedITMtl','clickedITMbr')


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
            fields = ('event','timeStamp')

class vectorMouseForm(forms.ModelForm):
        class Meta:
            model = vectorsMouseEvent
            fields = ('event','timeStamp','mouseX','mouseY','clickX','clickY','clickedITMtl','clickedITMbr')

class vectorMouseForm2(forms.ModelForm):
        class Meta:
            model = vectorsMouseEvent
            fields = ('event','timeStamp','mouseX','mouseY','clickX','clickY','clickedITMtl','clickedITMbr')
