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