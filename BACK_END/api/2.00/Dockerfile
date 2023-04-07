FROM nginx:alpine
# 1. copier le code source du backend laravel dans le bon dossier
# dans /usr/share/nginx/html
# COPY src/laravel/ /usr/share/nginx/html/
# 2. copier la config nginx
# dans /etc/nginx/conf.d/default.conf
ADD src/nginx/default.conf /etc/nginx/conf.d

# Port HTTP (qui peut être redirigé vers un autre port)
EXPOSE 80

