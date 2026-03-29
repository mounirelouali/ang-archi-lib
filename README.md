# 🎓 Formation ANG-ARCHI-LIB : Enterprise UI Kit

## Angular Architecture, Performance & Librairies d'Entreprise

---

## 📋 Présentation

Bienvenue dans l'espace de formation **ANG-ARCHI-LIB** !

Ce dépôt contient tous les supports, ateliers et démonstrations pour la formation de 3 jours sur l'architecture Angular moderne.

### 🎯 Objectifs de la Formation

- Maîtriser les **Standalone Components** (NO NgModules)
- Implémenter les **Signals** pour une réactivité optimale
- Créer une **librairie UI Kit** publishable avec Nx + pnpm
- Optimiser les performances avec **OnPush** et **Zoneless**
- Tester avec **ComponentHarness**

---

## 🗂️ Structure du Projet

```
ANGULAR_UI_KIT_ESPACE_STAGIAIRES/
│
├── 01_Demo_Formateur/          # Code des démonstrations live
│   └── (Sera complété au fur et à mesure)
│
├── 02_Atelier_Stagiaires/      # Vos ateliers pratiques
│   ├── J1_S1/                  # Jour 1 - Session 1
│   ├── J1_S2/                  # Jour 1 - Session 2
│   └── ...
│
└── 03_Solutions_Zippees/       # Solutions finales (protégées)
    └── (Archives disponibles en fin de session)
```

---

## 🚀 Projet Fil Rouge : Enterprise UI Kit

Vous allez construire une **librairie de composants réutilisables** :

### Composants à créer

1. **LibInput** : Input field avec Signals + ControlValueAccessor
2. **LibModal** : Dialog system avec Angular CDK Overlay
3. **LibDataGrid** : Table virtuelle (10k lignes @ 60 FPS)

### Stack Technique

- **Angular** : 16.2+ (Signals stable)
- **Nx** : Integrated Monorepo
- **pnpm** : Gestionnaire de paquets
- **TypeScript** : 5.2+
- **Angular CDK** : Virtual Scrolling, Overlay, A11y

---

## 📚 Prérequis

Avant de commencer, assurez-vous d'avoir :

- ✅ Node.js 18+ installé
- ✅ pnpm installé globalement (`npm install -g pnpm`)
- ✅ Visual Studio Code ou WebStorm
- ✅ Connaissances Angular intermédiaires (Components, Services, RxJS)

---

## 🛠️ Installation

```bash
# Cloner le dépôt
git clone https://github.com/mounirelouali/ang-archi-lib.git
cd ang-archi-lib/ANGULAR_UI_KIT_ESPACE_STAGIAIRES

# Les dépendances seront installées lors de la première session
# (Nx workspace sera créé ensemble)
```

---

## 📅 Programme des 3 Jours

### Jour 1 : Fondations
- Session 1 : Architecture Workspace & Standalone Components
- Session 2 : Signals & Réactivité Moderne
- Session 3 : ControlValueAccessor & Reactive Forms
- Session 4 : Content Projection & Services

### Jour 2 : Performance
- Session 1 : OnPush Change Detection
- Session 2 : Zoneless Angular (Expérimental)
- Session 3 : Service-with-Signal Pattern
- Session 4 : Virtual Scrolling CDK (10k lignes)

### Jour 3 : Robustesse
- Session 1 : ControlValueAccessor Avancé
- Session 2 : ComponentHarness & Tests
- Session 3 : Functional Guards & Interceptors
- Session 4 : Packaging & Distribution NPM

---

## 🎓 Méthodologie

Chaque session suit la **méthode SAM** :

1. **📖 Théorie** : Concepts clés (15-20 min)
2. **🎬 Démonstration** : Live coding du formateur (30-40 min)
3. **🛠️ Atelier** : Vous codez seul (30-40 min)

---

## 📞 Support

Des questions ? Contactez le formateur pendant les sessions ou consultez les README.md de chaque atelier.

---

## 📄 Licence

Ce matériel pédagogique est fourni dans le cadre de la formation ANG-ARCHI-LIB.

---

**Bonne formation ! 🚀**
