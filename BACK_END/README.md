# Back end (API)

## Liste des endpoints POST d'authentification du backend sécurisé et non sécurisé:

### versions
- **non sécurisé** : `1.00`
- **sécurisé** : `2.00`

> Les mentions *(sécurisé)* et *(non-sécurisé)* permettent de différencier les fonctionnalités.

> Les endpoints du backend non sécurisés sont **préfixés après la version de l'API** de `index.php/`. Par exemple : 
> ```
>   /api/1.00/index.php/professions
> ```
> ```
>   /api/2.00/professions
> ```

## Liste des endpoints d'authentification :

### S'inscrire
#### type de requête : 
**POST**
#### URI : 
```
/inscription
```

### Se connecter *(non sécurisé)* : recevoir le token JWT/d'API
#### type de requête : 
**POST**
#### URI : 
```
/connexion
```
#### Payload :
- `mail` : e-mail de l'utilisateur
- `password` : **/!\ Site non sécurisé : transit et stockage en clair** du mot de passe de l'utilisateur 
#### Réponse :
##### Succès *(non sécurisé)*
- Code HTTP : `201`
- Corps de la réponse : Tableau :
  - `mail`
  - `nom`
  - `prénom`
  - `ville`
  - `jwt` : **Jeton de connexion JWT** à sauvegarder

##### Succès *(sécurisé)*
  - *documentation à finaliser*
##### Échec *(non sécurisé)*
- Code HTTP : `401`
- Corps de la réponse : *Connexion failed, please check your id and pwd*

##### Échec *(sécurisé)*
  - *documentation à finaliser*

### Tester si l'utilisateur dispose d'un jeton de connexion valide (s'il est bien connecté)
#### type de requête : 
**POST**
#### URI : 
```
/valider_connexion
```
#### Entêtes *(sécurisé)* :
- `Authentification` :  api_token de la connexion active de l'utilisateur
#### Payload :
- `jwt` *(non-sécurisé)*: jeton JWT récupéré lors de la `/connexion`
#### Réponse :
##### Succès
- Code HTTP : `201`
- Corps de la réponse :
  - `mail` : e-mail de l'utilisateur connecté
##### Échec
- Code HTTP : `401`
- Corps de la réponse : *Bad token, please sign in again*

## Liste des endpoints GET :
### Récupérer la liste de documents
> *(non-sécurisé)* Le Front-end vérifie au préalable si l'utilisateur est connecté avant d'éffectuer la requête

#### type de requête : 
**GET**
#### URI *(non sécurisé)* : 
```
/documents?mail=MAIL
```
#### URI *(sécurisé)* : 
```
/documents
```
#### Paramètres :
- `mail` :  e-mail de l'utilisateur
#### Entêtes *(sécurisé)* :
- `Authentification` :  api_token de la connexion active de l'utilisateur

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
#### URI *(non sécurisé)*: 
```
/factures?mail=MAIL&id=IDENTIFIANT
```
#### URI *(sécurisé)*: 
```
/factures?id=IDENTIFIANT
```
#### Entêtes *(sécurisé)* :
- `Authentification` :  api_token de la connexion active de l'utilisateur
#### Paramètres :
- `mail` *(non sécurisé)* :  e-mail de l'utilisateur
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

### Récupérer la Liste des villes
type de requête : *GET*

```
/villes?name=NOM
```

### Récupérer la Liste des professions
type de requête : *GET*

```
/professions
```

### Récupérer la Liste des mails, prénoms et noms des docteurs 
type de requête : *GET*

```
/docteurs
```
### Recherche par e-mail de docteur, profession et ville
type de requête : *GET*

```
/recherche?d.prenom_nom=PRENOM NOM&p.nom=PROFESSION&c.name=VILLE
```
Ici, tous les paramètres ne sont pas nécessaire. On peut renseigner **un ou plusieurs** (ou aucun) **paramètres au choix** parmi la Liste de clés suivantes:
- `d.prenom_nom` *Le prénom et le nom du docteur séparés par un espace*
- `p.nom` *le nom de la profession*
- `c.name` *le nom de la ville*

# site web sécurisé

## Authentification
### Sécurisation des routes : comparatif
#### Non sécurisé
```mermaid

sequenceDiagram
    participant f as Frontend;
    participant b as Backend non sécurisé;

    activate f;
    Note right of f: Seconde Requête au backend;
    f->>b: GET /documents?mail=mail@test.com;
    activate b;
    Note over b: Aucune vérification d'identité<br>car le frontend l'a fait grâce<br>à une première requête au backend;
    b->>f: Documents de "mail@test.com" : {...};
    deactivate b;
    Note right of f: Les documents ont été envoyés

    deactivate f;


```
#### Sécurisé
```mermaid

sequenceDiagram
    participant f as Frontend;
    participant b as Backend sécurisé;

    activate f;
    Note right of f: Unique Requête au backend
    f->>b: GET /documents<br>{api_token="1|gAqAXNwEsI7UpS6urNvHEfVZCaFinlfPxypo9J9P"};
    activate b;
    Note over b: Vérification d'identité
    b->>f: Documents de l'utilisateur connecté : {...};
    deactivate b;
    Note right of f: Les documents ont été envoyés

    deactivate f;

```

## Modèle - Vue - Contrôleur et routage
### exemples avec /villes
```mermaid

sequenceDiagram
    participant f as Site Frontend;
    participant r as Backend : <br>routes;
    participant c as Backend : <br>Contrôleur;
    participant m as Backend : <br>Modèle;
    participant v as Backend : <br>Vue;
    participant b as Base de données;

    activate f;
    f->>r: GET /villes?name=brest;
    activate r;
    Note right of f: Requête envoyée<br>au backend;
    Note over r : Aiguillage<br>selon le verbe<br>et le chemin
    activate c;
    r->>c: VillesController::villes($request);
    Note right of r: appel du contrôleur Villes
    deactivate r;
    Note over c: récupération des<br>paramètres de requête;
    activate m;
    c->>m: DB::table('cities')<br>->select('id', 'zip_code', 'name')<br>->where('name', 'like',<br> $request->input('name').'%')<br>->get()
    Note right of c: appel du<br>Query Builder appropriée;
    activate b;
    m->>b: SELECT id,zip_code,name<br>FROM cities WHERE name LIKE "brest%";
    Note right of m: Connexion au serveur<br>et requête SQL;
    b->>m: +-------+----------+---------+<br>| id    | zip_code | name    |<br>+-------+----------+---------+<br>|  9620 | 27350    | Brestot |<br>| 10527 | 29200    | Brest   |<br>+-------+----------+---------+
    Note left of b: Réponse du seveur SQL;
    deactivate b;
    m->>c: $resultat;
    Note left of m: Réponse du modèle;
    activate v;
    c->>v: response()->json($resultat);
    deactivate m;

    Note right of c: envoi à la vue;
    deactivate c;
    v->>f: [{"id":9620,"zip_code":"27350","name":"Brestot"},<br>{"id":10527,"zip_code":"29200","name":"Brest"}];
    Note left of v: envoi au frontend;
    deactivate v;
    
    deactivate f;


```

# site web non sécurisé
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

