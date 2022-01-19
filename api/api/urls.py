"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from users.views import GoogleLogin,social_login #,login_helper
from users.adapters import GoogleOAuth2AdapterIdToken
from allauth.socialaccount.providers.oauth2.views import OAuth2CallbackView
from django.http import HttpResponse

def load_tester(request):
    content = 'loaderio-02f752c0c85733ff78633507fe01fc51'
    return HttpResponse(content, content_type='text/plain')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user-api/',include('users.urls')),
    path('main-api/',include('main.urls')),
    path('exam-api/',include('exam.urls')),
    path('rec-api/',include('recruitment.urls')),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^rest-auth/google/$', GoogleLogin.as_view(), name='google_login'),
    path("rest-auth/google/callback/",social_login),
    # path("rest-auth/googlehelper/",login_helper),
    path("loaderio-02f752c0c85733ff78633507fe01fc51/",load_tester),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
