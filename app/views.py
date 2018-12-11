from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from app.models import Goods


def index(request):
    goods=Goods.objects.all()

    return render(request, 'index.html',context={'goods':goods})


def shop(request,id):
    good=Goods.objects.filter(id=id).first()
    img1=good.img1
    img2=good.img2
    img3=good.img3
    img4=good.img4
    name=good.name
    cost=good.cost
    price=good.price
    init=good.init
    data={
        'img1':img1,
        'img2':img2,
        'img3':img3,
        'img4':img4,
        'name':name,
        'price':price,
        'cost':cost,
        'init':init
    }
    return render(request,'shop.html',context=data)


def register(request):
    return render(request,'register.html')