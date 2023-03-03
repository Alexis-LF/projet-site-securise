# Back end (API)
> Toutes les requêtes des précédentes versions sont valables pour la version coutante, sauf si elle a été redéfinie dans une version postérieure.
# Version 0.06 → Courante
## Liste des endpoints d'authentification :
### S'inscrire
#### type de requête : 
**POST**
#### URI : 
```
/index.php/inscription
```
#### Payload :

- `nom`
- `prenom`
- `dateNaissance` : au format *AAAA-MM-JJ*
- `email` : ce sera l'identifiant de l'utilisateur
- `motDePasse` : **/!\ Site non sécurisé : transit et stockage en clair**
- `numeroPortable` : au format *0000000000*
- `ville` *(optionnel)* : nom exact de la ville (comme proposé dans la liste déroulante sur le front end)

#### Réponse :
##### Succès
- Code HTTP : `201`
##### Compte déjà existant
- Code HTTP : `401`
##### Échec
- Code HTTP : `400`

  *Un échec peut survenir si les informations du formulaire d'inscription n'ont pas bien été rentés au format attendu*

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

### Récupérer une ou plusieurs facutures
> ( site non-sécurisé) Le Front-end vérifie au préalable si l'utilisateur est connecté avant d'éffectuer la requête
#### type de requête : 
**GET**
#### URI : 
```
/index.php/factures?mail=MAIL&id=IDENTIFIANT
```
#### Paramètres :
- `mail` :  e-mail de l'utilisateur
- `id`  **optionnel** :  identifiant de la facture *(récupérée au préalable en réponse de la liste de toute les factures)*. Si renseignée, le tableau en réponse contiendra uniquement la facture désirée.
#### Réponse :
- Tableau :
  - `identifiant` : Numéro unique du document interne à la base de données, sert à le sélectionner ensuite pour visualiser 1 facture
  - `prix_ttc` : Prix toutes taxes comprises
  - `tva` *(peut être nul)* : Montant de la TVA incluse dans le prix TTC
  - `date_facturation` '*(peut être nul)* : Date à laquelle le patient a été facturé
  - `date_paiement` '*(peut être nul)* : Date de paiement du patient
  - `mode_de_paiement` : Moyen de paiement utilisé
  - `mail_docteurs` : adresse e-mail du docteur *(pourquoi pas mettre en lien hypertexte mailto:mail@docteur.com)*
  - `prenom_nom` : Prénom et nom du docteur
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
- `password` : **/!\ Site non sécurisé : transit et stockage en clair**, mot de passe de l'utilisateur 
#### Réponse :
##### Succès
- Code HTTP : `201`
- Corps de la réponse : Tableau :
  - `mail`
  - `nom`
  - `prénom`
  - `ville`
  - `jwt` : **Jeton de connexion JWT** à sauvegarder
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
- Corps de la réponse :
  - `mail` : e-mail de l'utilisateur connecté
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