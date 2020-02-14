const PageObject = require('./PageObject.js');

class YandexMoreButtonPage extends PageObject
{
    elementsUnderMoreButton;

    async getElementsUnderMoreButton()
    {
        this.elementsUnderMoreButton = await this.getElements(by.xpath("//div[@class = 'home-tabs__more-item']/a"));
        let result = [];
        for(let element of this.elementsUnderMoreButton)
        {
            result.push(await element.getText());
        }
        return result;
    }
}

module.exports = YandexMoreButtonPage;