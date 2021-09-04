from django.contrib import admin
from .models import Candidate, CustomUser, Member, Visitor

admin.site.register(Candidate)
admin.site.register(CustomUser)
admin.site.register(Member)
admin.site.register(Visitor)
# Register your models here.
