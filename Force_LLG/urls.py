from django.urls import path
from . import views

urlpatterns = [
    path('',views.details),
    path('warmup/',views.pretest),
    path('vectors/',views.vectors)
]