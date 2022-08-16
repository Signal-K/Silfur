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
    return render(request, 'login.html', {})

def my_profile(request):
    return render(request, 'profile.html', {})

def request_message(request):
    data = json.loads(request.body)
    print(data)

    REQUEST_URL = 'https://authapi.moralis.io/challenge/request/evm'
    request_object = {
        'domain': "defi.finance",
        'chainId': 1,
        'address': data['address'],
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

def verify_message(request):
    data = json.loads(request.body)