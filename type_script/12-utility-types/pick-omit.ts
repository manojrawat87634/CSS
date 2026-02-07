export {};

// Base model
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "USER";
}

/**
 * API response
 * → never expose password
 */
type PublicUser = Omit<User, "password">;

/**
 * Lightweight response
 * → only needed fields
 */
type UserPreview = Pick<User, "id" | "name">;

// Example usage
const publicUser: PublicUser = {
  id: 1,
  name: "Manoj",
  email: "manoj@mail.com",
  role: "USER"
};

const preview: UserPreview = {
  id: 1,
  name: "Manoj",
};
