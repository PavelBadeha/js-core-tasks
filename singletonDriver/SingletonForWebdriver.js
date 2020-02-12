const {Builder} = require('selenium-webdriver');


function getInstanceOfWebdriver(webdriverName) 
{
    let instance;

    return (function constructorOfSingletone()
    {
        if (instance) 
        {
            return instance;
        }
        else 
        {
            instance = new Builder().forBrowser(webdriverName).build();
            return instance;
        }
    })();
}

module.exports = getInstanceOfWebdriver
