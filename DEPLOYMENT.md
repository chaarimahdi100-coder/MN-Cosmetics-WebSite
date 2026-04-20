# 🚀 Déploiement - MN Cosmetics

## 📋 Checklist avant déploiement

- [ ] Code testé localement (docker compose up)
- [ ] Build Docker réussit
- [ ] Tests GitHub Actions passent
- [ ] Pas de secrets en dur (API keys, mots de passe)
- [ ] Documentation à jour
- [ ] Changelog mis à jour
- [ ] Branche `main` synchée

---

## 🖥️ Déploiement local (Développement)

### Prérequis
```bash
# Linux/macOS
brew install docker docker-compose
# Windows
# Télécharger Docker Desktop

# Vérifier l'installation
docker --version
docker compose --version
```

### Démarrage
```bash
# Cloner et accéder au dossier
git clone https://github.com/chaarimahdi100-coder/MN-Cosmetics-WebSite.git
cd MN-Cosmetics-WebSite

# Lancer
docker compose up --build

# Accéder
# http://localhost:8080/page1.html
```

### Arrêter
```bash
docker compose down
```

---

## ☁️ Déploiement en production

### Option 1 : Docker Hub + Machine distante

```bash
# 1. Créer un compte Docker Hub
# https://hub.docker.com

# 2. Tagger l'image
docker build -t votre-username/mn-cosmetics:latest .

# 3. Pousser l'image
docker login
docker push votre-username/mn-cosmetics:latest

# 4. Sur le serveur, tirer l'image
docker pull votre-username/mn-cosmetics:latest

# 5. Lancer le conteneur
docker run -d -p 80:80 --name mn-prod votre-username/mn-cosmetics:latest
```

### Option 2 : Kubernetes (Advanced)

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mn-cosmetics
spec:
  replicas: 3
  selector:
    matchLabels:
      app: mn-cosmetics
  template:
    metadata:
      labels:
        app: mn-cosmetics
    spec:
      containers:
      - name: web
        image: votre-username/mn-cosmetics:latest
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
```

Déployer :
```bash
kubectl apply -f deployment.yaml
```

### Option 3 : Heroku (Simple)

```bash
# 1. Installer Heroku CLI
brew install heroku

# 2. Se connecter
heroku login

# 3. Créer une app
heroku create mn-cosmetics

# 4. Pousser
git push heroku main

# 5. Ouvrir
heroku open
```

---

## 🔄 Mise à jour en production

### Blue-Green Deployment

```bash
# Exécuter le nouveau conteneur (Green)
docker run -d -p 8081:80 --name mn-new votre-username/mn-cosmetics:v2

# Tester
curl http://localhost:8081/page1.html

# Si OK, basculer le trafic
# Rediriger le load balancer de 8080 → 8081

# Arrêter l'ancien
docker stop mn-prod
docker rm mn-prod

# Renommer
docker rename mn-new mn-prod
```

---

## 📊 Monitoring en production

### Logs
```bash
docker logs -f mn-prod
```

### Santé du conteneur
```bash
docker stats mn-prod
```

### Alertes recommandées
- CPU > 80%
- Mémoire > 90%
- Erreurs HTTP 5xx
- Temps de réponse > 2s

---

## 🔒 Sécurité en production

### 1. Firewall
```bash
# Autoriser uniquement les ports nécessaires
ufw allow 80/tcp
ufw allow 443/tcp
ufw deny from any to any
```

### 2. HTTPS/SSL
```bash
# Utiliser Let's Encrypt
certbot certonly --standalone -d votre-domaine.com
```

### 3. Environnement sécurisé
```bash
# Utiliser les variables d'environnement
docker run -d -e API_KEY=$API_KEY mn-cosmetics:latest
```

### 4. Scanner les vulnérabilités
```bash
trivy scan votre-username/mn-cosmetics:latest
```

---

## 📝 Rollback en cas de problème

```bash
# 1. Identifier les versions précédentes
docker images | grep mn-cosmetics

# 2. Arrêter la version actuelle
docker stop mn-prod

# 3. Relancer l'ancienne version
docker run -d -p 80:80 --name mn-prod votre-username/mn-cosmetics:v1
```

---

## ✅ Post-déploiement

- [ ] Site accessible et fonctionnel
- [ ] Tests de fumée passés
- [ ] Monitoring activé
- [ ] Backups en place
- [ ] Documentation à jour
- [ ] Notification à l'équipe

---

## 🆘 Support et support

- 📧 contact@M&Ncosmetics.tn
- 🔗 GitHub Issues
- 💬 Discussions GitHub
