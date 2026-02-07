export {};

// Function parameter + return type

function add(a: number, b: number): number {
  return a + b;
}

const multiply = (x: number, y: number): number => {
  return x * y;
};

// Function returning nothing
function logMessage(message: string): void {
  console.log(message);
}

add(2, 3);
multiply(4, 5);
logMessage("Hello TypeScript");
