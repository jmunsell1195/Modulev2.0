from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.info,name='force'),
    path('warmup/',views.pretest),
]