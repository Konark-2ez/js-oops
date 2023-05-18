//JS as a language doesnot really has classes
//classes is a new feature in ES6

// using prototype
//prototype 
//every object type has a prototype
//for example a user has a prototype
//__proto__ points to the prototype

 
function User(email,name) {
    this.email = email
    this.name = name

    this.online = false;
  
}
User.prototype.login = function(){
    this.online =true;
    console.log(this.email,"has logged in and is online") 
}
User.prototype.logout = function(){
    
    console.log(this.email,"has logged out and is offline") 
}


var userOne = new User("konark@gmail.com","Konark")
var userTwo = new User("test@gmail.com","test")
console.log(userOne)
userOne.login()
userTwo.login()