# Generated by Django 4.0.6 on 2022-07-09 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('post_id', models.AutoField(primary_key=True, serialize=False)),
                ('post_desc', models.CharField(max_length=300)),
                ('post_img', models.ImageField(upload_to='')),
                ('post_time', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
