//classes is a new feature in ES6

class User {
    constructor(email,name){
       this.email = email;
       this.name = name;
       this.score = 0;
    }
    login(){
        console.log(this.email,"has logged in")
        return this;
    }
    logout(){
        console.log(this.email,"has logged out");
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, ' score is now increased ',this.score);
        return this;
    }
    
}
var userOne = new User("haya@gmail.com","hayabusa");
var userTwo = new User("gus@gmail.com","Gusion");


const one = userOne.login().updateScore().logout()
console.log(one)

//the 'new' keyword 
// - creates a new empty object {}
//   - sets the value of 'this' to be the new empty object
//     - calls the constructor method