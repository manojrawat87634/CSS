export {};

// Generic function

function identity<T>(value: T): T {
  return value;
}

// Usage
identity<number>(10);
identity<string>("Hello");
identity<boolean>(true);

// Type inference (most common)
identity(100);
identity("TypeScript");
