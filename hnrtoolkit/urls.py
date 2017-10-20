"""hnrtoolkit URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

# Para hacer funcionar los directorios de static files
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url
from django.contrib import admin
from blog.views import (HomeBlogView, MzTestView, PwebJqueryView, PwebJquery2View, 
PwebEj1View, PwebJquery3View, PwebJquery4View, PwebJquery5View,PwebCalculadora,PwebFormGen)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', HomeBlogView.as_view(),name="home_blog"),
    url(r'^mz-test/$', MzTestView.as_view(), name='mz-test'),
    url(r'^pweb-jquery1/$', PwebJqueryView.as_view(), name='pweb-jquery'),
    url(r'^pweb-jquery2/$', PwebJquery2View.as_view(), name='pweb-jquery2'),
    url(r'^pweb-jquery3/$', PwebJquery3View.as_view(), name='pweb-jquery3'),
    url(r'^pweb-jquery4/$', PwebJquery4View.as_view(), name='pweb-jquery4'),
    url(r'^pweb-jquery5/$', PwebJquery5View.as_view(), name='pweb-jquery5'),
    url(r'^pweb-ej1/$', PwebEj1View.as_view(), name='pweb-ej1'),
    url(r'^pweb-calculadora/$', PwebCalculadora.as_view(), name='pweb-calculadora'),
    url(r'^pweb-formgen/$', PwebFormGen.as_view(), name='pweb-formgen'),
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)