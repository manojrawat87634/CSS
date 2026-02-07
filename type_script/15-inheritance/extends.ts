export {};

// Contract
interface AuthService {
  login(email: string, password: string): boolean;
}

// Class MUST follow contract
class SimpleAuthService implements AuthService {
  login(email: string, password: string): boolean {
    return email === "admin@mail.com" && password === "admin123";
  }
}

const auth = new SimpleAuthService();
console.log(auth.login("admin@mail.com", "admin123")); // true
