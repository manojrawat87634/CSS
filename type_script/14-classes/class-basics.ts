export {};

// Service / Entity style class
class User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getDetails(): string {
    return `${this.id} - ${this.name}`;
  }
}

const user = new User(1, "Manoj");
console.log(user.getDetails());
