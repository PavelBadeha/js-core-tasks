import {YandexSearchPage} from "./PageObjects/YandexSearchPage.js";
import {YandexLocationPage} from './PageObjects/YandexLocationPage.js';
import {YandexMoreButtonPage} from './PageObjects/YandexMoreButtonPage.js';
describe("Test",function()
{   
    console.log("BOOOM!!");
    browser.ignoreSynchronization = true;
    browser.get("https://yandex.by/");

    const yandexSearchPage = new YandexSearchPage();
    let yandexLocationPage =  new YandexLocationPage();
    let yandexMoreButtonPage = new YandexMoreButtonPage();
    it("My first test",async function()
    {
        await yandexSearchPage.navigateToLocationPage();

        await yandexLocationPage.setLocation("Лондон");
        await yandexLocationPage.backToSearchPage();

        await yandexSearchPage.navigateToYandexMoreButtonPage()
        const londonMoreItems = await yandexMoreButtonPage.elementsUnderMoreButton.getText();

        await yandexSearchPage.navigateToLocationPage();
        await yandexLocationPage.setLocation("Париж");
        await yandexLocationPage.backToSearchPage();

        yandexMoreButtonPage = await yandexSearchPage.navigateToYandexMoreButtonPage()
        const parisMoreItems = await yandexMoreButtonPage.elementsUnderMoreButton.getText();

        expect(londonMoreItems).toEqual(parisMoreItems);
    })
})