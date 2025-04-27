from rest_framework import serializers
from .models import Contacts

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = '__all__'
        extra_kwargs = {
            'role': {'required': False},
            'desc': {'required': False},
        }

    def create(self, validated_data):
        role = validated_data.get('role', '').strip()
        desc = validated_data.get('desc', '').strip()

        if not role:
            validated_data['role'] = "No Role"
        if not desc:
            validated_data['desc'] = "No Description"
        
        return super().create(validated_data)