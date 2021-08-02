from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, name, password=None, is_admin=False, is_staff=False, is_active=True):
        if not email:
            raise ValueError("User must have an email")
        if not password:
            raise ValueError("User must have a password")
        if not name:
            raise ValueError("User must have a name")

        user = self.model(
            email=self.normalize_email(email)
        )
        user.username = email
        user.name = name
        user.password = password
        user.is_admin = is_admin
        user.is_staff = is_staff
        user.is_active = is_active
        user.save(using=self._db)
        return user

    def create_staffuser(self, email, name, password=None):
        user = self.model(
            email=self.normalize_email(email)
        )
        user.username = email
        user.name = name,
        user_role=user_role
        user.password=password
        user.is_staff=True
        user.is_active=True
        user.is_superuser=True
        return user

    def create_superuser(self, email, name, password=None, **extra_fields):
        if not email:
            raise ValueError("User must have an email")
        if not password:
            raise ValueError("User must have a password")
        if not name:
            raise ValueError("User must have a full name")

        user = self.model(
            email=self.normalize_email(email)
        )
        user.username = email
        user.name = name
        user.password = password
        user.admin = True
        user.is_staf = True
        user.is_superuser = True
        user.is_active = True
        user.save(using=self._db)
        return user