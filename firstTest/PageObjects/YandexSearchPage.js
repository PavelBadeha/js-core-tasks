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
        this.settingButton = element.all(by.css("span.link__inner")).first();
        this.changeLocation = element(by.xpath("//a[@aria-label = 'Изменить город']"));
    }

    async search(message)
    {
        await isDisplayedWait(this.input,500,4000);
        await this.input.sendKeys(message).submit();
    }
    async navigateToLocationPage()
    {
        await isDisplayedWait(this.settingButton,500,4000);
        await this.settingButton.click();
        await isDisplayedWait(this.changeLocation,500,4000);
        await this.changeLocation.click();
        return new YandexLocationPage();
    }
    async navigateToYandexMoreButtonPage()
    {
        await isDisplayedWait(this.moreButton,500,4000);
        await this.moreButton.click();
        return new YandexMoreButtonPage();
    }
}