# Generated by Django 4.0.6 on 2022-07-18 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photoapi', '0005_alter_post_post_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='post_img',
            field=models.ImageField(blank=True, upload_to='images/'),
        ),
    ]