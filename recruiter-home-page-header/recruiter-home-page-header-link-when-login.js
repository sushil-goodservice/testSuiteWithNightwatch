// BDD-style suite with "expect"
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
// var expect = require('chai').expect;
// This test set is for not login condition
module.exports = {
  // Testing the page element like body, search box, logo and link, text, heading, footer and footer links
  'Recruiter Home Page Navigation When Login': function (browser) {
    browser.url(browser.launch_url + '/recruiter/candidate_infos'); // redirecting to candidate search page
    browser.waitForElementPresent('body', 5000); // check if the body is loaded
    browser.waitForElementNotVisible('.loader-modal', 3000);
    browser.assert.title('Landing'); // change the page title here
    var homePageElements = [{
        element: '.header-logo',
        text: '',
        link: ''
      },
      {
        element: '.full-width.search',
        text: '',
        link: ''
      },
      {
        element: '#candidate-info-container',
        text: '',
        link: ''
      },
      {
        element: '.sidebar-filter',
        text: '',
        link: ''
      },
      {
        element: '.table-data',
        text: '',
        link: ''
      },
      {
        element: 'ul.flex.vertical-align li a.btn.btn-sm.blue',
        text: 'Add Job',
        link: '/recruiter/jobs/new'
      },
      {
        element: '.headerlink-with-icon .dropdown .navbar-toggle',
        text: '',
        link: ''
      },
      {
        element: '.header-logo a',
        text: 'LANDING .CO',
        link: '/'
      }
    ];
    // Home Page element check function start here 
    function checkHomePageElementsTextLink(homePageElements) {
      for (x in homePageElements) {
        var currentHomePageElements = homePageElements[x];
        if (currentHomePageElements.text != '' && currentHomePageElements.link != '') {
          browser.expect.element(currentHomePageElements.element).to.be.present;
          browser.expect.element(currentHomePageElements.element).to.be.visible;
          browser.expect.element(currentHomePageElements.element).text.to.contain(currentHomePageElements.text);
          browser.expect.element(currentHomePageElements.element).to.have.attribute('href').which.equals(browser.launch_url + currentHomePageElements.link);
        } else if (currentHomePageElements.text != '' && currentHomePageElements.link == '') {
          browser.expect.element(currentHomePageElements.element).to.be.present;
          browser.expect.element(currentHomePageElements.element).to.be.visible;
          browser.expect.element(currentHomePageElements.element).text.to.equals(currentHomePageElements.text);
        } else {
          browser.expect.element(currentHomePageElements.element).to.be.present;
          browser.expect.element(currentHomePageElements.element).to.be.visible;
        }
      }
    }
    checkHomePageElementsTextLink(homePageElements);
    // Home Page element check function end here 
    // recruiter home page header elements checked
    // Testing the navigation menu elements and corresponding links when not login
    var menuUL = '.dropdown-menu.links-item';
    var buttonDropdown = '.headerlink-with-icon .dropdown .navbar-toggle';
    // set element for recruiter menu item when not login
    var menuElements = [{
        selector: menuUL + ' li:nth-of-type(1) a',
        link: '/user/sign_in?is_recruiter=true',
        text: 'Log In'
      },
      {
        selector: menuUL + ' li:nth-of-type(2) a',
        link: '/user/sign_up?is_recruiter=true',
        text: 'Sign Up'
      }
    ];
    // check menu element function when not login
    function checkRecruiterHomeMenuNotLogin(menuUL, menuElements) {
      browser.expect.element(menuUL).to.be.present;
      browser.click(buttonDropdown, function (response) {
        browser.waitForElementVisible(menuUL, 2000);
      });
      for (i in menuElements) {
        var curentEl = menuElements[i];
        browser.expect.element(curentEl.selector).to.be.present;
        browser.expect.element(curentEl.selector).text.to.equals(curentEl.text);
        browser.expect.element(curentEl.selector).to.have.attribute('href').which.contains(curentEl.link);
      }
    }
    checkRecruiterHomeMenuNotLogin(menuUL, menuElements);
    // end check menu elements function when not login
    //recruiter menu dropdown login link clicked
    browser.click(menuElements[0].selector, function (response) {
      this.assert.ok(this === browser, 'Recriter redirect to login page.');
    });
    browser.waitForElementPresent('body.bg-grey', 2000);
    browser.assert.urlEquals(browser.launch_url + '/user/sign_in?is_recruiter=true', 'Recruiter login page sucessfully redirected.');
    // recruiter login page elements check
    // recruiter login page heading check - start here
    browser.expect.element('.page-popup-like .card-box h2.mb-15').text.to.equal('Recruiter Login');
    // recruiter login page heading check - end here
    // recruiter login form, input element and label test - start here
    var recruiterLoginFormElementsSet = [{
        elementSelector: 'input[id=user_email]',
        labelSelector: 'label[for=user_email]',
        elementLabelText: 'Email'
      },
      {
        elementSelector: 'input[id=user_password]',
        labelSelector: 'label[for=user_password]',
        elementLabelText: 'Password'
      },
      {
        elementSelector: 'input[name=commit]',
        labelSelector: '',
        elementLabelText: ''
      },
    ];

    function recruiterLoginFormElements(recruiterLoginFormElementsSet) {
      for (var i = 0; i < recruiterLoginFormElementsSet.length; i++) {
        var currentElements = recruiterLoginFormElementsSet[i];
        if (currentElements.labelSelector !== '' && currentElements.elementLabelText !== '') {
          browser.expect.element(currentElements.labelSelector).to.be.present;
          browser.expect.element(currentElements.labelSelector).to.be.visible;
          browser.expect.element(currentElements.labelSelector).text.to.contain(currentElements.elementLabelText);
          browser.expect.element(currentElements.elementSelector).to.be.present;
          browser.expect.element(currentElements.elementSelector).to.be.visible;
        } else {
          browser.expect.element(currentElements.elementSelector).to.be.present;
          browser.expect.element(currentElements.elementSelector).to.be.visible;
        }
      }
    }
    recruiterLoginFormElements(recruiterLoginFormElementsSet);
    // recruiter login form, input element and label test - end here
    // recruiter login page links and inner text check - start here
    var pageElementLinks = [
      {
        selector: '.f-pwd',
        text: '(Forgot your password?)',
        link: '/user/password/new?is_recruiter=true'
      },
      {
        selector: '.pt-2 a.btn-googleplus',
        text: 'Login with Google+',
        link: '/user/auth/google_oauth2?is_recruiter=true'
      },
      {
        selector: '.pt-2 a:nth-of-type(2)',
        text: 'New User? Click here to Signup',
        link: '/user/sign_up?is_recruiter=true'
      },
      {
        selector: '.pt-2 a:nth-of-type(3)',
        text: 'Resend Email Confirmation',
        link: '/user/confirmation/new?is_recruiter=true'
      },
      {
        selector: '.pt-2 a:nth-of-type(4)',
        text: 'Candidate Login',
        link: '/user/sign_in'
      }
    ];
    function pageElementLinksCheck(pageElementLinks){
      for(i in pageElementLinks){
        var current = pageElementLinks[i];
        browser.expect.element(current.selector).to.be.present;
        browser.expect.element(current.selector).to.be.visible;
        browser.expect.element(current.selector).text.to.equals(current.text);
        browser.expect.element(current.selector).to.have.attribute('href').which.contains(current.link);
      }
    }
    pageElementLinksCheck(pageElementLinks);
    // recruiter login page links and innter text check - end here
    // recruiter login with following credentials
    // recruiter login sucessfull with following credentials
    // recruiter login page
    browser.end();
  }
};