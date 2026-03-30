# 🎯 J1_S1 : Architecturer un Workspace Monorepo avec Nx

**Session** : Jour 1, Session 1 (09h00-10h30)  
**Durée** : 1h30  
**Niveau** : Lead Developer / Architecte Angular  
**Objectif** : Scaffolder un workspace Nx complet et créer la première librairie `@enterprise/ui-kit`

---

## 🎯 LE CONTEXTE

### Pourquoi un Monorepo ?

Dans une organisation moderne, les équipes développent simultanément plusieurs applications partageant des composants, des services et des utilitaires communs. Sans monorepo, chaque application maintient ses propres copies du code partagé, créant :

- **Duplication massive** : Le même bouton existe dans 5 repositories différents avec 5 versions divergentes
- **Maintenance cauchemardesque** : Un bug critique dans un composant partagé nécessite 5 PRs, 5 reviews, 5 déploiements
- **Dépendances obsolètes** : L'application A utilise Angular 16, l'application B reste bloquée en Angular 14
- **Testabilité compromise** : Impossible de tester l'impact d'un changement sur toutes les applications consommatrices

Le **Monorepo Nx** résout ces problèmes en centralisant le code dans un repository unique tout en conservant l'indépendance des projets. Nx ajoute une couche d'intelligence : cache de build, graphe de dépendances, exécution parallèle et commandes `affected` qui ciblent uniquement les projets impactés par un changement.

### Architecture Cible : Integrated Monorepo

Nous allons créer un **Nx Integrated Monorepo**, l'architecture recommandée pour les organisations qui contrôlent tous leurs projets. Contrairement au Package-Based Monorepo (style Lerna), l'Integrated Monorepo utilise :

- **1 seul `package.json`** à la racine (un seul `node_modules`)
- **1 seule version de chaque dépendance** partagée entre tous les projets
- **Pas de `package.json` dans les librairies** (gestion centralisée)
- **Cache de build global** pour accélérer les compilations
- **Graphe de dépendances automatique** entre projets

Cette approche garantit cohérence, performance et simplicité de maintenance.

---

## 🎬 DÉMONSTRATION : Scaffolder le Workspace Nx

Nous allons créer ensemble un workspace Nx Angular optimisé pour pnpm et générer notre première librairie `@enterprise/ui-kit`.

### Étape 1 : Créer le Workspace Nx

Explorons la commande de création d'un workspace Nx Angular. Ouvrons un terminal et naviguons vers le dossier parent :

```powershell
# Naviguer vers le dossier de formation
cd D:\playground\ang-archi-lib\ANGULAR_UI_KIT_ESPACE_STAGIAIRES\01_Demo_Formateur

# Créer le workspace Nx Angular avec pnpm (PowerShell : backticks au lieu de backslash)
npx create-nx-workspace@latest enterprise-nx-workspace `
  --preset=angular-monorepo `
  --appName=showcase-app `
  --style=scss `
  --nxCloud=skip `
  --packageManager=pnpm `
  --interactive=false
```

#### 💡 Décryptage de la commande

**`create-nx-workspace@latest`** : Utilise la dernière version du générateur Nx. Garantit accès aux dernières fonctionnalités (Standalone Components, Signals).

**`--preset=angular-monorepo`** : Scaffold un monorepo Angular pré-configuré avec une application de démonstration. Nx installe Angular CLI, ESLint, Jest et configure le workspace.

**`--appName=showcase-app`** : Nom de l'application générée automatiquement. Servira de vitrine pour tester nos composants de librairie.

**`--style=scss`** : SCSS comme préprocesseur CSS. Permet variables, mixins et nesting. Alternative professionnelle à CSS vanilla.

**`--nxCloud=skip`** : Désactive Nx Cloud (cache distribué payant). En local, le cache reste fonctionnel mais non partagé entre machines.

**`--packageManager=pnpm`** : Force pnpm au lieu de npm/yarn. Installation 2-3x plus rapide grâce au système de hard links. Économie disque considérable.

**Résultat** : Workspace Nx créé avec structure monorepo complète, application `showcase-app` fonctionnelle, et cache de build activé.

---

### Étape 2 : Explorer la Structure Générée

Observons la structure du workspace créé :

```
enterprise-nx-workspace/
├── apps/
│   └── showcase-app/              # Application de démonstration
│       ├── src/
│       │   ├── app/
│       │   │   ├── app.component.ts
│       │   │   ├── app.config.ts
│       │   │   └── app.routes.ts
│       │   └── main.ts
│       └── project.json
├── libs/                          # Dossier des librairies (vide pour l'instant)
├── node_modules/                  # ✅ UNIQUE node_modules partagé
├── package.json                   # ✅ UNIQUE package.json racine
├── nx.json                        # Configuration Nx (cache, plugins)
├── tsconfig.base.json             # Configuration TypeScript partagée
└── pnpm-workspace.yaml            # Configuration pnpm monorepo
```

#### 💡 Décryptage de la structure

**`apps/`** : Contient les applications **déployables** (frontend, backend, mobile). Chaque app possède un `project.json` définissant ses targets (build, serve, test).

**`libs/`** : Contient les librairies **réutilisables**. Ces librairies ne sont JAMAIS déployées seules, elles sont consommées par les applications. Pas de `package.json` individuel.

**`package.json` racine** : SEUL package.json du monorepo. Toutes les dépendances sont centralisées ici. Nx garantit qu'une seule version de chaque package est installée.

**`nx.json`** : Configure le cache de build, les plugins Nx et les executors. Le cache stocke les résultats de build pour éviter recompilations inutiles.

**`tsconfig.base.json`** : Configuration TypeScript partagée. Définit les **path mappings** permettant les imports comme `import { Button } from '@enterprise/ui-kit'`.

**Bénéfice** : Un seul `npm install` (ou `pnpm install`) pour tout le monorepo. Pas de désynchronisation entre projets.

---

### Étape 3 : Générer la Librairie UI Kit

Nous allons maintenant créer notre première librairie `@enterprise/ui-kit` qui contiendra nos composants réutilisables.

```powershell
# Se positionner dans le workspace
cd enterprise-nx-workspace

# Générer une librairie Angular publishable (PowerShell : backticks au lieu de backslash)
npx nx generate @nx/angular:library ui-kit `
  --directory=libs/ui-kit `
  --publishable=true `
  --importPath=@enterprise/ui-kit `
  --style=scss `
  --standalone=true `
  --skipModule=true `
  --prefix=ent `
  --buildable=true
```

#### 💡 Décryptage de la génération

**`@nx/angular:library`** : Générateur Nx pour créer une librairie Angular. Scaffold automatiquement la structure, le `project.json`, et les configurations de build.

**`--publishable=true`** : Configure la librairie pour être **publiable** sur npm (ou registry privé). Génère le build selon l'Angular Package Format (APF) avec ng-packagr.

**`--importPath=@enterprise/ui-kit`** : Définit l'import path. Permet `import { Button } from '@enterprise/ui-kit'` au lieu de chemins relatifs longs. Nx configure automatiquement le `tsconfig.base.json`.

**`--standalone=true`** : Génère des Standalone Components (Angular 14+). Pas de NgModule, imports directs dans les composants. Meilleur tree-shaking.

**`--prefix=ent`** : Préfixe des sélecteurs de composants. Les composants auront des sélecteurs comme `<ent-button>`, `<ent-card>`. Évite collisions avec composants tiers.

**`--buildable=true`** : Permet de builder la librairie indépendamment avec `nx build ui-kit`. Crucial pour le cache et les builds incrémentaux.

**Résultat** : Librairie `@enterprise/ui-kit` créée dans `libs/ui-kit/` avec configuration de build APF complète.

---

### Étape 4 : Vérifier la Configuration Path Mapping

Observons comment Nx a configuré automatiquement le `tsconfig.base.json` :

```json
{
  "compilerOptions": {
    "paths": {
      "@enterprise/ui-kit": ["libs/ui-kit/src/index.ts"]
    }
  }
}
```

#### 💡 Décryptage du path mapping

**`"@enterprise/ui-kit": ["libs/ui-kit/src/index.ts"]`** : TypeScript remplace `@enterprise/ui-kit` par le chemin physique `libs/ui-kit/src/index.ts`. Cela fonctionne à la compilation ET dans l'IDE.

**Bénéfice** : Import propre `import { Button } from '@enterprise/ui-kit'` au lieu de `import { Button } from '../../../libs/ui-kit/src/lib/button'`. Si on déplace la librairie, seul le `tsconfig.base.json` change.

**Webpack/ESBuild** : Au runtime, le bundler résout automatiquement les path mappings. Aucune configuration supplémentaire nécessaire.

---

### Étape 5 : Générer un Premier Composant

Créons un composant Button dans notre librairie :

```bash
# Générer un composant Standalone dans ui-kit
npx nx generate @nx/angular:component button \
  --project=ui-kit \
  --export=true \
  --standalone=true \
  --changeDetection=OnPush \
  --style=scss
```

#### 💡 Décryptage de la génération de composant

**`--project=ui-kit`** : Spécifie que le composant doit être créé dans la librairie `ui-kit`. Nx le place dans `libs/ui-kit/src/lib/button/`.

**`--export=true`** : Ajoute automatiquement le composant au `index.ts` (barrel export). Le composant devient importable depuis `@enterprise/ui-kit`.

**`--standalone=true`** : Composant Standalone (pas de NgModule). `imports: [CommonModule]` directement dans le décorateur `@Component`.

**`--changeDetection=OnPush`** : Active la stratégie OnPush par défaut. Optimisation critique : Angular ne vérifie le composant que si ses inputs changent (référence).

**Résultat** : Composant `ButtonComponent` créé avec sélecteur `ent-button`, exporté via `index.ts`, utilisable dans toute application du monorepo.

---

### Étape 6 : Builder et Tester la Librairie

Vérifions que la librairie se build correctement :

```bash
# Builder la librairie ui-kit
npx nx build ui-kit

# Résultat attendu : build dans dist/libs/ui-kit/
# ✅ Génération package.json
# ✅ Génération d'index.d.ts (types TypeScript)
# ✅ Génération ESM, FESM, UMD bundles (APF)
```

#### 💡 Décryptage du build

**`nx build ui-kit`** : Exécute le target `build` défini dans `libs/ui-kit/project.json`. Utilise ng-packagr pour générer un package conforme à l'Angular Package Format.

**Output dans `dist/libs/ui-kit/`** :
- `package.json` : Métadonnées npm avec entry points (esm2022, fesm2022, typings)
- `index.d.ts` : Déclarations TypeScript pour autocomplétion IDE
- `*.mjs` : Bundles ESM (ES Modules) pour tree-shaking optimal
- `*.umd.js` : Bundle UMD pour compatibilité legacy (optionnel)

**Cache Nx** : Le build est mis en cache. Si on rebuilde sans changement, Nx restaure le résultat du cache en <100ms au lieu de 20-30s.

**Résultat** : Librairie prête à être publiée sur npm ou consommée localement par les applications du monorepo.

---

### Étape 7 : Consommer la Librairie dans l'Application

Utilisons notre composant Button dans `showcase-app` :

```typescript
// apps/showcase-app/src/app/app.component.ts
import { Component } from '@angular/core';
import { ButtonComponent } from '@enterprise/ui-kit';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <h1>Showcase App</h1>
    <ent-button>Cliquez-moi</ent-button>
  `
})
export class AppComponent {}
```

#### 💡 Décryptage de l'import

**`import { ButtonComponent } from '@enterprise/ui-kit'`** : Import via le path mapping défini dans `tsconfig.base.json`. TypeScript résout automatiquement vers `libs/ui-kit/src/index.ts`.

**`imports: [ButtonComponent]`** : Import direct dans le Standalone Component. Plus besoin de NgModule intermédiaire. Angular compile le composant dans le bundle final.

**Tree-shaking** : Si `showcase-app` n'utilise que `ButtonComponent` parmi 50 composants de `ui-kit`, seul `ButtonComponent` est inclus dans le bundle final. Les 49 autres sont éliminés.

**Résultat** : Application consomme la librairie de manière type-safe avec autocomplétion IDE complète.

---

### Étape 8 : Servir l'Application avec Hot Reload

Lançons le serveur de développement :

```bash
# Servir showcase-app en mode dev
npx nx serve showcase-app

# Résultat : http://localhost:4200
# ✅ Hot Module Replacement activé
# ✅ Modifications dans ui-kit rechargées automatiquement
```

#### 💡 Décryptage du serve

**`nx serve showcase-app`** : Exécute le target `serve` avec webpack-dev-server (ou esbuild). Compile l'application ET les librairies dépendantes en mode watch.

**Hot Reload des librairies** : Si on modifie `ButtonComponent` dans `libs/ui-kit`, Nx recompile automatiquement la librairie ET l'application. Le navigateur se rafraîchit en <2s.

**Pas de rebuild complet** : Nx track les dépendances. Seuls `ui-kit` et `showcase-app` sont recompilés. Les autres librairies restent en cache.

**Résultat** : Développement fluide avec feedback instantané sur les changements.

---

## 🚨 À VOUS DE JOUER : Créer une Card Library

Votre mission : Créer une nouvelle librairie `@enterprise/cards` contenant un composant `CardComponent`, et l'utiliser dans `showcase-app`.

### Contraintes

- ✅ La librairie doit être **publishable** et **buildable**
- ✅ Import path : `@enterprise/cards`
- ✅ Préfixe des composants : `ent`
- ✅ Composant Standalone avec OnPush
- ✅ Le composant `CardComponent` doit avoir :
  - Un `@Input() title: string`
  - Un `@Input() description: string`
  - Un slot `<ng-content>` pour le contenu custom
- ✅ Utilisez SCSS pour le style (flexbox, border-radius, box-shadow)
- ✅ Testez le composant dans `showcase-app`

### Critères de Réussite

- ❌ Erreur TypeScript si vous importez `CardComponent` sans ajouter `imports: [CardComponent]`
- ✅ Autocomplétion fonctionne pour `import { CardComponent } from '@enterprise/cards'`
- ✅ `nx build cards` génère un package dans `dist/libs/cards/`
- ✅ `nx serve showcase-app` affiche la carte avec titre et description
- ✅ Hot reload fonctionne : modifier le style de la carte recharge automatiquement le navigateur

### Temps Estimé

⏱️ 20-25 minutes

---

## 📚 L'ANTI-SÈCHE

### Commandes Nx Essentielles

```bash
# Générer une librairie publishable
npx nx generate @nx/angular:library [NOM] \
  --publishable=true \
  --importPath=@enterprise/[NOM] \
  --standalone=true \
  --buildable=true

# Générer un composant Standalone dans une librairie
npx nx generate @nx/angular:component [NOM] \
  --project=[LIBRAIRIE] \
  --export=true \
  --standalone=true \
  --changeDetection=OnPush

# Builder une librairie
npx nx build [LIBRAIRIE]

# Servir une application
npx nx serve [APP]

# Voir le graphe de dépendances
npx nx graph

# Afficher les projets impactés par les changements
npx nx affected:graph
```

---

### Structure d'un Composant Standalone

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ent-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title = '';
  @Input() description = '';
}
```

---

### Configuration Path Mapping (tsconfig.base.json)

```json
{
  "compilerOptions": {
    "paths": {
      "@enterprise/ui-kit": ["libs/ui-kit/src/index.ts"],
      "@enterprise/cards": ["libs/cards/src/index.ts"]
    }
  }
}
```

**Note** : Nx ajoute automatiquement les path mappings lors de la génération de librairies.

---

### Export depuis index.ts (Barrel Export)

```typescript
// libs/cards/src/index.ts
export * from './lib/card/card.component';
```

**Bénéfice** : Permet `import { CardComponent } from '@enterprise/cards'` au lieu de spécifier le chemin complet.

---

### Stratégies de Change Detection

| Stratégie | Comportement | Usage |
|-----------|--------------|-------|
| `Default` | Vérifie à chaque événement (click, HTTP, timer) | Composants simples avec peu de logique |
| `OnPush` | Vérifie uniquement si inputs changent (référence) ou événement interne | **Recommandé** pour tous les composants de librairie |

**Best Practice** : Toujours utiliser `OnPush` dans les librairies. Force immutabilité des données.

---

### Angular Package Format (APF)

Lorsque vous buildez avec `--publishable=true`, ng-packagr génère :

- **ESM2022** : ES Modules avec syntaxe ES2022 (pour Angular 15+)
- **FESM2022** : Flat ES Modules (un seul fichier par entry point)
- **Typings (*.d.ts)** : Déclarations TypeScript pour autocomplétion
- **package.json** : Avec entry points (`main`, `module`, `esm2022`, `typings`)

**Résultat** : Package compatible avec tous les bundlers (Webpack, ESBuild, Rollup) et toutes les versions d'Angular récentes.

---

### Nx Cache et Performance

```bash
# Vider le cache Nx (si problème de build)
npx nx reset

# Voir les infos de cache d'une commande
npx nx build ui-kit --verbose

# Désactiver le cache pour un build spécifique
npx nx build ui-kit --skip-nx-cache
```

**Cache Location** : `.nx/cache/` (gitignored par défaut)

---

### Affected Commands (Optimisation CI/CD)

```bash
# Lister les projets impactés par les changements Git
npx nx affected:apps
npx nx affected:libs

# Tester uniquement les projets impactés
npx nx affected:test

# Builder uniquement les projets impactés
npx nx affected:build
```

**Usage** : En CI/CD, au lieu de tout retester, `affected:test` teste uniquement les projets modifiés + leurs dépendants. Gain : 80% de temps en moins.

---

### Troubleshooting Fréquent

**❌ Problème** : `Cannot find module '@enterprise/ui-kit'`

**✅ Solution** : Vérifier que le path mapping existe dans `tsconfig.base.json` et redémarrer le serveur TypeScript dans VS Code (`Ctrl+Shift+P` → "Restart TS Server").

---

**❌ Problème** : Modifications dans la librairie ne se reflètent pas dans l'app

**✅ Solution** : La librairie doit être **buildable** (`--buildable=true`). Relancer `nx serve [APP]` pour activer le watch mode sur les librairies.

---

**❌ Problème** : `nx build ui-kit` échoue avec erreur ng-packagr

**✅ Solution** : Vérifier que `publishable: true` est bien dans `libs/ui-kit/project.json`. Si absent, régénérer la librairie avec `--publishable=true`.

---

**❌ Problème** : Erreur `require() of ES Module` lors de la génération de librairie

```
Error: require() of ES Module .../node_modules/vite/dist/node/index.js not supported.
Instead change the require of index.js to a dynamic import()
```

**✅ Solution** : Incompatibilité **Vite 7 + CommonJS**. Vite 7 est un module ES pur qui ne peut plus être chargé avec `require()`.

**Correction à appliquer** :

1. **Renommer les fichiers `vite.config.ts` en `vite.config.mts`** (extension `.mts` = TypeScript Module) :
   ```powershell
   # Depuis la racine du workspace
   Move-Item libs/api/products/vite.config.ts libs/api/products/vite.config.mts
   Move-Item apps/api/vite.config.ts apps/api/vite.config.mts
   Move-Item libs/shared/models/vite.config.ts libs/shared/models/vite.config.mts
   ```

2. **Mettre à jour les références dans `project.json`** :
   ```json
   {
     "build": {
       "options": {
         "configFile": "libs/api/products/vite.config.mts"  // .mts au lieu de .ts
       }
     }
   }
   ```

**Pourquoi ça fonctionne** : L'extension `.mts` force Node.js à traiter le fichier comme un module ES, contournant la configuration CommonJS héritée des projets API.

---

**❌ Problème** : Erreur `Unknown argument: ui-kit` lors de la génération de librairie

```
npx nx generate @nx/angular:library ui-kit --directory=...
Error: Unknown argument: ui-kit
```

**✅ Solution** : Dans les versions récentes de Nx, le **nom de la librairie doit être passé avec le flag `--name=`** :

**Commande incorrecte** :
```powershell
npx nx generate @nx/angular:library ui-kit `
  --directory=libs/ui-kit
```

**Commande correcte** :
```powershell
npx nx generate @nx/angular:library `
  --name=ui-kit `
  --directory=libs/ui-kit `
  --publishable=true `
  --importPath=@enterprise/ui-kit `
  --style=scss `
  --standalone=true `
  --skipModule=true `
  --prefix=ent `
  --buildable=true
```

**Note** : Cette syntaxe est obligatoire pour éviter l'interprétation de `ui-kit` comme un argument positionnel non supporté.

---

### Ressources Officielles

- **Nx Docs** : https://nx.dev
- **Angular Package Format** : https://angular.io/guide/angular-package-format
- **Standalone Components** : https://angular.io/guide/standalone-components

---

**Bon courage pour l'atelier ! 🚀**
