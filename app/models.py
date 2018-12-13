from django.db import models

# Create your models here.

class Goods(models.Model):
    name=models.CharField(max_length=40)
    #售价
    price=models.IntegerField()
    #参考价
    cost=models.IntegerField()
    #单位
    init=models.CharField(max_length=40)
    #商品图
    img=models.CharField(max_length=100)
    #细节图
    img1=models.CharField(max_length=100)
    img2=models.CharField(max_length=100)
    img3=models.CharField(max_length=100)
    img4=models.CharField(max_length=100)

class User(models.Model):
    # 邮箱登录
    email = models.CharField(max_length=40, unique=True)
    # 密码
    password = models.CharField(max_length=256)
    # 名字
    name = models.CharField(max_length=40, unique=True)
    # 手机号
    phone = models.CharField(max_length=20)
    # 令牌
    token = models.CharField(max_length=256)

class car(models.Model):
    user=models.ForeignKey(User)
    good=models.ForeignKey(Goods)
    number=models.IntegerField()