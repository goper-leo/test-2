setup:
	composer install
	yarn
	php artisan key:generate
	make authorize
	php artisan migrate
	php artisan storage:link

authorize:
	sudo chmod -R 777 ./storage/
	sudo chmod -R 777 ./vendor/
	sudo chmod -R 777 ./bootstrap/cache/
	composer dump-autoload
	php artisan cache:clear

update:
	sudo chmod -R 777 ./storage
	composer install
	composer dump-autoload
	php artisan cache:clear
	php artisan migrate
	yarn

refresh:
	composer install
	php artisan cache:clear
	php artisan config:clear
	php artisan view:clear
	php artisan route:clear
	php artisan optimize:clear
	composer dump-autoload
