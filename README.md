# projet-site-securise
Projet M1 pédagogique d'élaboration d'un site web avec une version sécurisée et non sécurisée

# Installation
1. Télécharger le code source (sur la branche *main*)
2. Installer la base de données : [BDD/README.md](BDD/README.md)
3. Installer le backend : [BACK_END/INSTALL.md](BACK_END/INSTALL.md)
4. Installer le frontend : [FRONT_END/README.md](FRONT_END/README.md)

# Utilisation
[FRONT_END/README.md](FRONT_END/README.md)

# sources
## frontend
- [Template sélectionné](https://www.w3schools.com/w3css/tryw3css_templates_apartment_rental.htm)
- [Code du template selectionné](https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_apartment_rental&stacked=h)
- [W3CSCHOOL templates](https://www.w3schools.com/w3css/w3css_templates.asp)
- [Requêtes AJAX](https://www.pierre-giraud.com/javascript-apprendre-coder-cours/ajax-xmlhttprequest/)
- [Gestion de cookies de connexion](https://developer.mozilla.org/fr/docs/Web/HTTP/Cookies)
## backend
### bibliothèques
- [Lecture de tokens d'environnement en .env : vlucas/phpdotenv](https://github.com/vlucas/phpdotenv)
- [Authentification par JWT  : firebase/php-jwt](https://github.com/firebase/php-jwt)

## base de données
- [Régions, départements, villes et villages de France et d'outre-mer : data.gouv.fr](https://www.data.gouv.fr/fr/datasets/regions-departements-villes-et-villages-de-france-et-doutre-mer/#resources)
- [Annuaire santé de la Cnam, établissements de santé (Etablissements PRADO) : data.gouv.fr](https://www.data.gouv.fr/fr/datasets/5ac4f20fc751df5567500c0a/#resources)
## attaques
### xss
- [Serveur HTTP avec Python](https://pythonbasics.org/webserver/)

# Graphiques

Légende : 

```mermaid

flowchart TD
    %% définitions des classes pour le style (comme le css)
    classDef fPrincipales fill:#ff9933,stroke:#333,stroke-width:1px;
    classDef fSecondaires fill:#ffff00,stroke:#333,stroke-width:1px;
    classDef contraintes fill:#00cc66,stroke:#333,stroke-width:1px;
    classDef fEstime fill:#99ffcc,stroke:#333,stroke-width:1px;

    id1(	Fonction principale	); 
    class id1 fPrincipales;
    id2(	Fonction secondaire	); 
    class id2 fSecondaires;
    id3(	Contrainte	); 
    class id3 contraintes;
    id4(	Fonction d'estime	); 
    class id4 fEstime;

```

## Architecture du projet

```mermaid

flowchart TD
    %% définitions des classes pour le style (comme le css)
    classDef fPrincipales fill:#ff9933,stroke:#333,stroke-width:1px;
    classDef fSecondaires fill:#ffff00,stroke:#333,stroke-width:1px;
    classDef contraintes fill:#00cc66,stroke:#333,stroke-width:1px;
    classDef fEstime fill:#99ffcc,stroke:#333,stroke-width:1px;

    %% racine
    id1[	projet site sécurisé	]; 
    class id1 fPrincipales;

    %% projet site sécurisé
    id1-->	id2(    site non sécurisé	);
    id1-->	id3(    site sécurisé	);
    id1-->	id4(    attaques	);
    class id2,id3,id4,id5 fPrincipales;


    %% site non sécurisé
    id2-->	id6(    frontend	);
    id2-->	id7(    backend	);
    id2-->	id8(    base de données	);
    class id6,id7,id8 fPrincipales;
    

    %% site sécurisé
    id3-->	id9(    frontend 	);
    id3-->	id16(   backend 	);
    id3-->	id10(   base de données 	);
    class id9,id16,id10 fPrincipales;
    
    %% attaques
    id4-->	id11(   sql	);
    id4-->	id12(   xss	);
    id4-->	id13(   DDoS	);
    id4-->	id14(   auth	);
    id4-->	id15(   HTTPS	);
    class id11,id12,id13,id14,id15 contraintes;
    
    %% backend sécurisé
    id16--> id17(   Laravel	);
    class id17 contraintes;
```

## Taxonomie des fonctions
```mermaid

flowchart LR
    %% définitions des classes pour le style (comme le css)
    classDef fPrincipales fill:#ff9933,stroke:#333,stroke-width:1px;
    classDef fSecondaires fill:#ffff00,stroke:#333,stroke-width:1px;
    classDef contraintes fill:#00cc66,stroke:#333,stroke-width:1px;
    classDef fEstime fill:#99ffcc,stroke:#333,stroke-width:1px;

    %% racine
    id1[	projet site sécurisé	]; 
    class id1 fPrincipales;

    %% projet site sécurisé
    id1-->	id2(    2 Sites web	);
    id1-->	id3(    Thématique du sujet :\nsite de RDV médicaux 	);
    id1-->	id4(    Attaques d'après le\nTOP10 OWASP 2007	);
    class id2,id4 fPrincipales;
    class id3 fSecondaires;

    %% Thématique
    id3-->	id3.1(    Exemple de\npatient exitant	);
    id3-->	id3.2(    Peupler le site\nde données );
    class id3.1 fPrincipales
    class id3.2 fSecondaires

    %% Données
    id3.2-->	id3.2.1(    Profil de docteurs );
    id3.2-->	id3.2.2(    Sites médicaux );
    id3.2-->	id3.2.3(    Professions );
    id3.2-->	id3.2.4(    Villes );

    class id3.2.1,id3.2.2,id3.2.3,id3.2.4 fSecondaires




    %% sites web
    id2-->	id2.1(    Version non sécurisé :\nvulnérable des attaques	);
    id2-->	id2.2(    Version sécurisé :\nprotégé des attaques	);
    id2-->	id2.3(    Architecure	);
    id2-->	id2.4(    Services du site	);
    id2-->	id2.5(    Opérationnel	);
    class id2.1,id2.2,id2.3,id2.4,id2.5 fPrincipales;

    %% Architecure
    id2.3-->	id2.3.1(    Client-serveur	);
    id2.3-->	id2.3.2(    Cloisonnement	);
    class id2.3.1,id2.3.2 fPrincipales;


    %% Architecure client-serveur
    id2.3.1-->	id2.3.1.1(    Frontend	);
    id2.3.1-->	id2.3.1.2(    Backend	);
    id2.3.1-->	id2.3.1.3(    Base de données	);
    class id2.3.1.1,id2.3.1.2,id2.3.1.3 fPrincipales;

    %% Frontend
    id2.3.1.1-->	id2.3.1.1.1(    Même interface pour\nles deux versions	);
    id2.3.1.1-->	id2.3.1.1.2(    Utilisation d'un template	);
    class id2.3.1.1.1,id2.3.1.1.2 contraintes

    %% Backend
    id2.3.1.2-->	id2.3.1.2.1(    Non sécurisé : PHP	);
    id2.3.1.2-->	id2.3.1.2.2(    Sécurisé : Framework Laravel	);
    class id2.3.1.2.1,id2.3.1.2.2 contraintes



    %% Cloisonnement
    id2.3.2-->	id2.3.2.1(    2 sites : 2 instances distinctes	);
    id2.3.2-->	id2.3.2.2(    Les 3 serveurs client-serveur sont indépendants	);
    class id2.3.2.1,id2.3.2.2 contraintes;

    %% Services du site
    id2.4-->	id2.4.1(    Gestion des utilisateurs	);
    id2.4-->	id2.4.2(    Recherche d'un docteur	);
    id2.4-->	id2.4.3(    Consultation de ressources\nprivées d'un patient	);
    id2.4-->	id2.4.4(    Gestion de profil patient	);
    id2.4-->	id2.4.5(    Prise de RDV	);
    class id2.4.1,id2.4.2,id2.4.3 fPrincipales;
    class id2.4.4,id2.4.5 fEstime;




    %% Gestion des utilisateurs
    id2.4.1-->	id2.4.1.1(    Inscription de nouveaux utilisateurs\npar identifiant et mot de passe	);
    id2.4.1-->	id2.4.1.2("    Inscription par un tiers\n(conenxion avec google)	");
    class id2.4.1.1 fPrincipales;
    class id2.4.1.2 fEstime;

    %% Consultation de  ressources privées d'un patient
    id2.4.3-->	id2.4.3.1(    Document médicaux );
    id2.4.3-->	id2.4.3.2(    Factures	);
    class id2.4.3.1,id2.4.3.2 fPrincipales;


    %% Opérationnel
    id2.5-->	id2.5.2(    Sur un serveur	);
    id2.5-->	id2.5.1(    Utilisable par le public	);
    class id2.5.1,id2.5.2 fPrincipales
    
    %% Sur un serveur
    id2.5.2-->	id2.5.2.1(    Serveurs de production sur le réseau	);
    id2.5.2-->	id2.5.2.2(    Serveurs localhost	);
    id2.5.2-->	id2.5.2.3(    Déploiement simple	);
    class id2.5.2.2 fPrincipales;
    class id2.5.2.1 fSecondaires;
    class id2.5.2.3 fEstime;



    %% attaques
    id4-->	id4.1(   Injections SQL	);
    id4-->	id4.2("   Cross Site Scripting (XSS)	");
    id4-->	id4.3("   Déni de service distribué (DDoS)	");
    id4-->	id4.4(   Violation de gestion d' authentification	);
    id4-->	id4.5("   Communications non sécurisées (HTTP-S)	");
    id4-->	id4.6(   Tutoriels d'utilisation  et d'explications	);
    class id4.1,id4.2,id4.3,id4.4,id4.5 contraintes;
    class id4.6 fPrincipales;

    

```