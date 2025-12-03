setup:
	@echo "\n====> Setting up environment ==================\n"
	@if [ ! -f .env ]; then \
		echo "Creating default .env file..."; \
		echo "NODE_ENV=development" > .env; \
		echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" >> .env; \
	fi
	@echo "\n====> Building Container for local environment ==================\n"
	@docker-compose build --no-cache
	@echo "\n====> Completed Setup for local environment ==============\n"

daemon-mode:
	@echo "\n====> Stopping running containers if any! ==============\n"
	@docker-compose down
	@echo "\n====> Starting Daemon Service using Docker for local environment =======\n"
	@docker-compose up -d
	@echo "\n====> Local Daemon Service Started! =======\n"
	@echo "Frontend: http://localhost:3000"

up:
	@echo "\n====> Creating .env file if missing ==================\n"
	@if [ ! -f .env ]; then \
		echo "NODE_ENV=development" > .env; \
		echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" >> .env; \
	fi
	@echo "\n====> Taking down running containers if any! ==================\n"
	@docker-compose down
	@echo "\n====> Starting Service using Docker for local environment =============\n"
	@docker-compose up

down:
	@echo "\n====> Taking down any running containers ==============\n"
	@docker-compose down

build:
	@echo "\n====> Building Next.js application ==============\n"
	@docker-compose run --rm frontend npm run build

prod-build:
	@echo "\n====> Building Production Docker image ==============\n"
	@docker build -f Dockerfile.prod -t erp-frontend:latest .

prod-up:
	@echo "\n====> Starting Production container ==============\n"
	@docker-compose -f docker-compose.prod.yml up -d
	@echo "Production server running at: http://localhost:3000"

prod-down:
	@echo "\n====> Stopping Production container ==============\n"
	@docker-compose -f docker-compose.prod.yml down

shell:
	@echo "\n====> Attaching to container shell =========\n"
	@docker-compose exec frontend sh

logs:
	@docker-compose logs -f frontend

logs-prod:
	@docker-compose -f docker-compose.prod.yml logs -f

clean:
	@echo "\n====> Cleaning Docker artifacts ==============\n"
	@docker-compose down -v --remove-orphans
	@docker system prune -f
	@sudo rm -rf node_modules .next package-lock.json

clean-prod:
	@echo "\n====> Cleaning Production artifacts ==============\n"
	@docker-compose -f docker-compose.prod.yml down -v --remove-orphans
	@docker rmi -f erp-frontend:latest || true

install:
	@echo "\n====> Installing dependencies ==============\n"
	@docker-compose run --rm frontend npm install

restart:
	@echo "\n====> Restarting service ==============\n"
	@docker-compose restart frontend

status:
	@echo "\n====> Container Status ==============\n"
	@docker-compose ps

help:
	@echo "Available commands:"
	@echo "  setup           - Initial project setup"
	@echo "  daemon-mode     - Start service in background"
	@echo "  up              - Start service in foreground"
	@echo "  down            - Stop service"
	@echo "  build           - Build Next.js app"
	@echo "  shell           - Access container shell"
	@echo "  logs            - View service logs"
	@echo "  install         - Install npm dependencies"
	@echo "  restart         - Restart service"
	@echo "  status          - Check container status"
	@echo ""
	@echo "Production commands:"
	@echo "  prod-build      - Build production Docker image"
	@echo "  prod-up         - Start production container"
	@echo "  prod-down       - Stop production container"
	@echo "  logs-prod       - View production logs"
	@echo "  clean-prod      - Clean production artifacts"
	@echo ""
	@echo "Maintenance commands:"
	@echo "  clean           - Clean all Docker artifacts and local files"
	@echo "  help            - Show this help message"