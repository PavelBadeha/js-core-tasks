// "use strict" 

// function makeCounter()
// {
//     let counter = 0
//     return function()
//     {
//         return counter++
//     }
// }
// let count1 = makeCounter()
// let count2 = makeCounter()

// console.log(count1())    // 0
// console.log(count1())    // 1 

// console.log(count2())   // 0
// console.log(count2())   // 1

// function Counter()
// {
//     let counter = 0  
//     this.up = function()
//     {
//             return ++counter
//     }
//     this.down = function()
//     {
//         return --counter
//     }
// }
// let counter =  new Counter()

// console.log(counter.up())   // 1
// console.log(counter.up())   // 2
// console.log(counter.down()) // 1

// let phrase = "Hello"

// if(true)
// {
//     var user = "John"
//     function sayHi()
//     {
//         console.log(phrase + ',' + user)
//     }
// }
// // sayHi() // Error    

// function sum(a)
// {
//     return function(b)
//     {
//         return a + b 
//     }
// }
// console.log(sum(1)(2))  // 3
// console.log(sum(3)(10)) // 13

// function inBetween(a,b)
// {
//     return function(value)
//     {
//         return value >= a && value <= b      
//     }
// }

// function inArray(arr)
// {
//     return function(value)
//     {
//         return arr.includes(value)
//     }
// }
// let arr = [1,2,3,4,5,6,7]

// console.log(arr.filter(inBetween(3,6)))
// console.log(arr.filter(inArray([1,2,10])))

// function byField(fieldName)
// {
//     return (a,b) => a[fieldName] > b[fieldName] ? 1:-1
// }

// let users = 
// [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ]

// users.sort(byField('name'))
// users.sort(byField('age'))
// for(let item of users)
// {
//     console.log(item)   
// }

// function makeArmy(quantity)
// {
//     let shooters = []
//     for(let i = 0;i < quantity; i++)
//     {
//         let shooter = function()
//         {
//             console.log(i)
//         }
//         shooters.push(shooter)
//     }
//     return shooters
// }
// let army = makeArmy(10)
// army[1]()
// army[9]()

function test() { 
    //foo(); // TypeError "foo is not a function" 
    bar(); // "this will run!" 
    var foo = function () { // функциональное выражение, присвоенное локальной переменной 'foo' 
        console.log("this won't run!"); 
    } 
    function bar() { // объявление функции с именем 'bar' 
        console.log("this will run!"); 
    } 
} 
test()