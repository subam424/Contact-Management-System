from django.db import models

class Contacts(models.Model):
    name = models.CharField(max_length=50)
    role = models.CharField(max_length=50, blank=True, null=True, default="No Role")
    desc = models.CharField(max_length=100, blank=True, null=True, default="No Description")

    def __str__(self):
        return self.name
