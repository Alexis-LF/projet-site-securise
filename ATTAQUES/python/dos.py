import requests

BASE_URL = "http://10.10.43.209:5678"
API_VERSION = "0.08"

url = BASE_URL + '/' + API_VERSION + '/index.php/villes?name=' + "sai"
url1 = BASE_URL + '/' + API_VERSION + '/index.php/villes?name=' + "bre"
url2 = BASE_URL + '/' + API_VERSION + '/index.php/villes?name=' + "par"
url3 = BASE_URL + '/' + API_VERSION + '/index.php/villes?name=' + "fer"
url4 = BASE_URL + '/' + API_VERSION + '/index.php/villes?name=' + "dou"
url5 = BASE_URL + '/' + API_VERSION + '/index.php/villes?name=' + "dir"

while True :
        response = requests.get(url)
        response = requests.get(url1)
        response = requests.get(url2)
        response = requests.get(url3)
        response = requests.get(url4)
        response = requests.get(url5)


# print(response.text)

