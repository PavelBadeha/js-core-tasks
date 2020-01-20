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
    
    word = String(word).toLowerCase().replace(/[^a-zA-Z0-9]+/g,'')
    const length = String(word).length
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

console.log(checkForPalindrome("Madam"))

function generateAllCombinationOfAString(str)
{
    const result = []
    let temp =''

    for(let i = 0;i < str.length;i++)
    {
        for(let j = i; j < str.length; j++)
        {
            temp += str[j];
            result.push(temp) 
        }
        temp='';
    }
    return result;
}
console.log(generateAllCombinationOfAString("dog"))

function alphabetOrder(word)
{
    return word.split("").sort().join("");
}

console.log(alphabetOrder("webmaster"))

function convertToUpperTheFirstLetterOfEachWord(word)
{
    word = word.split(" ")
    let result = []
    for(let value of word)
    {
        result.push(value.charAt(0).toUpperCase() + value.slice(1))
    }
    return result.join(" ")
}
console.log(convertToUpperTheFirstLetterOfEachWord("the quick brown fox"))

function findTheLongestWordWithinTheString(str)
{
    str = str.split(" ")
    let max = 0 
    let  index = 0
    for(let i = 0; i < str.length; i++)
    {
        if(str[i].length > max)
        {
            max = str[i].length
            index = i;
        }
    }
    return str[index];
}

console.log(findTheLongestWordWithinTheString('Web Development Tutorial'))

function countTheNumberOfVowelsWithinTheString(str)
{
    const vowels = "aeuioAEUIO"
    let counter = 0
    for(let i = 0; i < str.length; i++)
    {
        if(vowels.indexOf(str[i]) !== -1)
        {
            counter++
        }
    }
    return counter;
}

console.log(countTheNumberOfVowelsWithinTheString('The quick brown fox'))

function checkTheNumberForPrime(number)
{
    if(number < 2)
    {
        return false
    }
    for(let i = 2; i < number; i++)
    {
        if(number%i == 0)
        {
            return false
        }
    }
    return true
}

console.log("Prime",checkTheNumberForPrime(13))

function getType(arg)
{
    return typeof(arg);
}

function identityMatrix(n)
{
    let row = ''
    for(let i = 0;i < n;i++)
    {
        for(let j = 0; j < n;j++)
        {
            if(i === j)
            {
                row +='1'
            }
            else
            {
                row +='0'
            }
        }
        console.log(row)
        row = ''
    }
}
identityMatrix(5)