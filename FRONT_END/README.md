# Front end
## Installation
1. Définir les valeurs de la premièr ligne du fichier [FRONT_END/javascript/define.js](javascript/define.js)
   - Attribuer à la variable `BASE_URL` l'adresse IP **du backend** (127.0.0.1 si en local sur sa machine) puis le **port** choisi **lors du lancement du backend** (séparés par `:`).
   >Pour plus de précisions concernant l'adresse IP et le port à marquer, se référer à [BACK_END/INSTALL.md](../BACK_END/INSTALL.md).
   - la variable `API_VERSION` peut aussi être modifiée pour utiliser une version plus récente que la 0.08.
## Compatibilité
- Firefox
- *Les navigateurs basés sur Chrome exigent le HTTPS pour certaines requêtes, alors Chrome n'est pas compatible.*
## Utilisation
- Ouvrir dans Firefox [FRONT_END/index.html](index.html)
- Pour afficher la **liste de tous les docteurs** créés pour le test du site web, il suffit de cliquer sur **chercher** en ne renseignant aucun critère de recherche.
- Un compte de test a été créé. Ce compte possède des documents et des factures :
  - identifiant : `mail@test.com`
  - mot de passe : `password`