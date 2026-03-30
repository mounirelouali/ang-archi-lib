# 🎯 Formation ANG-ARCHI-LIB - Prérequis Techniques

**Session** : J0_S0 - Auto-évaluation  
**Durée** : 30 minutes recommandées  
**Niveau requis** : Lead Developer / Architecte Angular (4/5)  
**Code session** : `j0_s0_prerequis_lead_dev`

---

## 🎯 LE CONTEXTE

Cette formation s'adresse aux **Lead Developers et Architectes Angular** possédant un niveau avancé sur les technologies modernes du framework. Avant de démarrer le Jour 1, vous devez valider que vous maîtrisez les concepts fondamentaux qui seront utilisés intensivement durant les 3 jours.

### Pourquoi cette auto-évaluation ?

Cette session vous permet de :
- Identifier vos points forts et axes d'amélioration
- Anticiper les concepts qui nécessiteront plus d'attention
- Vous assurer que vous possédez le bagage technique requis
- Signaler au formateur les points à clarifier en début de session

### Format Pédagogique : PAIN → GAIN → VALEUR

Certaines sections critiques utilisent un storytelling basé sur des histoires réelles :

1. **🔴 PAIN** : Le problème métier + technique avec impact business
2. **🟢 GAIN** : La solution technique expliquée avec code
3. **💎 VALEUR** : ROI mesurable + bénéfices concrets

Ce format permet de comprendre le **"pourquoi"** avant le **"comment"**, et de mesurer la valeur business de chaque technique.

---

## ⚙️ CONFIGURATION INITIALE DE VOTRE ENVIRONNEMENT

Avant de démarrer la formation, vous devez récupérer le code de formation sur votre machine locale.

### Étape 1 : Vérifier les prérequis système

```bash
# Vérifier Node.js (version 18+ requise)
node --version

# Vérifier pnpm (doit être installé globalement)
pnpm --version

# Vérifier Git
git --version
```

**Versions recommandées** : Node.js 18.x ou 20.x, pnpm 8.x ou 10.x, Git 2.x

---

#### 🛠️ Installation si prérequis manquants

**Si Node.js n'est pas installé** :

1. Télécharger depuis [https://nodejs.org](https://nodejs.org)
2. Installer la version **LTS** (Long Term Support) - v20.x recommandée
3. Vérifier l'installation :
```bash
node --version
npm --version
```

**Si pnpm n'est pas installé** :

```bash
# Installer pnpm globalement via npm
npm install -g pnpm

# Vérifier l'installation
pnpm --version
```

**Si Git n'est pas installé** :

1. **Windows** : Télécharger depuis [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. **macOS** : `brew install git` ou télécharger depuis [https://git-scm.com](https://git-scm.com)
3. **Linux** : `sudo apt-get install git` (Debian/Ubuntu) ou `sudo yum install git` (Red Hat/Fedora)
4. Vérifier l'installation :
```bash
git --version
```

**Configurer Git (première installation)** :

```bash
# Configurer votre identité
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"

# Vérifier la configuration
git config --global --list
```

---

### Étape 2 : Créer le workspace de formation FROM SCRATCH

**⚠️ Important** : Si votre environnement réseau bloque l'accès à GitHub (ports bloqués, proxy restrictif), nous allons créer le workspace **manuellement** avec le formateur.

**Option A - Environnement avec accès GitHub** :
```bash
# Choisir le dossier où installer la formation
cd C:\dev\formations
# Ou sur Mac/Linux : cd ~/dev/formations

# Cloner le dépôt GitHub
git clone https://github.com/mounirelouali/ang-archi-lib.git

# Entrer dans le dossier
cd ang-archi-lib
```

**Option B - Environnement réseau bloqué (création manuelle)** :

Le formateur va vous guider pour créer le workspace pas-à-pas :

```powershell
# 1. Créer la structure de dossiers
New-Item -Path "D:\formation\ang-archi-lib" -ItemType Directory -Force
New-Item -Path "D:\formation\ang-archi-lib\02_Atelier_Stagiaires" -ItemType Directory -Force

# 2. Naviguer vers le dossier
cd D:\formation\ang-archi-lib\02_Atelier_Stagiaires

# 3. Créer le workspace Nx (suivre les instructions du formateur)
npx create-nx-workspace@latest enterprise-workspace `
  --preset=angular-monorepo `
  --appName=showcase-app `
  --style=scss `
  --nxCloud=skip `
  --packageManager=pnpm `
  --interactive=false

# 4. Le formateur vous guidera pour créer les fichiers d'exemples J0
```

**Structure du workspace créé** :
```
D:\formation\ang-archi-lib\
└── 02_Atelier_Stagiaires/
    └── enterprise-workspace/        # ✅ Workspace Nx créé
        ├── package.json             # ✅ UNIQUE package.json racine
        ├── node_modules/            # ✅ UNIQUE dépendances (après pnpm install)
        ├── apps/
        │   └── showcase-app/        # Application de démonstration
        └── libs/
            └── j0-examples/         # Exemples J0 TypeScript (créés avec le formateur)
                ├── project.json
                └── src/
                    ├── 01-generics.ts
                    ├── 02-utility-types.ts
                    ├── 03-mapped-types.ts
                    └── 04-type-guards.ts
```

---

### Étape 3 : Ouvrir le projet dans votre IDE

```bash
# Ouvrir avec Visual Studio Code
code .

# Ou ouvrir avec WebStorm
idea .
```

**Extensions VS Code recommandées** :
- Angular Language Service
- ESLint
- Prettier
- GitLens

---

## 🎯 EXÉCUTER LES EXEMPLES PRATIQUES

Tous les exemples de code de cette session sont **exécutables** dans le dossier `j0-workspace`.

### Architecture Nx Integrated Monorepo

Le workspace `j0-workspace` respecte strictement la directive :
- ✅ **1 seul `node_modules`** à la racine du workspace
- ✅ **1 seul `package.json`** racine (aucun package.json intermédiaire)
- ✅ **Nx Integrated Monorepo** avec pnpm
- ✅ Tous les exemples dans `libs/ts-examples` (sans package.json dédié)

### Installation

```bash
# Depuis la racine du dépôt cloné
cd ang-archi-lib/02_Atelier_Stagiaires/enterprise-workspace

# Installer les dépendances (crée 1 seul node_modules partagé)
pnpm install
```

**Chemin complet depuis votre dossier de formation** :
```bash
# Exemple : Si vous avez cloné dans C:\dev\formations\
cd C:\dev\formations\ang-archi-lib\02_Atelier_Stagiaires\enterprise-workspace
pnpm install
```

### Exécution des exemples TypeScript

**⚠️ Important** : Tous les scripts du Jour 0 sont préfixés par `j0:` pour indiquer qu'ils concernent les prérequis de la formation.

```bash
# 1.1 Generics et Inférence de Types
pnpm j0:ts:generics

# 1.2 Utility Types
pnpm j0:ts:utility

# 1.3 Mapped Types
pnpm j0:ts:mapped

# 1.4 Type Guards
pnpm j0:ts:guards

# Tous les exemples en séquence
pnpm j0:ts:all
```

### Sortie Attendue

Chaque exemple affiche :
- ✅ Le titre de la section
- 📚 Les résultats d'exécution
- 💡 Les explications techniques
- 💎 Les bénéfices concrets

**Exemple de sortie (`pnpm j0:ts:generics`)** :
```
=== 1.1 Generics et Inférence de Types ===

❌ Fonction BAD avec typo "catgory":
Résultat: []

✅ Fonction type-safe avec "category":
Résultat: [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
  { id: 2, name: 'Mouse', category: 'Electronics', price: 25 }
]

💎 VALEUR:
✅ "category" est accepté (clé valide)
✅ "catgory" est refusé (erreur de compilation)
✅ Erreur détectée AVANT exécution
✅ Économie de temps de debug
```

---

### ✅ Workflow Complet Validé (Checklist)

Avant de commencer le Jour 1, assurez-vous que ce workflow fonctionne :

```bash
# 1. Vérifier les prérequis système
node --version        # v18+ ou v20+
pnpm --version        # v8+ ou v10+
git --version         # v2+

# 2. Naviguer vers le workspace
cd d:\playground\ang-archi-lib\ANGULAR_UI_KIT_ESPACE_STAGIAIRES\02_Atelier_Stagiaires\enterprise-workspace

# 3. Installer les dépendances
pnpm install

# 4. Si warning "Ignored build scripts", approuver
pnpm approve-builds

# 5. Tester un exemple (nx demandera installation au 1er lancement)
pnpm j0:ts:generics
# → Tapez 'y' puis Entrée si npx demande d'installer nx

# 6. Une fois nx installé, tester tous les exemples
pnpm j0:ts:all
```

**Résultat attendu** : Tous les exemples s'exécutent sans erreur et affichent les résultats dans la console.

---

### 🔧 Dépannage Fréquent

**❌ Problème** : `pnpm ts:generics` retourne "Missing script: ts:generics"

**✅ Solution** : Utilisez le préfixe `j0:` pour les scripts du Jour 0
```bash
# ❌ INCORRECT
pnpm ts:generics

# ✅ CORRECT
pnpm j0:ts:generics
```

**Explication** : Tous les scripts de ce workspace sont préfixés par `j0:` pour indiquer qu'ils concernent les prérequis (Jour 0). Consultez `package.json` pour voir la liste complète des scripts disponibles. Le message d'erreur de pnpm suggère automatiquement la bonne commande.

---

**❌ Problème** : "Je ne trouve pas le dossier `enterprise-workspace` après clonage"

**✅ Solution** : Vérifiez que vous êtes dans le bon répertoire
```bash
# Après git clone https://github.com/mounirelouali/ang-archi-lib.git
cd ang-archi-lib
ls  # ou dir sur Windows

# Vous devez voir :
# 01_Demo_Formateur/
# 02_Atelier_Stagiaires/  ← Le workspace est ICI
# 03_Solutions_Zippees/

# Naviguer vers le workspace
cd 02_Atelier_Stagiaires/enterprise-workspace
```

**❌ Problème** : "pnpm : commande introuvable"

**✅ Solution** : Installer pnpm globalement
```bash
npm install -g pnpm
# Puis réessayer : pnpm install
```

**❌ Problème** : npx demande "Need to install nx@22.6.3. Ok to proceed? (y)"

**✅ Solution** : C'est normal au premier lancement. Tapez `y` puis Entrée.
```bash
# npx va installer nx temporairement
Need to install the following packages:
nx@22.6.3
Ok to proceed? (y) y    # ← Tapez y puis Entrée
```

**Alternative** : Installer nx globalement pour éviter cette question :
```bash
npm install -g nx
# Ou avec pnpm
pnpm add -g nx
```

**❌ Problème** : "nx : commande introuvable lors de l'exécution"

**✅ Solution** : Les scripts utilisent `npx nx` automatiquement, pas besoin d'installer nx globalement. Si le problème persiste :
```bash
# Réinstaller les dépendances
pnpm install --force
```

**❌ Problème** : Warning après `pnpm install` : "Ignored build scripts: esbuild, nx"

**✅ Solution** : C'est un **warning de sécurité**, pas une erreur. pnpm bloque les build scripts par précaution. Pour approuver :
```bash
# Approuver tous les build scripts
pnpm approve-builds
```

**Explication** : pnpm v10+ bloque par défaut l'exécution des scripts de post-installation pour des raisons de sécurité. La commande `approve-builds` ajoute les packages de confiance (esbuild, nx) à la liste blanche.

---

## 📚 DOMAINES D'AUTO-ÉVALUATION

Nous allons explorer ensemble les 7 domaines critiques pour cette formation.

### 1️⃣ TypeScript Avancé

#### 1.1 Generics et Inférence de Types

**🔴 PAIN — D'où vient l'erreur ?**

Observons un problème récurrent : une faute de frappe sur le nom d'une propriété peut produire un mauvais résultat sans aucune alerte.

```typescript
// Code vulnérable avec any
function filterProductsBAD(products: any[], key: string, value: any): any[] {
  return products.filter(product => product[key] === value);
}

// TYPO : 'catgory' au lieu de 'category'
const electronics = filterProductsBAD(products, 'catgory', 'Electronics');
// ❌ Retourne [] silencieusement (pas d'erreur)
```

**Inconvénient** : Pas d'erreur visible, résultat faux, débogage difficile.

---

**🟢 GAIN — Comment bloque-t-on cette erreur ?**

Explorons la solution type-safe.

```typescript
// Fonction générique : K doit être une clé valide de T
function filterByType<T, K extends keyof T>(
  items: T[],
  key: K,              // Clé garantie existante
  value: T[K]          // Type inféré selon la clé
): T[] {
  return items.filter(item => item[key] === value);
}

const electronics = filterByType(products, 'category', 'Electronics');
// ✅ "category" accepté | ❌ "catgory" refusé
```

#### 💡 Décryptage de l'implémentation

**`<T, K extends keyof T>`** : Deux paramètres génériques. `K` est contraint aux clés **valides** de `T`. TypeScript refuse toute clé inexistante.

**`key: K`** : Plus un `string` vague, mais une clé **garantie** existante. Sécurité à la compilation.

**`value: T[K]`** : Type inféré automatiquement selon la clé. Si `category` est `string`, `value` doit être `string`.

**Résultat** : `"category"` ✅ accepté, `"catgory"` ❌ refusé (erreur TypeScript avant exécution).

---

**💎 VALEUR** : Erreur détectée avant runtime, économie temps debug, code type-safe garanti.

---

#### 1.2 Utility Types (Partial, Pick, Record, etc.)

Explorons les Utility Types natifs de TypeScript pour manipuler et transformer des types existants.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Tous les champs optionnels
type UserUpdate = Partial<User>;

// Sélection de champs spécifiques
type UserCredentials = Pick<User, 'email' | 'role'>;

// Exclusion de champs
type UserPublic = Omit<User, 'email'>;

// Création d'un objet typé clé-valeur
type UserRoles = Record<string, User[]>;
```

#### 💡 Décryptage de l'implémentation

**`Partial<User>`** : Rend tous les champs optionnels. Utile pour les fonctions d'update partiel.

**`Pick<User, 'email' | 'role'>`** : Extrait uniquement les propriétés spécifiées. Crée interfaces minimalistes.

**`Omit<User, 'email'>`** : Exclut les propriétés spécifiées. Idéal pour données publiques sans infos sensibles.

**`Record<string, User[]>`** : Crée un dictionnaire typé. Exemple : `{ "admin": [user1], "viewer": [user2] }`.

---

#### 1.3 Mapped Types et Conditional Types

Observons comment créer des types complexes avec transformations conditionnelles et récursives.

```typescript
// Type récursif : rend readonly en profondeur
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]>  // Récursion si objet
    : T[K];               // Type primitif inchangé
};

interface Config {
  api: {
    url: string;
    timeout: number;
  };
  features: string[];
}

type ReadonlyConfig = DeepReadonly<Config>;
// Tous les champs et sous-champs deviennent readonly
```

#### 💡 Décryptage de l'implémentation

**`readonly [K in keyof T]`** : Parcourt toutes les clés de `T` et applique `readonly`. Pattern Mapped Type.

**`T[K] extends object ? ... : ...`** : Conditional Type qui vérifie si la valeur est un objet. Si oui, applique récursivement `DeepReadonly`. Si non, retourne le type tel quel.

**Résultat** : Tous les champs et sous-champs deviennent readonly. Impossible de faire `config.api.url = 'newUrl'`.

---

#### 1.4 Type Guards et Sécurité d'Exécution

Explorons les Type Guards personnalisés pour raffiner les types à l'exécution.

```typescript
interface Dog {
  type: 'dog';
  bark(): void;
}

interface Cat {
  type: 'cat';
  meow(): void;
}

type Animal = Dog | Cat;

// Type Guard avec prédicat 'is'
function isDog(animal: Animal): animal is Dog {
  return animal.type === 'dog';
}

// Utilisation : TypeScript réduit (narrow) le type
function makeSound(animal: Animal) {
  if (isDog(animal)) {
    animal.bark();  // TypeScript sait que c'est un Dog
  } else {
    animal.meow();  // TypeScript sait que c'est un Cat
  }
}
```

#### 💡 Décryptage de l'implémentation

**`animal is Dog`** : Prédicat de type qui informe TypeScript du résultat. Si la fonction retourne `true`, alors `animal` est garanti d'être de type `Dog`.

**`if (isDog(animal))`** : TypeScript **réduit** le type de `animal` à `Dog` dans le bloc `if`. Dans le `else`, TypeScript déduit automatiquement que c'est un `Cat`.

**Bénéfice** : Sécurité à la compilation pour des vérifications faites à l'exécution. Évite les cast dangereux.

---

### 2️⃣ Angular Moderne (v16+) et Signals

#### 2.1 Standalone Components (sans NgModules)

Observons comment créer des composants autonomes sans NgModules, optimisant le tree-shaking et simplifiant l'architecture.

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,                          // Composant autonome
  imports: [CommonModule, RouterModule],     // Imports directs
  template: `
    <div *ngFor="let user of users">{{ user.name }}</div>
  `
})
export class UserListComponent {
  users = [{ name: 'Alice' }, { name: 'Bob' }];
}
```

#### 💡 Décryptage de l'implémentation

**`standalone: true`** : Indique qu'Angular doit traiter ce composant comme autonome, sans NgModule. Permet découpage plus fin du code et meilleur tree-shaking.

**`imports: [CommonModule, RouterModule]`** : Les Standalone Components déclarent **directement** leurs dépendances. Fini les NgModules intermédiaires qui importent tout ! Seuls les modules réellement nécessaires sont importés.

**Bénéfice** : Webpack peut éliminer le code mort plus efficacement. Bundle size réduit.

---

#### 2.2 Nouveau Control Flow (@if, @for, @switch)

Explorons la nouvelle syntaxe de Control Flow d'Angular 17+ pour améliorer les performances et la lisibilité.

```typescript
@Component({
  template: `
    <!-- Nouveau Control Flow (Angular 17+) -->
    @if (user) {
      <div>{{ user.name }}</div>
    } @else {
      <div>Chargement...</div>
    }
    
    <!-- Boucle avec track obligatoire -->
    @for (user of users; track user.id) {
      <div>{{ user.name }}</div>
    }
  `
})
export class UserComponent {}
```

#### 💡 Décryptage de l'implémentation

**`@if (user) { ... } @else { ... }`** : Nouvelle syntaxe de condition. Plus performante que `*ngIf` car compilée nativement par Angular au lieu de passer par des directives structurelles.

**`@for (user of users; track user.id)`** : Nouvelle syntaxe de boucle. Le `track` est **obligatoire**, forçant à spécifier comment identifier chaque élément. Angular réutilise les nœuds DOM existants au lieu de tout recréer.

**Performance** : ~20-30% plus rapide que `*ngIf` / `*ngFor` selon les benchmarks Angular.

---

#### 2.3 API Signals (signal, computed, effect)

Découvrons comment gérer l'état réactif avec les Signals (alternative moderne à RxJS pour les états simples).

```typescript
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Count: {{ count() }}</p>
    <p>Double: {{ double() }}</p>
    <button (click)="increment()">+1</button>
  `
})
export class CounterComponent {
  // Signal writable
  count = signal(0);
  
  // Computed signal (dérivé, readonly)
  double = computed(() => this.count() * 2);
  
  constructor() {
    // Effect : exécuté à chaque changement de count
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }
  
  increment() {
    this.count.update(c => c + 1);  // Mise à jour immutable
  }
}
```

#### 💡 Décryptage de l'implémentation

**`count = signal(0)`** : Crée un Signal writable avec valeur initiale `0`. Pour lire : `count()`. Pour modifier : `.set()` ou `.update()`. Notifie automatiquement Angular des changements.

**`double = computed(() => this.count() * 2)`** : Signal **dérivé** readonly qui se recalcule automatiquement quand `count` change. Angular construit un graphe de dépendances.

**`effect(() => { ... })`** : Exécute un effet de bord à chaque changement des Signals utilisés. Angular track automatiquement les dépendances.

**Performance** : Détection fine-grained. Seuls les éléments du template qui utilisent `count()` ou `double()` sont mis à jour.

---

#### 2.4 Interopérabilité RxJS / Signals

Observons comment combiner Signals et RxJS en choisissant la bonne direction de conversion.

```typescript
import { Component, signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search'
})
export class SearchComponent {
  // Signal → Observable (pour utiliser opérateurs RxJS)
  searchTerm = signal('');
  searchTerm$ = toObservable(this.searchTerm);
  
  // Observable → Signal (pour affichage dans template)
  results = toSignal(
    this.searchTerm$.pipe(
      debounceTime(300),                     // Attente 300ms d'inactivité
      switchMap(term => this.http.get(`/api/search?q=${term}`))  // Annule requête précédente
    ),
    { initialValue: [] }
  );
  
  constructor(private http: HttpClient) {}
}
```

#### 💡 Décryptage de l'implémentation

**`toObservable(this.searchTerm)`** : Convertit le Signal en Observable. Nécessaire pour utiliser les opérateurs RxJS comme `debounceTime` et `switchMap`.

**`debounceTime(300)`** : Attend 300ms d'inactivité avant d'émettre. Évite 6 requêtes HTTP si l'utilisateur tape "laptop" rapidement. Économie bande passante.

**`switchMap(...)`** : Annule la requête précédente quand une nouvelle arrive. Évite race conditions. Seul le résultat de la dernière recherche s'affiche.

**`toSignal(..., { initialValue: [] })`** : Convertit l'Observable en Signal readonly pour le template. `initialValue` définit la valeur avant la première émission.

**Arbitrage** : Signals pour état local/synchrone, RxJS pour flux asynchrones complexes.

---

### 3️⃣ Architecture et Clean Code

#### 3.1 Principes SOLID appliqués à Angular

Nous appliquerons les 5 principes SOLID dans nos composants et services :

- **SRP** (Single Responsibility) : Un composant = une responsabilité unique
- **OCP** (Open/Closed) : Extensible via composition, fermé à la modification
- **LSP** (Liskov Substitution) : Les implémentations respectent les contrats
- **ISP** (Interface Segregation) : Interfaces spécifiques plutôt que monolithiques
- **DIP** (Dependency Inversion) : Dépendre d'abstractions, non de concrétions

---

#### 3.2 Pattern Smart / Dumb Components

Découvrons comment séparer les composants pour améliorer testabilité et réutilisabilité.

```typescript
// DUMB Component (Presentational) - Affichage pur
@Component({
  selector: 'app-user-card',
  standalone: true,
  template: `
    <div class="card">
      <h3>{{ user().name }}</h3>
      <button (click)="onDelete.emit(user().id)">Supprimer</button>
    </div>
  `
})
export class UserCardComponent {
  user = input.required<User>();      // Input Signal (Angular 17+)
  onDelete = output<number>();        // Output (Angular 17+)
}

// SMART Component (Container) - Logique métier
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent],
  template: `
    @for (user of users(); track user.id) {
      <app-user-card [user]="user" (onDelete)="deleteUser($event)" />
    }
  `
})
export class UserListComponent {
  users = signal<User[]>([]);
  
  constructor(private userService: UserService) {}
  
  deleteUser(id: number) {
    this.userService.delete(id);    // Appel service
  }
}
```

#### 💡 Décryptage de l'implémentation

**DUMB Component** :
- `input.required<User>()` : Signal readonly recevant les données du parent. `required` force le parent à fournir cette valeur.
- `output<number>()` : Remplace `@Output() onDelete = new EventEmitter()`. Plus simple et type-safe.
- **Responsabilité** : Affichage pur. Pas de logique métier, pas d'appel HTTP, pas de state management.

**SMART Component** :
- `users = signal<User[]>([])` : État local géré par le Smart Component.
- `deleteUser(id)` : Logique métier, appelle le service.
- **Responsabilité** : Orchestre les interactions entre Dumb Components et Services.

**Bénéfice** : Dumb = réutilisable partout, testable facilement. Smart = spécifique, gère la complexité.

---

#### 3.3 Packaging de Librairies (ng-packagr, APF)

Nous créerons et packagerons une librairie Angular selon l'Angular Package Format :

- **ng-packagr** : Outil qui compile la librairie selon l'APF
- **Angular Package Format (APF)** : Standard garantissant compatibilité (ESM, FESM, UMD)
- **Peer Dependencies** : Dépendances partagées avec l'application consommatrice

---

#### 3.4 Workspaces Monorepo (Nx)

Nous architecturerons un workspace monorepo pour gérer plusieurs projets :

- **Monorepo** : Un repository contenant apps + libs
- **Cache de build** : Nx met en cache les builds pour accélérer les compilations
- **Graphe de dépendances** : Nx analyse les dépendances entre projets
- **Affected commands** : Cible uniquement les projets impactés (`nx affected:test`)

---

### 4️⃣ Performance

#### 4.1 Change Detection Mechanism (OnPush)

Explorons comment optimiser les performances avec la stratégie OnPush.

```typescript
@Component({
  selector: 'app-optimized',
  changeDetection: ChangeDetectionStrategy.OnPush,  // Optimisation critique
  template: `<p>{{ data().value }}</p>`
})
export class OptimizedComponent {
  data = input.required<{ value: string }>();
}
```

#### 💡 Décryptage de l'implémentation

**`ChangeDetectionStrategy.OnPush`** : Indique à Angular de ne vérifier ce composant que si ses inputs changent (référence), ou si un événement interne se produit. Par défaut, Angular vérifie TOUS les composants à chaque événement.

**Impact** : Sur une app avec 100 composants, un click peut déclencher 100 vérifications. Avec OnPush, on réduit à 5-10 vérifications. **Gain** : 10x plus rapide.

**Contrainte** : Les inputs doivent être **immutables**. Créer un nouvel objet au lieu de muter : `data = { value: 'nouveau' }`.

**Avec Signals** : OnPush + Signals = combinaison parfaite. Les Signals notifient automatiquement Angular.

---

#### 4.2 Lazy Loading

Nous découperons l'application en bundles chargés à la demande.

```typescript
const routes: Routes = [
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component')
      .then(m => m.AdminComponent)  // Import dynamique
  }
];
```

#### 💡 Décryptage de l'implémentation

**`loadComponent: () => import(...)`** : Fonction qui retourne une Promise du composant. Angular ne charge pas le composant au démarrage, mais **uniquement** quand l'utilisateur navigue vers `/admin`.

**`import('./admin/admin.component')`** : Import dynamique ES6. Webpack détecte automatiquement ce `import()` et crée un bundle séparé (ex: `admin-component.chunk.js`).

**Bénéfice** : Bundle initial réduit de 30-40%. Si l'admin représente 200 KB, l'utilisateur qui ne va jamais en admin n'a pas à télécharger ces 200 KB.

---

#### 4.3 Prévention des Fuites Mémoire

Découvrons comment détecter et prévenir les fuites mémoire.

```typescript
@Component({
  selector: 'app-safe'
})
export class SafeComponent {
  ngOnInit() {
    this.userService.getUsers()
      .pipe(takeUntilDestroyed())  // Désouscription automatique
      .subscribe(users => console.log(users));
  }
}
```

#### 💡 Décryptage de l'implémentation

**`takeUntilDestroyed()`** : Opérateur RxJS (Angular 16+) qui se désouscrit automatiquement quand le composant est détruit. Plus besoin de gérer manuellement dans `ngOnDestroy()`.

**Problème sans** : Si l'Observable continue d'émettre après destruction, le callback s'exécute quand même. Le composant détruit reste en mémoire (fuite). Après 10 navigations, 10 instances mortes consomment de la RAM.

**Alternative** : Utiliser `async pipe` dans le template : `{{ users$ | async }}`. L'async pipe se désouscrit automatiquement (méthode recommandée).

---

### 5️⃣ State Management

#### 5.1 Services avec State Réactif

Observons comment créer un service de gestion d'état réactif avec Signals.

```typescript
@Injectable({ providedIn: 'root' })
export class UserStateService {
  // État privé writable
  private usersState = signal<User[]>([]);
  
  // Exposition readonly vers l'extérieur
  users = this.usersState.asReadonly();
  
  addUser(user: User) {
    // Mise à jour immutable
    this.usersState.update(users => [...users, user]);
  }
}
```

#### 💡 Décryptage de l'implémentation

**`private usersState = signal<User[]>([])`** : Signal writable **privé**. L'état ne peut être modifié que de l'intérieur du service, via des méthodes publiques. Garantit l'encapsulation.

**`users = this.usersState.asReadonly()`** : Exposition d'un Signal **readonly** vers l'extérieur. Les composants peuvent lire `users()`, mais pas le modifier directement. Pattern similaire à Redux.

**`this.usersState.update(users => [...users, user])`** : Mise à jour **immutable**. Ne pas faire `users.push(user)`, créer un nouveau tableau avec spread operator. Crucial pour OnPush et tracking des changements.

**Bénéfice** : State management simple et type-safe sans librairie externe. Idéal pour états petits/moyens.

---

#### 5.2 NgRx Classique et SignalStore

Nous comparerons les approches NgRx classique et SignalStore pour le state management complexe.

---

### 6️⃣ RxJS et Sécurité

#### 6.1 Higher-Order Mapping (switchMap, mergeMap, concatMap, exhaustMap)

**🔴 PAIN — D'où vient l'erreur ?**

Observons un problème de race condition. Si on utilise `mergeMap()` pour une barre de recherche, toutes les requêtes partent en parallèle sans annulation.

L'utilisateur tape "laptop" (6 lettres). Cela déclenche 6 requêtes HTTP : "l", "la", "lap", "lapt", "lapto", "laptop". À cause de la latence réseau, les réponses arrivent dans le désordre. Le résultat affiché peut être "lapt" au lieu de "laptop".

```typescript
// Code fragile : toutes les requêtes partent en parallèle
searchTerm$.pipe(
  mergeMap(term => this.http.get(`/search?q=${term}`))
)
// ❌ Race condition : la réponse "lapt" peut arriver après "laptop"
```

---

**🟢 GAIN — Comment corriger ?**

Utilisons `switchMap()` à la place.

```typescript
// Solution pour typeahead : annulation automatique
searchTerm$.pipe(
  switchMap(term => this.http.get(`/search?q=${term}`))
)
// ✅ Les requêtes "l", "la", "lap", "lapt", "lapto" sont annulées
// ✅ Seule "laptop" aboutit
```

#### 💡 Décryptage de l'implémentation

**`mergeMap(...)`** : Lance toutes les requêtes en parallèle sans annulation. Les 6 requêtes pour "l", "la", "lap"... sont toutes actives en même temps. La réponse "lapt" peut arriver après "laptop" et écraser le bon résultat.

**`switchMap(...)`** : **Annule** la requête précédente quand une nouvelle valeur arrive. Seule la dernière requête aboutit. Quand l'utilisateur tape "a" après "l", la requête pour "l" est annulée (abort HTTP).

**Les 4 opérateurs Higher-Order** :
1. **switchMap** : Annule la précédente → Typeahead search, autocomplete
2. **mergeMap** : Parallèle sans annulation → Batch loading indépendant
3. **concatMap** : Séquentiel garanti → Upload de fichiers dans l'ordre
4. **exhaustMap** : Ignore pendant traitement → Anti double-click sur bouton submit

---

#### 6.2 Guards Fonctionnels

Nous protégerons les routes avec des Guards fonctionnels modernes.

```typescript
// Guard fonctionnel (Angular 15+)
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);      // Injection fonctionnelle
  const router = inject(Router);
  
  return authService.isAuthenticated() 
    || router.createUrlTree(['/login']);        // Redirection si non authentifié
};

// Utilisation dans routes
{ path: 'admin', canActivate: [authGuard], component: AdminComponent }
```

#### 💡 Décryptage de l'implémentation

**`CanActivateFn`** : Type fonction pour les guards modernes (Angular 15+). Remplace les guards basés sur des classes. Plus simple.

**`inject(AuthService)`** : Injection de dépendances fonctionnelle. Plus besoin de constructeur. Fonctionne uniquement dans le contexte d'injection Angular.

**`router.createUrlTree(['/login'])`** : Si non authentifié, retourne un `UrlTree` qui redirige vers `/login`. Angular gère automatiquement la redirection.

---

#### 6.3 Interceptors HTTP Fonctionnels

Nous intercepterons les requêtes HTTP pour ajouter automatiquement les tokens JWT.

```typescript
// Interceptor fonctionnel (Angular 15+)
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  
  // Clone immutable avec header Authorization
  const authReq = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  });
  
  return next(authReq);  // Passe au prochain interceptor ou serveur
};
```

#### 💡 Décryptage de l'implémentation

**`HttpInterceptorFn`** : Type fonction pour les interceptors modernes (Angular 15+). Remplace les interceptors basés sur des classes.

**`req.clone({ setHeaders: { ... } })`** : Les requêtes HTTP sont **immutables**. Impossible de faire `req.headers.set()`. Il faut cloner la requête et fournir les nouvelles headers.

**`next(authReq)`** : Passe la requête modifiée au prochain interceptor ou au serveur. On peut chaîner plusieurs interceptors.

**Use-case** : Centraliser l'ajout du token JWT. Chaque requête HTTP inclura automatiquement le header d'authentification.

---

## 🛠️ GRILLE D'AUTO-ÉVALUATION

Utilisez cette grille pour évaluer votre niveau actuel. Notez-vous honnêtement de 1 à 5 pour chaque compétence.

**Légende** :
- 1 : Notion inconnue
- 2 : Notion entendue mais non maîtrisée
- 3 : Compréhension théorique, peu de pratique
- 4 : Maîtrise pratique, capable d'implémenter
- 5 : Expertise, capable d'expliquer et de former

### TypeScript Avancé

| Compétence | Note (1-5) | Commentaire |
|------------|------------|-------------|
| Generics avec contraintes (extends keyof) | | |
| Utility Types (Partial, Pick, Omit, Record) | | |
| Mapped Types conditionnels récursifs | | |
| Type Guards personnalisés (is) | | |

### Angular Moderne

| Compétence | Note (1-5) | Commentaire |
|------------|------------|-------------|
| Standalone Components sans NgModules | | |
| Nouveau Control Flow (@if, @for, @switch) | | |
| API Signals (signal, computed, effect) | | |
| Interopérabilité RxJS / Signals (toSignal, toObservable) | | |

### Architecture

| Compétence | Note (1-5) | Commentaire |
|------------|------------|-------------|
| Principes SOLID appliqués à Angular | | |
| Pattern Smart / Dumb Components | | |
| Packaging de librairies (ng-packagr, APF) | | |
| Workspaces monorepo (Nx, affected commands) | | |

### Performance

| Compétence | Note (1-5) | Commentaire |
|------------|------------|-------------|
| Change Detection (OnPush, Zone.js) | | |
| Lazy Loading de routes/composants | | |
| SSR et Hydration | | |
| Prévention fuites mémoire (takeUntilDestroyed) | | |

### State Management

| Compétence | Note (1-5) | Commentaire |
|------------|------------|-------------|
| Service avec state réactif (Signals) | | |
| NgRx classique (Actions, Reducers, Selectors, Effects) | | |
| NgRx SignalStore | | |

### RxJS et Sécurité

| Compétence | Note (1-5) | Commentaire |
|------------|------------|-------------|
| Opérateurs map, tap, catchError | | |
| Higher-Order Mapping (switchMap, mergeMap, concatMap, exhaustMap) | | |
| Guards fonctionnels (CanActivateFn) | | |
| Interceptors HTTP fonctionnels | | |

---

## 🎯 ANALYSE DE VOTRE PROFIL

- **Si toutes vos notes sont 4 ou 5** : Vous êtes prêt pour cette formation avancée ✅
- **Si vous avez des notes à 2 ou 3** : Identifiez ces points et signalez-les au formateur en début de session pour bénéficier d'explications ciblées ⚠️
- **Si vous avez des notes à 1** : Consultez la documentation Angular officielle avant le début de la formation pour vous mettre à niveau 📚

---

## 🚀 PROCHAINES ÉTAPES

**Avant le Jour 1** :

1. ✅ Complétez cette auto-évaluation honnêtement
2. ✅ Notez vos points faibles à clarifier avec le formateur
3. ✅ Consultez la documentation officielle pour les concepts notés à 1 ou 2
4. ✅ Clonez le dépôt GitHub et vérifiez que tout fonctionne
5. ✅ Assurez-vous d'avoir un environnement de développement fonctionnel :
   - Node.js 18+
   - pnpm installé globalement (`npm install -g pnpm`)
   - Visual Studio Code ou WebStorm
   - Angular CLI 17+

**Pendant la formation** :

- N'hésitez pas à poser des questions sur les concepts prérequis si nécessaire
- Participez activement aux sessions pratiques
- Signalez immédiatement si vous décrochez sur un sujet

**Première session** :

Une fois cette auto-évaluation terminée, la formation démarrera avec :

**Jour 1, Session 1 (09h00-10h30) : Architecturer un Workspace Monorepo avec Nx**

Vous scaffolderez un workspace Nx complet avec pnpm et créerez votre première librairie `@enterprise/ui-kit` packagée selon l'Angular Package Format.

---

**Bon courage et bienvenue dans cette formation ANG-ARCHI-LIB ! 🚀**
**Bon courage et bienvenue dans cette formation ANG-ARCHI-LIB ! 🚀**
