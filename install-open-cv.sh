#!/usr/bin/env bash
#install opencv3+ with all modules
#Guide: http://www.daslhub.org/unlv/wiki/doku.php?id=opencv_install_ubuntu
version=3.4.0
echo "Installing OpenCV" ${version}
echo "Removing any pre-installed ffmpeg and x264"
echo "sudo apt-get remove x264 libx264-dev"
echo "***********************************"
echo "Installing Dependenices"
sudo apt-get install --assume-yes libopencv-dev
echo "************Build Tools***********************"
echo "<----------------------------------------------------Build Tools------------------------------------------------->"
sudo apt-get install --assume-yes build-essential cmake
echo "*_*_*_*_*_*_*_*_*_*_*_*_*_*"
echo "<------------------------------------------------------Image I/O----------------------------------------------------->"
sudo apt-get install --assume-yes libtiff5-dev libjpeg-dev libjasper-dev libpng-dev zlib1g-dev libwebp-dev libopenexr-dev libgdal-dev
echo "***********************************"
echo "<--------------------------------------------------------Video I/O--------------------------------------------------->"
sudo apt-get install --assume-yes libavcodec-dev libavformat-dev libmp3lame-dev
sudo apt-get install --assume-yes libswscale-dev libdc1394-22-dev
sudo apt-get install --assume-yes libgstreamer0.10-dev libgstreamer-plugins-base0.10-dev
sudo apt-get install --assume-yes libv4l-dev v4l-utils libfaac-dev libopencore-amrnb-dev
sudo apt-get install --assume-yes libopencore-amrwb-dev libtheora-dev libvorbis-dev
sudo apt-get install --assume-yes libxvidcore-dev libx264-dev x264 yasm
echo "***********************************"
echo "Parallelism and linear algebra libraries"
sudo apt-get install libtbb-dev libeigen3-dev
echo "***********************************"
echo "<------------------------------------------------for GUI------------------------------------------------->"
sudo apt-get install --assume-yes libqt4-dev libgtk2.0-dev qt5-default
echo " sudo apt-get install libvtk6-dev"
echo "*************************************************************************************************************"
echo "<--------------For JAVA-------------------->"
sudo apt-get install --assume-yes ant default-jdk
echo "<-------********------For Python------********-------->"
sudo apt-get install --assume-yes python-dev python-tk python-numpy python3-dev python3-tk python3-numpy python-matplotlib
sudo apt-get install --assume-yes python-opencv
echo "%_%_%_%_%_%_%_%_%_%_%_%_%_%_%_%_%_%_%_%_%_%"
echo "Downloading OpenCV" ${version}
cd ~
wget -O opencv.zip https://github.com/Itseez/opencv/archive/${version}.zip
unzip opencv.zip
cd opencv-${version}
mkdir build
cd build
echo "*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_"
cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local -D FORCE_VTK=ON -D WITH_TBB=ON -D WITH_V4L=ON -D WITH_QT=ON -D WITH_OPENGL=ON -D WITH_CUBLAS=ON -D CUDA_NVCC_FLAGS="-D_FORCE_INLINES" -D WITH_GDAL=ON -D WITH_XINE=ON -D BUILD_EXAMPLES=ON ..

make -j4
echo "***********************************"
sudo make install
echo "***********************************"
sudo sh -c 'echo "/usr/local/lib" > /etc/ld.so.conf.d/opencv.conf'
echo "***********************************"
sudo ldconfig
echo "OpenCV" ${version} "ready to be used"