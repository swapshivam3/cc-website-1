from django.apps import AppConfig


class MainConfig(AppConfig):
    name = 'main'
    def ready(self):
        from .models import Department
        Department.objects.get_or_create(name='cp')
        Department.objects.get_or_create(name='fe')
        Department.objects.get_or_create(name='be')
        Department.objects.get_or_create(name='ap')
        Department.objects.get_or_create(name='ui')
