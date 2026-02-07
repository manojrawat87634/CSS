export {};

// Generic class

class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

// Usage
const numberBox = new Box<number>(100);
const stringBox = new Box<string>("Hello");

numberBox.getValue();
stringBox.getValue();
