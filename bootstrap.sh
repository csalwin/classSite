#!/usr/bin/env bash

apt-get update
apt-get install -y apache2
apt-get install -y php5 php-pear php5-mcrypt

apt-get -f install
rm -rf /var/www
ln -fs /vagrant /var/www