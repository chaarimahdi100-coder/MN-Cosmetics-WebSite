# 🎀 M&N Cosmetics - Mini-Site Web

Un site e-commerce collaboratif pour vendre des produits cosmétiques.

## 👥 Membres de l'équipe

- **Mahdi** - Chef de projet, page d'accueil, navbar
- **Mariem** - Formulaire d'inscription, validation, footer
- **Nour** - Page panier, shopping cart, produits
- **Hamza** - Design responsive, accessibilité, tests

## 📁 Structure du projet

Le projet est organisé en 4 dossiers principaux :

- **html/** - Pages HTML (page1.html, page2.html, page3.html)
- **css/** - Fichiers CSS pour le style
- **js/** - Fichiers JavaScript pour la logique
- **images/** - Images des produits

## 🚀 Installation

Pour utiliser ce projet sur ton ordinateur :

1. Clone le repo :
```bash
git clone https://github.com/chaarimahdi100-coder/MN-Cosmetics-WebSite.git
cd MN-Cosmetics-WebSite

## 🐳 Docker et CI/CD

### Prérequis
- Docker installé
- Docker Compose installé
- Utiliser les branches `main` et `develop`

### Lancer l'application en local
```bash
docker compose up --build
```
Ouvrez ensuite `http://localhost:8080/page1.html` pour accéder à la page d'accueil.

### Service de simulation multi-service
Le service `logger` est disponible sur `http://localhost:8081`.

### GitHub Actions
Le workflow est défini dans `.github/workflows/ci.yml`.
Il se déclenche sur :
- `push` sur `main` et `develop`
- `pull_request`

Il vérifie la présence des fichiers essentiels puis construit l'image Docker.