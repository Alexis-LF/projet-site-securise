# Lancement du serveur Backend
## versions supportés
- 0.08 et ultérieur
- pour les versions 0.07 et antérieures, il est possible de suivre la démarche mais il faudra adapter les fichiers PHP sources manuellement pour le fonctionnement.
## Architecture
- Docker
## Fonctionnement
### Créer l'image
#### Constantes d'environnement
Pour la **connexion** entre la **base de données** et le backend, il est nécessaire d'ajuster les paramètres pour bien se connecter.
1. Se placer dans le dossier `BACK_END/api/0.08`
2. Ajouter dans le répertoire `src` un fichier se nommant `.env` contenant ceci :
    ```.env
    SERVEUR_BDD='ADRESSE_IP_OU_NOM_DE_DOMAINE_DE_LA_BDD'
    NOM_BDD='Projet_M1'
    USER_BDD='USER_BACKEND'
    MDP_BDD='MDP_BACKEND'
    PORT='PORT'
    ```
    Il faut remplacer les valeurs à droite en majuscule *(en conservant les `'`)* par les valeurs du docker de la base de données.
    - `SERVEUR_BDD` doit prendre l'**adresse IP** du réseau de la machine sur laquelle tourne le serveur de **base de données**, ou son nom de domaine si défini dans un fichier `hosts` *(Ne pas mettre 127.0.0.1 même si les 2 dockers tournent sur la même machine)*.
    -  voir [BDD/README.md](../BDD/README.md) pour les autres valeurs.
#### Génération de clés
   
Pour le bon **fonctionnement** des fonctions d'**authentification** des patients fait par le **backend**, il est nécessaire d'avoir de générer des clés de chiffrement asymétriques.
1. Se placer dans le dossier `BACK_END/api/0.08`
2. Créer un nouveau dossier dans `src` se nommant `.ssh` (sauf s'il existe déjà)
3. Dans un terminal (linux ou git bash sous windows), exécuter la commande suivante :
     ```
     ssh-keygen -t rsa -m pem -f src/.ssh/id_rsa -N ""
    ```
    *S'il est proposé d'écraser (overwrite) la précédente clé, accepter (y ou o).*
#### Compiler l'image Docker
Une fois les étapes précédentes établies
1. Se placer dans le dossier `BACK_END/api/0.08`
2. Dans un terminal, lancer la commande
    ```bash
    docker build -t projet_m1_backend:1.0 .
    ```
    Une fois l'image créée, il est conseillé à chaque nouvelle utilisation du conteneur de créer de nouveau l'image en générant une nouvelle clé asymétrique
### Lancer un conteneur serveur backend
#### Commande
Une fois l'image créée, lancer la commane suivante en changeant les paramètres en majusucules :
```bash
docker run --rm --detach -p PORT:80/tcp  --name NOM_DU_SERVEUR projet_m1_backend:1.0
```
#### Paramètres
1. Il faut remplacer les paramètres suivants de la commande précédente conformément au ficher `FRONT_END/javascript/define.js`pour lier la connexion du Front end au back end. 
2. De plus, il faut adapter l'adresse IP et le port dans le `define.js` également :
    ```js
    const BASE_URL="http://ADRESSE_IP_OU_NOM_DE_DOMAINE:PORT";
    ```


| Paramètre      	| Description                                                                                                                                                                                                                                                                       	| Exemple                                  	|
|----------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|------------------------------------------	|
| NOM_DU_SERVEUR 	| Nom du conteneur lancé par docker                                                                                                                                                                                                                                                 	| serveur_backend                              	|
| PORT           	| Port de connexion au backend. **Adapter dans** `define.js` **ou-et** dans le fichier `hosts` .                                                                                                                                                                                                                     	| 5678                                     	|
## Suivi du fonctionnement
### Logs
Taper dans un terminal la commande suivante
```bash
docker logs NOM_DU_SERVEUR 
```
### Récupération du système de fichiers interne
Pour débuger le fonctionnement de l'image, il est possible de récupérer les fichiers du conteneur docker. Pendant son éxecution, taper dans un terminal la commande suivante
```bash
docker export -o NOM_DU_SERVEUR.tar NOM_DU_SERVEUR
```
Ensuite, extraire l'archive (comme un .zip) créée dans le dossier courant.
