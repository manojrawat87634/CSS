// Type Inference in TypeScript

// TS automatically infers the type
let userName = "Manoj";      // string
let age = 25;               // number
let isTrainer = true;       // boolean

// userName = 10; ❌ Error

// Function return type inference
function add(a: number, b: number) {
  return a + b; // inferred as number
}

const result = add(10, 20);

// Array inference
const skills = ["Java", "TypeScript", "Backend"]; // string[]

// Object inference
const user = {
  id: 1,
  name: "Rahul",
  isActive: true,
};

// user.id = "abc"; ❌ Error

console.log(result, skills, user);
export {};
