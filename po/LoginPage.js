export class LoginPage {

    navigate() {
        browser.get('#/');
        browser.waitForAngular();
    }

    loginAsAdmin() {
        this.login.sendKeys('admin');
        this.password.sendKeys('password');
        this.password.sendKeys(protractor.Key.ENTER);
        browser.waitForAngular();
    }

    get Me() { return element(by.css('.form')); }

    get login() { return this.Me.element(by.css('.username')); }

    get password() { return this.Me.element(by.css('.password')); }

    get submit() { return this.Me.element(by.css('.submit')); }

}
