# Generated by Django 3.2.8 on 2021-12-16 02:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Force_LLG', '0005_pretestmouseevent'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pretest',
            name='duration',
        ),
        migrations.RemoveField(
            model_name='pretest',
            name='feedbackTime',
        ),
        migrations.RemoveField(
            model_name='pretest',
            name='instructionTime',
        ),
        migrations.RemoveField(
            model_name='pretest',
            name='numClicks',
        ),
        migrations.RemoveField(
            model_name='pretest',
            name='quiz1Time',
        ),
        migrations.RemoveField(
            model_name='pretest',
            name='quiz2Time',
        ),
        migrations.RemoveField(
            model_name='vectors',
            name='duration',
        ),
        migrations.RemoveField(
            model_name='vectors',
            name='feedbackTime',
        ),
        migrations.RemoveField(
            model_name='vectors',
            name='instructionTime',
        ),
        migrations.RemoveField(
            model_name='vectors',
            name='numClicks',
        ),
        migrations.RemoveField(
            model_name='vectors',
            name='quiz1Time',
        ),
        migrations.RemoveField(
            model_name='vectors',
            name='quiz2Time',
        ),
    ]
