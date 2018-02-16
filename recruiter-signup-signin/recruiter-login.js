// BDD-style suite with "expect"
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
// var expect = require('chai').expect;
// This test set is for not login condition
module.exports = {
  // Testing the page element like body, search box, logo and link, text, heading, footer and footer links
  'Recruiter forgot Password if Exist': function (browser) {
    browser.url(browser.launch_url); // redirect to home page url
    browser.waitForElementPresent('body.mobile-visible', 5000); // wait for page body should be loaded.
    browser.assert.title('Landing - the best tech jobs in 1 place'); // match the home page title
    browser.useCss().expect.element('header.mobile-visible').to.be.present; // check mobile header should be present
    browser.useCss().expect.element('.header.mobile-visible').to.be.visible; // check mobile header should be visible
    browser.useCss().expect.element('#user-mobile-header .header-wrapper').to.be.present; // check mobile header inner div should be present
    browser.useCss().expect.element('#user-mobile-header .header-wrapper').to.be.visible; // check mobile header inner div should be visible
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
        browser.useCss().expect.element(currentHomePageElements.element).to.be.present;
        browser.useCss().expect.element(currentHomePageElements.element).to.be.visible;
        if (currentHomePageElements.hasOwnProperty('text') && currentHomePageElements.hasOwnProperty('link')) {
          browser.useCss().expect.element(currentHomePageElements.element).text.to.contain(currentHomePageElements.text);
          browser.useCss().expect.element(currentHomePageElements.element).to.have.attribute('href').which.contains(currentHomePageElements.link);
        } else if (currentHomePageElements.hasOwnProperty('text')) {
          browser.useCss().expect.element(currentHomePageElements.element).text.to.contain(currentHomePageElements.text);
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
    // redirecting to recruiter signup page 
    browser.url(browser.launch_url + '/user/sign_up?is_recruiter=true');
    browser.pause(2000);
    browser.assert.urlEquals(browser.launch_url + '/user/sign_up?is_recruiter=true');
    // recruiter signup page elements check
    browser.useCss().waitForElementPresent('body.bg-grey', 2000);
    browser.useCss().expect.element('.page-popup-like').to.be.present;
    browser.useCss().expect.element('.page-popup-like').to.be.visible;
    browser.useCss().expect.element('.page-popup-like .card-box h2.mb-15').text.to.equal('Recruiter Signup');
    // recruiter signup page box and form elements check - start here
    var recruiterSingupFormElements = [{
        selector: 'input[id=user_email]',
        labelSelector: 'label[for=user_email]',
        labelText: 'Email'
      },
      {
        selector: 'input[id=user_password]',
        labelSelector: 'label[for=user_password]',
        labelText: 'Set your password'
      },
      {
        selector: 'input[id=user_name]',
        labelSelector: 'label[for=designation]',
        labelText: 'Your Name'
      },
      {
        selector: 'input[id=company]',
        labelSelector: 'label[for=company]',
        labelText: 'Company Name'
      },
      {
        selector: 'input[id=phone]',
        labelSelector: 'label[for=phone]',
        labelText: 'Mobile Number'
      },
      {
        selector: 'input[name=commit]',
        value: 'Submit'
      }
    ];
    // recruiter signup form elements check function
    function recruiterFormCheck(recruiterSingupFormElements) {
      for (var i in recruiterSingupFormElements) {
        var currrentFormElements = recruiterSingupFormElements[i];
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
    recruiterFormCheck(recruiterSingupFormElements);
    // recruiter signup page box and form elements check - end here
    // recruiter singup page links check - start here
    // login form element check function - end here
    var recuiterSignupFormLinks = [{
        selector: '.pt-2 a.btn-googleplus:nth-of-type(1)',
        link: '/user/auth/google_oauth2?is_recruiter=true',
        text: 'Login with Google+'
      },
      {
        selector: '.pt-2 a.text-blue:nth-of-type(2)',
        link: '/user/sign_in?is_recruiter=true',
        text: 'Already registered? Click here to Login'
      },
      {
        selector: '.pt-2 a.text-blue:nth-of-type(3)',
        link: '/user/confirmation/new?is_recruiter=true',
        text: 'Resend Email Confirmation'
      },
      {
        selector: '.pt-2 a.text-blue:nth-of-type(4)',
        link: '/user/sign_up',
        text: 'Candidate Signup'
      }
    ];
    // recuiter login page link checking function
    function recruiterFormLinksTest(recuiterSignupFormLinks) {
      for (var i in recuiterSignupFormLinks) {
        var currentlinkItem = recuiterSignupFormLinks[i];
        browser.useCss().expect.element(currentlinkItem.selector).to.be.present;
        browser.useCss().expect.element(currentlinkItem.selector).to.be.visible;
        browser.useCss().expect.element(currentlinkItem.selector).text.to.equal(currentlinkItem.text);
        browser.useCss().expect.element(currentlinkItem.selector).to.have.attribute('href').which.contains(currentlinkItem.link);
      }
    }
    recruiterFormLinksTest(recuiterSignupFormLinks);
    // recuiter login page, page elements check - end here
    // recruiter signup page links check - end here
    browser.useCss().click(recuiterSignupFormLinks[1].selector, function (response) {
      this.assert.ok(browser === this, 'Recruiter login page link clicked, redirecting recruiter login page.');
    });
    browser.pause(2000);
    browser.assert.urlEquals(browser.launch_url + '/user/sign_in?is_recruiter=true');
    // redirecting to recuiter login page
    browser.useCss().waitForElementPresent('body.bg-grey', 2000);
    browser.useCss().expect.element('.page-popup-like').to.be.present;
    browser.useCss().expect.element('.page-popup-like').to.be.visible;
    browser.useCss().expect.element('.page-popup-like .card-box h2.mb-15').text.to.equal('Recruiter Login');
    // recruiter login page, page elements, form box and elements check 
    // recuiter login form element -start here
    var recruiterLoginFormElements = [{
        selector: 'input[id=user_email]',
        labelSelector: 'label[for=user_email]',
        labelText: 'Email'
      },
      {
        selector: 'input[id=user_password]',
        labelSelector: 'label[for=user_password]',
        labelText: 'Password'
      },
      {
        selector: 'input[name=commit]',
        value: 'Login'
      }
    ];
    // recruiter login form check function
    recruiterFormCheck(recruiterLoginFormElements);
    // recuiter login form element -end here
    // recruiter login page link check - start here
    var recruiterLoginPageLinks = [{
        selector: '.f-pwd',
        link: '/user/password/new?is_recruiter=true',
        text: '(Forgot your password?)'
      }, {
        selector: '.pt-2 a:nth-of-type(1).btn-googleplus',
        link: '/user/auth/google_oauth2?is_recruiter=true',
        text: 'Login with Google+'
      },
      {
        selector: '.pt-2 a:nth-of-type(2)',
        link: '/user/sign_up?is_recruiter=true',
        text: 'New User? Click here to Signup'
      },
      {
        selector: '.pt-2 a:nth-of-type(3)',
        link: '/user/confirmation/new?is_recruiter=true',
        text: 'Resend Email Confirmation'
      },
      {
        selector: '.pt-2 a.text-blue:nth-of-type(4)',
        link: '/user/sign_in',
        text: 'Candidate Login'
      }
    ];
    // recruiter login page link check function
    recruiterFormLinksTest(recruiterLoginPageLinks);
    // recruiter login page link check function end here
    // recruiter forgot password link clicked
    // recruiter login form submission - start here
    function recruiterLoginformSubmit() {
      browser.useCss().clearValue(recruiterLoginFormElements[0].selector);
      browser.useCss().setValue(recruiterLoginFormElements[0].selector, 'kapur.r1985@gmail.com');
      browser.useCss().clearValue(recruiterLoginFormElements[1].selector);
      browser.useCss().setValue(recruiterLoginFormElements[1].selector, 'goodservice');
      browser.useCss().click(recruiterLoginFormElements[2].selector, function (response) {
        this.assert.ok(browser === this, 'Recruiter login sucessful.');
      });
    }
    recruiterLoginformSubmit();
    // recruiter login form submission - end here

    // recruiter forgot password function submit function - end here
    browser.useCss().waitForElementVisible('body', 2000); // recruiter forgot password page submitted and redirecting to recruiter login page
    browser.waitForElementNotVisible('.loader-modal', 2000);
    browser.assert.urlContains('recruiter/candidate_infos', 'Recruiter Sucessfully login.');
    browser.end();
  }
};