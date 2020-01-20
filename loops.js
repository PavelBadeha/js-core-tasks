// let i = 3;

// while (i) 
// {
//   alert( i-- );     //The last value is 1
// }

// let i = 0;
// while (++i < 5) alert( i );     // 1,2,3,4

// let i = 0;
// while (i++ < 5) alert( i );     // 1,2,3,4,5

// for (let i = 0; i < 5; i++) alert( i );     // 0 - 4
// for (let i = 0; i < 5; ++i) alert( i );     // 0 - 4

// for(let i = 2; i < 11; i += 2 )
// {
//     alert(i);
// }

// // Change loop below use while instead for
// /*
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// */
// let i = 0; 
// while(i<3)
// {
//     alert('number ${i}!')
//     i++
// }

// // Repeat the loop untile the input is incorrect 

// while(true)
// {
//     if(+prompt("Input a number greater than 100!") >= 100)
//     {
//         break;
//     }
// }

let n  = 20;

External:
for(let i = 2; i < n; i++)
{
    for(let j = 2; j < i;j++)
    {
        if(i%j == 0) 
        {
            continue External;
        }
    }
    console.log(i);
}

