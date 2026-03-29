// 1.2 Utility Types (Partial, Pick, Record, etc.)

console.log('=== 1.2 Utility Types ===\n');

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

// Exemples pratiques
const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  role: 'admin'
};

console.log('📚 Partial<User> - Mise à jour partielle:');
const updateUser = (userId: number, updates: UserUpdate) => {
  console.log(`  Mise à jour utilisateur ${userId}:`, updates);
};
updateUser(1, { name: 'Alice Updated' });
console.log('');

console.log('📚 Pick<User, "email" | "role"> - Credentials:');
const credentials: UserCredentials = {
  email: 'alice@example.com',
  role: 'admin'
};
console.log('  Credentials:', credentials);
console.log('');

console.log('📚 Omit<User, "email"> - Données publiques:');
const publicUser: UserPublic = {
  id: 1,
  name: 'Alice',
  role: 'admin'
};
console.log('  Public User:', publicUser);
console.log('');

console.log('📚 Record<string, User[]> - Dictionnaire de rôles:');
const usersByRole: UserRoles = {
  admin: [user],
  viewer: [
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'viewer' }
  ]
};
console.log('  Users by Role:', usersByRole);
console.log('');

console.log('💡 Bénéfices:');
console.log('✅ Partial: Update partiel type-safe');
console.log('✅ Pick: Interfaces minimalistes');
console.log('✅ Omit: Données publiques sans infos sensibles');
console.log('✅ Record: Dictionnaires typés\n');
