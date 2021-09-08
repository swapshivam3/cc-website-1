from django.contrib import admin

from .models import Feedback,Department, Achievement
# Register your models here.
admin.site.register(Feedback)
admin.site.register(Department)
admin.site.register(Achievement)

