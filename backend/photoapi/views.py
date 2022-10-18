from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.models import User
# from .models import Post
from .models import Post
from .serializers import postSerializers
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login, logout
from django.core.mail import send_mail
import random
from django.contrib.auth.decorators import login_required
from rest_framework.parsers import MultiPartParser
from rest_framework.parsers import FormParser


# from photoapi import serializers
# Create your views here.


def index(request):
    users = User.objects.all()
    print(users)
    return HttpResponse("INdex page")


# class Users(APIView):
#     def post(self, request):
#         if request.method == 'POST':
#             username = request.POST[]
class Posts(APIView):
    # @login_required()
    def get(self, request):
        posts = Post.objects.all()
        # print(posts)
        serializer = postSerializers(posts, many=True)
        print(serializer.data)
        return Response(serializer.data)

    def post(self, request, format=None):
        # parser_classes= (MultiPartParser, FormParser)
        print(request.data)
        # desc= request.data.get('post_desc')
        # img= request.data.get('post_img')
        # post_obj= Post(post_desc= desc, post_img=img)
        # Post.objects.create(post_desc= desc, post_img= img)
        # return Response(status.HTTP_201_CREATED)
        # # post_obj.save()
        # # post_obj= Post.objects.create()

        print("Let's see if its runs")
        # files= request.data['post_img']
        print("Files is: ")
        # print(files)
        # print(request.FILES['post_img'])
        print("data is: ")
        print(request.data)
        serializer = postSerializers(data=request.data)
        print(request.data['post_img'])
        print("Serializer is ", serializer)
        print(serializer.is_valid())
        # print(serializer.errors)
        try:
            if serializer.is_valid():
                print(self.request.data.get('post_img'))
                serializer.save(post_img=self.request.data.get('post_img'))
                print(self.request.data.get('post_img'))
                print("Serializaer is valid ")
                print(serializer.data)
                return Response({'message': serializer.data, 'status': status.HTTP_200_OK})
            else:
                print("Error is: ")
                print(serializer.errors)
                return serializer.errors
        except Exception as e:
            print(e)


class handleSignUp(APIView):
    def post(self, request):
        if request.method == 'POST':
            username = request.POST['username']
            email = request.POST['email']
            password = request.POST['password']

            if User.objects.filter(username=username).exists():

                return Response({'message': 'Username already exists', 'status': status.HTTP_208_ALREADY_REPORTED})
            else:

                muser = User.objects.create_user(username, email, password)
                return Response({'message': 'User has been Created', 'status': status.HTTP_201_CREATED})
        else:
            return Response({'error': 'Error Generated', 'status': status.HTTP_301_MOVED_PERMANENTLY})


class handleLogin(APIView):
    def post(self, request):
        if request.method == 'POST':
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(username= username, password= password)

            if user is not None:
                 login(request, user)
                 return Response({'meessage': 'User authenticated', 'status': status.HTTP_202_ACCEPTED})

            else:
                return Response({'message': 'Wrong Username or Password', 'status': status.HTTP_406_NOT_ACCEPTABLE})

        else:
            Response({'message': 'second else entered', 'status': status.HTTP_406_NOT_ACCEPTABLE})

class generateOtp(APIView):
    def post(self, request):
        if request.method == 'POST':
            otp= str(random.randrange(1231, 9853, 1))
            email = request.POST['email']
            send_mail(
                'Testing Mail',
                'Thanks for signing up at photogram  Please authenticate your email id. Your OTP is: '+otp+ '',
                'yushtesting@outlook.com',
                [email],
                fail_silently= False,
            )
            return Response({'message': 'Email has been sent'})
        else:
            return Response({'message':  'An error occured'})



