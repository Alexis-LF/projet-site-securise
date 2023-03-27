# Back end (API)

## Fonctionnement de l’aiguillage des endpoints

### aiguillage par verble


```mermaid

flowchart TD

    %% racine
    id1((Démarrage))
    id1-->	id2{Verbe\nde la\nrequête ?};

    id2--GET-->	        id3[[ Traitement des\nrequêtes GET]];
    id2--POST-->	      id4[[ Traitement des\nrequêtes POST]];
    id2--par défaut-->	id5((Envoi\nerreur 400\nBad request));
   
```
### aiguillage par chemin GET

```mermaid

flowchart TD;

    %% racine
    id1((Requêtes\nGET));
    id1-->	id2{chemin ?};

    id2--/villes--> idvilles[[Former la\nrequête SQL\nvilles]];
    id2--/professions--> idprofessions[[Former la\nrequête SQL\nprofessions]];
    id2--/recherche--> idrecherche[[Former la\nrequête SQL\nrecherche]];
    id2--/docteurs--> iddocteurs[[Former la\nrequête SQL\ndocteurs]];
    id2--/documents--> iddocuments[[Former la\nrequête SQL\ndocuments]];
    id2--/factures--> idfactures[[Former la\nrequête SQL\nfactures]];
    id2--par défaut--> iddefault((Envoi\nerreur 400\nBad request));

    idvilles -->id3;
    idprofessions -->id3;
    idrecherche -->id3;
    iddocteurs -->id3;
    iddocuments -->id3;
    idfactures -->id3;
    id3(Éxécuter de la\nrequête SQL formée) ;
    id3 --> id4(Transformation En JSON);
    id4 --> id5(("Envoi des\ndonnées\n(code 200)"));
    
```
### aiguillage par chemin POST
```mermaid

flowchart TD;

    %% racine
    id1((Requêtes\nPOST));
    id1-->	id2{chemin ?};

    id2--/connexion--> idconnexion[[Fonction\nconnexion]];
    id2--/valider_connexion--> idvalider_connexion[[Fonction\nvalider_connexion]];
    id2--/inscription--> idinscription[[Fonction\ninscription]];
    id2--par défaut--> iddefault((Envoi\nerreur 400\nBad request));


    
```

## Fonctionnement des requêtes GET
### Formation des requêtes à éxécuter

```mermaid

flowchart TD;

    id1((Former\nla requête\nSQL));
    id1-->id2("Initialisation de la requête SQL de base\n«SELECT colonnes FROM table»");
    id2-->id3("Remplacement des variables de condition \n(s'il y a un filtre)\n«SELECT colonnes FROM table \nWHERE colonne = variable;»");
    id3-->id4((Envoi\nde la chaîne de\ncaractère contenant\nla requête à\néxécuter));    
```
