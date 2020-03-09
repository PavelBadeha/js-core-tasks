const EC = protractor.ExpectedConditions;
export function waitElementIsClickable(elem,sec){
    browser.wait(EC.elementToBeClickable(elem), sec * 1000, "Element should be clickable, but it's not.");
}
