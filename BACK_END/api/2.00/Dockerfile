FROM nginx:alpine
# 1. copier le code source du backend laravel dans le bon dossier
# géré grâce aux volumes externes

# modules PHP
RUN apk update
RUN apk add --upgrade php81-mysqli php81-pdo php81-pdo_mysql php81-zip
# 2. copier la config nginx
ADD src/nginx/default.conf /etc/nginx/conf.d
# 3. certificats
RUN mkdir -p /etc/nginx/certificats
ADD src/nginx/ca.cnf /etc/nginx/certificats
RUN apk add openssl
RUN cd /etc/nginx/certificats && openssl req -x509 -sha256 -days 3650 -newkey rsa:2048 -config ca.cnf -keyout ca.key -out ca.crt



# Port HTTP (qui peut être redirigé vers un autre port)
EXPOSE 80
EXPOSE 443