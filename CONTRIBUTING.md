# 🤝 Contribuer à M&N Cosmetics

Merci de contribuer à ce projet ! Voici les directives à suivre.

---

## 📝 Avant de commencer

1. Fork le dépôt
2. Clone votre fork
3. Créer une branche feature : `git checkout -b feature/ma-fonctionnalite`

---

## 🛠️ Convention de commits

Utiliser le format **Conventional Commits** :

```
type(scope): description

body (optionnel)
footer (optionnel)
```

### Types autorisés
- `feat` : Nouvelle fonctionnalité
- `fix` : Correction de bug
- `docs` : Documentation
- `style` : Formatage du code
- `refactor` : Refactoring sans changement fonctionnel
- `test` : Ajout ou modification de tests
- `chore` : Tâches de maintenance
- `ci` : Changements CI/CD

### Exemples
```
feat(panier): Ajouter la validation du panier
fix(inscription): Corriger la validation du mot de passe
docs: Mettre à jour le README
```

---

## 🧪 Tests avant de pousser

```bash
# Tester la construction Docker
docker build -t mn-cosmetics:test .

# Lancer en local
docker compose up --build

# Vérifier que le site fonctionne
# http://localhost:8080/page1.html

# Vérifier les logs
docker compose logs web

# Arrêter
docker compose down
```

---

## 📋 Checklist de PR

Avant de créer une Pull Request, assurez-vous que :

- [ ] La branche est basée sur `develop` (ou `main` pour les hotfixes)
- [ ] Le code est formaté correctement
- [ ] Les changements ont été testés localement
- [ ] Le build Docker réussit (`docker build .`)
- [ ] Pas de fichiers sensibles (.env, clés API, etc.)
- [ ] La description de la PR est claire et détaillée
- [ ] Les commandes suivent le format Conventional Commits

---

## 🔍 Processus de revue

1. **Automation** : Les tests GitHub Actions s'exécutent automatiquement
2. **Manuel** : Au moins 2 développeurs doivent approuver (pour `main`)
3. **Résolution** : Résoudre les conflits et les retours si nécessaire
4. **Merge** : Une fois approuvée, la PR est fusionnée

---

## 🐛 Signaler un bug

Si vous trouvez un bug, créez une **issue** avec les informations suivantes :

1. **Titre** : Une description brève
2. **Description** : Reproduire étape par étape
3. **Environnement** : OS, version Docker, etc.
4. **Résultat attendu** vs **Résultat actuel**
5. **Screenshots** (si applicable)

Exemple :
```
Titre : Le lien du panier ne fonctionne pas

Étapes :
1. Accéder à http://localhost:8080/page2.html
2. Cliquer sur "Ajouter au panier"
3. Cliquer sur "Voir le panier"

Résultat attendu : Redirection vers la page panier
Résultat actuel : Page blanche

Environnement : Docker Compose 5.0, macOS 14.0
```

---

## 💡 Suggestions et améliorations

Pour suggérer une amélioration, créer une **Discussion** ou une **issue** avec le label `enhancement`.

---

## 📞 Questions ?

- 📧 Email : contact@M&Ncosmetics.tn
- 💬 Discord : [À ajouter]
- 🔗 Discussions GitHub

---

## 🙏 Merci pour votre contribution !

Votre travail aide à améliorer M&N Cosmetics pour tous les utilisateurs.
