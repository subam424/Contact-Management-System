from django.urls import path
from .views import *

urlpatterns = [
    path('contacts/', get_contacts, name="get_contacts"),
    path('contacts/add', add_contacts, name="add_contacts"),
    path('contacts/<int:pk>', edit_contacts, name="edit_contacts"),
]