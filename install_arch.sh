#!/bin/sh 

echo "====> Installing Docker"

sudo pacman -Syu --noconfirm docker docker-compose

echo "====> Opening docker.service"

sudo systemctl start docker.service
sudo systemctl enable docker.service

echo "====> Creating and Adding Docker group on current user"

sudo groupadd docker
sudo usermod -aG docker "${USERNAME}"

echo "====> Successfully installed docker"
