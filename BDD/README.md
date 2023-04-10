# Lancement du serveur de base de données
## Architecture
- Docker
## Fonctionnement
### Créer l'image
1. Se placer dans le dossier `projet-site-securise/BDD/docker_bdd/`
2. Dans un terminal, lancer la commande
```bash
docker build -t projet_m1_bdd:2.0 .
```
3. Une fois l'image créée, il n'est pas nécessaire de la créer de nouveau pour relancer le serveur, sauf si les fichers sources ont été modifiés
### Lancer un conteneur serveur base de données
#### Mémoire
Les modifications de la base de données par le site (ajout de nouveaux utilisateurs par exemple via l'inscription) sont perdus à l'arrêt de l'image.
#### Commande
Une fois l'image créée, lancer la commane suivante :
```bash
docker run --rm --detach --name NOM_DU_SERVEUR --env MARIADB_USER=USER_BACKEND --env MARIADB_PASSWORD="MDP_BACKEND" --env MARIADB_ROOT_PASSWORD="MDP_ROOT"  -p PORT:3306/tcp projet_m1_bdd:2.0
```
#### Paramètres
1. Il faut remplacer les paramètres suivants de la commande précédente conformément au ficher `projet-site-securise/BACK_END/api/<version>/.env` pour lier la connexion de l'API (back end) à la base de données. 
2. De plus, il faut adapter l'adresse IP dans le `.env` également.
3. Certains caractères spéciaux (tel !,',") peuvent être interprétés par le terminal, attention à l'utilisation de certains caractères spéciaux en tant que mot de passe


| Paramètre      	| Description                                                                                                                                                                                                                                                                       	| Exemple                                  	|
|----------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|------------------------------------------	|
| NOM_DU_SERVEUR 	| Nom du conteneur lancé par docker                                                                                                                                                                                                                                                 	| serveur_bdd                              	|
| USER_BACKEND   	| nom de l'utilisateur qui sert au back end de se connecter à la BDD. **Adapter dans `.env`** : `USER_BDD`. **Important :** Il est nécessaire de remplacer le nom d'utilisateur "backend" dans le fichier `projet-site-securise/BDD/docker_bdd/scripts_sql/backend_permissions.sql` 	| backend                                  	|
| "MDP_BACKEND"  	| Mot de passe de l'utilisateur qui sert au back end de se connecter à la BDD. **Adapter dans `.env`** : `MDP_BDD`.                                                                                                                                                                 	| "uZ6UAPGQyc9dExytQrVu^3*TrY^WrjfLr2UkSn" 	|
| "MDP_ROOT"     	| Mot de passe qui sert au fonctionnement et débogage du serveur de base de données.                                                                                                                                                                                                	| "jY37BrHueoS3U6ym5ag^hfn@XgUCQFJ6iT3ET"  	|
| PORT           	| Port de connexion à la BDD. **Adapter dans `.env`** : `PORT`.                                                                                                                                                                                                                     	| 1234                                     	|