# ProtractorExample

This project was created with  [Angular CLI] version 7.3.9.

## Running end-to-end tests
In order to run the test execute:
 `ng e2e` 
 
## Editing helloWorld test
Navegate to e2e/src/helloWorld.ts

 ``` 
 it ('Say hello world',function() {
    browser.get('https://angularjs.org');
    element(by.model('yourName')).sendKeys('World');
    var welcomeMessage = element.all(by.tagName('h1'));
    expect(welcomeMessage.get(1).getText()).toEqual('Hello World!');
  });
```
## What we are using here
In this example you can see the configuration for:
- protractor
- karma
- jasmine 
- angular 7+
- typescript

