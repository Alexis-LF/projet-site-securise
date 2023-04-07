# Procédé de mise en place de l'HTTPS
- *CA : Certificate authority*
## 1. Créer les fichiers de signature
### 1.1. certificat CA
1. Configurer la clé qui sera générée grâce au fichier [ca.cnf](ca.cnf)
2.  Créer la clé :
    ```bash
    openssl req -x509 -sha256 -days 3650 -newkey rsa:2048 -config ca.cnf -keyout ca.key -out ca.crt
    ```
    - Note : pour inspecter le certificat, la commande est : 
    ```bash
    openssl x509 -in ca.crt -text -noout
    ```
### 1.2. certificat de serveur
