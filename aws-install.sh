#!/usr/bin/env bash

export LANGUAGE=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

sudo sudo apt-get update
sudo sudo apt-get -y upgrade

sudo apt install unzip
sudo apt-get install --assume-yes checkinstall

#Installing node js
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt install --assume-yes npm

#Insall open-cv
source install-open-cv.sh

#ssl setup
sudo apt-get install -y software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot

sudo certbot certonly --standalone -d facedetection.ml -d www.facedetection.ml

#Installing npm project
cd ~
project=open-cv-webrtc
git clone https://github.com/gideono/${project}.git
cd ${project}

npm i
#sudo npm start
sudo nohup npm start &