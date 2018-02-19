// BDD-style suite with "expect"
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
// var expect = require('chai').expect;
// This test set is for not login condition
module.exports = {
    // Testing the page element like body, search box, logo and link, text, heading, footer and footer links
    'Candidate Resend confirmation instructions': function (browser) {
        browser.url(browser.launch_url); // redirect to home page url
        browser.waitForElementPresent('body.mobile-visible', 5000); // wait for page body should be loaded.
        browser.assert.title('Landing - the best tech jobs in 1 place'); // match the home page title
        browser.expect.element('header.mobile-visible').to.be.present; // check mobile header should be present
        browser.expect.element('.header.mobile-visible').to.be.visible; // check mobile header should be visible
        browser.expect.element('#user-mobile-header .header-wrapper').to.be.present; // check mobile header inner div should be present
        browser.expect.element('#user-mobile-header .header-wrapper').to.be.visible; // check mobile header inner div should be visible
        // checkHomePageElementsTextLink: define function to test all the elements present in home page. 
        var homePageElements = [{
                element: '.mob-dropdown'
            },
            {
                element: '.header-logo'
            },
            {
                element: '.mob-search-link'
            },
            {
                element: 'a.border-top.new-rec-btn',
                text: 'Recruiters',
                link: '/user/sign_up?is_recruiter=true'
            },
            {
                element: 'form.candidate-search-wrap'
            },
            {
                element: '.content-box'
            },
            {
                element: '.pagination'
            },
            {
                element: '.main-footer'
            },
            {
                element: '.main-footer .container a:nth-of-type(1)',
                text: 'Browse Jobs',
                link: '/sitemap'
            },
            {
                element: '.main-footer .container a:nth-of-type(2)',
                text: 'LANDING .CO',
                link: '/'
            }
        ];
        // check the page elements are present, visible, having the following text with the following  as mention the array.
        // Home (Candidate Home) Page element check function start here 
        function checkHomePageElementsTextLink(homePageElements) {
            for (var x in homePageElements) {
                var currentHomePageElements = homePageElements[x];
                browser.expect.element(currentHomePageElements.element).to.be.present;
                browser.expect.element(currentHomePageElements.element).to.be.visible;
                if (currentHomePageElements.hasOwnProperty('text') && currentHomePageElements.hasOwnProperty('link')) {
                    browser.expect.element(currentHomePageElements.element).text.to.contain(currentHomePageElements.text);
                    browser.expect.element(currentHomePageElements.element).to.have.attribute('href').which.contains(currentHomePageElements.link);
                } else if (currentHomePageElements.hasOwnProperty('text')) {
                    browser.expect.element(currentHomePageElements.element).text.to.contain(currentHomePageElements.text);
                }
            }
        }
        checkHomePageElementsTextLink(homePageElements);
        // Home (Candidate Home) Page element check function end here 
        // check the candidate header navigation link when not login start here
        var menu = '#user-mobile-header .mob-dropdown .options-wrap .options-container'; // mobile menu element
        var menuNotLoginElements = [{
                element: '//*[@id="user-mobile-header"]/div/div/div[1]/div/div/div[1]/h6',
                text: 'Menu'
            },
            {
                element: '//*[@id="user-mobile-header"]/div/div/div[1]/div/div/div[2]/a',
                text: 'Sign Up',
                link: '/user/sign_up'
            },
            {
                element: '//*[@id="user-mobile-header"]/div/div/div[1]/div/div/div[3]/a',
                text: 'Login',
                link: '/user/sign_in'
            },
            {
                element: '//*[@id="user-mobile-header"]/div/div/div[1]/div/div/div[4]/a',
                text: 'Recruiters',
                link: '/user/sign_up?is_recruiter=true'
            }
        ];
        browser.click('#mobMenuToggler', function (response) {
            this.assert.ok(browser === this, 'Menu button clicked.');
            browser.waitForElementPresent(menu, 2000);
            browser.waitForElementVisible(menu, 2000);
        });
        browser.pause(1000);
        // menu items and link testing function
        function navigation(menu, menuNotLoginElements) {
            browser.expect.element(menu).to.be.present;
            browser.expect.element(menu).to.be.visible;
            for (var i in menuNotLoginElements) {
                var currentMenuNotLoginElements = menuNotLoginElements[i];
                browser.useXpath().expect.element(currentMenuNotLoginElements.element).to.be.present;
                browser.useXpath().expect.element(currentMenuNotLoginElements.element).to.be.visible;
                if (currentMenuNotLoginElements.hasOwnProperty('link')) {
                    browser.useXpath().expect.element(currentMenuNotLoginElements.element).text.to.contain(currentMenuNotLoginElements.text);
                    browser.useXpath().expect.element(currentMenuNotLoginElements.element).to.have.attribute('href').which.contains(currentMenuNotLoginElements.link);
                } else {
                    browser.useXpath().expect.element(currentMenuNotLoginElements.element).text.to.contain(currentMenuNotLoginElements.text);
                }
            }
        }
        navigation(menu, menuNotLoginElements);
        browser.pause(3000);
        // candidate header navigation link check end here when not login
        browser.url(browser.launch_url + '/user/sign_in');
        // candidate login page check - start here
        // candidate login page, page elements check - start here
        browser.useCss().waitForElementPresent('body', 2000);
        browser.useCss().waitForElementVisible('body', 2000);
        browser.useCss().expect.element('.page-popup-like').to.be.present;
        browser.useCss().expect.element('.page-popup-like').to.be.visible;
        browser.useCss().expect.element('.card-box h2.mb-15').to.be.present;
        browser.useCss().expect.element('.card-box h2.mb-15').to.be.visible;
        browser.useCss().expect.element('.card-box h2.mb-15').text.to.contain('Candidate Login');
        // candidate login div and form elements
        var loginFormElements = [{
                selector: '.new_user .field:nth-of-type(1) input[id=user_email]',
                labelSelector: 'label[for=user_email]',
                labelText: 'Email'
            },
            {
                selector: '.new_user .field:nth-of-type(2) input[id=user_password]',
                labelSelector: 'label[for=user_password]',
                labelText: 'Password'
            },
            {
                selector: '.new_user .actions input[type=submit]',
                value: 'Login'

            }
        ];
        // login form element check function - start here
        function candidateFormCheck(loginFormElements) {
            for (var i in loginFormElements) {
                var currrentFormElements = loginFormElements[i];
                browser.useCss().expect.element(currrentFormElements.selector).to.be.present;
                browser.useCss().expect.element(currrentFormElements.selector).to.be.visible;
                if (currrentFormElements.hasOwnProperty('labelSelector') && currrentFormElements.hasOwnProperty('labelText')) {
                    browser.useCss().expect.element(currrentFormElements.labelSelector).to.be.present;
                    browser.useCss().expect.element(currrentFormElements.labelSelector).to.be.visible;
                    browser.useCss().expect.element(currrentFormElements.labelSelector).text.to.equal(currrentFormElements.labelText);
                } else {
                    browser.useCss().expect.element(currrentFormElements.selector).to.have.value.that.equals(currrentFormElements.value);
                }
            }
        }
        candidateFormCheck(loginFormElements);
        // login form element check function - end here
        var candidateLoginFormLinks = [{
                selector: '.f-pwd',
                link: '/user/password/new',
                text: '(Forgot your password?)'
            },
            {
                selector: '.pt-2 a.btn-googleplus:nth-of-type(1)',
                link: '/user/auth/google_oauth2',
                text: 'Login with Google+'
            },
            {
                selector: '.pt-2 a.text-blue:nth-of-type(2)',
                link: '/user/sign_up',
                text: 'New User? Click here to Signup'
            },
            {
                selector: '.pt-2 a.text-blue:nth-of-type(3)',
                link: '/user/confirmation/new',
                text: 'Resend Email Confirmation'
            },
            {
                selector: '.pt-2 a.text-blue:nth-of-type(4)',
                link: '/user/sign_in?is_recruiter=true',
                text: 'Recruiter Login'
            }
        ];
        // candidate login page link checking function
        function cadidateFormLinksTest(candidateLoginFormLinks) {
            for (var i in candidateLoginFormLinks) {
                var currentlinkItem = candidateLoginFormLinks[i];
                browser.useCss().expect.element(currentlinkItem.selector).to.be.present;
                browser.useCss().expect.element(currentlinkItem.selector).to.be.visible;
                browser.useCss().expect.element(currentlinkItem.selector).text.to.equal(currentlinkItem.text);
                browser.useCss().expect.element(currentlinkItem.selector).to.have.attribute('href').which.contains(currentlinkItem.link);
            }
        }
        cadidateFormLinksTest(candidateLoginFormLinks);
        // candidate login page, page elements check - end here
        browser.useCss().click(candidateLoginFormLinks[3].selector, function (response) {
            this.assert.ok(browser === this, 'Candidate Resend confirmation instructions link clicked.');
        });
        // candidate login page check - end here
        browser.assert.urlEquals(browser.launch_url + '/user/confirmation/new');
        // redirecting to candidate singup page 
        // candidate signup page, page elements check - start here
        browser.useCss().waitForElementPresent('body.bg-grey', 2000);
        browser.useCss().waitForElementVisible('body.bg-grey', 2000);
        browser.useCss().expect.element('.page-popup-like').to.be.present;
        browser.useCss().expect.element('.page-popup-like').to.be.visible;
        browser.useCss().expect.element('.card-box h2').to.be.present;
        browser.useCss().expect.element('.card-box h2').to.be.visible;
        browser.useCss().expect.element('.card-box h2').text.to.contain('Resend confirmation instructions');
        // end candidate signup page check - end here
        // candidate signup div and form elements
        var confirmFormElements = [{
                selector: '.new_user .field:nth-of-type(1) input[id=user_email]',
                labelSelector: 'label[for=user_email]',
                labelText: 'Email'
            },
            {
                selector: '.new_user .actions input[type=submit]',
                value: 'Resend confirmation instructions'
            }
        ];
        // signup form element check function - start here
        function candidateFormCheck(confirmFormElements) {
            for (var i in confirmFormElements) {
                var currrentFormElements = confirmFormElements[i];
                browser.useCss().expect.element(currrentFormElements.selector).to.be.present;
                browser.useCss().expect.element(currrentFormElements.selector).to.be.visible;
                if (currrentFormElements.hasOwnProperty('labelSelector') && currrentFormElements.hasOwnProperty('labelText')) {
                    browser.useCss().expect.element(currrentFormElements.labelSelector).to.be.present;
                    browser.useCss().expect.element(currrentFormElements.labelSelector).to.be.visible;
                    browser.useCss().expect.element(currrentFormElements.labelSelector).text.to.equal(currrentFormElements.labelText);
                } else {
                    browser.useCss().expect.element(currrentFormElements.selector).to.have.value.that.equals(currrentFormElements.value);
                }
            }
        }
        candidateFormCheck(confirmFormElements);
        // login form element check function - end here
        // login form element check function - end here
        var candidateConfirmFormLinks = [{
                selector: '.card-box a.btn-googleplus:nth-of-type(1)',
                link: '/user/auth/google_oauth2',
                text: 'Login with Google+'
            },
            {
                selector: '.card-box a.text-blue:nth-of-type(2)',
                link: '/user/sign_up',
                text: 'New User? Click here to Signup'
            },
            {
                selector: '.card-box a.text-blue:nth-of-type(3)',
                link: '/user/sign_in',
                text: 'Already registered? Click here to Login'
            }
        ];
        // candidate login page link checking function
        function candidateFormLinksCheck(candidateConfirmFormLinks) {
            for (var i in candidateConfirmFormLinks) {
                var currentlinkItem = candidateConfirmFormLinks[i];
                browser.useCss().expect.element(currentlinkItem.selector).to.be.present;
                browser.useCss().expect.element(currentlinkItem.selector).to.be.visible;
                browser.useCss().expect.element(currentlinkItem.selector).text.to.equal(currentlinkItem.text);
                browser.useCss().expect.element(currentlinkItem.selector).to.have.attribute('href').which.contains(currentlinkItem.link);
            }
        }
        candidateFormLinksCheck(candidateConfirmFormLinks);
        // candidate login page, page elements check - end here
        // candidate resend confirmation function - start here
        function resendCofirmationSubmission(confirmFormElements) {
            browser.clearValue(confirmFormElements[0].selector);
            browser.setValue(confirmFormElements[0].selector, 'sushilkundu143@gmail.com');
            browser.click(confirmFormElements[1].selector);
        }
        resendCofirmationSubmission(confirmFormElements);
        // candidate resenf confirmation function - end here
        browser.waitForElementPresent('body', 2000);
        browser.assert.urlContains(browser.launch_url + '/user/sign_in', 'Redirected to candidate login page.');
        browser.pause(3000);
        // candidate resend confirmation function - end here
        browser.end();
    }
};