export {};

// Interface extension

interface BaseUser {
  id: number;
  name: string;
}

interface Admin extends BaseUser {
  role: "ADMIN";
  canDelete: boolean;
}

// Type intersection

type Employee = {
  employeeId: number;
};

type Manager = BaseUser & Employee & {
  role: "MANAGER";
};

// Usage
const admin: Admin = {
  id: 1,
  name: "Manoj",
  role: "ADMIN",
  canDelete: true,
};

const manager: Manager = {
  id: 2,
  name: "Rahul",
  employeeId: 5001,
  role: "MANAGER",
};

console.log(admin, manager);
