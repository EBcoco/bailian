# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-12-12 12:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=40)),
                ('password', models.CharField(max_length=256)),
                ('name', models.CharField(max_length=40, unique=True)),
                ('phone', models.CharField(max_length=20)),
                ('token', models.CharField(max_length=256)),
            ],
        ),
    ]
