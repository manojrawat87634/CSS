type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; email: string };

function check(u: Admin | User) {
  if ("permissions" in u) {
    // Admin
  } else {
    // User
  }
}
