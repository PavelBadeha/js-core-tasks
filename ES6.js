// Template literals
{

    const first = 'Adrian';
    const last = 'Mejia';
    console.log(`Your name is ${first} ${last}.`)
}

// Destructuring Assignment
{
    const array = [1, 2, 3, 4];

    const [first, ,third] = array;

    console.log(first, third); // 1 3
}

{
    let a = 1;
    let b = 2;

    [a, b] = [b, a];

    console.log(a, b); // 2 1
}

{
    function margin() 
    {
        const left=1, right=2, top=3, bottom=4;
        return { left, right, top, bottom };
    }
    
    const { left, bottom } = margin();
    console.log(left, bottom); // 1 4
}

{
    const user = {firstName: 'Adrian', lastName: 'Mejia'};

    function getFullName({ firstName, lastName }) 
    {
    return `${firstName} ${lastName}`;
    }

    console.log(getFullName(user)); // Adrian Mejia
}

//object destructing
{
    function settings() 
    {
        return { display: { color: 'red' }, keyboard: { layout: 'querty'} };
    }
      
    const { display: { color: displayColor }, keyboard: { layout: keyboardLayout }} = settings();
      
    console.log(displayColor, keyboardLayout); // red querty
}

//Classes
{
    class Animal 
    {
        constructor(name) 
        {
            this.name = name;
        }
        speak() 
        {
            console.log(this.name + ' makes a noise.');
        }
    }

    const animal = new Animal('animal');
    animal.speak(); // animal makes a noise

    class Lion extends Animal 
    {
        speak() 
        {
          super.speak();
          console.log(this.name + ' roars ');
        }
    }
      
    const lion = new Lion('Simba');
    lion.speak(); // Simba makes a noise.
    // Simba roars
}

{
    function point(x = 0, y = -1, isFlag = true)
    {
        console.log(x,y, isFlag);
    }

    point(0,0) // 0 0 true
    point(0, 0, false) // 0 0 false
    point(1) // 1 -1 true
    point() // 0 -1 true
}

{
    const array1 = [2,100,1,6,43];
    const array2 = ['a', 'b', 'c', 'd'];
    const array3 = [false, true, null, undefined];

    console.log([...array1, ...array2, ...array3]);
}