from http.client import responses
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import TaskSerializer
from .models import Task


# Create your views here.
class TaskList(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)

        return Response(serializer.data)


class TaskDetail(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, pk):
        tasks = Task.objects.get(id=pk)
        serializer = TaskSerializer(tasks, many=False)

        return Response(serializer.data)


class TaskCreate(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        serializer = TaskSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)

        else:
            return Response("Error with creating")


class TaskUpdate(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        task = Task.objects.get(id=pk)
        serializer = TaskSerializer(instance=task, data=request.data, partial=True)  # let you update partially

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)


class TaskDelete(APIView):
    permission_classes = (IsAuthenticated,)

    def delete(self, request, pk):
        task = Task.objects.get(id=pk)
        task.delete()

        return Response("item deleted")


class JwtDetails(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        response = JWTAuthentication().authenticate(request)

        print(response)

        if response is not None:
            user, token = response

        print(user)
        print(user.email)
        print(user.id)
        print(user.name)
        print(user.surname)

        return Response(token.payload)
