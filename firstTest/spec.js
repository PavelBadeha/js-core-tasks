import {YandexSearchPage} from "./PageObjects/YandexSearchPage.js";
import {YandexLocationPage} from './PageObjects/YandexLocationPage.js';

describe("Test",function()
{   
    //https://yandex.by/tune/geo/?retpath=https%3A%2F%2Fyandex.by%2F%3Fdomredir%3D1&nosync=1
    browser.ignoreSynchronization = true;
    browser.get("https://yandex.by/");

    const yandexSearchPage = new YandexSearchPage();
    let yandexLocationPage =  new YandexLocationPage();
    it("My first test",async function()
    {
        yandexLocationPage = await yandexSearchPage.navigateToLocationPage();

        await yandexLocationPage.setLocation("Лондон");
        await yandexLocationPage.backToSearchPage();
        let yandexMoreButtonPage = await yandexSearchPage.navigateToYandexMoreButtonPage()
        const londonMoreItems = await yandexMoreButtonPage.elementsUnderMoreButton.getText();

        yandexLocationPage = await yandexSearchPage.navigateToLocationPage();
        await yandexLocationPage.setLocation("Paris");
        await yandexLocationPage.backToSearchPage();

        yandexMoreButtonPage = await yandexSearchPage.navigateToYandexMoreButtonPage()
        const parisMoreItems = await yandexMoreButtonPage.elementsUnderMoreButton.getText();

        expect(londonMoreItems).toEqual(parisMoreItems);
        browser.sleep(4000);
    })
})