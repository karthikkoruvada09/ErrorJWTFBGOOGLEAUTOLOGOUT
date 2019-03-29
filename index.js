function User(name){
    this.name=name;
    
};

let obj=new User("siva");

function User1(name){
    this.name=name;
    
};

let obj1=new User1("siva");
console.log(User.prototype===User1.prototype);


let o={};
let b={};
console.log(o.__proto__===b.__proto__)





