// let username :string = "manoj";
let username = "manoj";
let isValid :boolean = true;
let isNull:void;
// username = 12;
let data : any = "";
username = "";

let email : string | number;

email = "maoj@gmail.co";
email = 123;

let students : Array<string> = ["manoj", "user", "safd"];

type User = {
    name : string,
    email : string
}

const users : User ={
    name : "manoj",
    email : "manoj@gmail.com"
}

function myFunc (n1 : number, n2:number):number{
    return n1 + n2;
}

// class Box<T>{
//     private  data : T;
//     constructor(value : T){
//         this.data = value;
//     }
// }
let date = new Date();
class BankMangement{
    username : string;
    email : string;
    private balance : number;
    constructor (p_username : string, p_email:string){
        this.username = p_username;
        this.email = p_email;
        this.balance = 0;
    }
    getBalance(){
        console.log(this.balance);
    }
    credit(value : number){
        if (this.balance > value){
            this.balance -= value;
        }
        else{
            console.log("Insufficient Balance");
        }
    }
    
    debit(value : number){
        this.balance += value;
    }
}

const user1 = new BankMangement("abc", "abc@gmail.com");
user1.debit(1000)
user1.credit(500)
user1.getBalance();
// user1.balance = 123;
// console.log(user1.balance);

class Box<T>{
    data : T;
    constructor(value : T){
        this.data = value;
    }
}


let b1 = new Box<string>("123");
console.log(b1.data);
let b2 = new Box<number>(123);
console.log(b2.data);
