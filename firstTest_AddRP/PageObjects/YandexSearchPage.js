import {YandexLocationPage}  from './YandexLocationPage.js';
import {YandexMoreButtonPage} from './YandexMoreButtonPage.js';
import {isDisplayedWait} from '../IsDisplayedWait.js';

export class YandexSearchPage
{
    constructor()
    {
        this.input = element(by.css(".input__control.input__input"));
        this.locationButton = element(by.css(".geolink__reg"));
        this.moreButton = element(by.xpath("//*[contains(@class, 'home-tabs__more-switcher')]"));
    }

    async search(message)
    {
        await isDisplayedWait(this.input,500,4000);
        await this.input.sendKeys(message).submit();
    }

    async navigateToLocationPage()
    { 
        await isDisplayedWait(this.locationButton,500,4000);
        await this.locationButton.click();
        return new YandexLocationPage();
    }

    async navigateToYandexMoreButtonPage()
    {
        await isDisplayedWait(this.moreButton,500,4000);
        await this.moreButton.click();
        return new YandexMoreButtonPage();
    }
}