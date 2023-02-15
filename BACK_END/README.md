# Back end (api)
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
### Recherche par nom et professions et ville
type de requête : *GET*

```
/index.php/recherche?d.nom=NOM&p.nom=PROFESSION&c.id=ID_VILLE

```
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