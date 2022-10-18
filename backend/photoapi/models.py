from django.db import models

# Create your models here.
class Post(models.Model):
    post_id= models.AutoField(primary_key=True)
    post_desc= models.CharField(max_length=300)
    post_img= models.ImageField(upload_to= 'images/', blank= True)
    post_time= models.DateField(auto_now_add=True)
