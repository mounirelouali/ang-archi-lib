# 📦 Guide de Déploiement - Formation Angular 18

## ✅ Version Déployée : `stagiaires-j1-start`

### 🎯 Résumé

Le workspace **enterprise-workspace** a été préparé et déployé sur GitHub avec **2 versions** :

1. **Version Stagiaires** (branche `stagiaires-j1-start`) : Workspace clean SANS composants
2. **Version Restauration** (tag `stable-v1.0-with-components`) : Version complète AVEC composants fonctionnels

---

## 🔖 Points de Restauration Git

### Tag : `stable-v1.0-with-components`

**Contenu** :
- ✅ `LibHeaderComponent` complet et fonctionnel
- ✅ `jwtInterceptor` complet et fonctionnel
- ✅ `UserService` configuré
- ✅ `app.ts` et `app.html` avec démo complète
- ✅ Compilation validée

**Commande de restauration** :
```bash
git checkout stable-v1.0-with-components
```

### Branche : `stagiaires-j1-start`

**Contenu** :
- ✅ Workspace Angular 18 + Nx 22.6.3 opérationnel
- ✅ Application `host-app` qui compile sans erreur
- ✅ Librairie `ui-kit` vide (prête pour exercices)
- ❌ SANS `LibHeaderComponent` (stagiaires doivent le créer)
- ❌ SANS `jwtInterceptor` (stagiaires doivent le créer)
- ✅ `ui-kit/src/index.ts` avec commentaires exercice
- ✅ `README.md` avec instructions démarrage

**État actuel sur GitHub** :
```
https://github.com/mounirelouali/ang-archi-lib
└── Branche: stagiaires-j1-start
```

---

## 📋 Instructions Stagiaires (Jour 1)

### Étape 1 : Cloner le dépôt

```bash
git clone https://github.com/mounirelouali/ang-archi-lib.git
cd ang-archi-lib/ANGULAR_UI_KIT_ESPACE_STAGIAIRES/02_Atelier_Stagiaires/enterprise-workspace
```

### Étape 2 : Basculer sur la branche formation

```bash
git checkout stagiaires-j1-start
```

### Étape 3 : Installer les dépendances

```bash
pnpm install
```

### Étape 4 : Vérifier que tout fonctionne

```bash
npx nx serve host-app
```

**Résultat attendu** : Application démarre sur http://localhost:4200 avec message "Enterprise Workspace - Host App"

---

## 🧪 Validation Pré-Formation

### ✅ Checklist Formateur

Avant la formation, vérifiez :

| Vérification | Commande | Résultat Attendu |
|--------------|----------|------------------|
| Tag existe | `git tag -l` | `stable-v1.0-with-components` visible |
| Branche existe | `git branch -r` | `origin/stagiaires-j1-start` visible |
| Clone frais fonctionne | Clone + install + serve | App démarre sans erreur |
| Documentation présente | Ouvrir `GOLDEN_PATH_ETAPE_1.md` | Diagrammes et code visibles |

### Test Clone Complet (Simuler Stagiaire)

```bash
# Dans un dossier temporaire
cd /tmp
git clone https://github.com/mounirelouali/ang-archi-lib.git test-clone
cd test-clone/ANGULAR_UI_KIT_ESPACE_STAGIAIRES/02_Atelier_Stagiaires/enterprise-workspace
git checkout stagiaires-j1-start
pnpm install
npx nx serve host-app
# Ouvrir http://localhost:4200 → Doit afficher la page d'accueil
```

---

## 🎓 Exercices Prévus

### Exercice 1 : LibHeaderComponent

**Objectif** : Créer un composant d'en-tête avec Signals API

**Fichier guide** : `GOLDEN_PATH_ETAPE_1.md` (section "Manuel d'utilisation : LibHeaderComponent")

**Critères de réussite** :
- Composant généré avec Nx CLI
- Utilisation de `input.required()` pour les Signals
- Control Flow natif `@if` dans le template
- Export dans `ui-kit/src/index.ts`
- Import et utilisation dans `apps/host-app/src/app/app.ts`

### Exercice 2 : jwtInterceptor

**Objectif** : Créer un intercepteur HTTP fonctionnel

**Fichier guide** : `GOLDEN_PATH_ETAPE_1.md` (section "Manuel d'utilisation : jwtInterceptor")

**Critères de réussite** :
- Intercepteur généré avec `HttpInterceptorFn`
- Configuration dans `app.config.ts`
- Test avec `UserService`
- Vérification header `Authorization` dans DevTools

---

## 🔧 Dépannage Formation

### Problème : Stagiaire a cassé son workspace

**Solution 1** : Reset vers version stagiaire propre
```bash
git reset --hard origin/stagiaires-j1-start
git clean -fd
pnpm install
```

**Solution 2** : Récupérer version complète (en dernier recours)
```bash
git checkout stable-v1.0-with-components
pnpm install
```

### Problème : Erreur de compilation après exercice

**Diagnostic** :
1. Vérifier export dans `ui-kit/src/index.ts`
2. Vérifier import dans `apps/host-app/src/app/app.ts`
3. Vérifier path mapping `@enterprise/ui-kit` dans `tsconfig.base.json`

**Solution rapide** : Comparer avec version `stable-v1.0-with-components`

---

## 📊 Architecture Déployée

### Structure Finale sur GitHub

```
ang-archi-lib/
└── ANGULAR_UI_KIT_ESPACE_STAGIAIRES/
    └── 02_Atelier_Stagiaires/
        └── enterprise-workspace/
            ├── apps/host-app/          (app clean, prête)
            ├── ui-kit/                 (librairie vide)
            ├── GOLDEN_PATH_ETAPE_1.md  (documentation complète)
            └── README.md               (instructions stagiaires)
```

### Fichiers Modifiés (Version Stagiaire)

| Fichier | Modification | Raison |
|---------|--------------|--------|
| `ui-kit/src/index.ts` | Commentaires exercice | Guider stagiaires sur exports |
| `apps/host-app/src/app/app.ts` | Imports retirés | Composant clean de base |
| `apps/host-app/src/app/app.html` | Template simple | Sans LibHeader |
| `apps/host-app/src/app/app.config.ts` | HttpClient basique | Sans intercepteur |
| `README.md` | Instructions formation | Guide démarrage stagiaires |

---

## 🚀 Commandes Formateur Utiles

### Vérifier l'état distant

```bash
git ls-remote --heads origin
git ls-remote --tags origin
```

### Mettre à jour la branche stagiaire (après correction)

```bash
git checkout stagiaires-j1-start
# Faire modifications
git add .
git commit -m "fix: correction exercice XYZ"
git push origin stagiaires-j1-start
```

### Créer un nouveau tag de sauvegarde

```bash
git tag -a "stable-v1.1-apres-j1" -m "Version stable après Jour 1"
git push origin stable-v1.1-apres-j1
```

---

## 📝 Notes Importantes

1. **NE JAMAIS** modifier la branche `stagiaires-j1-start` pendant la formation (risque de conflit avec les stagiaires)
2. **TOUJOURS** tester un clone frais avant chaque journée de formation
3. Le tag `stable-v1.0-with-components` est **immuable** (point de restauration garanti)
4. Le fichier `GOLDEN_PATH_ETAPE_1.md` contient **tous les diagrammes et explications** pour la démonstration

---

## ✅ État de Déploiement

- [x] Tag `stable-v1.0-with-components` créé et pushé
- [x] Branche `stagiaires-j1-start` créée et pushée
- [x] README.md stagiaires créé
- [x] Compilation validée (build réussit)
- [x] Documentation GOLDEN_PATH_ETAPE_1.md à jour
- [x] Diagrammes Mermaid intégrés
- [x] Code commenté avec navigation formateur

**Statut** : ✅ **PRÊT POUR FORMATION**

**URL GitHub** : https://github.com/mounirelouali/ang-archi-lib

**Date de déploiement** : 31 mars 2026
