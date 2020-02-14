const PageObject = require("./PageObject.js");
const YandexLocationPage = require('./YandexLocationPage.js');
const YandexMoreButtonPage = require('./YandexMoreButtonPage.js');

class YandexSearchPage extends PageObject
{
    input;
    locationButton;
    moreButton;

    async search(message)
    {
        this.input = await this.getElement(by.css(".input__control.input__input"));
        await this.input.sendKeys(message).submit();
    }

    async navigateToLocationPage()
    {
        this.locationButton = await this.getElement(by.css(".geolink__reg"));
        await this.locationButton.click();

        return new YandexLocationPage(this.driver);
    }

    async navigateToYandexMoreButtonPage()
    {
        this.moreButton = await this.getElement(by.xpath("//*[contains(@class, 'home-tabs__more-switcher')]"));
        await this.moreButton.click();
        return new YandexMoreButtonPage(this.driver);
    }
}

module.exports = YandexSearchPage;