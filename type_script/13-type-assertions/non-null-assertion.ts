export {};

// Example: value comes from DB / env / request
interface User {
  id: number;
  name: string;
}

let user: User | null = {
  id: 1,
  name: "Manoj",
};

// Non-null assertion
const userId = user!.id;

console.log(userId);
