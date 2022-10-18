from rest_framework import serializers
# from django.contrib.auth.models import User
from .models import Post
import base64
# from rest_framework.fields import Base64ImageField

class postSerializers(serializers.ModelSerializer):
    # post_img= Base64ImageField()
    class Meta:
        model= Post
        # fields= ('post_desc', 'post_img')
        fields= '__all__'

   

