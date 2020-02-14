let YandexSearchPage = require("./PageObjects/YandexSearchPage.js");
let YandexLocationPage = require('./PageObjects/YandexLocationPage.js');
let YandexMoreButtonPage = require('./PageObjects/YandexMoreButtonPage.js');

describe("Test",function()
{
    browser.ignoreSynchronization = true;
    browser.get("https://yandex.by/");

    YandexSearchPage = new YandexSearchPage(browser);

    it("Test for change location",async function()
    {
        YandexLocationPage = await YandexSearchPage.navigateToLocationPage();
        await YandexLocationPage.setLocation("Лондон");
        await YandexLocationPage.backToSearchPage();

        YandexMoreButtonPage = await YandexSearchPage.navigateToYandexMoreButtonPage()
        let londonMoreItems = await YandexMoreButtonPage.getElementsUnderMoreButton();

        YandexLocationPage = await YandexSearchPage.navigateToLocationPage();
        await YandexLocationPage.setLocation("Париж");
        await YandexLocationPage.backToSearchPage();

        YandexMoreButtonPage = await YandexSearchPage.navigateToYandexMoreButtonPage()
        let parisMoreItems = await YandexMoreButtonPage.getElementsUnderMoreButton();
        
        expect(londonMoreItems).toEqual(parisMoreItems);
    })
   

})