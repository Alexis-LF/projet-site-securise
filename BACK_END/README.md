# Back end (API)
# Version 0.04 → Courante
## liste des endpoints d'authentification :
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

## liste des endpoints GET :
### Récupérer la liste des villes
type de requête : *GET*

```
/index.php/villes?name=NOM
```

### Récupérer la liste des professions
type de requête : *GET*

```
/index.php/professions
```

### Récupérer la liste des mails, prénoms et noms des docteurs 
type de requête : *GET*

```
/index.php/docteurs
```
### Recherche par e-mail de docteur, profession et ville
type de requête : *GET*

```
/index.php/recherche?d.prenom_nom=PRENOM NOM&p.nom=PROFESSION&c.name=VILLE
```
Ici, tous les paramètres ne sont pas nécessaire. On peut renseigner **un ou plusieurs** (ou aucun) **paramètres au choix** parmi la liste de clés suivantes:
- `d.prenom_nom` *Le prénom et le nom du docteur séparés par un espace*
- `p.nom` *le nom de la profession*
- `c.name` *le nom de la ville*


# Version 0.03
## liste des endpoints :
### Récupérer la liste des villes
type de requête : *GET*

```
/index.php/villes?name=NOM
```

### Récupérer la liste des professions
type de requête : *GET*

```
/index.php/professions
```

### Récupérer la liste des mails, prénoms et noms des docteurs 
type de requête : *GET*

```
/index.php/docteurs
```
### Recherche par e-mail de docteur, profession et ville
type de requête : *GET*

```
/index.php/recherche?d.prenom_nom=PRENOM NOM&p.nom=PROFESSION&c.name=VILLE
```
Ici, tous les paramètres ne sont pas nécessaire. On peut renseigner **un ou plusieurs** (ou aucun) **paramètres au choix** parmi la liste de clés suivantes:
- `d.prenom_nom` *Le prénom et le nom du docteur séparés par un espace*
- `p.nom` *le nom de la profession*
- `c.name` *le nom de la ville*


# Version 0.01 → 0.02 (inclus)
## liste des endpoints :
### Récupérer la liste des villes
type de requête : *GET*

```
/index.php/villes
```
### Récupérer la liste des professions
type de requête : *GET*

```
/index.php/professions
```
### Recherche par nom et professions et ville
type de requête : *GET*

```
/index.php/recherche?nom=NOM&profession=PROFESSION&ville=VILLE
```