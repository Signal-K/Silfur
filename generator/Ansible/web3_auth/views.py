import json
import requests

from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User

# Required moralis functionality with py backend
# Fetch & authenticate from cloud moralis and later self-hosted moralis
# Connection method w/ signing for admin section & db -> db connection between mongo/rethinkdb and regular moralis server
# Keep an eye on https://github.com/Signal-K/polygon/commit/d02381ba424bcee12a76597b715f5f246dbfca9e

API_KEY = ''

def moralis_auth(request):
    return render(request, 'login.html', {}) # view for the authentication (in django class)

def my_profile(request): # profile info view
    return render(request, 'profile.html', {})

def request_message(request): # Request a message from Moralis, signed with metamask
    data = json.loads(request.body)
    print(data)

    REQUEST_URL = 'https://authapi.moralis.io/challenge/request/evm'
    request_object = {
        'domain': "defi.finance",
        'chainId': 1,
        'address': data['address'], # this is send to `if x.status_code == 201`
        'statement': 'Please Confirm',
        'uri': 'https://defi.finance',
        'expirationTime': '2023-01-01T00:00:00.000Z',
        'notBefore': '2020-01-01T00:00:00.000Z',
        'timeout': 15,
    }
    x = requests.post(
        REQUEST_URL,
        json=request_object,
        headers={'X-API-KEY': API_KEY}
    )

    return JsonResponse(json.loads(x.text))

def verify_message(request): # Validate the received signature, create a user in Django with this response
    data = json.loads(request.body)
    print(data)

    REQUEST_URL = 'https://authapi.moralis.io/challenge/verify/evm'
    x = requests.post(
        REQUEST_URL,
        json=data,
        headers={'X-API-KEY': API_KEY})

    print(json.loads(x.text))
    print(x.status_code)
    if x.status_code == 201: # user is able to authenticate
        eth_address=json.loads(x.text).get('address')
        print('eth address', eth_address)
        try: # add the user to the django auth after authenticating user address with Moralis api
            user = User.objects.get(username=eth_address)
        except User.DoesNotExist: # if there is no entry in Moralis with that wallet address already
            user = User(username=eth_address)
            user.is_staff = False
            user.is_superuser = False # Django admin/user manager auth method
            user.save()
        if user is not None:
            if user.is_active:
                login(request, user)
                request.session['auth_info'] = data
                request.session['verified_data'] = json.loads(x.text)
                return JsonResponse({'user': user.username})
            else:
                return JsonResponse({'error': 'Account disabled'})
    else:
        return JsonResponse(json.loads(x.text))