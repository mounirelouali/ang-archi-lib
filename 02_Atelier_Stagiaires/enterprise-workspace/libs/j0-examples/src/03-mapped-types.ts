// 1.3 Mapped Types et Conditional Types

console.log('=== 1.3 Mapped Types et Conditional Types ===\n');

// Type récursif : rend readonly en profondeur
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

const config: Config = {
  api: {
    url: 'https://api.example.com',
    timeout: 5000
  },
  features: ['auth', 'analytics']
};

console.log('📚 Configuration initiale:');
console.log(config);
console.log('');

const readonlyConfig: ReadonlyConfig = config;

console.log('📚 Configuration readonly (DeepReadonly appliqué):');
console.log(readonlyConfig);
console.log('');

console.log('💡 Décryptage:');
console.log('✅ readonly [K in keyof T]: Parcourt toutes les clés et applique readonly');
console.log('✅ T[K] extends object ? ... : ...: Conditional Type récursif');
console.log('✅ Résultat: Tous les champs et sous-champs deviennent readonly');
console.log('');

console.log('💎 Bénéfice:');
console.log('✅ Immutabilité garantie à la compilation');
console.log('✅ Impossible de modifier config.api.url ou config.features');
console.log('✅ Sécurité pour configurations sensibles\n');
