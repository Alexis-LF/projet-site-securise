# Conteneur pour la base de données
FROM mariadb:latest
# on copie l'ensemble des sources qui servira à l'image
COPY scripts_sql/* /docker-entrypoint-initdb.d/scripts_sql/
COPY initialisation_bdd.sql /docker-entrypoint-initdb.d/
# Port par défaut de mariadb qui sera remplacé par la commande de lancement du serveur
EXPOSE 3306