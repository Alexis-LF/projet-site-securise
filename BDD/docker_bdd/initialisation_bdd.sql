CREATE DATABASE Projet_M1;
USE Projet_M1;

source /docker-entrypoint-initdb.d/scripts_sql/script_creation_tables.sql;
source /docker-entrypoint-initdb.d/scripts_sql/script_ajout_donnees.sql;
source /docker-entrypoint-initdb.d/scripts_sql/script_ajout_exemples.sql;
source /docker-entrypoint-initdb.d/scripts_sql/backend_permissions.sql;