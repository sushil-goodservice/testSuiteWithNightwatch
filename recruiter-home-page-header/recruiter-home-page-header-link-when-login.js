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
    var recruiterHomePageElements = [{
        element: 'header.layout3-desktop-header'
      }, {
        element: '.header-logo'
      },
      {
        element: '.content-box-recruiter.full-width'
      },
      {
        element: '#candidate-info-container'
      },
      {
        element: '.filter-icon-link'
      },
      {
        element: '.candidate-database'
      },
      {
        element: '.headerlink-with-icon .dropdown .navbar-toggle'
      },
      {
        element: '.header-logo a',
        text: 'LANDING .CO',
        link: '/'
      }
    ];
    // Home Page element check function start here 
    function checkHomePageElementsTextLink(recruiterHomePageElements) {
      for (var x in recruiterHomePageElements) {
        var currentHomePageElements = recruiterHomePageElements[x];
        browser.expect.element(currentHomePageElements.element).to.be.present;
        browser.expect.element(currentHomePageElements.element).to.be.visible;
        if (currentHomePageElements.hasOwnProperty('text') && currentHomePageElements.hasOwnProperty('link')) {
          browser.expect.element(currentHomePageElements.element).text.to.contain(currentHomePageElements.text);
          browser.expect.element(currentHomePageElements.element).to.have.attribute('href').which.equals(browser.launch_url + currentHomePageElements.link);
        } else if (currentHomePageElements.hasOwnProperty('text')) {
          browser.expect.element(currentHomePageElements.element).text.to.equals(currentHomePageElements.text);
        }
      }
    }
    checkHomePageElementsTextLink(recruiterHomePageElements);
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
      for (var i in menuElements) {
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
        elementSelector: 'input[name=commit]'
      },
    ];

    function recruiterLoginFormElements(recruiterLoginFormElementsSet) {
      for (var i in recruiterLoginFormElementsSet) {
        var currentElements = recruiterLoginFormElementsSet[i];
        browser.expect.element(currentElements.elementSelector).to.be.present;
        browser.expect.element(currentElements.elementSelector).to.be.visible;
        if (currentElements.hasOwnProperty('labelSelector') && currentElements.hasOwnProperty('elementLabelText')) {
          browser.expect.element(currentElements.labelSelector).to.be.present;
          browser.expect.element(currentElements.labelSelector).to.be.visible;
          browser.expect.element(currentElements.labelSelector).text.to.contain(currentElements.elementLabelText);
        }
      }
    }
    recruiterLoginFormElements(recruiterLoginFormElementsSet);
    // recruiter login form, input element and label test - end here
    // recruiter login page links and inner text check - start here
    var pageElementLinks = [{
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
    // recruiter login form page link check function - start here
    function pageElementLinksCheck(pageElementLinks) {
      for (var i in pageElementLinks) {
        var current = pageElementLinks[i];
        browser.expect.element(current.selector).to.be.present;
        browser.expect.element(current.selector).to.be.visible;
        browser.expect.element(current.selector).text.to.equals(current.text);
        browser.expect.element(current.selector).to.have.attribute('href').which.contains(current.link);
      }
    }
    pageElementLinksCheck(pageElementLinks);
    // recruiter login form page link check function - end here
    // recruiter login page links and innter text check - end here
    // recruiter login with following credentials
    function recruiterLogin(recruiterLoginFormElementsSet) {
      browser.clearValue(recruiterLoginFormElementsSet[0].elementSelector);
      browser.setValue(recruiterLoginFormElementsSet[0].elementSelector, 'sushilkundu143@gmail.com');
      browser.clearValue(recruiterLoginFormElementsSet[1].elementSelector);
      browser.setValue(recruiterLoginFormElementsSet[1].elementSelector, 'goodservice');
      browser.click(recruiterLoginFormElementsSet[2].elementSelector, function (response) {
        this.assert.ok(browser === this, 'Recruiter Login form submitted.');
      });
      browser.waitForElementPresent('body', 1000);
      browser.waitForElementVisible('body', 1000);
      browser.waitForElementNotVisible('.loader-modal', 2000);
      browser.assert.urlEquals(browser.launch_url + '/recruiter/candidate_infos', 'Recruiter login Sucessful.');
    }
    recruiterLogin(recruiterLoginFormElementsSet);
    // recruiter login sucessfull with following credentials
    // recruiter dropdown menu elements check - start here
    var recruiterDropdownLogin = '.headerlink-with-icon .dropdown';
    var dropDownIcon = recruiterDropdownLogin + ' .dropdown-toggle .navbar-toggle';
    var dropDownMenu = recruiterDropdownLogin + ' .dropdown-menu';
    var recruiterDropdownMenuItemsLogin = [{
        selector: dropDownMenu + ' li:nth-of-type(1) a',
        text: 'My Jobs',
        link: '/recruiter/jobs'
      },
      {
        selector: dropDownMenu + ' li:nth-of-type(2) a',
        text: 'Add new Jobs',
        link: '/recruiter/jobs/new'
      },
      {
        selector: dropDownMenu + ' li:nth-of-type(3) a',
        text: 'Candidate Database',
        link: '/recruiter/candidate_infos'
      },
      {
        selector: dropDownMenu + ' li:nth-of-type(4) a',
        text: 'My Profile',
        link: '/profile/edit'
      },
      {
        selector: dropDownMenu + ' li:nth-of-type(5) a',
        text: 'My Organisation & Team',
        link: '/recruiter/organisations'
      },
      {
        selector: dropDownMenu + ' li:nth-of-type(6) a',
        text: 'Logout',
        link: '/user/sign_out'
      }
    ];
    // recuiter menu and items check function - start here
    function menuDropdownAfterLoginRecruiter(recruiterDropdownLogin, dropDownIcon, recruiterDropdownMenuItemsLogin) {
      browser.expect.element(recruiterDropdownLogin).to.be.present;
      browser.expect.element(recruiterDropdownLogin).to.be.visible;
      browser.expect.element(dropDownIcon).to.be.present;
      browser.expect.element(dropDownIcon).to.be.visible;
      browser.waitForElementNotVisible('.loader-modal', 2000);
      browser.click(dropDownIcon, function (response) {
        this.assert.ok(browser === this, 'Menu dropdown link clicked.');
        browser.expect.element(dropDownMenu).to.be.present;
        browser.expect.element(dropDownMenu).to.be.visible;
      });
      for (var i in recruiterDropdownMenuItemsLogin) {
        var currentItem = recruiterDropdownMenuItemsLogin[i];
        browser.expect.element(currentItem.selector).to.be.present;
        browser.expect.element(currentItem.selector).to.be.visible;
        browser.expect.element(currentItem.selector).text.to.equals(currentItem.text);
        browser.expect.element(currentItem.selector).to.have.attribute('href').which.contains(currentItem.link);
      }
    }
    menuDropdownAfterLoginRecruiter(recruiterDropdownLogin, dropDownIcon, recruiterDropdownMenuItemsLogin);
    // recruiter dropdown menu elements check - end here
    // recruiter login page
    browser.pause(2000);
    browser.end();
  }
};