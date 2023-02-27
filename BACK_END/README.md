# Back end (API)
> Toutes les requêtes des précédentes versions sont valables pour la version coutante, sauf si elle a été redéfinie dans une version postérieure.
# Version 0.05
## Liste des endpoints GET :
### Récupérer la liste de documents
> ( site non-sécurisé) Le Front-end vérifie au préalable si l'utilisateur est connecté avant d'éffectuer la requête
#### type de requête : 
**GET**
#### URI : 
```
/index.php/documents?mail=MAIL
```
#### Paramètres :
- `mail` :  e-mail de l'utilisateur
#### Réponse :
- Tableau :
  - `nom_doc` : Nom affiché à l'écran
  - `type` : nature du document (ordonnance, fomulaire etc.)
  - `chemin` : Où se trouve le fichier sur le serveur : sert pour le bouton *télécharger le document*
  - `date_depot` '*(peut être nul)* : Moment auquel le document a été déposé
  - `signature_docteur` '*(peut être nul)* : Date de signature du docteur
  - `prenom_nom` : Prénom et nom du docteur
  - `mail_docteurs` : adresse e-mail du docteur *(pourquoi pas mettre en lien hypertexte mailto:mail@docteur.com)*
  - `telephone` : téléphone du docteur
  - `nom_site` : nom du lieu de profession
  - `adresse` : rue du site
  - `zip_code` : code postal
  - `ville` : nom de la ville

# Version 0.04
## Liste des endpoints d'authentification :
### Se connecter : recevoir le token JWT
#### type de requête : 
**POST**
#### URI : 
```
/index.php/connexion
```
#### Payload :
- `mail` : e-mail de l'utilisateur
- `password` : mot de passe de l'utilisateur
#### Réponse :
##### Succès
- Code HTTP : `201`
- Corps de la réponse : **Jeton JWT** à sauvegarder
##### Échec
- Code HTTP : `401`
- Corps de la réponse : *Connexion failed, please check your id and pwd*



### Tester si l'utilisateur dispose d'un jeton de connexion valide (s'il est bien connecté)
#### type de requête : 
**POST**
#### URI : 
```
/index.php/valider_connexion
```
#### Payload :
- `jwt`: jeton JWT récupéré lors de la `/connexion`
#### Réponse :
##### Succès
- Code HTTP : `201`
- Corps de la réponse : *You are connected as `e-mail de l'utilisateur`.*
##### Échec
- Code HTTP : `401`
- Corps de la réponse : *Bad token, please sign in again*

# Version 0.03
## Liste des endpoints GET :
### Récupérer la Liste des villes
type de requête : *GET*

```
/index.php/villes?name=NOM
```

### Récupérer la Liste des professions
type de requête : *GET*

```
/index.php/professions
```

### Récupérer la Liste des mails, prénoms et noms des docteurs 
type de requête : *GET*

```
/index.php/docteurs
```
### Recherche par e-mail de docteur, profession et ville
type de requête : *GET*

```
/index.php/recherche?d.prenom_nom=PRENOM NOM&p.nom=PROFESSION&c.name=VILLE
```
Ici, tous les paramètres ne sont pas nécessaire. On peut renseigner **un ou plusieurs** (ou aucun) **paramètres au choix** parmi la Liste de clés suivantes:
- `d.prenom_nom` *Le prénom et le nom du docteur séparés par un espace*
- `p.nom` *le nom de la profession*
- `c.name` *le nom de la ville*


# Version 0.01 → 0.02 (inclus)
## Liste des endpoints GET :
### Récupérer la Liste des villes
type de requête : *GET*

```
/index.php/villes
```
### Récupérer la Liste des professions
type de requête : *GET*

```
/index.php/professions
```
### Recherche par nom et professions et ville
type de requête : *GET*

```
/index.php/recherche?nom=NOM&profession=PROFESSION&ville=VILLE
```