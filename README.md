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
# 1. Ouvrir le fichier en conflit
# 2. Chercher <<<<<<<, =======, >>>>>>>
# 3. Choisir la bonne version et supprimer les marqueurs
# 4. Sauvegarder

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
        ↓
2. Développer la fonctionnalité (au moins 5 commits clairs)
        ↓
3. Synchroniser avec develop (git fetch + git merge ou rebase)
        ↓
4. Pousser la branche sur GitHub (git push origin feature-nom)
        ↓
5. Créer une Pull Request (base: develop ← compare: feature-nom)
        ↓
6. Au moins 1 reviewer examine le code et commente
        ↓
7. Discussion dans les commentaires + modifications si nécessaire
        ↓
8. Reviewer approuve (bouton "Approve")
        ↓
9. Merger la PR dans develop
        ↓
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

### Créer une Pull Request

1. Aller sur GitHub → onglet **Pull requests**
2. Cliquer sur **New pull request**
3. Sélectionner : `base: develop` ← `compare: feature-nom`
4. Remplir le **titre**
5. Remplir la **description complète**
6. Assigner un **reviewer**
7. Cliquer **Create pull request**

### Validation avant merge

* ✅ Description complète présente
* ✅ Au moins 5 commits clairs et professionnels
* ✅ Code testé localement
* ✅ Style cohérent avec la charte couleur
* ✅ Au moins 1 reviewer a approuvé
* ✅ Tous les commentaires ont une réponse
* ✅ "Able to merge" affiché (pas de conflits)
* ✅ Responsive design testé
* ✅ Pas d'erreurs JavaScript console

---

## ⚠️ Gestion des Conflits Git

### Conflit résolu — Footer (26/03/2026)

**Fichier concerné :** `html/page1.html`
**Cause :** Mariem et Nour modifiaient la même section footer sur deux branches.
**Méthode de résolution :**

```bash
git fetch origin
git merge origin/develop
# conflit signalé par Git
# ouvrir le fichier et choisir la version finale
git add html/page1.html
git commit -m "fix: résoudre conflit footer — version finale retenue"
git push origin feature-footer
```

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
| 7  | Ajouter un système de toast notifications                     | mimisomai            | enhancement   |

---

## 📊 GitHub Project Board

| To Do          | In Progress               | Review                         | Done               |
| -------------- | ------------------------- | ------------------------------ | ------------------ |
| Tâches à faire | En cours de développement | PR créée, en attente de review | Mergé dans develop |

---

## 📝 Commits significatifs par membre

### Mahdi

```
feat: initialiser structure du projet avec fichiers HTML CSS JS
feat: créer structure de base de la page d'accueil
feat: ajouter section des meilleures ventes avec table
style: améliorer design du header avec ombre et bordure
feat: créer navbar commune à toutes les pages
style: rendre navbar responsive avec flexbox
```

### Mariem

```
feat: créer structure du formulaire d'inscription
feat: ajouter champ de confirmation email
style: styliser les champs du formulaire d'inscription
feat: ajouter fonctions de validation robustes (regex email + password)
style: améliorer bouton d'inscription
feat: créer footer avec informations de contact sur les 3 pages
```

### Nour

```
feat: créer page panier avec structure HTML
feat: ajouter résumé de commande personnalisé
feat: implémenter logique du panier avec calculs dynamiques
style: styliser le résumé du panier et liste commandes
feat: ajouter descriptions détaillées des produits
feat: ajouter section avis et notes pour chaque produit
```

### Hamza

```
feat: ajouter media queries pour mobile (max-width 768px)
style: rendre section et contenu responsive
style: adapter formulaires pour mobile
style: adapter grille produits pour petit écran
feat: ajouter attributs alt sur toutes les images
feat: ajouter labels et aria-labels pour accessibilité
feat: ajouter skip-links et améliorer navigation au clavier
```

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

| Critère                      | Détails                                           | Points |
| ---------------------------- | ------------------------------------------------- | ------ |
| Utilisation de Git et GitHub | Dépôt bien structuré, branches, commits réguliers | 2      |
| Collaboration et répartition | Issues, pull requests, discussions                | 1      |
| Gestion des conflits         | Résoudre un conflit Git correctement              | 1      |
| Documentation                | README.md complet                                 | 1      |
| Présentation PowerPoint      | Démo du workflow GitHub                           | 5      |
| Discussion                   | Répondre aux questions                            | 10     |
| **TOTAL**                    |                                                   | **20** |

---

## 💡 Bonnes pratiques respectées

### Git

* ✅ Messages de commit clairs et en format `type: description`
* ✅ Commits petits et significatifs (1 feature = 1 commit)
* ✅ Synchronisation régulière avec develop (`git pull`)
* ✅ Jamais de commit direct dans `main` ou `develop`
* ✅ Chaque branche feature créée depuis `develop`

### Code

* ✅ HTML sémantique et bien indenté
* ✅ CSS cohérent avec la charte couleur
* ✅ JavaScript commenté et structuré
* ✅ Pas d'erreurs dans la console navigateur

### Collaboration

* ✅ Pull Requests avec descriptions complètes
* ✅ Code review constructive et détaillée
* ✅ Réponses aux commentaires rapides et argumentées
* ✅ Respect du workflow défini par l'équipe

---

## 📞 Contact

* 📧 Email : [contact@MNcosmetics.tn](mailto:contact@MNcosmetics.tn)
* 📱 WhatsApp : +216 22 345 678
* 🔗 GitHub : [https://github.com/chaarimahdi100-coder/MN-Cosmetics-WebSite](https://github.com/chaarimahdi100-coder/MN-Cosmetics-WebSite)

---

## ✅ Checklist final avant livraison

* [x] Dépôt GitHub privé créé et structuré
* [x] Tous les membres invités comme collaborateurs
* [x] Branche `develop` créée et utilisée
* [x] Chaque membre a créé au moins 2 branches feature
* [x] Au moins 5 commits significatifs par membre
* [x] Au moins 8 GitHub Issues créées et assignées
* [x] GitHub Project Board configuré (To Do / In Progress / Review / Done)
* [x] Au moins 2 Pull Requests par membre
* [x] Code review avec commentaires constructifs
* [x] Au moins 1 conflit Git provoqué et résolu
* [x] README.md complet documentant tout le projet
* [x] PowerPoint de présentation préparé (10-15 slides)
* [x] Lien du dépôt soumis sur Blackboard avant le 29/03/2026

---

*Créé par l'équipe M&N Cosmetics — Mahdi, Mariem, Nour, Hamza*
*Date de création : 26/03/2026 | Dernière mise à jour : 29/03/2026*
*Version : 1.0*
