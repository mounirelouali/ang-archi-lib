# 🎓 Instructions Stagiaires - Formation Angular 18

## 📦 Récupération du Projet

### Option 1 : Version Complète (avec composants fonctionnels)

Pour récupérer la version stable avec tous les composants déjà implémentés :

```bash
# 1. Cloner le dépôt
git clone https://github.com/mounirelouali/ang-archi-lib.git
cd ang-archi-lib/ANGULAR_UI_KIT_ESPACE_STAGIAIRES/02_Atelier_Stagiaires/enterprise-workspace

# 2. Basculer sur le tag stable
git checkout stable-v1.0-with-components

# 3. Installer les dépendances
pnpm install

# 4. Démarrer l'application
npx nx serve host-app
```

**Résultat attendu** : Application avec LibHeaderComponent et jwtInterceptor fonctionnels sur http://localhost:4200

---

### Option 2 : Version Exercice (sans composants - à créer vous-même)

Pour commencer les exercices depuis zéro :

```bash
# 1. Cloner le dépôt
git clone https://github.com/mounirelouali/ang-archi-lib.git
cd ang-archi-lib/ANGULAR_UI_KIT_ESPACE_STAGIAIRES/02_Atelier_Stagiaires/enterprise-workspace

# 2. Basculer sur la branche stagiaires
git checkout stagiaires-j1-start

# 3. Installer les dépendances
pnpm install

# 4. Démarrer l'application
npx nx serve host-app
```

**Résultat attendu** : Application vide prête pour vos exercices sur http://localhost:4200

---

## 🔄 Basculer entre les versions

### Passer à la version complète (pour comparer votre travail)

```bash
git checkout stable-v1.0-with-components
pnpm install
npx nx serve host-app
```

### Revenir à la version exercice

```bash
git checkout stagiaires-j1-start
pnpm install
npx nx serve host-app
```

---

## 📚 Documentation

Consultez `GOLDEN_PATH_ETAPE_1.md` pour les instructions détaillées de création des composants.

---

## 🆘 Dépannage

**Erreur "LibHeaderComponent not found"** : Vérifiez que vous avez bien exporté le composant dans `ui-kit/src/index.ts`

**Port 4200 déjà utilisé** : Arrêtez les autres serveurs ou utilisez `npx nx serve host-app --port 4300`

**Problème de compilation TypeScript** : Assurez-vous d'avoir Node.js 20+ et pnpm 9+ installés
