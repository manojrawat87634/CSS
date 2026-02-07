export {};

// Rest parameters

function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3);
sum(10, 20, 30, 40);
