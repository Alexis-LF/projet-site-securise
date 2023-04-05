# Front end
## Architecture
- Docker
## Installation
### Créer l'image
#### Constantes d'environnement
Définir les valeurs de la premièr ligne du fichier [FRONT_END/src/javascript/define.js](src/javascript/define.js)
 - Attribuer à la variable `BASE_URL` l'adresse IP **du backend** (127.0.0.1 si en local sur sa machine) puis le **port** choisi **lors du lancement du backend** (séparés par `:`).
>Pour plus de précisions concernant l'adresse IP et le port à marquer, se référer à [BACK_END/INSTALL.md](../BACK_END/INSTALL.md).
 - la variable `API_VERSION` peut aussi être modifiée pour utiliser une version plus récente que la 1.00.
#### Compiler l'image Docker
Une fois l' étape précédente établie
1. Se placer dans le dossier `FRONT_END`
2. Dans un terminal, lancer la commande
    ```bash
    docker build -t projet_m1_frontend:1.0 .
    ```
    Une fois l'image créée, il n'est pas nécessaire de la créer de nouveau pour relancer le serveur, sauf si les fichers sources tel `Define.js` ont été modifiés
### Lancer un conteneur serveur frontend
#### Commande
Une fois l'image créée, lancer la commane suivante en changeant les paramètres en majusucules :
```bash
docker run --rm --detach -p PORT:80/tcp  --name NOM_DU_SERVEUR projet_m1_frontend:1.0
```
#### Paramètres
1. Il faut remplacer les paramètres suivants de la commande précédente conformément au ficher `FRONT_END/javascript/define.js`pour lier la connexion du Front end au back end. 
2. De plus, il faut adapter l'adresse IP et le port dans le `define.js` également :
    ```js
    const BASE_URL="http://ADRESSE_IP_OU_NOM_DE_DOMAINE:PORT";
    ```


| Paramètre      	| Description                                                                                                                                                                                                                                                                       	| Exemple                                  	|
|----------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|------------------------------------------	|
| NOM_DU_SERVEUR 	| Nom du conteneur lancé par docker                                                                                                                                                                                                                                                 	| serveur_frontend                              	|
| PORT           	| Port de connexion au frontend.                                                                                                                                                                                                                     	| 2345                                     	|
## Compatibilité
- Firefox
- *Les navigateurs basés sur Chrome exigent le HTTPS pour certaines requêtes, alors Chrome n'est pas compatible.*
## Utilisation
- Ouvrir dans Firefox `ADRESSE_IP:PORT`
  - avec l'adresse IP du docker (127.0.0.1 si hébergé sur son PC)
  - et le port défini précédemment
- Pour afficher la **liste de tous les docteurs** créés pour le test du site web, il suffit de cliquer sur **chercher** en ne renseignant aucun critère de recherche.
- Un compte de test a été créé. Ce compte possède des documents et des factures :
  - identifiant : `mail@test.com`
  - mot de passe : `password`
## Suivi du fonctionnement
### Logs
Taper dans un terminal la commande suivante
```bash
docker logs NOM_DU_SERVEUR 
```
### Récupération du système de fichiers interne
Pour débuger le fonctionnement de l'image, il est possible de récupérer les fichiers du conteneur docker. Pendant son éxecution, taper dans un terminal la commande suivante
```bash
docker export -o NOM_DU_SERVEUR.tar NOM_DU_SERVEUR
```
Ensuite, extraire l'archive (comme un .zip) créée dans le dossier courant.


### Schema Mermaid Pages du site ### 
## Page non connecté 

```mermaid

flowchart TD;

    

    %% racine

    id2((Site Libdocto\nPage principale index.html\n en tant qu'invité)) 
    
    id2--inscription--> idinscription[[Page d'inscription\n Formulaire]];
    idinscription--redirection\n si formulaire\n valide-->id2
    idinscription--si formulaire\n invalide-->id3[Erreur]
    id3-->idinscription

    id2--connexion-->idconnexion[[Zone de connexion\n présente sur la page\n principale]]
    idconnexion--Entrées valides-->idpageconnecte((Page principale\nindex.html\nen tant\nque connecté))
    idconnexion--Entrées invalides\n-->id2

    id2--recherche\n docteurs-->idrecherche[[Page resultats\nAffiche les\n docteurs\n demandés]];
```

## Page connecté 

```mermaid

flowchart TD;

    %% racine
    id2((Site Libdocto\nPage principale\n index.html\n en tant que\n connecté))
    


    idrecherchebis--prise de rdv-->idconfirm[[Page de confirmation\n de rdv]]
    idconfirm--redirection-->id2
    id2--consultation\nfactures-->idfactures[[Page factures\nAffiche les factures\n du patient connecté]]
    
    id2--consultation\ndocuments-->iddocuments[[Page documents\nAffiche les documents\n du patient connecté]]

    id2--deconnexion-->iddeconnexion[[Page de deconnexion\nConfirme la bonne déconnexion\n du patient]]

    iddeconnexion--redirection-->idpagedeconnecte((Page principale\n index.html\nen tant\n qu'inconnu))
    

    id2--recherche\n docteurs-->idrecherchebis[[Page resultats\nPossibilité de\n prise de rdv\n avec les docteurs\n demandés]];
   
```

# Schema Mermaid #

## Relations entre fichiers JS et fichiers HTML ##

### Fichier ajax.js ### 

```mermaid

flowchart TD;

    %% racine

    idajax((Fichier ajax.js\n contenant la fonction\najaxRequest))
    idajax-->idconnexion[[Fichier connexion.html]]
    idajax-->idresultats[[Fichier resultats.html]]
    idajax-->idfactures[[Fichier factures.html]]
    idajax-->iddocuments[[Fichier documents.html]]
    idajax-->idindex[[Fichier index.html]]

    idconnexion-->idconnexion2[Utilisation de la fonction\najaxRequest afin de\n valider la connexion\n d'un utilisateur]

    idresultats-->idresultats2[Utilisation de la fonction\najaxRequest afin de récupérer\n des données depuis le serveur\n distant en utilisant l'URL spécifiée\n dans la variable url]

    idfactures-->idfactures2[Utilisation de la fonction\nverificationConnexionReussie\nvérifiant que l'utilisateur\n est bien connecté]
    idfactures2-->idfactures3[Utilisation de ajaxRequest\nrécupérant le mail de \n l'utilisateur connecté afin\n d'afficher ses factures]

    iddocuments-->iddocuments2[Utilisation de la fonction\nvérificationConnexionReussie\n vérifiant que l'utilisateur\n est bien connecté ]
    iddocuments2-->iddocuments3[Utilisation de ajaxRequest\nrécupérant le mail de \n l'utilisateur connecté afin\n d'afficher ses documents]

    idindex-->idindex2[Utilisation ajaxRequest\n récupérant la liste des villes, des docteurs\net des professions pour faciliter\n la recherche]
   
```

### Fichier connexion.js ### 

```mermaid

flowchart TD;

    %% racine

    idajax((Fichier connexion.js\n contenant les fonctions ajaxConnexion,\n connexion_reussie et estConnecte))
    idajax-->idindex[[Fichier index.html]]
    idajax-->idconfirm[[Fichier pageDeConfirmation.html]]
    idajax-->idfactures[[Fichier factures.html]]
    idajax-->iddocuments[[Fichier documents.html]]

    idindex-->idindex2[Utilisation de la fonction ajaxConnexion\n afin de connecter l'utilisateur si ses\nentrées sont valides]
    idindex--->idindex3[Utilisation de la fonction\n estConnecte vérifiant à\n chaque fois que\n l'utilisateur est bien\n connecté]

    idindex2-->idindex4[Utilisation de la fonction\n connexion_reussie vérifiant que\n les entrées de l'utilisateur correspondent\n bien au compte associé]

    idconfirm-->idindex3

    idfactures-->idfactures2[Utilisation de la fonction\nverificationConnexionReussie\nvérifiant que l'utilisateur\n est bien connecté]
    idfactures-->idindex3
    
    iddocuments-->iddocuments2[Utilisation de la fonction\nvérificationConnexionReussie\n vérifiant que l'utilisateur\n est bien connecté ]
    iddocuments-->idindex3
    

   
```

### Fichier cookie.js ###

```mermaid

flowchart TD;

    %% racine

    idajax((Fichier cookie.js\n contenant les fonctions getCookie, checkCookie,\n setCookie, removeCookie, removeAllCookie))

    idajax-->idget[[Fonction getCookie]]
    idajax-->idset[[Fonction setCookie]]
    idajax-->idcheck[[Fonction checkCookie]]
    idajax-->idrm[[Fonction removeCookie]]
    idajax-->idrmall[[Fonction removeAllCookie]]

    idget-->idget2[Fonction parcourant une chaine\n de caractères de cookies pour trouver\n le cookie correspondant à\n l'entrée de la fonction ]

    idset-->idset2[Fonction créant\n un nouveau cookie de connexion]

    idcheck-->idcheck2[Fonction vérifiant\n si le cookie\n de connexion est présent]

    idrm-->idrm2[Fonction supprimant un cookie\n désigné par son nom]

    idrmall-->idrmall2[Fonction supprimant tous les cookies\n présents sur la page concernée]

    

   
```

### Fichier documents.js et factures.js ###

```mermaid

flowchart TD;

    %% racine

    idajax((Fichier documents.js et \nfactures.js contenant les fonctions\n afficheDocuments et afficheFactures))

   
    idaffiche-->idaffiche2[Fonction permettant d'afficher les détails\n des documents et/ou des factures du patient connecté\n dans la page HTML concernée]

    idajax-->idajax2[[Fonction ajaxRequest]]
    idajax2-->idajax3[Fonction effectuant une requête ajax\n pour récupérer les documents et\n les factures ]
    idajax3--Erreur-->iderreur[Echec de la récupèration des \n documents du patient]
    idajax3--Succès-->idsuccess[Récupération des documents\n ou factures effectuée avec succès ]
    idsuccess--Activation\n de afficheX-->idaffiche

   
```
### Fichier gestionMotDePasse.js ###

```mermaid

flowchart TD;

    %% racine

    idajax((Fichier gestionMotDePasse.js assurant\n la bonne validité des entrées\n utilisateurs lors de l'inscription))

    idajax--utilisé lors de\n l'inscription-->idvalide[[Fonction validerFormulaire]]

    idvalide-->idvalide2[Permettant une robustesse des\n nouveaux mots de passe utilisateurs\contre les attaques par\nbrute force]

    idvalide-->idvalide3[Assurant une protection contre\nles attaques par injection  SQL\nen filtrant les entrées]
   
   idvalide-->idvalide4[Assurant que tous les champs\n d'inscription soit correctement remplis]

   idvalide-->idvalide5[Si toutes les conditions\n sont validées, alors l'inscription\n du nouvel utilisateur est effectuée]
```

### Fichier index.js ###

```mermaid

flowchart TD;
    
    %% racine
    
    idajax((Fichier index.js contenant\n les fonctions utilisées\n lors de la recherche de docteurs))

    idajax---->idlistvilles[[Fonction lister_villes prenant\n la liste de toutes les villes de France]]

    idajax--->idvilletapee[[Fonction villeTapee qui est appelée à chaque fois\n que l'utilisateur tape plus de 3 lettres\n dans le champ de recherche de villes\n et qui affiche la ville correspondante]]

    idajax-->idrecherche[[Fonction récupérant les entrées de villes,\n professions et docteurs puis qui les enregistre\n avant de rediriger l'utilisateur sur resultats.js]]
```

### Fichier protectionXSS.js ### 

```mermaid

flowchart TD;

    %% racine

    idajax((Fichier protectionXSS.js assurant\n une protection optimale contre\n les injections XSS))

    idajax-->idescape[[Fonction escapeHTML permettant\n d'échapper les caractères spéciaux]]

    idajax-->idsanitized[[Fonction filtrant les entrées \nutilisateurs et regardant les changements\n dans le formulaire]]
    
```

### Fichier resultats.js ###

```mermaid

flowchart TD;

    %% racine

    idajax((Fichier resultats.js affichant\n les résultats de recherche des utilisateurs))

    idajax-->iddocteurs[[Fonction afficheDocteurs\n affichant la liste des docteurs\n correspondant à la recherche]]

    idajax-->idurl[[Fonction getParamsURL créant le nouvel URI\n composé des paramètres de requêtes\n pour le backend]]

    idajax-->idcriteres[[Fonction criteresRecherche remplaçant les 3 critères\n de recherches de l'utilisateur]]

    idajax-->idrequest[[Fonction ajaxRequest récupèrant la liste de\n docteurs en fonction des\n critères de recherche]]


```