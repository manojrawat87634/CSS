export {};

// Optional parameter
function greet(name?: string): string {
  return name ? `Hello, ${name}` : "Hello, Guest";
}

// Default parameter
function greetWithDefault(name: string = "Guest"): string {
  return `Hello, ${name}`;
}

greet("Manoj");
greet();

greetWithDefault("Rahul");
greetWithDefault();
