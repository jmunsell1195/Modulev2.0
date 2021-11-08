from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'Login'
urlpatterns = [
    path('', views.loginUser, name='Login'),
    path('logout/',views.logoutUser,name="logout"),
]