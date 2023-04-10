# Installation du serveur Frontend 
## Lire [`FRONT_END/INSTALL.md` pour suivre les instruction d'installation et de lancement](INSTALL.md)

# Utilisation du site
- Ouvrir dans Firefox `ADRESSE_IP:PORT`
  - avec l'adresse IP du docker (127.0.0.1 si hébergé sur son PC)
  - et le port défini précédemment
- Pour afficher la **liste de tous les docteurs** créés pour le test du site web, il suffit de cliquer sur **chercher** en ne renseignant aucun critère de recherche.
- Un compte de test a été créé. Ce compte possède des documents et des factures :
  - identifiant : `mail@test.com`
  - mot de passe : `password`



# Schémas de fonctionnement du frontend 
## Page non connecté 

```mermaid

flowchart TD;

    

    %% racine

    id2((Site Libdocto\nPage principale index.html\n en tant qu'invité)) 
    
    id2--inscription--> idinscription(Page d'inscription\n Formulaire);
    idinscription--redirection\n si formulaire\n valide-->id2
    idinscription--si formulaire\n invalide-->id3(Erreur)
    id3-->idinscription

    id2--connexion-->idconnexion(Zone de connexion\n présente sur la page\n principale)
    idconnexion--Entrées valides-->idpageconnecte((Page principale\nindex.html\nen tant\nque connecté))
    idconnexion--Entrées invalides\n-->id2

    id2--recherche\n docteurs-->idrecherche(Page resultats\nAffiche les\n docteurs\n demandés);
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

## Relations entre fichiers JS et fichiers HTML ##

### Fichier ajax.js ### 

```mermaid

flowchart LR;

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

flowchart LR;

    %% racine

    idajax((Fichier cookie.js\n contenant les fonctions\n getCookie, checkCookie,\n setCookie, removeCookie,\n removeAllCookie))

    idajax-->idget(Fonction\ngetCookie)
    idajax-->idset(Fonction\nsetCookie)
    idajax-->idcheck(Fonction\ncheckCookie)
    idajax-->idrm(Fonction\nremoveCookie)
    idajax-->idrmall(Fonction\nremoveAllCookie)

    idget-->idget2(Parcourt une chaine\n de caractères de cookies\n pour trouver\n celui correspondant\n à l'entrée de la fonction)

    idset-->idset2(Créée un nouveau\n cookie de connexion)

    idcheck-->idcheck2(Vérifie si le cookie\n de connexion\n est présent)

    idrm-->idrm2(Supprime un cookie\n désigné par son nom)

    idrmall-->idrmall2(Fonction supprimant\n tous les cookies\n présents sur\n la page concernée)

    

   
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

flowchart LR;

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

flowchart LR;
    
    %% racine
    
    idajax((Fichier\nindex.js contenant\n les fonctions utilisées\n lors de la recherche\nde docteurs))

    idajax--au démarrage-->idlisteProfeessions[[Chargement de la liste des professions dans le champ de recherche]]

    idajax--au démarrage-->idlisteDocteurs[[Chargement de la liste des docteurs dans le champ de recherche]]

    idajax--3 lettres rapées-->idlistvilles[[Chargement des villes corrspondant au début du nom tapé]]

    idajax--bouton de recherche appuyé-->idrecherche[[Récupération de la ville, profession et docteur tapés\n et redirection de l'utilisateur sur la page de résultats avec les critères]]


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

flowchart LR;

    %% racine

    idajax((Fonctionnement\n de la\n page résultats))

    idajax-->idurl(Récupération des\nparamètres\n par la\nfonction\ngetParamsURL)

    idurl-->idrequest(Récupération de\n la liste des\n docteurs en fonction\n des critères\n de recherche)

    idrequest-->idocteurs(Affiche la liste\n des docteurs\n de la recherche\n par la fonction\n afficheDocteurs)

    


```