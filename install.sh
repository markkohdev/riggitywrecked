#!/bin/bash

# Install all apt-get stuff
echo "Getting latest versions"
apt-get update >> install.log

echo "Installing Ruby, Node, NPM"
apt-get install -y ruby-dev nodejs npm >> install.log

echo "Installing Other Dependencies"
npm install -g gulp >> install.log
npm install -g bower  >> install.log

curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs

if [ ! -f /usr/bin/node ]; then
    ln -s /usr/bin/nodejs /usr/bin/node
fi

# Get us that sassy stuff
gem install sass >> install.log
gem install compass >> install.log

