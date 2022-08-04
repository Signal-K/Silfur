import os
import requests
import sys

cslug = sys.argv[1] # from first command line argument

def get_collection_stats(collection_slug):
    url = f'https://api.opensea.io/api/v1/collection{collection_slug}/stats'
    response = requests.get(url)
    data = response.json()
    stats = data['stats']
    print(stats)
    return stats

if __name__ == '__main__':
    stats = get_collection_stats(cslug)
    folder_path = f'./data/{cslug}'
    if not os.path.exists(folder_path):
        os.makedir(folder_path)