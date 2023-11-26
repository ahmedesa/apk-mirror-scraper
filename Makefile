docker_compose = docker-compose -f docker-compose.yml

app_container = app

up:
	$(docker_compose) up --remove-orphans
upd:
	$(docker_compose) up -d --remove-orphans
down:
	$(docker_compose) down
bashroot:
	$(docker_compose) exec $(app_container) sh
fetch-instagram-versions:
	$(docker_compose) exec $(app_container) sh -c 'nodejs fetch-instagram-versions'
setup:
	cp .env.example .env
	$(docker_compose) up -d