require('chromedriver');
require('geckodriver');
require('iedriver');


let getInstanceOfWebdriver = require("./SingletonForWebdriver.js")

async function openBBC(webdriverName)
{   
    let webdriver = getInstanceOfWebdriver(webdriverName)
    try
    {
        await webdriver.get('https://www.bbc.com/')   
    }
    finally
    {
        webdriver.quit()
    }
}

(async function()
{
    await openBBC('chrome');
    await openBBC('firefox');
    await openBBC('ie');
})();

