from django.apps import AppConfig
import sys

class MainConfig(AppConfig):
    name = 'main'
    def ready(self):
        is_manage_py = any(arg.casefold().endswith("manage.py")
                           for arg in sys.argv)
        is_runserver = any(arg.casefold() == "runserver" for arg in sys.argv)
        if (is_manage_py and is_runserver) or (not is_manage_py):
            from .models import Department
            Department.objects.get_or_create(name='cp')
            Department.objects.get_or_create(name='fe')
            Department.objects.get_or_create(name='be')
            Department.objects.get_or_create(name='ap')
            Department.objects.get_or_create(name='ui')
