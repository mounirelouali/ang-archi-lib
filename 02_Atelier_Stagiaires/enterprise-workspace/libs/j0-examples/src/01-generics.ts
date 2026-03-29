// 1.1 Generics et Inférence de Types

console.log('=== 1.1 Generics et Inférence de Types ===\n');

// Définition d'un type Product pour les exemples
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

// ❌ Code vulnérable avec any
function filterProductsBAD(products: any[], key: string, value: any): any[] {
  return products.filter(product => product[key] === value);
}

// ✅ Solution type-safe avec Generics
// Fonction générique : K doit être une clé valide de T
function filterByType<T, K extends keyof T>(
  items: T[],
  key: K,              // Clé garantie existante
  value: T[K]          // Type inféré selon la clé
): T[] {
  return items.filter(item => item[key] === value);
}

// Données de test
const products: Product[] = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
  { id: 2, name: 'Mouse', category: 'Electronics', price: 25 },
  { id: 3, name: 'Desk', category: 'Furniture', price: 300 },
  { id: 4, name: 'Chair', category: 'Furniture', price: 150 }
];

// Test avec la fonction BAD (accepte n'importe quoi)
console.log('❌ Fonction BAD avec typo "catgory":');
const badResult = filterProductsBAD(products, 'catgory', 'Electronics');
console.log('Résultat:', badResult); // [] - Pas d'erreur mais résultat faux
console.log('');

// Test avec la fonction type-safe
console.log('✅ Fonction type-safe avec "category":');
const goodResult = filterByType(products, 'category', 'Electronics');
console.log('Résultat:', goodResult);
console.log('');

// Test avec inférence de type
console.log('✅ Filtrage par prix (type number inféré):');
const expensiveProducts = filterByType(products, 'price', 1200);
console.log('Résultat:', expensiveProducts);
console.log('');

console.log('💎 VALEUR:');
console.log('✅ "category" est accepté (clé valide)');
console.log('✅ "catgory" est refusé (erreur de compilation)');
console.log('✅ Erreur détectée AVANT exécution');
console.log('✅ Économie de temps de debug\n');
