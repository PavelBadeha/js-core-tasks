function addition(a,b)
{
    return a + b;
} 
// console.log(addition(1,2))

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

// determiningMyName("Pasha")

function calculatingTheType(arg)
{
    console.log(typeof(arg))
}

// calculatingTheType("1")

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

// console.log(selectingEvenElements([2,3,4,5,1,45,6]))

function reverseTheNumber(arg) 
{
    const reverseArg = String(arg)
    return reverseArg.split("").reverse().join("");  
}

// console.log(reverseTheNumber(12434))

function isPalindrome(word) 
{   
    word = word.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'')

    if(word != "")
    {
        for(let i = 0; i < word.length; i++)
        {
            if(word[i] != word[word.length - (i + 1) ])
            {
                return false;
            }
        }
    }
    return true;    
}

// console.log(isForPalindrome("Madam"))

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
// console.log(generateAllCombinationOfAString("dog"))

function alphabetOrder(word)
{
    return word.split("").sort().join("");
}

// console.log(alphabetOrder("webmaster"))

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
// console.log(convertToUpperTheFirstLetterOfEachWord("the quick brown fox"))

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

// console.log(findTheLongestWordWithinTheString('Web Development Tutorial'))

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

// console.log(countTheNumberOfVowelsWithinTheString('The quick brown fox'))

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

// console.log("Prime",checkTheNumberForPrime(13))

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
// identityMatrix(5)

function getTheSecondLowestAndSecondGreatest(arr)
{
    arr = arr.sort()
    return [arr[1],arr[arr.length - 2]].join(',')
}

// const arr = [1,2,3,4,5]
// console.log(getTheSecondLowestAndSecondGreatest(arr));

function arraySum(arr) 
{
    let sum = 0;
    for(let value of arr)
    {
        sum += value
    }
    return sum
}

function isPerfectNumber(number) 
{
    const divisors = []
    for(let i = 1; i < number; i++)
    {
        if(number%i === 0)
        {
            divisors.push(i)
        }
    }
    return arraySum(divisors) === number
}

// console.log(isPerfectNumber(6))

function getFactorsOfPositiveNumber(number) 
{
    const factors = []
    for(let i = 1; i <= number; i++)
    {
        if(number % i === 0)
        {
            factors.push(i)
        }
    }
    return factors;
}
// console.log(getFactorsOfPositiveNumber(17))

function convertAmountToCoins(amount,coins) 
{
    const result = []
    let i = 0

    while(true)
    {
        if(amount - coins[i] >= 0)
        {
            amount -= coins[i]
            result.push(coins[i])
            continue
        }
        i++

        if(amount - coins[coins.length - 1] < 0)
        {
            break
        }
    }
    return result
}
// console.log(convertAmountToCoins(123,[25,10,5,2,1]))

function exp(b,n) 
{
    return b**n
}
 
// console.log(exp(2,5))

function extractUniqueCharacters(str) 
{
    let result = ''
    for(let letter of str)
    {
        if(result.indexOf(letter) == -1)
        {
            result += letter
        }
    }
    return result
}

//console.log(extractUniqueCharacters("The fox jump over lazy dog"))

function  getTheNumberOfOccurrencesOfEachLetter(str) 
{
    let result = ''
    let counter = 0
    for(let i = 0; i < str.length; i++)
    {
        if(!result.includes(str[i]))
        {
            result += str[i]+":"
            for(let j = i; j < str.length; j++)
            {
                if(str[i] === str[j])
                {
                    counter++
                }
            }
            result += counter + " "
            counter = 0
        }     
    }
    return result
}

// console.log(getTheNumberOfOccurrencesOfEachLetter('the quick brown fox jumps over the lazy dog'))

function binarySearch (arr,element) 
{
    arr.sort()
    let midPosition = Math.floor((arr.length - 1) / 2)

    if(element === arr[midPosition])
    {
        return midPosition
    }
    else if(arr.length === 1)
    {
        return null
    }
    else if(element > arr[midPosition])
    {
        arr = arr.slice(midPosition + 1)
        var position = binarySearch(arr,element) 
        if(position === null)
        {
            return null
        } 
        else
        {
            return position + midPosition + 1
        }     
    }
    else
    {
        arr = arr.slice(0,midPosition)
        return binarySearch(arr,element)
    }

}

// console.log(binarySearch([1,2,3,4,5,6,7],2))

function biggerElements(arr,value) 
{
    const result = []
    for(let element of arr)
    {
        if(element > value)
        {
            result.push(element)
        }
    }
    return result
}
// console.log(biggerElements([1,2,4,5,6,10,20],4))

function makeId(length)
{
    const values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let id = ''
    for(let i = 0; i < length; i++)
    {
        id += values.charAt(Math.floor(Math.random()*values.length))
    }
    return id
}
// console.log(makeId(5))

function getAllPossibleSubset(arr,length)
{
    const result = []
    let temp = []
    if(length >= arr.length)
    {
        return arr
    }
    for(let i = 0; i < arr.length; i++)
    {      
     
        for(let j = 0; j < arr.length; j++)
        {   
            if(i != j)
            {
                temp.push(arr[j])   
            }                             
            if(temp.length === length && !result.includes(temp))
            {      
                result.push(temp)                   
            }                   
        }
        temp = []          
    }
    
    for(let value of result)
    {
        console.log(value)
    }
    return result
}

// getAllPossibleSubset([1,2,3],2)

function countTheNumberOFOccurrencesOfLetter(str,letter)
{
    let counter = 0
    for(let value of str)
    {
        if(value === letter)
        {
            counter++
        }
    }
    return counter
}
// console.log(countTheNumberOFOccurrencesOfLetter('w3resource.com', 'o' ))

function getTheFirstNotReapetedCharacter(str)
{
    for(let letter of str)
    {
        if(countTheNumberOFOccurrencesOfLetter(str,letter) === 1)
        {
            return letter
        }
    }
}

//console.log(getTheFirstNotReapetedCharacter('abacddbec'))

function bubbleSort(arr)
{
    let temp = 0
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < arr.length; j++)
        {
            if(arr[i] < arr[j])
            {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
     
    }
    return arr
}

//console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

function getLongestCountryName(arr)
{
    let longestCountryName = ''
    for(let countryName of arr)
    {
        if(countryName.length > longestCountryName.length )
        {
            longestCountryName = countryName
        }
    }
    return longestCountryName
}

//console.log(getLongestCountryName(["Australia", "Germany", "United States of America"]))

function getLongestSubstringWithoutRepeatingCharacters(str)
{
    let longestSubstring = ''

    for(let i = 0; i < str.length; i++)
    {
        for(let j = i; j < str.length; j++)
        {
            let sub = str.substring(i,j + 1)
            if( sub == extractUniqueCharacters(sub) && sub.length >= longestSubstring.length )
            {
                longestSubstring = sub
            }
        }
    }
    return longestSubstring
}
//console.log(getLongestSubstringWithoutRepeatingCharacters("google.com"))

function getLongestPalindromeWithinString(str)
{
    let longestPalindrome = ''

    for(let i = 0; i < str.length; i++)
    {
        for(let j = i; j < str.length; j++)
        {
            let sub = str.substring(i,j + 1)
            if(isPalindrome(sub) && sub.length > longestPalindrome.length )
            {
                longestPalindrome = sub
            }
        }
    }
    return longestPalindrome
}

//console.log(getLongestPalindromeWithinString("bananas"))

function executeFunction(func)
{
    return func()
}

function getMyName()
{
    return arguments.callee.name
}

console.log(getMyName())