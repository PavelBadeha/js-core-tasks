const PageObject = require("./PageObject.js");
const YandexSearchPage = require("./YandexSearchPage.js");

class YandexLocationPage extends PageObject
{
    input;
    async setLocation(city)
    {
        this.input = await this.getElement(by.css(".input__control.input__input"));
        await this.input.clear();
        await this.input.sendKeys(city);
    }

    async backToSearchPage()
    {
        this.input = await this.getElement(by.css(".input__control.input__input"));
        await this.input.sendKeys(protractor.Key.ENTER);
    }
}

module.exports = YandexLocationPage;