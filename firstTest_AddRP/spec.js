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

       // yandexLocationPage  = await yandexSearchPage.navigateToLocationPage();
        await yandexSearchPage.navigateToSettings();
        
        // await browser.getAllWindowHandles().then(async function (handles) {
        //     await browser.switchTo().window(handles[1]);
        //     });
        // await browser.wait(await browser.isElementPresent(by.id("form__a11y")))
        // .then(async () => await browser.switchTo().frame(element(by.id("form__a11y")).getWebElement()));

        // await yandexLocationPage.setLocation("Лондон");
        // await yandexLocationPage.backToSearchPage();
        // let yandexMoreButtonPage = await yandexSearchPage.navigateToYandexMoreButtonPage()
        // const londonMoreItems = await yandexMoreButtonPage.elementsUnderMoreButton.getText();

        // let yandexLocationPage = await yandexSearchPage.navigateToLocationPage();
        // await yandexLocationPage.setLocation("Paris");
        // await yandexLocationPage.backToSearchPage();

        // yandexMoreButtonPage = await yandexSearchPage.navigateToYandexMoreButtonPage()
        // const parisMoreItems = await yandexMoreButtonPage.elementsUnderMoreButton.getText();

        // expect(londonMoreItems).toEqual(parisMoreItems);
        browser.sleep(4000);
    })
})