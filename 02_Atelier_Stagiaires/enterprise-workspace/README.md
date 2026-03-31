# 🚀 Enterprise Workspace - Formation Angular 18 + Nx

Workspace Nx prêt pour la formation **Architecture Angular 18 Moderne**.

Ce projet est configuré avec :
- ✅ **Angular 18.2** (Standalone Components, Signals API, Control Flow natif)
- ✅ **Nx 22.6.3** (Monorepo, Cache, Generators)
- ✅ **Vite 5** (Build ultra-rapide)
- ✅ **TypeScript 5.6** (Strict mode, ESM)
- ✅ **pnpm** (Gestionnaire de packages performant)

---

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- **Node.js 20+** : `node --version` (doit afficher v20.x.x)
- **pnpm 9+** : `pnpm --version` (doit afficher 9.x.x)
- **Git** : `git --version`

---

## 🎯 Démarrage Rapide (Première Utilisation)

### 1. Cloner le dépôt

```bash
git clone https://github.com/mounirelouali/ang-archi-lib.git
cd ang-archi-lib/ANGULAR_UI_KIT_ESPACE_STAGIAIRES/02_Atelier_Stagiaires/enterprise-workspace
```

### 2. Installer les dépendances

```bash
pnpm install
```

### 3. Démarrer l'application

```bash
npx nx serve host-app
```

Ouvrez http://localhost:4200

---

## 📚 Commandes Essentielles

| Commande | Description |
|----------|-------------|
| `npx nx serve host-app` | Démarre serveur dev |
| `npx nx build host-app` | Build production |
| `npx nx test host-app` | Lance tests Jest |
| `npx nx graph` | Visualise dépendances |

## 🏗️ Architecture du Workspace

```
enterprise-workspace/
├── apps/
│   └── host-app/          # Application principale
├── ui-kit/                 # Librairie de composants
│   ├── src/lib/components/ # Vos composants ici
│   └── src/index.ts        # Exports publics
└── GOLDEN_PATH_ETAPE_1.md  # Documentation complète
```

## 🎓 Exercices Formation

Les exercices consistent à créer :
1. **LibHeaderComponent** - Composant d'en-tête avec Signals
2. **jwtInterceptor** - Intercepteur HTTP fonctionnel

Consultez `GOLDEN_PATH_ETAPE_1.md` pour les instructions détaillées.

## 🔄 Point de Restauration

Si vous devez revenir à la version avec composants complétés :

```bash
git checkout stable-v1.0-with-components
```

## 📖 Documentation

- **GOLDEN_PATH_ETAPE_1.md** : Guide complet de formation
- **Nx Documentation** : https://nx.dev
- **Angular 18** : https://angular.dev

## 🆘 Dépannage

**Erreur de compilation** : Vérifiez que Node.js 20+ et pnpm 9+ sont installés.

**Port 4200 occupé** : Arrêtez les autres serveurs ou utilisez `npx nx serve host-app --port 4300`

---

**Bonne formation ! 🎯**
