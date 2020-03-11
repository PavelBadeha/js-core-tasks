export async function isDisplayedWait(element,waitingInterval,timeout)
{
    await new Promise((resolve,reject)=>
    {
        let timeId = setInterval(async function()
        {
            try
            {
                if(await element.isDisplayed())
                {
                    resolve();
                    clearInterval(this)
                }
            }
            catch(err){reject(new Error(`Element aren't displayed`))}
        }, waitingInterval)

        setTimeout(() => 
        {
            clearInterval(timeId);
            reject(new Error(`Element aren't displayed`))
        }
        ,timeout)
    })
}