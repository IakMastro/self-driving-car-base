#!/bin/sh 

echo "====> Opening Services"
docker-compose up -d 

echo "====> Mongo Express IP"
mongo_express_ip=$(docker inspect mongo-express | jq '.[].NetworkSettings.Networks.mongonet.IPAddress' | sed 's/\"//g')
echo "Mongo Express: http://${mongo_express_ip}:8081"
