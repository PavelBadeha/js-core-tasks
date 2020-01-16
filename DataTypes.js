//Addition of various types
console.log(true + "pasha") //truepasha
console.log("D" + "ota")    //Dota
console.log("string" + 1)   //string1
console.log(2  + "string")  //2string 
console.log(3 + true)   //4

//Multiplication of various types
console.log(false * "string")   //NaN
console.log("string1" * "string2")  //NaN
console.log("string" * 1)   //NaN
console.log(2 * "string")   //NaN
console.log(3*false)    //0

//Division of various types
console.log(false/"string") //NaN
console.log("string1"/"string2")    //NaN
console.log("string"/1) //NaN
console.log(2/"string") //NaN
console.log(3/true) //3

//Subtraction of various types
console.log(true - "string")    //NaN
console.log("string1" - "string2")  //NaN
console.log("string1" - 1)  //NaN
console.log(2 - "string")   //NaN
console.log(3 - false) //3

//Explicit conversion
console.log(Boolean("string")) //true
console.log(Boolean(""))    //false
console.log(String(1))  //1
console.log(Number("123"))  //123
console.log(Number("pasha"))    //NaN
console.log(Number(true))   //1
console.log(Number(false))  //0