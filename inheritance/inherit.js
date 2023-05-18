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
//Class admin

class Admin extends User{
    deleteUser(user){
       users = users.filter(u => {
          return u.email != user.email;
       })
    }
}




var userOne = new User("haya@gmail.com","hayabusa");
var userTwo = new User("gus@gmail.com","Gusion");
var admin = new Admin("konark@gmail.com","konark")


//array of users
var users = [userOne,userTwo,admin]

//Create an admin 

admin.deleteUser(userOne)
console.log(users)

//Method chaining
const one = userOne.login().updateScore().logout()
console.log(one)

//the 'new' keyword 
// - creates a new empty object {}
//   - sets the value of 'this' to be the new empty object
//     - calls the constructor method