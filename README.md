# projet-site-securise
Projet M1 pédagogique d'élaboration d'un site web avec une version sécurisée et non sécurisée

# Installation
1. Télécharger le code source (sur la branche *main*)
2. Installer la base de données : [BDD/README.md](BDD/README.md)
3. Installer le backend : [BACK_END/INSTALL.md](BACK_END/INSTALL.md)
4. Installer le front end : [FRONT_END/README.md](FRONT_END/README.md)

# Utilisation
[FRONT_END/README.md](FRONT_END/README.md)

# sources
## front end
- [Template sélectionné](https://www.w3schools.com/w3css/tryw3css_templates_apartment_rental.htm)
- [Code du template selectionné](https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_apartment_rental&stacked=h)
- [W3CSCHOOL templates](https://www.w3schools.com/w3css/w3css_templates.asp)
- [Requêtes AJAX](https://www.pierre-giraud.com/javascript-apprendre-coder-cours/ajax-xmlhttprequest/)
- [Gestion de cookies de connexion](https://developer.mozilla.org/fr/docs/Web/HTTP/Cookies)
## back end
### bibliothèques
- [Lecture de tokens d'environnement en .env : vlucas/phpdotenv](https://github.com/vlucas/phpdotenv)
- [Authentification par JWT  : firebase/php-jwt](https://github.com/firebase/php-jwt)

## base de données
- [Régions, départements, villes et villages de France et d'outre-mer : data.gouv.fr](https://www.data.gouv.fr/fr/datasets/regions-departements-villes-et-villages-de-france-et-doutre-mer/#resources)
- [Annuaire santé de la Cnam, établissements de santé (Etablissements PRADO) : data.gouv.fr](https://www.data.gouv.fr/fr/datasets/5ac4f20fc751df5567500c0a/#resources)
## attaques
### xss
- [Serveur HTTP avec Python](https://pythonbasics.org/webserver/)

# Orgranigramme

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
    id1-->	id5(    thématique	);
    class id2,id3,id4,id5 fPrincipales;


    %% site non sécurisé
    id2-->	id6(    front end	);
    id2-->	id7(    back end	);
    id2-->	id8(    bdd	);
    class id6,id7,id8 fPrincipales;
    

    %% site sécurisé
    id3-->	id9(    front end 	);
    id3-->	id16(   back end 	);
    id3-->	id10(   bdd 	);
    class id9,id16,id10 fPrincipales;
    
    %% attaques
    id4-->	id11(   sql	);
    id4-->	id12(   xss	);
    id4-->	id13(   DDoS	);
    id4-->	id14(   auth	);
    id4-->	id15(   HTTPS	);
    class id11,id12,id13,id14,id15 contraintes;
    
    %% thématique
    id5-->	id18(   libdocto	);
    class id18 fSecondaires;
    
    %% back end sécurisé
    id16--> id17(   Laravel	);
    class id17 contraintes;
```
