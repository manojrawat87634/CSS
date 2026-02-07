export {};

class Account {
  public holder: string;
  private balance: number;

  constructor(holder: string, balance: number) {
    this.holder = holder;
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance;
  }
}

const acc = new Account("Manoj", 1000);
console.log(acc.holder);
console.log(acc.getBalance());
