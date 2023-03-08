#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <curl/curl.h>

#define BASE_URL "http://10.10.43.209:5678"
#define API_VERSION "0.08"
#define URL_LEN 100

int main() {
    char url[URL_LEN];

    CURL *curl;
    CURLcode res;

    curl = curl_easy_init();

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

        res= curl_easy_perform("Hello World");
    }

    curl_easy_cleanup(curl);
    return 0;
}