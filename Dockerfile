# ============================================================
# Dockerfile - MN Cosmetics Web Site
# Base image: nginx:alpine (très légère, ~23MB)
# ============================================================

# --- Étape 1 : Image de base légère ---
FROM nginx:alpine

# --- Métadonnées ---
LABEL maintainer="MN-Cosmetics Team"
LABEL version="1.0"
LABEL description="Site e-commerce MN Cosmetics - containerisé avec Nginx Alpine"

# --- Étape 2 : Supprimer la config Nginx par défaut ---
RUN rm -rf /usr/share/nginx/html/*

# --- Étape 3 : Copier la configuration Nginx personnalisée ---
COPY nginx.conf /etc/nginx/conf.d/default.conf

# --- Étape 4 : Copier les fichiers du site web ---
# Page d'entrée principale
COPY index.html /usr/share/nginx/html/index.html

# Pages HTML (dans le dossier html/)
COPY html/ /usr/share/nginx/html/html/

# Assets statiques
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY images/ /usr/share/nginx/html/images/

# --- Étape 5 : Exposer le port HTTP ---
EXPOSE 80

# --- Étape 6 : Commande de démarrage ---
CMD ["nginx", "-g", "daemon off;"]
