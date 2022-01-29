from turtle import title
from django.db import models

# Create your models here.
class Blog(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    post = models.TextField()
    date_of_post = models.DateField(auto_now_add=True, auto_now=False)

    def __str__(self):
        return self.title
