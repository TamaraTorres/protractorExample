import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('Hello World', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it ('Say hello world',function() {
    browser.get('https://angularjs.org');
    element(by.model('yourName')).sendKeys('World');

    var welcomeMessage = element.all(by.tagName('h1'));
    expect(welcomeMessage.get(1).getText()).toEqual('Hello World!');
  });
});
