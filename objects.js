//Hi object
let user  = {}
user.name = 'John'
user.sername = 'Smith'
user.name  = 'Pete'
delete user.sername

//Check for empty
function isEmpty(obj)
{
    for(let prop in obj)
    {
        return false
    }
    return true
}

let schedule  = {}
console.log(isEmpty(schedule))

schedule["8:30"] =  "get up"
console.log(isEmpty(schedule))

//Const object?
const user1 = 
{
    name:'John'
}

// Will this work?
user1.name = 'Pete' // Yeah

//Sum of all prop
function sumOfAllProp(obj)
{
    let sum = 0
    for(let prop in obj)
    {
        sum += obj[prop]
    }
    return sum
}

let salaries = 
{
    John: 100,
    Ann: 160,
    Pete: 130
}

console.log(sumOfAllProp(salaries))

//Multiplcate all numeric prop
function multipyNumeric(obj)
{
    for(let prop in obj)
    {
        if(typeof obj[prop] == 'number')
        {
            obj[prop] *= 2
        }
    }
}

let menu =
{
    width: 200,
    height: 300,
    title: "My menu"
}

multipyNumeric(menu)
for(let prop in menu)
{
    console.log(prop + " " + menu[prop])
}


