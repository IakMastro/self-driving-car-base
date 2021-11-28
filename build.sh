#!/bin/sh 

echo "====> Opening Services"
docker-compose up -d --build --force-recreate 

echo "====> Mongo Express IP"
mongo_express_ip=$(docker inspect mongo-express | jq '.[].NetworkSettings.Networks.dbnet.IPAddress' | sed 's/\"//g')
echo "Mongo Express: http://${mongo_express_ip}:8081"

echo "====> Interface IP"
interface_ip=$(docker inspect car-interface | jq '.[].NetworkSettings.Networks.datacenternet.IPAddress' | sed 's/\"//g')
echo "Interface IP: http://${interface_ip}:8080"
