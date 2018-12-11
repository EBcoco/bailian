from django.conf.urls import url

from app import views

urlpatterns=[
    url(r"^$",views.index,name='index'),
    url(r"^shop/(\d+)/$",views.shop,name='shop'),
    url(r"^register/$",views.register,name='register')
]