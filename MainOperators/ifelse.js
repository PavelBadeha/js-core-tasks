//'0' is true so alert will execute
if("0")
{
    alert('Hello!')
}

var name = prompt("Какое «официальное» название JavaScript?")

    if(name == 'ECMAScript')
    {
        alert("True!")
    }
    else 
    {
        alert("U don't know ECMAScript?")
    }

let value = prompt("Give me a number")

    if(value > 0)
    {
        alert(1)
    }
    else if (value < 0) 
    {
        alert(-1)
    }
    else if (value == 0) 
    {
        alert(0)
    }

    let result;

    result = ( a + b < 4) ? 'Few':'Many'

    let message;

    message = (login == 'Employee') ? 'Hello!':
                (login == "Head") ? 'Good afternoon!':
                (login == '') ? 'Empty login!': ''

    