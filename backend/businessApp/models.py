from django.db import models

# Create your models here.

class BusinessReview (models.Model):
    
    
    uname= models.CharField(max_length=100)
    uemail = models.EmailField(null=False)
    urating = models.IntegerField()
    ureview = models.TextField(null=False)

    def __str__(self):
        return self.uemail


