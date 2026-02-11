class BankMangement{
    private username;
    private email;
    private balance;
    constructor (p_name : string, p_email:string){
        this.username = p_name;
        this.email = p_email;   
        this.balance = 0;
    }
    debit(p_val:number){
        this.balance += p_val;
    }
    credit(p_val: number){
        if (p_val < this.balance){
            this.balance -= p_val;
        }
        else{
            console.log("Insufficient Balance");
        }
    }
    getInfo(){
        console.log(`User name : ${this.username}\nUser Email : ${this.email}\nBalance : ${this.balance}`);
    }
}

let cus1 = new BankMangement("abc", "abc@gmail.com");
cus1.debit(500);
cus1.credit(400);
cus1.credit(600);
cus1.getInfo();
let cus2 = new BankMangement("xyz", "xyz@gmail.com");
