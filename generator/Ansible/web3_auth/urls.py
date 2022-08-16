from django.urls import path
from . import views

urlpatterns = [
    path('moralis_auth', views.moralis_auth, name='moralis_auth'), # Contains the data where a user can authenticate
    path('request_message', views.request_message, name='request_message'), # Make a request to Moralis Auth API for a message to be signed
    path('my_profile', views.my_profile, name='my_profile'), # Show current profile info for a user
    path('verify_message', views.verify_message, 'verify_message'), # Verify a message that was signed
]