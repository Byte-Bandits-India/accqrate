setup:
	@echo "\n====>Building Containers for local environment<==================\n"
	@docker-compose build
	@echo "\n====>Running NPM Install for local environment<=================\n"
	@docker-compose run --rm --no-deps frontend npm install
	@echo "\n====>Completed Setup for local environment<==============\n"

daemon-mode:
	@echo "\n====>Stopping running containers if any!<==============\n"
	@docker-compose down
	@echo "\n====>Starting Daemon Services using Docker for local environment<=======\n"
	@docker-compose up -d
	@echo "\n====>local Daemon Services Started!<=======\n"

up:
	@echo "\n====>Taking down running containers if any!<==================\n"
	@docker-compose down
	@echo "\n====>Run NPM install if any!<=================\n"
	@docker-compose run --rm --no-deps frontend npm install
	@echo "\n====>Taking down running containers if any!<==================\n"
	@docker-compose down
	@echo "\n====>Starting Services using Docker for local environment<=============\n"
	@docker-compose up

down:
	@echo "\n====>Taking down any running containers<==============\n"
	@docker-compose down

build-frontend:
	@echo "\n====>Building Frontend(Cleaning Old Build files, Install new packages)<==============\n"
	@docker-compose run --rm --no-deps frontend sh -c "rm -rf .next \
						&& npm install \
						&& npm run build \
						&& rm -rf serving \
						&& mkdir -p serving \
						&& cp -r .next serving/ \
						&& cp -r public serving/ \
						&& cp package.json serving/"

build-knowledge-center:
	@echo "\n====>Building Knowledge Center (included in Frontend)<==============\n"
	@echo "Note: Knowledge Center is part of the main frontend application"
	@$(MAKE) build-frontend

frontend-run:
	@echo "\n====>Attaching to Frontend shell<=========\n"
	@docker-compose run --rm --no-deps frontend bash

shell:
	@echo "\n====>Attaching to Frontend shell<=========\n"
	@docker-compose exec frontend sh

logs:
	@docker-compose logs -f frontend

clean:
	@echo "\n====>Cleaning Docker artifacts<==============\n"
	@docker-compose down -v --remove-orphans
	@docker system prune -f

install:
	@echo "\n====>Installing dependencies<==============\n"
	@docker-compose run --rm --no-deps frontend npm install

restart:
	@echo "\n====>Restarting service<==============\n"
	@docker-compose restart frontend

status:
	@echo "\n====>Container Status<==============\n"
	@docker-compose ps

help:
	@echo "\n╔═══════════════════════════════════════════════════════════╗"
	@echo "║           ACCQRATE ERP - DOCKER COMMANDS                  ║"
	@echo "╚═══════════════════════════════════════════════════════════╝"
	@echo ""
	@echo "📦 SETUP & DEVELOPMENT"
	@echo "  make setup         - Initial setup (build containers + npm install)"
	@echo "  make up            - Start dev server (foreground)"
	@echo "  make daemon-mode   - Start dev server (background)"
	@echo "  make down          - Stop containers"
	@echo ""
	@echo "🏗️  PRODUCTION BUILDS"
	@echo "  make build-frontend         - Build optimized frontend"
	@echo "  make build-knowledge-center - Build knowledge center (same as frontend)"
	@echo ""
	@echo "🔧 UTILITIES"
	@echo "  make frontend-run  - Run bash shell in new container"
	@echo "  make shell         - Attach to running container"
	@echo "  make logs          - View live logs"
	@echo "  make install       - Install npm dependencies"
	@echo "  make restart       - Restart containers"
	@echo "  make status        - Check container status"
	@echo "  make clean         - Clean Docker artifacts"
	@echo ""
	@echo "💡 Quick Start: make setup → make up"
	@echo ""


