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
    // Testing the navigation menu elements and corresponding links
    var menu = '.links-item a';

    browser.end();
  }
};