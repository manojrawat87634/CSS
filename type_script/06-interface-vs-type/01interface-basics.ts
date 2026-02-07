export {};

// Interface basics

interface User {
  id: number;
  name: string;
  isActive: boolean;
}

// Object using interface
const user: User = {
  id: 1,
  name: "Manoj",
  isActive: true,
};

// Interface in function
function printUser(user: User): void {
  console.log(user.name, user.isActive);
}

printUser(user);
