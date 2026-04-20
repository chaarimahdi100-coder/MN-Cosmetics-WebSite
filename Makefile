.PHONY: help build up down logs test clean push-docker security

help:
	@echo "🎀 M&N Cosmetics - Commandes disponibles"
	@echo ""
	@echo "Développement :"
	@echo "  make up              - Lancer les services Docker"
	@echo "  make down            - Arrêter les services"
	@echo "  make logs            - Voir les logs en direct"
	@echo "  make build           - Rebuilder les images"
	@echo "  make restart         - Redémarrer les services"
	@echo ""
	@echo "Tests et Qualité :"
	@echo "  make test            - Tester la construction Docker"
	@echo "  make security        - Scanner les vulnérabilités"
	@echo "  make clean           - Nettoyer les images/conteneurs"
	@echo ""
	@echo "Git :"
	@echo "  make push            - Ajouter, commiter et pousser"
	@echo "  make status          - Voir l'état Git"
	@echo "  make branch          - Voir les branches"
	@echo ""

# Développement
up:
	docker compose up -d
	@echo "✅ Services lancés sur http://localhost:8080"

down:
	docker compose down
	@echo "✅ Services arrêtés"

logs:
	docker compose logs -f web

build:
	docker compose up --build -d
	@echo "✅ Build terminé"

restart:
	docker compose restart
	@echo "✅ Services redémarrés"

# Tests et Qualité
test:
	docker build -t mn-cosmetics:test .
	@echo "✅ Build Docker réussi"

security:
	@echo "🔍 Scanner les vulnérabilités..."
	docker build -t mn-cosmetics:security .
	docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image mn-cosmetics:security

clean:
	docker compose down -v
	docker image rm mn-cosmetics:test mn-cosmetics:security 2>/dev/null || true
	@echo "✅ Nettoyage terminé"

# Git
push:
	@read -p "Message de commit: " msg; \
	git add -A && \
	git commit -m "$$msg" && \
	git push && \
	echo "✅ Poussé avec succès"

status:
	git status

branch:
	git branch -a

# Utilitaires
ps:
	docker compose ps

shell:
	docker compose exec web sh
