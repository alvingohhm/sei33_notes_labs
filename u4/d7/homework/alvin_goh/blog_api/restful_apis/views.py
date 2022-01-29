from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import BlogSerializer
from .models import Blog

# Create your views here.
class BlogShowAll(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        blogs = Blog.objects.all()
        serializer = BlogSerializer(blogs, many=True)

        return Response(serializer.data)


class BlogDetail(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, pk):
        blogs = Blog.objects.get(id=pk)
        serializer = BlogSerializer(blogs, many=False)

        return Response(serializer.data)


class BlogCreate(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        serializer = BlogSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)

        else:
            return Response("Error with creating")


class BlogUpdate(APIView):
    permission_classes = (IsAuthenticated,)

    def put(self, request, pk):
        print("update")
        blog = Blog.objects.get(id=pk)
        serializer = BlogSerializer(instance=blog, data=request.data, partial=True)  # let you update partially

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)


class BlogDelete(APIView):
    permission_classes = (IsAuthenticated,)

    def delete(self, request, pk):
        print("delete")
        blog = Blog.objects.get(id=pk)
        blog.delete()

        return Response("item deleted")
