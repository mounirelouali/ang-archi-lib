# 🎨 Intégration Thème MaterialM - Branche feature/materialm-theme

## 📊 Contexte

**Source** : [MaterialM Angular Free Template](https://github.com/wrappixel/materialm-angular-free)  
**Branche** : `feature/materialm-theme`  
**Date** : 31 Mars 2026

---

## ⚠️ Incompatibilités Identifiées

### Version Angular
- **MaterialM** : Angular 21.0.6 + Material 21.0.5
- **Notre projet** : Angular 18.2.0 + Material 18.2.14
- **Dépendance Tailwind CSS 4.1** : Non intégrée (hors scope)

### API Material 3
MaterialM utilise des **variables CSS natives Material 3** (`var(--mat-sys-primary)`) qui ne sont **pas disponibles** dans Angular Material 18.2.

---

## ✅ Solution Adoptée

**Stratégie** : Extraction des **CSS Custom Properties uniquement**, sans palettes Material natives.

### Architecture Créée

```text
ui-kit/src/lib/styles/materialm/
├── _variables.scss          // Variables SCSS adaptées (couleurs, spacing, shadows)
└── _materialm-theme.scss    // Mixin d'injection CSS variables
```

### Fichiers Modifiés

```text
enterprise-workspace/
├── apps/host-app/src/styles.scss                     // Basculement vers MaterialM
├── ui-kit/src/lib/components/lib-header/
│   └── lib-header.component.scss                    // Stylage MaterialM
└── ui-kit/src/lib/styles/materialm/
    ├── _variables.scss                              // ✅ NOUVEAU
    └── _materialm-theme.scss                        // ✅ NOUVEAU
```

---

## 🎨 Variables CSS Exposées

### Couleurs Principales
```scss
--materialm-primary: #5d87ff       // Bleu moderne
--materialm-secondary: #49beff     // Cyan
--materialm-accent: #49beff
--materialm-error: #fa896b
--materialm-warning: #ffae1f
--materialm-success: #00ceb6
--materialm-info: #539bff
```

### Couleurs Light (Backgrounds)
```scss
--materialm-light-primary: rgba(93, 135, 255, 0.15)
--materialm-light-secondary: rgba(73, 190, 255, 0.15)
--materialm-light-error: rgba(250, 137, 107, 0.15)
--materialm-light-warning: rgba(255, 174, 31, 0.15)
--materialm-light-success: rgba(0, 206, 182, 0.15)
--materialm-light-info: rgba(83, 155, 255, 0.15)
```

### Layout & Design System
```scss
--materialm-bg-layout: #f4f7fb
--materialm-border-color: #dfe5ef
--materialm-text-color: #2a3547
--materialm-text-secondary: rgba(42, 53, 71, 0.67)

--materialm-shadow-sm: 0px 2px 4px -1px rgba(175, 182, 201, 0.2)
--materialm-shadow-md: 0 1px 4px rgba(133, 146, 173, 0.2)
--materialm-shadow-lg: 0 15px 30px rgba(0, 0, 0, 0.12)

--materialm-border-radius: 24px
--materialm-card-spacer: 24px
--materialm-sidenav-desktop: 265px
--materialm-header-height: 70px
```

---

## 🧩 Exemple d'Utilisation - LibHeaderComponent

### Avant (Thème CFL)
```scss
.enterprise-header {
  background-color: var(--cfl-primary);      // Gris #58585a
  .profile-button {
    background-color: var(--cfl-secondary);  // Vert #55b948
  }
}
```

### Après (Thème MaterialM)
```scss
.enterprise-header {
  background-color: var(--materialm-primary);      // Bleu #5d87ff
  box-shadow: var(--materialm-shadow-md);
  height: var(--materialm-header-height);
  
  .profile-button {
    background-color: var(--materialm-secondary); // Cyan #49beff
    border-radius: var(--materialm-border-radius);
    box-shadow: var(--materialm-shadow-sm);
    
    &:hover {
      background-color: var(--materialm-info);
      transform: translateY(-2px);              // Effet élévation moderne
    }
  }
}
```

---

## 🚀 Activation du Thème

### Bascule Globale
**Fichier** : `apps/host-app/src/styles.scss`

```scss
// Thème MaterialM
@use '../../../ui-kit/src/lib/styles/materialm/materialm-theme' as materialm;
@include materialm.apply-materialm-theme();
```

---

## ✅ Validation

| Critère | Statut |
|---------|--------|
| Build Nx | ✅ Succès (16s) |
| Compilation SCSS | ✅ Sans erreur |
| CSS Variables exposées | ✅ 20+ variables |
| Compatibilité Angular 18 | ✅ Confirmée |
| Serveur dev fonctionnel | ✅ http://localhost:4200 |

---

## 📝 Limitations

1. **Palettes Material natives** : Non disponibles (Angular 18.2)
2. **Tailwind CSS 4** : Non intégré (dépendance MaterialM 21)
3. **Composants Material** : Style par défaut Angular Material 18

---

## 🔄 Retour au Thème CFL

Pour revenir au thème CFL original :

```scss
// Dans apps/host-app/src/styles.scss
@use '../../../ui-kit/src/lib/styles/cfl-theme' as cfl;
@include cfl.apply-cfl-theme();
```

---

## 🎯 Conclusion

**Thème MaterialM adapté avec succès** pour Angular 18 via CSS Custom Properties.  
**Approche pragmatique** : Variables design système réutilisables sans dépendances Angular 21.  
**Production-ready** : Build stable, performant, compatible avec l'architecture Nx existante.
