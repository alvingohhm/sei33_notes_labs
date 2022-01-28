# from django.shortcuts import render
from django.http import HttpResponse
from .models import Members


def index(request):
    # members = Members.objects.all()[1:20]
    members = Members.objects.all()
    output = ", ".join([member.name for member in members])

    return HttpResponse(output)


def add_member(request):
    member = Members(name="Harry")
    member.save()

    return HttpResponse("created")


def del_member(request):
    member = Members.objects.filter(name="HARRY")
    member.delete()

    return HttpResponse("deleted")


def update_member(request):
    member = Members.objects.get(name="Harry")
    member.name = "HARRY"
    member.save()

    return HttpResponse("updated")
