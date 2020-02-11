
//Async function that usign setTimeout
{
    function asynFunc(phrase)
    {
      setTimeout(() => console.log(phrase),4000)
    }
   //asynFunc("Hello World!")
}

//Function with callback
{
  function funcWithCallback(phrase,callback)
  { 
    setTimeout(() => {console.log(phrase),callback()},1000)
  }
}

//Promise based 1st point function
{
    new Promise((resolve,reject) => 
    {
       funcWithCallback("Hello!",() => resolve())

    }).then(() => console.log("Bye!"))
}

//An async/await function based on 1st point function
{
  async function asyncAwaitFunction(phrase) {

    let promise = new Promise((resolve, reject) => 
    {
      setTimeout(() => resolve(phrase), 1000)
    });

    let result = await promise  
    console.log(result) 
  }
  asyncAwaitFunction("Async/Await function done");
}


{
  function delay(ms)
  {
    return new Promise(resolve => 
    {
      setTimeout(resolve,ms)
    })
  }
  delay(1000).then(() => console.log("Hello!"))
}

{
  let urls = ['user.json','guest.json'];  
  let chain = Promise.resolve()
  let results = []
  for(let url of urls)
  {
    chain = chain.then(() => "Checked " + url)
                  .then(result => results.push(result))
  }
  chain.then(() => console.log(results))
}