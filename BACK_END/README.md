# Back end (API)
# Version 0.04 → Courante
## liste des endpoints d'authentification :
> Pour les tests ils sont actuellement en GET, **mais ils devront être changés** en POST
### Se connecter : recevoir le token JWT
type de requête : *GET*
```
/index.php/connexion?mail=MAIL
```

### Tester si l'utilisateur dispose d'un jeton de connexion valide (s'il est bien connecté)
type de requête : *GET*
```
/index.php/test_connecte?jwt=JETON_JWT
```

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