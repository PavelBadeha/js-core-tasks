
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4

let styles = ["Джаз","Блюз"]
styles.push("Рок-н-ролл")

styles[Math.floor(styles.length-1)/2] = "Классика"
alert(styles.shift())
alert(styles.unshift("Рэп","Рэгги"))

let arr = ["a", "b"];

arr.push(function() 
{
  alert( this );
})

arr[2](); // returns arr.toString()

function sumInput() 
{
    let sum = 0;
    let arr = [];

   while(true)
   {
       let value = prompt("Input a number")
       if(value)   
       {
            arr.push(+value) 
       }
       else
       {
           break;
       }        
   } 
   for(var val of arr )
   {
       sum += val;
   }
    alert(sum);
}
arr = [2, -8, 5, -1, 2, -3,2]

function getMaxSubSum(arr) 
{
    let tempSum = 0;
    let maxSum = 0;
    for(var value of arr)
    {
         tempSum += value;
         maxSum = Math.max(maxSum,tempSum)
         if(tempSum < 0 )
         {
             tempSum = 0;
         }
    }
    return maxSum;
}

console.log(getMaxSubSum(arr));