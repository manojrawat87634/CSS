class Student{
    username;
    email;
    constructor(p_username, p_email){
        this.username = p_username;
        this.email = p_email;
    }
    getInfo(){
        console.log(`User name : ${this.username}\nUser email ${this.email}`);
    }
}

let s1 = new Student("abc", "abc@gmail.com");
let s2 = new Student("xyz", "xyz@gmail.com");
let s3 = new Student("kbc", "kbc@gmail.com");
s1.username = "asfd";
s1.getInfo();
// s3.getInfo();

