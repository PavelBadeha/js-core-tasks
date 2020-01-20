var undef; 
var zero = 0;
var emptyStr = "";
var msg = "Hello!";

var result = undef || zero || emptyStr || msg || 0;

// || search for true 
// && search for false 

console.log( result );          //Hello!
console.log(false || 0 && 1)    //0 
console.log(false && 0 || 1)    //1
console.log(!!"string")         //true (double ! cast to boolean)

// We can use && instead if but it's bad practice
var x = 10;
(x == 10) && console.log("X = 10")  //Equal to if(x == 10) { console.log("X=10") };
