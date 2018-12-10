from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from app.models import Goods


def index(request):
    goods=Goods.objects.all()

    return render(request, 'index.html',context={'goods':goods})