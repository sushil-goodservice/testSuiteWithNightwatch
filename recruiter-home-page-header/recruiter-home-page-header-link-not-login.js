// BDD-style suite with "expect"
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
// var expect = require('chai').expect;
// This test set is for not login condition
module.exports = {
  // Testing the page element like body, search box, logo and link, text, heading, footer and footer links
  'Recruiter Home Page Navigation When Not Login': function (browser) {
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
    browser.end();
  }
};