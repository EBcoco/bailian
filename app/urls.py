from django.conf.urls import url

from app import views

urlpatterns=[
    url(r"^$",views.index,name='index'),
    url(r"^shop/(\d+)/$",views.shop,name='shop'),
    url(r"^register/$",views.register,name='register'),
    url(r"^login/$",views.login,name='login'),
    url(r"^checkname/$",views.checkname,name='checkname'),
    url(r"^checkemail/$",views.checkemail,name='checkemail'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^car/$', views.car, name='car'),
]