# 🛡️ Règles de Protection de Branches

Ce document explique comment configurer les règles de protection de branches sur GitHub pour garantir la qualité du code.

## 📋 Configuration sur GitHub

### Étapes pour activer la protection sur `main`

1. Aller sur le dépôt GitHub
2. Cliquer sur **Settings** → **Branches**
3. Cliquer sur **Add rule**
4. Entrer `main` dans le champ **Branch name pattern**

### Paramètres à activer

- ✅ **Require a pull request before merging**
  - Minimum 2 approvals
  
- ✅ **Require status checks to pass before merging**
  - Sélectionner le workflow `CI`
  - Exiger que les vérifications aboutissent

- ✅ **Require branches to be up to date before merging**
  
- ✅ **Dismiss stale pull request approvals when new commits are pushed**

- ✅ **Require code reviews from code owners**

---

## 🔄 Workflow à respecter

### Pour les développeurs

#### 1. Créer une feature branch
```bash
git switch develop
git pull origin develop
git switch -c feature/ma-fonctionnalite
```

#### 2. Faire les changements et commiter
```bash
git add .
git commit -m "feat: Description courte"
git push -u origin feature/ma-fonctionnalite
```

#### 3. Créer une Pull Request
- Aller sur https://github.com/chaarimahdi100-coder/MN-Cosmetics-WebSite
- La PR doit être vers `develop` (ou `main` après validation complète)
- Ajouter une description

#### 4. Attendre les vérifications CI/CD
- ✅ Les tests doivent passer
- ✅ La build Docker doit réussir
- ❌ Si failures → corriger et repousser

#### 5. Demander une revue de code
- Au moins 2 approbations requises sur `main`
- Minimum 1 approbation sur `develop`

#### 6. Fusionner la PR
```bash
# Une fois approuvée, cliquer "Squash and merge" ou "Merge pull request"
```

---

## ⚠️ Scénarios courants

### Scenario 1 : La CI/CD échoue
```bash
# Localement
docker compose up --build

# Corriger les erreurs
git add .
git commit -m "fix: Corriger les erreurs CI"
git push
# La PR se met à jour automatiquement
```

### Scenario 2 : Merge conflict
```bash
git switch ma-branche
git merge origin/develop
# Résoudre les conflits dans VS Code
git add .
git commit -m "merge: Résoudre les conflits avec develop"
git push
```

### Scenario 3 : Détacher une branche
```bash
# Si vous désirez effacer une branche locale et distante
git push origin --delete ma-branche-inutile
git branch -D ma-branche-inutile
```

---

## ✅ Checklist avant de merger

- [ ] La build Docker réussit
- [ ] Les tests HTML/CSS/JS passent
- [ ] Minimum 2 approbations (pour main) ou 1 (pour develop)
- [ ] Pas de conflits avec la branche cible
- [ ] La branche est à jour (up-to-date)
- [ ] Aucun secret exposé (.env, API keys, etc.)

---

## 🚀 Bonnes pratiques DevOps

1. **Atomic commits** : Un commit = une unique fonctionnalité
2. **Messages clairs** : `feat:`, `fix:`, `docs:`, `refactor:`
3. **Tests avant push** : `docker compose up --build`
4. **Pas de force push** : Éviter `git push -f`
5. **Rebase plutôt que merge** : Pour l'historique linéaire
