# Generated by Django 4.0.6 on 2022-07-17 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photoapi', '0004_alter_post_post_desc_alter_post_post_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='post_img',
            field=models.FileField(blank=True, null=True, upload_to='images/'),
        ),
    ]
