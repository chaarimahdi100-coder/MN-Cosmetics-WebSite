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

## 🚀 Installation rapide

### Prérequis
- Docker 29.2+
- Docker Compose 5.0+
- Git

### Cloner le repo
```bash
git clone https://github.com/chaarimahdi100-coder/MN-Cosmetics-WebSite.git
cd MN-Cosmetics-WebSite
```

---

## 🐳 Démarrage avec Docker

### Lancer les services (Linux/macOS)
```bash
docker compose up --build
```

### Lancer les services (Windows - PowerShell)
```powershell
docker compose up --build
# OU utiliser le script helper
.\dev.bat up
```

### Accéder au site
- Site principal : **http://localhost:8080/page1.html**
- Service logger : **http://localhost:8081**

### Arrêter les services
```bash
docker compose down
```

---

## 📚 Scripts disponibles

### 🐧 Linux/macOS (Makefile)
```bash
make help       # Voir toutes les commandes
make up         # Lancer les services
make down       # Arrêter les services
make logs       # Voir les logs en direct
make test       # Tester la build Docker
make clean      # Nettoyer
```

### 🪟 Windows (Script batch)
```powershell
.\dev.bat           # Voir toutes les commandes
.\dev.bat up        # Lancer les services
.\dev.bat down      # Arrêter les services
.\dev.bat logs      # Voir les logs en direct
.\dev.bat test      # Tester la build Docker
.\dev.bat push "message"  # Commiter et pousser
```

---

## 🔄 Git Workflow

### Créer une branche feature
```bash
git switch develop
git pull origin develop
git switch -c feature/ma-fonctionnalite
```

### Pousser et créer une PR
```bash
git add .
git commit -m "feat: Ma description"
git push -u origin feature/ma-fonctionnalite
```

👉 Créer une Pull Request sur GitHub

### Fusionner après approbation
- ✅ Minimum 2 approbations (pour `main`)
- ✅ Tests GitHub Actions doivent passer
- ✅ Pas de conflits

---

## 🔐 GitHub Actions (CI/CD)

### Pipeline automatique (`.github/workflows/ci.yml`)

1. **Validation** : Vérifier les fichiers essentiels
2. **Build** : Construire l'image Docker
3. **Security** : Scanner les vulnérabilités (Trivy)

Voir l'onglet **Actions** du dépôt pour les résultats.

---

## 📖 Documentation complète

- 📋 [BRANCH_PROTECTION.md](./BRANCH_PROTECTION.md) - Règles de protection et workflow Git
- 📚 [DEVOPS.md](./DEVOPS.md) - Guide DevOps complet