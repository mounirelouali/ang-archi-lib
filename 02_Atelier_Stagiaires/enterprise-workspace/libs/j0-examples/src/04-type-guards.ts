// 1.4 Type Guards et Sécurité d'Exécution

console.log('=== 1.4 Type Guards ===\n');

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

function makeSound(animal: Animal) {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const dog: Dog = {
  type: 'dog',
  bark: () => console.log('  🐕 Woof! Woof!')
};

const cat: Cat = {
  type: 'cat',
  meow: () => console.log('  🐱 Meow! Meow!')
};

console.log('📚 Test Type Guard avec Dog:');
makeSound(dog);
console.log('');

console.log('📚 Test Type Guard avec Cat:');
makeSound(cat);
console.log('');

console.log('📚 Vérification explicite:');
console.log('  isDog(dog):', isDog(dog));
console.log('  isDog(cat):', isDog(cat));
console.log('');

console.log('💡 Décryptage:');
console.log('✅ animal is Dog: Prédicat de type qui informe TypeScript');
console.log('✅ if (isDog(animal)): TypeScript réduit le type à Dog dans le bloc if');
console.log('✅ Dans else: TypeScript déduit automatiquement que c\'est un Cat');
console.log('');

console.log('💎 Bénéfice:');
console.log('✅ Sécurité à la compilation pour vérifications runtime');
console.log('✅ Évite les cast dangereux (as Dog)');
console.log('✅ Code type-safe avec unions discriminées\n');
