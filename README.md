# 💄 M&N Cosmetics - Mini-Site Web

> Projet pédagogique DS1 — Développement collaboratif avec Git & GitHub

---

## 📋 Description du Projet

**M&N Cosmetics** est une boutique en ligne fictive créée dans le cadre du projet DS1.
Le site propose 3 pages HTML statiques : une page d'accueil, un formulaire d'inscription et une page de commande avec panier dynamique.

> ⚠️ L'objectif principal n'est **pas** la complexité du site, mais la **maîtrise des outils Git et GitHub** et du workflow collaboratif.

### Fonctionnalités du site

* ✅ Page d'accueil avec présentation de la marque et best-sellers
* ✅ Formulaire d'inscription avec validation JavaScript complète
* ✅ Page panier avec gestion dynamique des produits
* ✅ Calcul automatique du total TTC
* ✅ Design responsive (mobile, tablette, desktop)
* ✅ Accessibilité améliorée (WCAG 2.1 AA)

---

## 👥 Membres de l'équipe

| Membre     | Rôle           | Branches Feature                              |
| ---------- | -------------- | --------------------------------------------- |
| **Mahdi**  | Chef de projet | `feature-homepage`, `feature-navbar`          |
| **Mariem** | Développeuse   | `feature-inscription`, `feature-footer`       |
| **Nour**   | Développeuse   | `feature-panier`, `feature-produits`          |
| **Hamza**  | Développeur    | `feature-responsive`, `feature-accessibilite` |

---

## 📁 Structure du Projet

```
MN-Cosmetics-WebSite/
│
├── html/
│   ├── page1.html          # Page d'accueil (présentation + best-sellers)
│   ├── page2.html          # Formulaire d'inscription
│   └── page3.html          # Panier et gestion des commandes
│
├── css/
│   ├── page.css            # Styles généraux (header, footer, accueil)
│   └── page2.css           # Styles inscription, panier, produits
│
├── js/
│   └── script.js           # Logique JavaScript (validation, panier, events)
│
├── images/
│   └── [Images des produits cosmétiques]
│
├── README.md               # Ce fichier (documentation complète)
└── .gitignore              # Fichiers à ignorer par Git
```

---

## 🚀 Installation & Démarrage

### Prérequis

* Git installé sur votre ordinateur
* Un compte GitHub
* Un navigateur web (Chrome, Firefox, Edge...)

### Étapes d'installation

**1. Cloner le repository :**

```bash
git clone https://github.com/chaarimahdi100-coder/MN-Cosmetics-WebSite.git
cd MN-Cosmetics-WebSite
```

**2. Vérifier les branches disponibles :**

```bash
git branch -a
```

**3. Créer votre branche locale depuis develop :**

```bash
git fetch origin
git checkout -b feature-votre-nom origin/develop
```

**4. Ouvrir le site dans votre navigateur :**

```
Ouvrez le fichier html/page1.html directement dans votre navigateur.
Aucun serveur requis — le site est 100% statique (HTML/CSS/JS pur).
```

---

## 🔧 Commandes Git Utilisées

### Configuration initiale

```bash
git init
git remote add origin [URL]
git branch -M main
git clone [URL]
```

### Gestion des branches

```bash
git branch
git branch -a
git checkout -b feature-nom origin/develop
git checkout develop
git branch -d feature-nom
```

### Commits et synchronisation

```bash
git status
git add fichier.html
git add .
git commit -m "feat: description claire"
git push origin feature-nom
git pull origin develop
git fetch origin
```

### Fusion et rebase

```bash
git merge origin/develop
git rebase origin/develop
git rebase --continue
```

### Gestion des conflits

```bash
# Après un conflit :
# 1. Ouvrir le fichier en conflit dans l'éditeur
# 2. Chercher les marqueurs : <<<<<<< HEAD, =======, >>>>>>>
# 3. Choisir la bonne version et supprimer les marqueurs
# 4. Sauvegarder le fichier

git add fichier-conflit.html
git commit -m "fix: résoudre conflit footer"
git push origin feature-nom
```

---

## 🌳 Workflow Git Utilisé

### Stratégie de branches

```
main (version stable)
  │
  └── develop (branche d'intégration)
        │
        ├── feature-homepage      (Mahdi)
        ├── feature-navbar        (Mahdi)
        ├── feature-inscription   (Mariem)
        ├── feature-footer        (Mariem)
        ├── feature-panier        (Nour)
        ├── feature-produits      (Nour)
        ├── feature-responsive    (Hamza)
        └── feature-accessibilite (Hamza)
```

### Processus collaboratif

```
1. Créer une branche feature depuis develop
2. Développer la fonctionnalité (au moins 5 commits clairs)
3. Synchroniser avec develop (git fetch + git merge ou rebase)
4. Pousser la branche sur GitHub (git push origin feature-nom)
5. Créer une Pull Request (base: develop ← compare: feature-nom)
6. Au moins 1 reviewer examine le code et commente
7. Discussion dans les commentaires + modifications si nécessaire
8. Reviewer approuve (bouton "Approve")
9. Merger la PR dans develop
10. Supprimer la branche feature (nettoyage)
```

---

## 📌 Conventions de Commit

### Format des messages

```
<type>: <description courte et claire>
```

### Types utilisés

| Type       | Usage                   | Exemple                                  |
| ---------- | ----------------------- | ---------------------------------------- |
| `feat`     | Nouvelle fonctionnalité | `feat: créer formulaire d'inscription`   |
| `fix`      | Correction de bug       | `fix: corriger validation email`         |
| `style`    | Changements CSS/design  | `style: améliorer design du header`      |
| `docs`     | Documentation           | `docs: mettre à jour README.md`          |
| `refactor` | Refactorisation         | `refactor: simplifier logique du panier` |
| `update`   | Mise à jour générale    | `update: améliorer homepage layout`      |

---

## 🔄 Gestion des Pull Requests

*(inchangé, conserver la même description détaillée que l'ancien README)*

---

## ⚠️ Gestion des Conflits Git

### Conflit résolu — Footer (26/03/2026)

**Fichier concerné :** `html/page3.html`

**Cause :** Mahdi et hamza modifiaient la même section footer en même temps sur deux branches différentes. Lors du merge de la branche de Nour dans `develop`, Git a détecté une incompatibilité entre les deux versions.

**Méthode de résolution :**

```bash
# Nour récupère develop à jour
git fetch origin
git merge origin/develop

# Git signale : CONFLICT (content): Merge conflict in html/page3.html

# Ouvrir le fichier — Git marque le conflit ainsi :
<<<<<<< HEAD
    <p>Email : contact@MNcosmetics.tn</p>   ← version de hamza
=======
    <p>Email : contact@beauty.tn</p>        ← version de Mahdi
>>>>>>> origin/develop

# Décision après discussion sur GitHub :
# Garder la version de hamza (contact@MNcosmetics.tn)
# et supprimer les marqueurs de conflit

# Valider la résolution
git add html/page1.html
git commit -m "fix: résoudre conflit footer — version contact@MNcosmetics.tn retenue"
git push origin feature-accessibilite
```

**Leçon apprise :** Toujours synchroniser avec develop avant de commencer à travailler (`git pull origin develop`) pour réduire les risques de conflits.

---

## 🐛 GitHub Issues utilisées

| #  | Titre                                                         | Assigné à            | Label         |
| -- | ------------------------------------------------------------- | -------------------- | ------------- |
| 14 | Ajouter bouton "Supprimer" pour chaque article dans le panier | kohinour17-cloud     | enhancement   |
| 13 | Optimiser les images avec WebP et lazy loading                | mimisomai            | enhancement   |
| 12 | Bug - Images ne s'affichent pas correctement                  | chaarimahdi100-coder | bug           |
| 11 | Documentation - Créer guide utilisateur complet               | kohinour17-cloud     | documentation |
| 10 | Ajouter validation HTML5 sur les inputs du formulaire         | mimisomai            | enhancement   |
| 9  | Implémenter localStorage pour persister le panier             | kohinour17-cloud     | bug           |
| 8  | Bug - Alert bloque l'interface                                | mimisomai            | bug           |
| 8  | Ajouter un système de toast notifications                     | mimisomai            | enhancement   |

---

## 📊 GitHub Project Board

| To Do          | In Progress               | Review                         | Done               |
| -------------- | ------------------------- | ------------------------------ | ------------------ |
| Tâches à faire | En cours de développement | PR créée, en attente de review | Mergé dans develop |

---

## 📝 Commits significatifs par membre

*(inchangé, conserver la même section que l'ancien README)*

---

## 📅 Jalons du projet

| Date           | Étape                                    | Responsable   |
| -------------- | ---------------------------------------- | ------------- |
| 26/03/2026     | Création repo + structure initiale       | Mahdi         |
| 26/03/2026     | Invitation collaborateurs + README       | Mahdi         |
| 27/03/2026     | Création branches feature + 1ers commits | Tous          |
| 28/03/2026     | Pull Requests + Code Review              | Tous          |
| 28/03/2026     | Résolution du conflit Git                | Mariem + Nour |
| **29/03/2026** | **Livraison sur Blackboard**             | **Mahdi**     |
| 30/03/2026+    | Présentation et démonstration live       | Tous          |

---

## 🎯 Critères d'évaluation (20 points)

*(inchangé, conserver la même section que l'ancien README)*

---

## 💡 Bonnes pratiques respectées

*(inchangé, conserver la même section que l'ancien README)*

---

## 📞 Contact

* 📧 Email : [contact@MNcosmetics.tn](mailto:contact@MNcosmetics.tn)
* 📱 WhatsApp : +216 22 345 678
* 🔗 GitHub : [https://github.com/chaarimahdi100-coder/MN-Cosmetics-WebSite](https://github.com/chaarimahdi100-coder/MN-Cosmetics-WebSite)

---

## ✅ Checklist final avant livraison

*(inchangé, conserver la même section que l'ancien README)*

---

*Créé par l'équipe M&N Cosmetics — Mahdi, Mariem, Nour, Hamza*
*Date de création : 26/03/2026 | Dernière mise à jour : 29/03/2026*
*Version : 1.0*
