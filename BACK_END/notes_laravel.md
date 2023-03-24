# Laravel
## Déploiement

### Créer un projet exemple sous linux
### natif
```bash
composer create-project laravel/laravel example-app
```
#### docker
```
curl -s https://laravel.build/example-docker-app | bash
```
### Lancer le projet exemple
1. se placer dans le dossier du projet
#### natif
2. Lancer 
```bash
php artisan serve
```
#### docker
2. Lancer 
```bash
./vendor/bin/sail up
``` 
- ajouter `-d` pour le mode détaché
3. Ça va lancer un serveur auto fait par laravel


## Commandes utiles
- [docs sur les routes](https://laravel.com/docs/10.x/routing)
- [docs sur tous les dossiers](https://laravel.com/docs/10.x/structure#introduction)


> ### Note importante
> remplacer `php` par `./vendor/bin/sail` pour l'utilisation avec docker
> Pour ne pas s'embêter : faire un alias : 
> ```bash
> echo "alias php='./vendor/bin/sail'" >> ~/.bashrc && source ~/.bashrc
> ```
### lister les endpoints mis en place
```bash
php artisan route:list
```
###
Toutes les commandes `make` dans le terminal :
```bash
php artisan list make
```

## Répertoires
### point d'entrée
Dans `public/`
### tous les endpoints
dans `routes/`
# Développement de l'API
## lien avec la bdd
- Utilisation d'Eloquent et des Models pour intérogger la BDD avec des objets plutôt qu'en tapant des requêtes SQL
- Les models doivent être générés au préalable
## Réponse en json
- Utilisation des Ressources, par exemple `\Http\Resources\PatientsResource`
  - Ce sont dans ces fichiers qu'on appelle les modèles, mais de manière générique
  - Dans `routes\api.php`, on retournera dans un endpoint un `PatientsResource` *par exemple* avec les paramètres tel l'objet et son id si nécessaire.
  - Pour retourner 1 élément, c'est une **ressource**. Pour **plusieurs** éléments, c'est une **collection** de ressources.

# étapes de configuration de laravel
## bdd
### tester la connexion à la bdd
Cela va lancer un client mysql :
```bash
php artisan db
```
### .env
```sh
DB_CONNECTION=mysql
DB_HOST=ADRESSE_IP_BDD_DU_RÉSEAU (10.10.xx.xx par ex.)
DB_PORT=PORT (1234 par exemple)
DB_DATABASE=Projet_M1
DB_USERNAME=backend
DB_PASSWORD="mot de passe défini au lancement de la BDD"
```
### Migrations
#### créer une migration
```bash
php artisan make:migration create_patients
```


# Larvel breeze
## étapes
1. installer laravel classique avec docker
2. ajouter breeze via composer
3. faire les migrations
4. installer breeze
5. lancer npm

## ajout de la dépendance breeze
*sail est rempladé par php*
```bash
php composer require laravel/breeze --dev
```
## Éxécuter les migrations 
```
php artisan migrate
```

## installation de breeze
```
php artisan breeze:install
```
ou (version quiet)
```
php artisan breeze:install -q blade
```

## lancer npm
php fait référence avec sail, pas nécessaire si docker pas utilisé
```
php npm install
```
# personnalisation de breeze
- dans `app\Http\Controllers\Auth\RegisteredUserController.php` l'inscription se fait ici. Il faudrait remplir en même temps la BDD de personne

## seeds (remplissage de la db automatiquement)
- `php artisan db:seed` pour ajouter les données de `database\seeders\DatabaseSeeder.php`


# étapes de lancement de laraval breeze (pour l'instant)
la bdd ne sauvegarde pas les changements à chaque fois, en attendant il faut
1. créer la bdd `test_auth`
2. faire `php artisan migrate`