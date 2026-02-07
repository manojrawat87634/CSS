export {};

// Optional (?) and Readonly properties

type Product = {
  readonly id: number; // cannot be changed
  name: string;
  price?: number; // optional
};

const product: Product = {
  id: 101,
  name: "Laptop",
};

// product.id = 200; ❌ Error: readonly

product.price = 55000; // allowed (optional)

console.log(product);
