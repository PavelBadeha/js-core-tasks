import {YandexSearchPage} from "./PageObjects/YandexSearchPage.js";

describe("Test",function()
{
    browser.ignoreSynchronization = true;
    browser.get("https://yandex.by/");

    const yandexSearchPage = new YandexSearchPage(browser);

    it("My first test",async function()
    {
        let yandexLocationPage = await yandexSearchPage.navigateToLocationPage();
        await yandexLocationPage.setLocation("Лондон");
        await yandexLocationPage.backToSearchPage();
    
        let yandexMoreButtonPage = await yandexSearchPage.navigateToYandexMoreButtonPage()
        const londonMoreItems = await yandexMoreButtonPage.elementsUnderMoreButton.getText();

        yandexLocationPage = await yandexSearchPage.navigateToLocationPage();
        await yandexLocationPage.setLocation("Париж");
        await yandexLocationPage.backToSearchPage();

        yandexMoreButtonPage = await yandexSearchPage.navigateToYandexMoreButtonPage()
        const parisMoreItems = await yandexMoreButtonPage.elementsUnderMoreButton.getText();

        expect(londonMoreItems).toEqual(parisMoreItems);
    })
   

})