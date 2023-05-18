//Creating an object to store all info about user

const userOne = {
    email: "lesley@gmail.com",
    name: "Lesley",
    friends:["hayabusa","gusion"],
    login(){
      console.log(this.email," has logged in")
    },
    logout(){
      console.log(this.email," has logged out")

    }
}

console.log(userOne.login());
console.log(userOne.logout());