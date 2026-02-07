export {};

// Numeric Enum

enum Role {
  ADMIN,
  USER,
  GUEST,
}

// Under the hood:
// ADMIN = 0, USER = 1, GUEST = 2

let userRole: Role = Role.ADMIN;

console.log(userRole); // 0
