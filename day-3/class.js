//classes is a new feature in ES6

class User {
    constructor(email,name){
       this.email = email
       this.name = name
    }
    login(){
        console.log(this.email,"has logged in")
    }
    logout(){
        console.log(this,"this refers to what this points to or holds")
    }
    
}
var userOne = new User("haya@gmail.com","hayabusa");
var userTwo = new User("gus@gmail.com","Gusion");

console.log(userOne.login());
console.log(userTwo.logout());

//the 'new' keyword 
// - creates a new empty object {}
//   - sets the value of 'this' to be the new empty object
//     - calls the constructor method