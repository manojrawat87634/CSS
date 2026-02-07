export {};

// Shortcut constructor (VERY common)
class Product {
  constructor(
    public id: number,
    public name: string,
    private price: number
  ) {}

  getPrice(): number {
    return this.price;
  }
}

const product = new Product(1, "Laptop", 50000);
console.log(product.name);
console.log(product.getPrice());
