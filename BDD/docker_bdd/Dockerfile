# Conteneur pour la base de données
FROM mariadb:latest
# on copie l'ensemble des sources qui servira à l'image
# RUN sed -i  's/#bind-address/bind-address/' /etc/mysql/mariadb.conf.d/50-server.cnf
COPY scripts_sql/* /docker-entrypoint-initdb.d/scripts_sql/
COPY initialisation_bdd.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

# Définition de la commande par défaut
# CMD ["mariadb -hserveur_bdd -uadminBDD -p "]