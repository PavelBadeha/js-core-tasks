require('chromedriver');
require('geckodriver');
require('iedriver');


let getInstanceOfWebdriver = require("./SingletonForWebdriver.js")

async function openBBC(webdriverName)
{   
    let webdriver = getInstanceOfWebdriver(webdriverName)
    try
    {
        await webdriver.get('http://www.ox.ac.uk/')   
    }
    finally
    {
        webdriver.quit()
    }
}

(async function()
{
    openBBC('chrome');
    openBBC('firefox');
    openBBC('ie');
})();

