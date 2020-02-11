describe('Protractor Demo App',function ()
{
  let homeButton = element(by.xpath('//div[@class = "orb-nav-section orb-nav-blocks"]/a'))
  let inputSearch = element(by.id('orb-search-q'))
  let urlBBC = "https://www.bbc.com/"
  let welcomeElement = element(by.xpath('//div[@id = "page"]/section[@class = "module module--header"]/h2'))

  browser.ignoreSynchronization = true
  browser.get(urlBBC)

  it('Shoud be a BBC', function()
  {
    expect(homeButton.getAttribute('href')).toEqual(urlBBC)
  })

  it('Shoud be a text',function()
  {
    expect(inputSearch.getAttribute('type')).toEqual("text")
  })
})