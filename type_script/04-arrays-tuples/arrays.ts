export {};

// Arrays in TypeScript

// Basic array types
let users : number[] = [1, 2, 3, 5];
let userEmail : Array<string> = ["manoj@gmail.com", "abc@gmail.com", "masdf@gmail.com"];

userEmail.forEach((e : string, i:number)=>{
    console.log(e);
})

type UserT = {
    name : string, 
    email : string
}

let data : UserT = {
    name : "abc",
    "email" : "abc@gmail.com"
}

console.log(data);