# 📚 Guide DevOps - MN Cosmetics

## 🎯 Objectifs DevOps

- Automatiser le cycle de vie de l'application
- Tester continuellement
- Déployer en confiance
- Monitorer et logger les erreurs

---

## 🐳 Docker - Conteneurisation

### Pourquoi Docker ?

- **Isolation** : Chaque conteneur est indépendant
- **Portabilité** : Fonctionne partout (macOS, Linux, Windows)
- **Efficacité** : Léger et rapide
- **Reproductibilité** : Même environnement en local et production

### Commandes essentielles

```bash
# Build une image
docker build -t mon-app:v1 .

# Lancer un conteneur
docker run -d -p 8080:80 --name mon-conteneur mon-app:v1

# Voir les conteneurs en cours
docker ps

# Voir les images
docker images

# Arrêter un conteneur
docker stop mon-conteneur

# Supprimer un conteneur
docker rm mon-conteneur

# Voir les logs
docker logs -f mon-conteneur
```

---

## 📦 Docker Compose - Orchestration multi-services

### Pourquoi Docker Compose ?

- Gérer plusieurs services (web, db, cache, etc.)
- Un seul fichier de configuration
- Facile à développer et tester

### Commandes essentielles

```bash
# Lancer tous les services
docker compose up

# Lancer en background
docker compose up -d

# Rebuildler les images
docker compose up --build

# Arrêter les services
docker compose down

# Voir les logs en direct
docker compose logs -f web

# Exécuter une commande dans un conteneur
docker compose exec web sh
```

---

## ⚙️ GitHub Actions - CI/CD

### Qu'est-ce que c'est ?

GitHub Actions est un outil d'automatisation qui exécute des workflows en réponse à des événements GitHub (push, PR, etc.).

### Notre workflow (`.github/workflows/ci.yml`)

1. **Validation** : Vérifier les fichiers essentiels
2. **Build** : Construire l'image Docker
3. **Security** : Scanner les vulnérabilités avec Trivy

### Fichier de configuration

- Chemin : `.github/workflows/ci.yml`
- Se déclenche sur : `push` sur `main`/`develop`, `pull_request`
- Résultat : Visible dans l'onglet **Actions** du dépôt

---

## 🔐 Bonnes pratiques de Sécurité

### 1. Utiliser une image de base sûre
```dockerfile
FROM nginx:alpine  # Alpine = léger + sûr
```

### 2. Éviter les secrets en dur
```dockerfile
# ❌ Mauvais
ENV API_KEY=12345

# ✅ Bon (utiliser GitHub Secrets)
```

### 3. Limiter les permissions du conteneur
```dockerfile
USER nobody  # Ne pas utiliser root
```

### 4. Scanner les vulnérabilités
```bash
trivy image mon-app:latest
```

### 5. Ne pas pousser les fichiers sensibles
```
# .gitignore
.env
*.key
node_modules/
```

---

## 📊 Monitoring et Logs

### Voir les logs d'un service
```bash
docker compose logs web
```

### Voir les logs en direct
```bash
docker compose logs -f web
```

### Exporter les logs
```bash
docker compose logs web > logs.txt
```

---

## 🚀 Cycle de Développement Complet

### 1. Développement local
```bash
# Cloner le repo
git clone https://github.com/chaarimahdi100-coder/MN-Cosmetics-WebSite.git
cd MN-Cosmetics-WebSite

# Lancer en local
docker compose up --build

# Accéder au site
# http://localhost:8080/page1.html
```

### 2. Faire un changement
```bash
# Créer une branche
git switch -c feature/ma-fonctionnalite

# Modifier le code
# ...

# Tester localement
docker compose restart web

# Commiter et pousser
git add .
git commit -m "feat: Ma fonctionnalité"
git push -u origin feature/ma-fonctionnalite
```

### 3. Pull Request et CI/CD
- Créer une PR sur GitHub
- Les workflows s'exécutent automatiquement
- Attendre le passage des tests (vérifier l'onglet **Actions**)
  
### 4. Merger et déploiement
```bash
# Une fois approuvée et passée les tests
# Cliquer "Merge pull request" sur GitHub

# Ou en ligne de commande
git switch develop
git pull origin develop
git merge feature/ma-fonctionnalite
git push origin develop
```

---

## 🐛 Dépannage courant

### Le build Docker échoue
```bash
# Vérifier le Dockerfile
cat Dockerfile

# Tester localement
docker build -t test .

# Lire les logs entièrement
```

### Le site n'est pas accessible
```bash
# Vérifier que nginx démarre
docker compose logs web

# Vérifier les ports
docker ps

# Tester la connexion
curl http://localhost:8080/page1.html
```

### Les fichiers statiques ne se chargent pas
```bash
# Vérifier que les chemins sont corrects
# Chemin relatif : page1.html → css/page.css
# PAS : ../css/page.css (hors de /usr/share/nginx/html)
```

---

## 📈 Améliorations futures

- [ ] Ajouter une base de données (MySQL, PostgreSQL)
- [ ] Setup du cache (Redis)
- [ ] Monitoring (Prometheus, Grafana)
- [ ] Logs centralisées (ELK stack)
- [ ] Déploiement auto (Registry + Cluster)
