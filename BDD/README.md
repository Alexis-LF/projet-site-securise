# Implémentation de la base de données du projet
## Architexture
- mariadb ou mysql
## Création de la base de données
1. Depuis un terminal, déplacez-vous vers le répertoire `BDD/`
2. Lancez MySQL et créez une nouvelle base de données, par exemple :
    ```mysql
    CREATE DATABASE Projet_M1;
    ```
3. Accédez à la base de données :
    ```mysql
    USE Projet_M1;
    ```
4. Chargez les scripts SQL contenus dans `BDD/` :    
    ```mysql
    source script_creation_tables.sql;
    source script_ajout_donnees.sql;
    source script_ajout_exemples.sql;
    ```