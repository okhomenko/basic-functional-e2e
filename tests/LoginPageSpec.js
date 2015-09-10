import po from '../../po';

describe('LoginPage', () => {

    beforeEach(() => {
        po.LoginPage.navigate();
    });

    it('should be able to login', () => {
        po.LoginPage.login.sendKeys('admin');
        po.LoginPage.password.sendKeys('password');

        po.LoginPage.password.sendKeys(protractor.Key.ENTER);

        expect(po.LoginPage.Me.isPresent()).toBeFalsy();
    });

    it('should fail to login', () => {
        po.LoginPage.login.sendKeys('incorrect username');
        po.LoginPage.password.sendKeys('incorrect password');

        po.LoginPage.password.sendKeys(protractor.Key.ENTER);

        expect(po.LoginPage.Me.isPresent()).toBeTruthy();
    });

});
