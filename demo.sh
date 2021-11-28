#!/bin/bash

./launch.sh

echo "====> Running data generator"

docker exec -it demo python3 demo.py

echo "Done, check mongo-express"

echo "====> Compiling DDOS demo"

docker exec gcc -o demo ddos.c -pthread -lcurl
docker exec -it demo ./ddos

echo "===> Checking TCP Dump"

docker exec -it demo tcpdump

echo "===> Done"
