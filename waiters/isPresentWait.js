async function isPresentWait(element,waitingInterval,timeout)
{
    await new Promise((resolve,reject)=>
    {
        let timeId = setInterval(async function()
        {
            try
            {
                if(await element.isPresent())
                {
                    resolve();
                    clearInterval(this)
                }
            }
            catch(err){}
        },waitingInterval)

        setTimeout(() => 
        {
            clearInterval(timeId);
            reject(new Error("Element aren't presented"))
        }
        ,timeout)
    })
}
module.exports = isPresentWait