from django.db import models

# Create your models here.

class Goods(models.Model):
    name=models.CharField(max_length=40)
    price=models.IntegerField()
    cost=models.IntegerField()
    init=models.CharField(max_length=40)
    img=models.CharField(max_length=100)
    img1=models.CharField(max_length=100)
    img2=models.CharField(max_length=100)
    img3=models.CharField(max_length=100)
    img4=models.CharField(max_length=100)

