
# from pathlib import Path
from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name= 'index'),
    path('post/', views.Posts.as_view(), name= 'getPosts'),
    path('signup/', views.handleSignUp.as_view(), name= 'handleSignup'),
    path('getotp/', views.generateOtp.as_view(), name= 'handleSignup'),
    path('login/', views.handleLogin.as_view(), name= 'handleLogin')
]
# urlpatterns  += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)