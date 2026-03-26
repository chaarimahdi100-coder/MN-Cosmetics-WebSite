# 💄 M&N Cosmetics - Mini-Site Web

> Projet pédagogique DS1 — Développement collaboratif avec Git & GitHub

---

## 📋 Description du Projet

**M&N Cosmetics** est une boutique en ligne fictive créée dans le cadre du projet DS1.
Le site propose 3 pages HTML statiques : une page d'accueil, un formulaire d'inscription et une page de commande avec panier dynamique.

> ⚠️ L'objectif principal n'est **pas** la complexité du site, mais la **maîtrise des outils Git et GitHub** et du workflow collaboratif.

### Fonctionnalités du site
- ✅ Page d'accueil avec présentation de la marque et best-sellers
- ✅ Formulaire d'inscription avec validation JavaScript complète
- ✅ Page panier avec gestion dynamique des produits
- ✅ Calcul automatique du total TTC
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Accessibilité améliorée (WCAG 2.1 AA)

---

## 👥 Membres de l'équipe

| Membre | Rôle | Branches Feature |
|--------|------|-----------------|
| **Mahdi** | Chef de projet | `feature-homepage`, `feature-navbar` |
| **Mariem** | Développeuse | `feature-inscription`, `feature-footer` |
| **Nour** | Développeuse | `feature-panier`, `feature-produits` |
| **Hamza** | Développeur | `feature-responsive`, `feature-accessibilite` |

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
- Git installé sur votre ordinateur
- Un compte GitHub
- Un navigateur web (Chrome, Firefox, Edge...)

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
git init                                    # Initialiser un repo Git local
git remote add origin [URL]                 # Ajouter le serveur distant
git branch -M main                          # Renommer la branche principale
git clone [URL]                             # Cloner un repo distant sur son PC
```

### Gestion des branches
```bash
git branch                                  # Lister les branches locales
git branch -a                               # Lister toutes les branches (local + distant)
git checkout -b feature-nom origin/develop  # Créer une branche et aller dessus
git checkout develop                        # Changer de branche
git branch -d feature-nom                   # Supprimer une branche locale
```

### Commits et synchronisation
```bash
git status                                  # Voir les fichiers modifiés
git add fichier.html                        # Ajouter un fichier au staging
git add .                                   # Ajouter tous les fichiers modifiés
git commit -m "feat: description claire"    # Faire un commit avec message
git push origin feature-nom                 # Pousser la branche sur GitHub
git pull origin develop                     # Récupérer et fusionner develop
git fetch origin                            # Récupérer les changements distants
```

### Fusion et rebase
```bash
git merge origin/develop                    # Fusionner develop dans la branche actuelle
git rebase origin/develop                   # Rebase (historique plus propre)
git rebase --continue                       # Continuer après résolution de conflits
```

### Gestion des conflits
```bash
# Après un conflit :
# 1. Ouvrir le fichier en conflit dans l'éditeur
# 2. Chercher les marqueurs : <<<<<<< HEAD, =======, >>>>>>>
# 3. Choisir la bonne version et supprimer les marqueurs
# 4. Sauvegarder le fichier

git add fichier-conflit.html                # Marquer le conflit comme résolu
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
| Type | Usage | Exemple |
|------|-------|---------|
| `feat` | Nouvelle fonctionnalité | `feat: créer formulaire d'inscription` |
| `fix` | Correction de bug | `fix: corriger validation email` |
| `style` | Changements CSS/design | `style: améliorer design du header` |
| `docs` | Documentation | `docs: mettre à jour README.md` |
| `refactor` | Refactorisation | `refactor: simplifier logique du panier` |
| `update` | Mise à jour générale | `update: améliorer homepage layout` |

### Exemples de bons commits
```
feat: créer structure de base de la page d'accueil
feat: ajouter formulaire d'inscription avec validation
style: styliser les champs du formulaire avec CSS
fix: corriger validation email avec regex
feat: implémenter logique du panier JavaScript
style: rendre la navbar responsive pour mobile
feat: ajouter attributs alt sur toutes les images
docs: créer README.md avec documentation complète
```

---

## 🔄 Gestion des Pull Requests

### Créer une Pull Request
1. Aller sur GitHub → onglet **Pull requests**
2. Cliquer sur **New pull request**
3. Sélectionner : `base: develop` ← `compare: feature-nom`
4. Remplir le **titre** (ex: `feat: créer formulaire d'inscription`)
5. Remplir la **description** complète
6. Assigner un **reviewer**
7. Cliquer **Create pull request**

### Structure de description recommandée
```markdown
## 📝 Description
Brève description de ce que fait cette PR.

## ✅ Modifications apportées
- Modification 1
- Modification 2
- Modification 3

## 🧪 Tests effectués
- ✅ Test 1 : résultat
- ✅ Test 2 : résultat

## ✨ Checklist avant merge
- [x] Code testé localement
- [x] Pas d'erreurs console
- [x] Style cohérent avec la charte
- [x] Responsive vérifié
```

### Validation avant merge
Avant de cliquer "Merge pull request", vérifier :
- ✅ Description complète présente
- ✅ Au moins 5 commits clairs et professionnels
- ✅ Code testé localement par l'auteur
- ✅ Style cohérent avec la charte couleur
- ✅ Au moins 1 reviewer a approuvé
- ✅ Tous les commentaires ont une réponse
- ✅ Modifications demandées apportées
- ✅ "Able to merge" affiché (pas de conflits)
- ✅ Responsive design testé (si applicable)
- ✅ Pas d'erreurs JavaScript console

---

## ⚠️ Gestion des Conflits Git

### Conflit résolu — Footer (26/03/2026)

**Fichier concerné :** `html/page1.html`

**Cause :** Mahdi et Hamza modifiaient la même section footer en même temps sur deux branches différentes. Lors du merge de la branche de Hamza dans develop, Git a détecté une incompatibilité entre les deux versions.

**Méthode de résolution :**
```bash
# Hamza récupère develop à jour
git fetch origin
git merge origin/develop

# Git signale : CONFLICT (content): Merge conflict in html/page1.html

# Ouvrir le fichier — Git marque le conflit ainsi :
<<<<<<< HEAD
    <p>Email : contact@beauty.tn</p>     ← version de Hamza
=======
    <p>Email : contact@MNcosmetics.tn</p> ← version de Mahdi (develop)
>>>>>>> origin/develop

# Décision après discussion sur GitHub :
# Garder la version de Mahdi (contact@MNcosmetics.tn)
# et supprimer les marqueurs de conflit

# Valider la résolution
git add html/page1.html
git commit -m "fix: résoudre conflit footer — version contact@MNcosmetics.tn retenue"
git push origin feature-accessibilite
```

**Leçon apprise :** Toujours synchroniser avec develop avant de commencer à travailler (`git pull origin develop`) pour réduire les risques de conflits.

---

## 🎨 Charte Couleur

| Couleur | Code Hex | Usage |
|---------|----------|-------|
| Marron bordeaux | `#4e0423` | Header, titres, labels |
| Rose/Magenta | `#e91e63` | Boutons, accents, focus |
| Marron moyen | `#7a4d5c` | Footer gradient |
| Rose clair | `#f8bbd0` | Bordures, backgrounds doux |
| Beige clair | `#f9f9f9` | Arrière-plans formulaires |
| Blanc | `#ffffff` | Texte sur fonds sombres |

---

## 📱 Responsive Design

| Breakpoint | Taille | Cible |
|------------|--------|-------|
| Desktop | > 1024px | Ordinateurs |
| Tablet | 768px – 1024px | Tablettes |
| Mobile | 480px – 768px | Smartphones |
| Petit mobile | < 480px | Petits écrans |

---

## ♿ Accessibilité (WCAG 2.1 AA)

- ✅ Attributs `alt` descriptifs sur toutes les images
- ✅ Labels explicites sur tous les champs de formulaire (`for`/`id` matching)
- ✅ `aria-label` sur les boutons interactifs
- ✅ `title` attributes sur les liens de navigation
- ✅ Skip links pour navigation au clavier (`#main-content`)
- ✅ Contraste texte/fond supérieur à 4.5:1 (WCAG AA)
- ✅ Focus states visibles (outline 3px solid #0066cc)
- ✅ Navigation 100% possible au clavier

---

## 🐛 GitHub Issues utilisées

| # | Titre | Assigné à | Label |
|---|-------|-----------|-------|
| 1 | Créer la page d'accueil HTML + CSS | Mahdi | `enhancement` |
| 2 | Créer la navbar responsive | Mahdi | `enhancement` |
| 3 | Créer le formulaire d'inscription | Mariem | `enhancement` |
| 4 | Ajouter validation JavaScript au formulaire | Mariem | `enhancement` |
| 5 | Créer le footer sur toutes les pages | Mariem | `enhancement` |
| 6 | Créer la page panier avec logique JS | Nour | `enhancement` |
| 7 | Ajouter les fiches produits avec images | Nour | `enhancement` |
| 8 | Rendre le site responsive (media queries) | Hamza | `enhancement` |
| 9 | Améliorer l'accessibilité du site | Hamza | `enhancement` |
| 10 | Provoquer et résoudre un conflit Git | Équipe | `documentation` |

---

## 📊 GitHub Project Board

Le tableau de gestion de projet est organisé en 4 colonnes :

| To Do | In Progress | Review | Done |
|-------|-------------|--------|------|
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

| Date | Étape | Responsable |
|------|-------|-------------|
| 26/03/2026 | Création repo + structure initiale | Mahdi |
| 26/03/2026 | Invitation collaborateurs + README | Mahdi |
| 27/03/2026 | Création branches feature + 1ers commits | Tous |
| 28/03/2026 | Pull Requests + Code Review | Tous |
| 28/03/2026 | Résolution du conflit Git | Mahdi + Hamza |
| **29/03/2026** | **Livraison sur Blackboard** | **Mahdi** |
| 30/03/2026+ | Présentation et démonstration live | Tous |

---

## 🎯 Critères d'évaluation (20 points)

| Critère | Détails | Points |
|---------|---------|--------|
| Utilisation de Git et GitHub | Dépôt bien structuré, branches, commits réguliers | 2 |
| Collaboration et répartition | Issues, pull requests, discussions | 1 |
| Gestion des conflits | Résoudre un conflit Git correctement | 1 |
| Documentation | README.md complet | 1 |
| Présentation PowerPoint | Démo du workflow GitHub | 5 |
| Discussion | Répondre aux questions | 10 |
| **TOTAL** | | **20** |

---

## 💡 Bonnes pratiques respectées

### Git
- ✅ Messages de commit clairs et en format `type: description`
- ✅ Commits petits et significatifs (1 feature = 1 commit)
- ✅ Synchronisation régulière avec develop (`git pull`)
- ✅ Jamais de commit direct dans `main` ou `develop`
- ✅ Chaque branche feature créée depuis `develop`

### Code
- ✅ HTML sémantique et bien indenté
- ✅ CSS cohérent avec la charte couleur
- ✅ JavaScript commenté et structuré
- ✅ Pas d'erreurs dans la console navigateur

### Collaboration
- ✅ Pull Requests avec descriptions complètes
- ✅ Code review constructive et détaillée
- ✅ Réponses aux commentaires rapides et argumentées
- ✅ Respect du workflow défini par l'équipe

---

## 📞 Contact

- 📧 Email : contact@MNcosmetics.tn
- 📱 WhatsApp : +216 22 345 678
- 🔗 GitHub : https://github.com/chaarimahdi100-coder/MN-Cosmetics-WebSite

---

## ✅ Checklist final avant livraison

- [x] Dépôt GitHub privé créé et structuré
- [x] Tous les membres invités comme collaborateurs
- [x] Branche `develop` créée et utilisée
- [x] Chaque membre a créé au moins 2 branches feature
- [x] Au moins 5 commits significatifs par membre
- [x] Au moins 8 GitHub Issues créées et assignées
- [x] GitHub Project Board configuré (To Do / In Progress / Review / Done)
- [x] Au moins 2 Pull Requests par membre
- [x] Code review avec commentaires constructifs
- [x] Au moins 1 conflit Git provoqué et résolu
- [x] README.md complet documentant tout le projet
- [x] PowerPoint de présentation préparé (10-15 slides)
- [x] Lien du dépôt soumis sur Blackboard avant le 29/03/2026

---

*Créé par l'équipe M&N Cosmetics — Mahdi, Mariem, Nour, Hamza*
*Date de création : 26/03/2026 | Dernière mise à jour : 29/03/2026*
*Version : 1.0*