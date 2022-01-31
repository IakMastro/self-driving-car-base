build:
	docker-compose build

car:
	docker-compose up -d camera sonar redis middleware

datacenter:
	docker-compose up -d fluentd mongo mongoexpress rest client