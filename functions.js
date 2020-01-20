function addition(a,b)
{
    return a + b;
} 
console.log(addition(1,2))

function determiningMyName(name) 
{
    const myName = "Pasha";
    if(name === myName)
    {
        console.log("Hello Pasha")
    }
    else
    {
        console.log("Is not my name!")
    }   
}

determiningMyName("Pasha")

function calculatingTheType(arg)
{
    console.log(typeof(arg))
}

calculatingTheType("1")

function selectingEvenElements(arr) 
{
    const result = []
    for(let element of arr)
    {
        if(element % 2 == 0)
        {
            result.push(element)
        }
    } 
    return result;   
}

console.log(selectingEvenElements([2,3,4,5,1,45,6]))

function reverseTheNumber(arg) 
{
    const reverseArg = String(arg)
    return reverseArg.split("").reverse().join("");  
}

console.log(reverseTheNumber(12434))

function checkForPalindrome(word) 
{
    const length = String(word).length
    word = String(word).toLowerCase().replace(/[^a-zA-Z0-9]+/g,'').trim()

    if(length%2 == 0 && word != "")
    {
        for(let i = 0; i < length; i++)
        {
            if(word[i] != word[length - (i + 1) ])
            {
                return false;
            }
        }
    }
    return true;    
}

console.log(checkForPalindrome("nurses run"))