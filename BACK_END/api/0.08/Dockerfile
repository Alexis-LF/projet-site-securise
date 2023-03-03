FROM php:7.2-apache
# Ajout du script d'installation de modules PHP
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions mysqli pdo pdo_mysql zip


# Répertoire des fichiers du site
RUN mkdir -p /var/www/M1/projet/api/0.08
# Envoi des fichiers du site
COPY src/ /var/www/M1/projet/api/0.08/
# Envoi de la configuration apache
COPY apache/projet_M1.conf /etc/apache2/sites-available/000-default.conf

# Installer composer pour des libs php
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer
RUN cd /var/www/M1/projet/api/0.08 && composer update

# clés pour le fonctionnement du JWT (sessions utilisateurs frontend-backend)
RUN cd /var/www/M1/projet/api/0.08 && chown :www-data .ssh/id_rsa* && chmod 670 .ssh/id_rsa*

# Port HTTP (qui peut être redirigé vers un autre port)
EXPOSE 80