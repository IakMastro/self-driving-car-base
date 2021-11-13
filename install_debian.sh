#!/bin/sh

echo "====> Installing Dependencies"

sudo apt-get install -y \
	apt-transport-https \
	ca-certificates \
	curl \
	gnupg \
	lsb-release

echo "====> Getting Docker Apt Repository"

curl -fsSL https://download.docker.com/linux/debian/gpg |
	sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg 

echo \
	"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
	$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

echo "====> Upgrading The System"

sudo apt-get -y update

echo "====> Installing Docker"

sudo apt-get intall -y docker-ce docker-ce-cli docker-compose containerd.io

echo "====> Installation Finished!"

sh launch.sh
