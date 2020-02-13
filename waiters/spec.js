let isDisplayedWait = require('./isDisplayedWait.js');
let isPresetnWait = require('./isPresentWait.js')

describe("test costum waiter",function()
{
    browser.ignoreSynchronization = true;
    browser.get("https://www.google.ru/");
    
    let date;
    beforeEach(function() 
    {
        date = new Date();
    });

    let displayedElement = element(by.id('hplogo'))
    let notDisplayedButPresentedElement = element(by.css(".csi"))
    let notPresentedElement = element(by.id('Hello!'))

    it("Find logo",async function()
    {
        await isDisplayedWait(displayedElement,1000,8000);      
        expect(Math.floor(new Date() - date)).toBeLessThanOrEqual(1500)
    })

    it("Wait for not displayed element",async function()
    {
        await isDisplayedWait(notDisplayedButPresentedElement,500,3000).catch((err) => console.log(err))    
        expect(Math.floor(new Date() - date)).toBeLessThanOrEqual(3500)
    })

    it("Search for not displayed element bu presented",async function()
    {
        await isPresetnWait(notDisplayedButPresentedElement,500,3000)
        expect(Math.floor(new Date - date)).toBeLessThanOrEqual(600)
    })

    it("Wait for not presented element",async function()
    {
        await isPresetnWait(notPresentedElement,500,2000).catch((err)=> console.log(err))
        expect(Math.floor(new Date() - date)).toBeLessThanOrEqual(2200)
    })
})