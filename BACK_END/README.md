# Back end (API)
# Version 0.03 → version courante
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