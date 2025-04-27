from rest_framework.decorators import api_view 
from rest_framework.response import Response 
from rest_framework import status
from .models import Contacts 
from .serializer import ContactSerializer

@api_view(['GET'])
def get_contacts(request):
    contacts = Contacts.objects.all()
    serialized_data = ContactSerializer(contacts, many = True).data
    return Response(serialized_data)

@api_view(['POST'])
def add_contacts(request):
    data = request.data
    serializer = ContactSerializer(data = data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def edit_contacts(request, pk):
    try:
        contact = Contacts.objects.get(pk=pk)
    except Contacts.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        data = request.data
        serializer = ContactSerializer(contact, data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    elif request.method == 'DELETE':
        contact.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)