from django.urls import path
import os
from businessApp import views

urlpatterns = [
    path('/postbreview', views.createBusinessReview, name='CREATEBUSINESSREVIEW' ),
    path('/getbreview', views.viewBusinessReview, name='VIEWBUSINESSREVIEW')

]