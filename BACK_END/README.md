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

## Fonctionnement des requêtes POST
### Connnexion

```mermaid

sequenceDiagram
    participant f as Frontend;
    participant j as Backend : JWT;
    participant p as Backend : PDO;
    participant b as Base de données;

    activate f;
    f->>p: POST /connexion <br>{mail="mail@test.com", <br>password = "password"};
    activate p;
    Note right of f: Requête de connexion
    p->>b: SELECT mail FROM users <br>WHERE mail="mail@test.com" AND<br> mot_de_passe = "password";
    activate b;
    Note over b: Vérification si l'utilisateur<br> s'est bien connecté
    Note left of b: Le mail est retourné<br> si les bons identifiants sont rentrés
    b->>p: [{"mail"="mail@test.com"}];
    deactivate b;
    p->>j: [{"mail"="mail@test.com"}];
    activate j;
    deactivate p;
    Note over j: Chiffrement
    j->>j: z&4dP3$udDFkyD3!U*%bCPxvXD;

    j->>f: z&4dP3$udDFkyD3!U*%bCPxvXD;
    deactivate j;
    Note right of f: Enregistrement dans un cookie
    deactivate f;


```

### Valider Connnexion
```mermaid

sequenceDiagram
    participant f as Frontend;
    participant j as Backend : JWT;
    participant p as Backend : PDO;
    participant b as Base de données;

    activate f;
    f->>j: POST /valider_connexion <br>{jwt="z&4dP3$udDFkyD3!U*%bCPxvXD"};
    activate j;
    Note right of f: Requête de<br> validation<br> de la connexion
    Note over j: Déchiffrement
    j->>j: [{"mail"="mail@test.com"}];
    Note left of j: Le mail est retourné<br> si la connexion est validée
    j->>f: "mail@test.com";
    deactivate j;
    Note right of f: Le jeton du patient est valide : <br>la connexion est active

    deactivate f;


```