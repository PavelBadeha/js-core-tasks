export class YandexMoreButtonPage
{
    constructor()
    {
        this.elementsUnderMoreButton = element.all(by.xpath("//div[@class = 'home-tabs__more-item']/a"));
    }
}