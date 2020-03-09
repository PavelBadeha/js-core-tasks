import {isDisplayedWait} from "../IsDisplayedWait.js";

export class YandexLocationPage
{
    constructor()
    {
        this.input = element(by.css(".input__control.input__input"));
    }

    async setLocation(city)
    {
        await isDisplayedWait(this.input,500,4000);
        await this.input.clear();
        await this.input.sendKeys(city);
    }

    async backToSearchPage()
    {
        await isDisplayedWait(this.input,500,4000);
        await this.input.sendKeys(protractor.Key.ENTER);
    }
}
