import hashlib
import random
import time

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from app.models import Goods, User


def index(request):
    goods = Goods.objects.all()
    token = request.session.get('token')

    data = {'goods': goods}

    if token:
        user = User.objects.get(token=token)
        data['name'] = user.name

    return render(request, 'index.html', context=data)


def shop(request, id):
    good = Goods.objects.filter(id=id).first()
    img1 = good.img1
    img2 = good.img2
    img3 = good.img3
    img4 = good.img4
    name = good.name
    cost = good.cost
    price = good.price
    init = good.init
    data = {
        'img1': img1,
        'img2': img2,
        'img3': img3,
        'img4': img4,
        'name': name,
        'price': price,
        'cost': cost,
        'init': init
    }
    return render(request, 'shop.html', context=data)

def generate_token():
    md5 = hashlib.md5()
    temp = str(time.time()) + str(random.random())
    md5.update(temp.encode('utf-8'))
    return  md5.hexdigest()

def generate_password(param):
    md5 = hashlib.md5()
    md5.update(param.encode('utf-8'))
    return md5.hexdigest()


def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        user = User()
        user.email = request.POST.get('email')
        user.password = generate_password(request.POST.get('password'))
        user.name = request.POST.get('name')
        user.phone = request.POST.get('phone')

        # 状态保持
        user.token = generate_token()
        user.save()
        request.session['token'] = user.token

        return redirect('bl:index')



def checkname(request):
    # 邮箱
    name = request.GET.get('name')

    users = User.objects.filter(name=name)
    if users.exists():
        return JsonResponse({'msg': '用户名已被占用!','status': 0})
    else:
        return JsonResponse({'msg': '用户名可以使用!','status': 1})


def checkemail(request):
    # 邮箱
    email = request.GET.get('email')

    users = User.objects.filter(email=email)
    if users.exists():
        return JsonResponse({'msg': '账号已被占用!', 'status': 0})
    else:
        return JsonResponse({'msg': '账号是可以使用!', 'status': 1})


def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        # print(generate_password(password))

        try:
            # 不存在，会抛出异常
            # 多个时，会抛出异常　【email是唯一约束】
            user = User.objects.get(email=email)
            if user.password == generate_password(password):
                user.token = generate_token()
                user.save()
                request.session['token'] = user.token
                return redirect('bl:index')
            else:
                return render(request, 'login.html', context={'p_err': '密码错误'})
        except:
            return render(request, 'login.html', context={'u_err': '账号不存在'})


def logout(request):
    request.session.flush()
    return redirect('bl:index')


def car(request):
    return render(request,'car.html')