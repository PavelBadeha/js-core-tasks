const isDisplayedWait = require('../IsDisplayedWait.js');

class PageObject
{
    constructor(driver)
    {
        this.driver = driver;
    }
    
    async getElement(locator)
    {
        await isDisplayedWait(element(locator),500,5000);
        return await element(locator);
    }

    async getElements(locator)
    {
        await isDisplayedWait(element.all(locator).first(),500,5000);
        return await element.all(locator);
    }
}

module.exports = PageObject;