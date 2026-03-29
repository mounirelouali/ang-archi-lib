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

## 📚 DOMAINES D'AUTO-ÉVALUATION

Nous allons explorer ensemble les 7 domaines critiques pour cette formation.

### 1️⃣ TypeScript Avancé

#### 1.1 Generics et Inférence de Types

**🔴 PAIN — D'où vient l'erreur ?**

Observons un problème récurrent : une faute de frappe sur le nom d'une propriété peut produire un mauvais résultat sans aucune alerte.

```typescript
// Code vulnérable
function filterProductsBAD(products: any[], key: string, value: any): any[] {
  return products.filter(product => product[key] === value);
}

// TYPO : 'catgory' au lieu de 'category'
const electronics = filterProductsBAD(products, 'catgory', 'Electronics');
// Retourne [] silencieusement (pas d'erreur)
```

**Inconvénient** :
- ❌ Pas d'erreur visible
- ❌ Pas d'alerte TypeScript
- ❌ Résultat faux
- ❌ Le filtre semble marcher, mais ne trouve rien

**🟢 GAIN — Comment bloque-t-on cette erreur ?**

Explorons la solution type-safe. Avec `K extends keyof T`, nous indiquons à TypeScript que `key` doit être une vraie clé de l'objet.

```typescript
// Solution type-safe
function filterByType<T, K extends keyof T>(
  items: T[],
  key: K,          // Clé VALIDE de T
  value: T[K]
): T[] {
  return items.filter(item => item[key] === value);
}

const electronics = filterByType(products, 'category', 'Electronics');
// ✅ "category" est accepté

// ❌ Décommentez pour voir l'erreur :
// const error = filterByType(products, 'catgory', 'Electronics');
// Erreur : Argument of type '"catgory"' is not assignable to parameter of type 'keyof Product'
```

**💎 VALEUR** :
- ✅ "category" est accepté
- ✅ "catgory" est refusé
- ✅ L'erreur est vue **avant** d'exécuter le code
- ✅ On évite un faux résultat silencieux

#### 1.2 Utility Types (Partial, Pick, Record, etc.)

Explorons les Utility Types natifs de TypeScript pour manipuler et transformer des types existants.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Partial : tous les champs optionnels
type UserUpdate = Partial<User>;

// Pick : sélection de champs spécifiques
type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit : exclusion de champs
type UserPublic = Omit<User, 'email'>;

// Record : création d'un objet typé
type UserRoles = Record<string, User[]>;
```

**Points clés** :
- `Partial<T>` rend tous les champs optionnels
- `Pick<T, K>` sélectionne uniquement les champs spécifiés
- `Omit<T, K>` exclut les champs spécifiés
- `Record<K, T>` crée un objet avec clés de type K et valeurs de type T

#### 1.3 Mapped Types et Conditional Types

Observons comment créer des types complexes avec transformations conditionnelles et récursives.

```typescript
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K];
};

interface Config {
  api: {
    url: string;
    timeout: number;
  };
  features: string[];
}

type ReadonlyConfig = DeepReadonly<Config>;
// Tous les champs et sous-champs sont readonly
```

**Point clé** : Les Mapped Types permettent de transformer récursivement chaque propriété d'un type.

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

// Utilisation
function makeSound(animal: Animal) {
  if (isDog(animal)) {
    animal.bark(); // TypeScript sait que c'est un Dog
  } else {
    animal.meow(); // TypeScript sait que c'est un Cat
  }
}
```

**Point clé** : Le prédicat `animal is Dog` informe TypeScript que si la fonction retourne `true`, alors le paramètre est garanti d'être de type `Dog`.

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
  standalone: true,
  imports: [CommonModule, RouterModule], // Imports directs
  template: `
    <div *ngFor="let user of users">{{ user.name }}</div>
  `
})
export class UserListComponent {
  users = [{ name: 'Alice' }, { name: 'Bob' }];
}
```

**Points clés** :
- Les Standalone Components déclarent directement leurs dépendances via `imports`
- Amélioration du tree-shaking : seuls les modules réellement utilisés sont inclus
- Simplification de l'architecture : plus besoin de NgModules intermédiaires

#### 2.2 Nouveau Control Flow (@if, @for, @switch)

Explorons la nouvelle syntaxe de Control Flow d'Angular 17+ pour améliorer les performances et la lisibilité.

```typescript
@Component({
  template: `
    <!-- Ancien -->
    <div *ngIf="user">{{ user.name }}</div>
    
    <!-- Nouveau (Angular 17+) -->
    @if (user) {
      <div>{{ user.name }}</div>
    } @else {
      <div>Chargement...</div>
    }
    
    <!-- Boucle -->
    @for (user of users; track user.id) {
      <div>{{ user.name }}</div>
    }
  `
})
export class UserComponent {}
```

**Points clés** :
- Syntaxe `@if` / `@for` / `@switch` : plus performante que `*ngIf` / `*ngFor`
- Le `track` dans `@for` est obligatoire et optimise le rendu
- Amélioration de la lisibilité du template

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
    this.count.update(c => c + 1);
  }
}
```

**Points clés** :
- `signal()` crée un état writable modifiable via `.set()` ou `.update()`
- `computed()` crée un état dérivé readonly qui se recalcule automatiquement
- `effect()` exécute du code à chaque changement des Signals utilisés
- Angular construit un graphe de dépendances pour une détection fine

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
      debounceTime(300),
      switchMap(term => this.http.get(`/api/search?q=${term}`))
    ),
    { initialValue: [] }
  );
  
  constructor(private http: HttpClient) {}
}
```

**Points clés** :
- `toSignal()` : Observable → Signal (pour afficher des données asynchrones)
- `toObservable()` : Signal → Observable (pour utiliser opérateurs RxJS)
- **Arbitrage** : Signals pour état local/synchrone, RxJS pour flux asynchrones complexes

---

### 3️⃣ Architecture et Clean Code

#### 3.1 Principes SOLID appliqués à Angular

Nous appliquerons les 5 principes SOLID dans nos composants et services :

- **SRP** (Single Responsibility) : Un composant = une responsabilité unique
- **OCP** (Open/Closed) : Extensible via composition, fermé à la modification
- **LSP** (Liskov Substitution) : Les implémentations respectent les contrats
- **ISP** (Interface Segregation) : Interfaces spécifiques plutôt que monolithiques
- **DIP** (Dependency Inversion) : Dépendre d'abstractions, non de concrétions

#### 3.2 Pattern Smart / Dumb Components

Découvrons comment séparer les composants pour améliorer testabilité et réutilisabilité.

```typescript
// DUMB Component (Presentational)
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
  user = input.required<User>();
  onDelete = output<number>();
}

// SMART Component (Container)
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
  
  deleteUser(id: number) {
    this.userService.delete(id);
  }
}
```

**Points clés** :
- **Dumb** : Affichage uniquement, reçoit données via `input()`, émet via `output()`
- **Smart** : Gère la logique métier, les services, orchestre les Dumb Components
- **Avantages** : Testabilité accrue, réutilisabilité maximale

#### 3.3 Packaging de Librairies (ng-packagr, APF)

Nous créerons et packagerons une librairie Angular selon l'Angular Package Format :

- **ng-packagr** : Outil qui compile la librairie selon l'APF
- **Angular Package Format (APF)** : Standard garantissant compatibilité (ESM, FESM, UMD)
- **Peer Dependencies** : Dépendances partagées avec l'application consommatrice

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p>{{ data().value }}</p>`
})
export class OptimizedComponent {
  data = input.required<{ value: string }>();
}
```

**Points clés** :
- **Zone.js** : Intercepte les événements asynchrones pour déclencher la détection
- **Stratégie Default** : Vérifie tout l'arbre à chaque événement (coûteux)
- **Stratégie OnPush** : Vérifie uniquement si les `@Input()` changent (référence)
- **Optimisation** : OnPush réduit drastiquement le nombre de vérifications

#### 4.2 Lazy Loading

Nous découperons l'application en bundles chargés à la demande.

```typescript
const routes: Routes = [
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent)
  }
];
```

**Points clés** :
- **Code Splitting** : Webpack découpe automatiquement le code en bundles
- **loadComponent()** : Charge un Standalone Component à la demande
- **Preloading Strategies** : Stratégies pour précharger en arrière-plan

#### 4.3 Prévention des Fuites Mémoire

Découvrons comment détecter et prévenir les fuites mémoire.

```typescript
@Component({
  selector: 'app-safe'
})
export class SafeComponent {
  ngOnInit() {
    this.userService.getUsers()
      .pipe(takeUntilDestroyed()) // Angular 16+
      .subscribe(users => console.log(users));
  }
}
```

**Points clés** :
- `takeUntilDestroyed()` (Angular 16+) : Se désouscrit automatiquement
- `takeUntil()` : Pattern classique avec Subject
- `async pipe` : Se désouscrit automatiquement (recommandé)

---

### 5️⃣ State Management

#### 5.1 Services avec State Réactif

Observons comment créer un service de gestion d'état réactif avec Signals.

```typescript
@Injectable({ providedIn: 'root' })
export class UserStateService {
  private usersState = signal<User[]>([]);
  
  // Readonly pour l'extérieur
  users = this.usersState.asReadonly();
  
  addUser(user: User) {
    this.usersState.update(users => [...users, user]);
  }
}
```

**Points clés** :
- **Encapsulation** : Exposer un Signal readonly, muter via méthodes publiques
- **Immutabilité** : Utiliser spread operator `[...users, user]`
- **Simplicité** : Approche légère pour états simples

#### 5.2 NgRx Classique et SignalStore

Nous comparerons les approches NgRx classique et SignalStore pour le state management complexe.

---

### 6️⃣ RxJS et Sécurité

#### 6.1 Higher-Order Mapping (switchMap, mergeMap, concatMap, exhaustMap)

**🔴 PAIN — D'où vient l'erreur ?**

Observons un problème de race condition. Si on utilise `mergeMap()` pour une barre de recherche, toutes les requêtes partent en parallèle sans annulation.

L'utilisateur tape "laptop" (6 lettres). Cela déclenche 6 requêtes HTTP : "l", "la", "lap", "lapt", "lapto", "laptop".

À cause de la latence réseau, les réponses arrivent dans le désordre. Le résultat affiché peut être "lapt" au lieu de "laptop".

```typescript
// Code fragile
searchTerm$.pipe(
  mergeMap(term => this.http.get(`/search?q=${term}`))
)
// Toutes les requêtes partent → race condition
```

**🟢 GAIN — Comment corriger ?**

Utilisons `switchMap()` à la place. Quand une nouvelle valeur arrive, il annule la requête précédente. Seule la dernière requête aboutit.

```typescript
// Solution pour typeahead
searchTerm$.pipe(
  switchMap(term => this.http.get(`/search?q=${term}`))
)
// Les requêtes "l", "la", "lap", "lapt", "lapto" sont annulées
// Seule "laptop" aboutit
```

**💎 Les 4 opérateurs Higher-Order** :

1. **switchMap** : Annule la précédente → Use-case : typeahead search
2. **mergeMap** : Parallèle sans annulation → Use-case : batch loading
3. **concatMap** : Séquentiel garanti → Use-case : file d'attente
4. **exhaustMap** : Ignore pendant traitement → Use-case : anti double-click

#### 6.2 Guards Fonctionnels

Nous protégerons les routes avec des Guards fonctionnels modernes.

```typescript
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isAuthenticated() || inject(Router).createUrlTree(['/login']);
};

// Utilisation
{ path: 'admin', canActivate: [authGuard], component: AdminComponent }
```

#### 6.3 Interceptors HTTP Fonctionnels

Nous intercepterons les requêtes HTTP pour ajouter automatiquement les tokens JWT.

```typescript
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  
  const authReq = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  });
  
  return next(authReq);
};
```

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

## � CONFIGURATION INITIALE DE VOTRE ENVIRONNEMENT

Avant de démarrer la formation, vous devez récupérer le code de formation sur votre machine locale.

### Étape 1 : Vérifier les prérequis système

Assurez-vous d'avoir installé sur votre machine :

```bash
# Vérifier Node.js (version 18+ requise)
node --version

# Vérifier pnpm (doit être installé globalement)
pnpm --version

# Si pnpm n'est pas installé, exécutez :
npm install -g pnpm

# Vérifier Git
git --version
```

**Versions recommandées** :
- Node.js : 18.x ou 20.x
- pnpm : 8.x ou 9.x
- Git : 2.x

---

### Étape 2 : Cloner le dépôt de formation

Ouvrez un terminal et exécutez les commandes suivantes :

```bash
# Choisir le dossier où vous voulez installer la formation
cd C:\dev\formations
# Ou sur Mac/Linux : cd ~/dev/formations

# Cloner le dépôt GitHub
git clone https://github.com/mounirelouali/ang-archi-lib.git

# Entrer dans le dossier
cd ang-archi-lib
```

**Structure du projet cloné** :
```
ang-archi-lib/
├── 01_Demo_Formateur/          # Code des démonstrations live
├── 02_Atelier_Stagiaires/      # Vos ateliers pratiques
│   └── J0_Prerequis/           # Ce document
└── 03_Solutions_Zippees/       # Solutions finales (disponibles en fin de session)
```

---

### Étape 3 : Vérifier la configuration Git

```bash
# Vérifier votre identité Git (importante pour les commits)
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"

# Vérifier que le remote est correctement configuré
git remote -v
# Doit afficher :
# origin  https://github.com/mounirelouali/ang-archi-lib.git (fetch)
# origin  https://github.com/mounirelouali/ang-archi-lib.git (push)
```

---

### Étape 4 : Récupérer les mises à jour pendant la formation

Pendant les 3 jours de formation, le formateur ajoutera du contenu au dépôt. Pour récupérer ces mises à jour :

```bash
# Depuis le dossier ang-archi-lib
git pull origin main
```

**Conseil** : Exécutez cette commande au début de chaque session pour avoir le contenu le plus récent.

---

### Étape 5 : Ouvrir le projet dans votre IDE

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

## �🚀 PROCHAINES ÉTAPES

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
