//const { browserGet } = require("../pages/homepage");

describe(' demo calculator tests', function () {

    it('log in', function () {
        browser.ignoreSynchronization = true;
        browser.driver.get('https://test.pinket.com/static/login.html');
        
        element(by.id('username')).sendKeys('admin');
        element(by.id('password')).sendKeys('admin');
        element(by.id('rememberMe')).click();
        element(by.id('submit')).click();
        browser.sleep(20000)  
    });
    it('log out', function(){
        browser.ignoreSynchronization = true;
        element(by.css('.glyphicon-off')).click();
        browser.sleep(10000)
    });

    
});