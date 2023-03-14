import requests

# Marquer l'adresse IP et le port du backend, voir projet-site-securise/BACK_END/INSTALL.md pour plus d'infos
BASE_URL = "http://127.0.0.1:5678"
API_VERSION = "1.00"

url = BASE_URL + '/' + API_VERSION + '/index.php/villes?name='

while True :
        # On envoie en boucle des requêtes avec plusieurs débuts de noms de villes différents
        response = requests.get(url+ "sai")
        response = requests.get(url+ "bre")
        response = requests.get(url+ "par")
        response = requests.get(url+ "fer")
        response = requests.get(url+ "dou")
        response = requests.get(url+ "dir")