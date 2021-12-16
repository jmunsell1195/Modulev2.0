# Generated by Django 3.2.8 on 2021-12-09 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Force_LLG', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='vectorsMouseEvent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.CharField(max_length=25)),
                ('user', models.CharField(blank=True, max_length=25)),
                ('timeStamp', models.CharField(max_length=100)),
                ('mouseX', models.CharField(max_length=25)),
                ('mouseY', models.CharField(max_length=25)),
                ('clickX', models.CharField(max_length=25)),
                ('clickY', models.CharField(max_length=25)),
                ('clickedITMtl', models.CharField(max_length=25)),
                ('clickedITMbr', models.CharField(max_length=25)),
            ],
        ),
    ]
