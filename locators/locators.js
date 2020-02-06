require('chromedriver');

const {Builder, By, Key, until} = require('selenium-webdriver');
let driver

async function navigateToBBCWebsite()
{
    let promise = new Promise((resolve,reject) =>
    {
        setTimeout(async function()
        {
            await driver.get("https://www.bbc.com/")
            resolve("BBC")
        },3000)
    })

    await promise
}

(async function findElements()
{
    try
    {
        driver = await new Builder().forBrowser('chrome').build()
        await driver.manage().window().maximize()
        await driver.get("https://www.bbc.com/")
        
        await driver.findElement(By.css("input#orb-search-q")).sendKeys("found by css")
        await navigateToBBCWebsite()
        await driver.findElement(By.xpath("//input[@id='orb-search-q']")).sendKeys("found by xpath")
        await navigateToBBCWebsite()

        await driver.findElement(By.css("a.block-link__overlay-link")).click()
        await navigateToBBCWebsite()
        await driver.findElement(By.xpath("//a[@class = 'block-link__overlay-link']")).click()
        await navigateToBBCWebsite()

        await driver.findElement(By.css("li.orb-nav-sport")).click()
        await navigateToBBCWebsite()
        await driver.findElement(By.xpath("//li[@class = 'orb-nav-sport']")).click()
        await navigateToBBCWebsite()

        await driver.findElement(By.css("section.module.module--news.module--collapse-images > div > ul > li:nth-child(2) > div > a")).click()
        await navigateToBBCWebsite()
        await driver.findElement(By.xpath("//li[@class='media-list__item media-list__item--2']/div/a[@rev='news|overlay']")).click()
        await navigateToBBCWebsite()

       let barElementsByXpath=  await driver.findElements(By.xpath("//div[@class='orb-nav-section orb-nav-links orb-nav-focus']/ul/li[position() mod 2 = 0 and not(contains(@class,'hide'))]"))
       console.log("Found the bar items by xpath")
       for(let element of barElementsByXpath)
       {
            console.log(await (await element.findElement(By.css("a"))).getText()) 
       }

       console.log("\nFound the bar items by css")
       let barElementsByCss =  await driver.findElements(By.css("div.orb-nav-section.orb-nav-links.orb-nav-focus > ul > li:nth-child(2n):not([class *=hide])"))
       for(let element of barElementsByCss)
       {
            console.log((await (await element.findElement(By.css("a"))).getText()))   
       }
    }
    finally
    {   
        driver.close()
    }
})()