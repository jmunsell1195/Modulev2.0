from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.pretest)
admin.site.register(models.pretestLog)
admin.site.register(models.pretestMouseEvent)
admin.site.register(models.Vectors)
admin.site.register(models.vectorsLog)
admin.site.register(models.vectorsMouseEvent)