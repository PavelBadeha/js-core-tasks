require('chromedriver');
require('geckodriver');
require('iedriver');

const {Builder} = require('selenium-webdriver');

async function openBBC(webdriverName)
{
    let webdriver = require("./SingletonForWebdriver.js")
    webdriver = await new Builder().forBrowser(webdriverName).build()
    await webdriver.get('https://www.bbc.com')
}

openBBC("chrome")
openBBC("firefox")
openBBC("ie")