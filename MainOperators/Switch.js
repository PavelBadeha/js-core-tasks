let browser = 'Co'

if(browser === 'Edge')
{
    console.log('You have got the Edge!')
}
else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera')
{
    console.log('Okay we support these browsers too')
}
else 
{
    console.log('We hope that this page look ok!')
}

const number = +promt('Input a number between 0 and 3 ')
switch(number)
{
    case 0:
        alert('You entered number 0')
        break;

    case 1:
        alert('You entered number 1')
        break;
        
    case 2:
    case 3:
        alert('You entered number 2 or 3')
        break;
}