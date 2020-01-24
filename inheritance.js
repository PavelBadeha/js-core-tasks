"use strict"

var a  = 
{
    name:"A",
    message:"I'm A"
}

var b =
{
    message:"I'm B",
    __proto__: a
}
//console.log(a.name + " " + a.message) // A I'm A
//console.log(b.name + " " + b.message) // B I'm A

function Rabbit() {}
Rabbit.prototype = 
{
  eats: true
}
let rabbit = new Rabbit()

// Rabbit.prototype = {}
// console.log( rabbit.eats )  //true

// Rabbit.prototype.eats = false
// console.log( rabbit.eats )  //false

// delete rabbit.eats
// console.log( rabbit.eats ) //true

// delete Rabbit.prototype.eats 
// console.log( rabbit.eats) //undefined

function Fox(name)
{
    this.name = name
    this.isFox = true
}
let fox1 = new Fox("John")
let fox2 = new fox1.constructor("Ann")
console.log(fox2.name + "Is a fox? " + fox2.isFox) //Ann true

function Dog(name)
{
    this.name = name
    this.isFox = false
}
Dog.prototype = {constructor :Fox}

let dog1 = new Dog("Emile")
console.log(dog1.name + " Is a fox? " + dog1.isFox) //Emile false
let dog2 =  new dog1.constructor("Alice")
console.log(dog2.name + " Is a fox? " + dog2.isFox) //Alice true
