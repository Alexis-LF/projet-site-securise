FROM php:7.2-apache
# Ajout du script d'installation de modules PHP

# Répertoire des fichiers du site
RUN mkdir -p /var/www/html
# Envoi des fichiers du site
COPY src/ /var/www/html/
# Envoi de la configuration apache
COPY apache/projet_M1.conf /etc/apache2/sites-available/000-default.conf

# Port HTTP (qui peut être redirigé vers un autre port)
EXPOSE 80