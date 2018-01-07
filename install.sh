#!/bin/bash

sudo sudo apt-get update
sudo sudo apt-get -y upgrade

sudo apt install unzip

#Installing node js
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs

#install opencv3+ with all modules
#Guide: https://www.pyimagesearch.com/2016/10/24/ubuntu-16-04-how-to-install-opencv/
sudo apt-get install build-essential cmake

#image processing
sudo apt-get install libjpeg8-dev libtiff5-dev libjasper-dev libpng12-dev

#video processing
sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev libv4l-dev
sudo apt-get install libxvidcore-dev libx264-dev

#opencv GUI
sudo apt-get install libgtk-3-dev

#optimiztion libraries
sudo apt-get install libatlas-base-dev gfortran

sudo apt-get install python2.7-dev python3.5-dev
cd ~
opencv_version=3.1.0
wget -O opencv.zip https://github.com/Itseez/opencv/archive/${opencv_version}.zip
unzip opencv.zip
wget -O opencv_contrib.zip https://github.com/Itseez/opencv_contrib/archive/${opencv_version}.zip
unzip opencv_contrib.zip

cd ~
wget https://bootstrap.pypa.io/get-pip.py
sudo python get-pip.py

cd ~/opencv-${opencv_version}/
mkdir build
cd build
cmake -D CMAKE_BUILD_TYPE=RELEASE \
      -D CMAKE_INSTALL_PREFIX=/usr/local \
      -D INSTALL_PYTHON_EXAMPLES=ON \
      -D INSTALL_C_EXAMPLES=OFF \
      -D OPENCV_EXTRA_MODULES_PATH=~/opencv_contrib-${opencv_version}/modules \
      -D PYTHON_EXECUTABLE=~/.virtualenvs/cv/bin/python \
      -D ENABLE_PRECOMPILED_HEADERS=OFF \
      -D BUILD_EXAMPLES=ON ..


source ~/.bashrc
#installing npm project
project=open-cv-webrtc.git
git clone https://github.com/gideono/${project}
cd ${project}

npm i