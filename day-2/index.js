//We can access using dot and bracket notation

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

var prop = "name"
console.log(userOne[prop])


