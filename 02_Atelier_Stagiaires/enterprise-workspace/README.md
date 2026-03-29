# 🎯 Enterprise Workspace - Formation ANG-ARCHI-LIB

**Architecture** : Nx Integrated Monorepo avec pnpm  
**Portée** : **Formation complète J0 → J3**  
**Principe** : **1 seul `node_modules`** pour toutes les sessions

## 📁 Structure Globale

```
enterprise-workspace/                    # ✅ RACINE UNIQUE
├── package.json                         # ✅ UNIQUE package.json (toute formation)
├── node_modules/                        # ✅ UNIQUE dossier dépendances
├── nx.json                              # Configuration Nx
├── tsconfig.base.json                   # TypeScript partagé
├── libs/
│   └── j0-examples/                     # Exemples J0 Prérequis
│       ├── project.json                 # ❌ PAS de package.json
│       └── src/
│           ├── 01-generics.ts
│           ├── 02-utility-types.ts
│           ├── 03-mapped-types.ts
│           └── 04-type-guards.ts
└── apps/                                # Applications futures (J1, J2, J3)
    └── (à venir selon sessions)
```

## ✅ Architecture Validée

**Conformité Directive** :
- ✅ 1 seul `package.json` à la racine de `02_Atelier_Stagiaires/enterprise-workspace`
- ✅ 1 seul `node_modules` partagé entre **toutes les sessions** (J0-J3)
- ✅ Pas de `package.json` dans les libs/apps
- ✅ Nx Integrated Monorepo avec pnpm
- ✅ Évolutif pour J1, J2, J3 (ajout de apps/libs sans nouveau node_modules)

## ⚙️ Installation

```bash
# Depuis la racine du dépôt cloné
cd ANGULAR_UI_KIT_ESPACE_STAGIAIRES/02_Atelier_Stagiaires/enterprise-workspace

# Installer les dépendances (1 seul node_modules créé)
pnpm install
```

**Résultat** : Un seul `node_modules` à la racine de `enterprise-workspace`.

## 🚀 Exécution - Session J0 (Prérequis)

### Exemples TypeScript individuels

```bash
# 1.1 Generics
pnpm j0:ts:generics

# 1.2 Utility Types
pnpm j0:ts:utility

# 1.3 Mapped Types
pnpm j0:ts:mapped

# 1.4 Type Guards
pnpm j0:ts:guards
```

### Tous les exemples J0

```bash
# Exécuter tous les exemples TypeScript J0
pnpm j0:ts:all
```

## 🔍 Commandes Nx Directes

```bash
# Via Nx (équivalent)
nx run j0-examples:generics
nx run j0-examples:utility
nx run j0-examples:mapped
nx run j0-examples:guards

# Tous en séquence
nx run-many -t run-all -p j0-examples
```

## 🚀 Évolution Future

### Jour 1 (J1) - Exemple d'ajout

```bash
# Créer une app Angular pour J1
nx g @nx/angular:app j1-demo

# Résultat : apps/j1-demo (sans package.json, utilise le node_modules racine)
```

### Jour 2 (J2) - Exemple de lib partagée

```bash
# Créer une lib UI partagée
nx g @nx/angular:lib ui-kit

# Résultat : libs/ui-kit (sans package.json, utilise le node_modules racine)
```

**Principe** : Chaque session ajoute des apps/libs dans ce workspace unique, **jamais** de nouveau `node_modules`.

## 💡 Avantages Architecture

1. **Partage dépendances** : 1 seul Angular, RxJS, TypeScript pour J0-J3
2. **Cache Nx global** : Build/test accélérés entre sessions
3. **Import inter-sessions** : J2 peut importer depuis libs créées en J1
4. **Gestion simplifiée** : 1 seul `pnpm install` pour toute la formation

---

**📖 Retour à** : `J0_Prerequis.md`
