class DivisionByZero extends Error
{
    constructor(message)
    {
        super(message)
        this.message = message
        this.name = "DivisionByZero"
    }
}

function division(a,b)
{
    if(b == 0)
    {
        throw new DivisionByZero("zero can not be divided")
    }
    else
    {       
        return a/b
    }
}

try
{
    let a = division(1,0)
}
catch(err)
{
    console.log(err)
}