
# The makefile for running the angular app
# Created by Mark Koh on 4/6/2016

# Define s
SERVER_PORT=5000

BOWER_FLAGS=--config.interactive=false


install-bower:
	bower install $(BOWER_FLAGS)

install-npm:
	npm install

install: install-npm install-bower

run: install
	gulp serve

run-bg: install
	nohup gulp serve > app.log 2>&1 &

build:
	gulp build
	\cp -R /opt/code/ng-app/dist/* /var/www/rmdrink/

build-staging:
	gulp build-staging
	\cp -R /opt/code/ng-app/dist/* /var/www/rmdrink/

build-prod:
	gulp build-prod
	\cp -R /opt/code/ng-app/dist/* /var/www/rmdrink/

kill:
	pkill -f gulp

clean:
	rm -rf .sass-cache dist

clean-hard: clean
	rm -rf bower_components node_modules .tmp