# Lancement du serveur Backend
## versions supportés
- 2.00 et ultérieur
## Architecture
- Docker, installé sous Linux ou Windows
  - *sous Linux :* 
    - *PHP et PHP FPM* : php8.1 
    - sudo apt update
    - sudo apt upgrade
    - sudo apt install php8.1
    - https://www.digitalocean.com/community/tutorials/how-to-install-composer-on-ubuntu-20-04-quickstart
  - *sous Windows* : 
    - *[WSL 2 (testé avec Ubuntu)](https://learn.microsoft.com/fr-fr/windows/wsl/install)*
## Fonctionnement
### 1. Créer l'image
#### 1.1. Constantes d'environnement
> Cette étape n'est **à faire qu'une fois**, 
> mais il faut **l'adapter selon le réseau** où la machine est connectée.
> 
> Il n'est pas nécessaire de compiler de nouveau si le fichier `.env` a été modifié.

Pour la **connexion** entre la **base de données** et le backend, il est nécessaire d'ajuster les paramètres pour bien se connecter.
1. Se placer dans le dossier `BACK_END/api/2.00/src/laravel`
2. Créer une copie du fichier `.env.example` en le nommant `.env`. Personnaliser :
      - `APP_KEY` : comme pour un mot de passe, générer une chaîne aléatoire à remplacer par les underscores ( _ ),
      DB_CONNECTION=mysql
     - `DB_HOST` et `DB_PORT` : l'**adresse IP** et le **port** du réseau de la machine sur laquelle tourne le serveur de **base de données**, ou son nom de domaine si défini dans un fichier `hosts` *(Ne pas mettre 127.0.0.1 même si les 2 dockers tournent sur la même machine)*.
     - `DB_DATABASE` : `Projet_M1`
     - `DB_USERNAME` : `root`
     - `DB_PASSWORD` : mot de passe de l'utilisateur root de mysql défini au lancement du docker de la base de données (entre guillemets " )
    >  voir [BDD/README.md](../BDD/README.md) pour les valeurs concernant la base de données.
#### 1.2. Compiler l'image Docker
> Cette étape n'est **à faire qu'une fois**.

Une fois les étapes précédentes établies
1. Se placer dans le dossier `BACK_END/api/2.00`
2. Dans un terminal *(powershell pour windows)*, lancer la commande
    ```bash
    docker-compose build
    ```
### 2. Synchroniser la base de données
> Cette étape est **à faire** après chaque nouveau **démarrage de la base de données**.
#### 2.1. Ajouter l'utilisateur de test
À chaque **réinitialisation de la base de données**, il est nécessaire de ré-inscrire l'utilisateur de test.
1. Ouvrir deux terminaux dans `BACK_END/api/2.00/src/laravel`
   - *Sous linux* : terminal classique
   - *Sous Windows* : WSL 2
2. Lancer Laravel en mode de développement :
   - *Sous linux* :
        ```
        php artisan serve
        ```
    - *Sous Windows* :
        ```
        ./vendor/bin/sail up
        ```
3. Une fois Laravel lancé (l'adresse IP et le port d'écoute affiché dans le terminal), utiliser le second terminal
4. Ajouter le compte utilisateur de test sur la base de données :
   - *Sous linux* :
        ```
        php artisan db:seed
        ```
    - *Sous Windows* :
        ```
        ./vendor/bin/sail artisan db:seed
        ```
    - Si la commande met plus d'1 minute à se lancer, cela veut dire que le backend est mal connecté à la base de données. 
      - Retirer `:seed` à la commande ci-dessus permet de lancer une connexion mysql pour tester le lien.
      - Vérifier que la base de données est allumée et acessible dans le réseau où se trouve le backend
      - Vérifier les informations écrites dans le `.env`, l'adresse IP ne doit pas être 127.0.0.1 et change si la machine est connecté à un nouveau réseau
5. Sur le premier terminal, taper CTRL+C pour couper le serveur de développement, puis fermer les terminaux.


### 3. Lancer un conteneur serveur backend
#### 3.1. Commande
Une fois l'image créée, et la base de données synchronisée, 
1. Se placer dans le dossier `BACK_END/api/2.00`
2. Dans un terminal *(powershell pour windows)*, lancer la commande
    ```bash
    docker-compose up
    ```

#### Paramètres
Il faut adapter l'adresse IP par celle du backend et s'assurer que ce soit le protocole **https** dans le fichier `FRONT_END/src/javascript/define.js` :
```js
const BASE_URL="https://ADRESSE_IP_OU_NOM_DE_DOMAINE";
```

## Suivi du fonctionnement
Récupérer le nom des serveurs
Taper dans un terminal la commande suivante
```bash
docker ps
```
Repérer le nom du serveur correspondant au backend (nginx et php).
### Logs
Pour accéder au logs, lancer la commande 
```bash
docker logs NOM_DU_SERVEUR
```
### Récupération du système de fichiers interne
Pour débuger le fonctionnement de l'image, il est possible de récupérer les fichiers du conteneur docker. Pendant son éxecution, taper dans un terminal la commande suivante
```bash
docker export -o NOM_DU_SERVEUR.tar NOM_DU_SERVEUR
```
Ensuite, extraire l'archive (comme un .zip) créée dans le dossier courant.
