describe('movie search app', function() {

  beforeEach(function () {
    browser.get('http://localhost:8000');
  });

  it('should load up angular app', function() {
    expect(element(by.tagName('h1')).getText()).toBe('Search Your Movie');
  });

  it('should load up a search bar', function () {
    expect(element(by.model('search')).isPresent()).toBe(true);
  });

  it('should load up a button', function () {
    expect(element(by.tagName('button')).isPresent()).toBe(true);
  });

  it('when you click search, it should load up results', function () {
    element(by.model('search')).sendKeys('Snakes on a Plane')
    element(by.tagName('button')).click();

    expect(element.all(by.repeater('movie in view.movies')).count()).toBe(5);
  });

  it('should go to individual movie page', function () {
    element(by.model('search')).sendKeys('Snakes on a Plane')
    element(by.tagName('button')).click();

    element.all(by.repeater('movie in view.movies')).get(0).click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/tt0417148');
  });

  it('should load up that individual movie info', function () {
    element(by.model('search')).sendKeys('Snakes on a Plane')
    element(by.tagName('button')).click();

    element.all(by.repeater('movie in view.movies')).get(0).click();
    var content = element(by.css('[ng-view]')).getText();

    expect(content).toContain('Snakes on a Plane');
  });

});
