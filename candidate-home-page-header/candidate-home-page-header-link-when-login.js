// BDD-style suite with "expect"
var chai = require('chai');  
var assert = chai.assert; 
var expect = chai.expect;
var should = chai.should();
// var expect = require('chai').expect;
// This test set is for not login condition
module.exports = {
  // Testing the page element like body, search box, logo and link, text, heading, footer and footer links
  'Home Page Navigation when Login': function (browser) {
    browser.url(browser.launch_url); // redirect to home page url
    browser.waitForElementPresent('body', 5000); // wait for page body should be loaded.
    browser.assert.title('Landing - the best tech jobs in 1 place'); // match the home page title
    // checkHomePageElementsTextLink: define function to test all the elements present in home page. 
    var homePageElements = [
      {element : '.header-logo', text : '', link : ''},
      {element : '#user-header-search', text : '', link : ''},
      {element : '.page-heading', text : '', link : ''},
      {element : '.header-logo a', text : 'LANDING .CO', link : '/'},
      {element : '.page-heading h2', text : 'Browse Jobs', link : ''},
      {element : '.popular-tags', text : '', link : ''},
      {element : '.popular-tags .popular-tags-title', text : 'Popular Search Tags:', link : ''},
      {element : '.pagination', text : '', link : ''},
      {element : '.main-footer', text : '', link : ''},
      {element : '.main-footer .container a:nth-of-type(1)', text : 'Browse Jobs', link : '/sitemap'},
      {element : '.main-footer .container a:nth-of-type(2)', text : 'LANDING .CO', link : '/'}
    ];
    // check the page elements are present, visible, having the following text with the following  as mention the array.
    // Home Page element check function start here 
    function checkHomePageElementsTextLink(homePageElements){
      for(x in homePageElements){
        var currentHomePageElements = homePageElements[x];
        if(currentHomePageElements.text != '' && currentHomePageElements.link != ''){
          browser.expect.element(currentHomePageElements.element).to.be.present;
          browser.expect.element(currentHomePageElements.element).to.be.visible;
          browser.expect.element(currentHomePageElements.element).text.to.contain(currentHomePageElements.text);
          browser.expect.element(currentHomePageElements.element).to.have.attribute('href').which.contains(currentHomePageElements.link);
        } else if(currentHomePageElements.text != '' && currentHomePageElements.link == ''){
          browser.expect.element(currentHomePageElements.element).to.be.present;
          browser.expect.element(currentHomePageElements.element).to.be.visible;
          browser.expect.element(currentHomePageElements.element).text.to.contain(currentHomePageElements.text);
        } else {
          browser.expect.element(currentHomePageElements.element).to.be.present;
          browser.expect.element(currentHomePageElements.element).to.be.visible;
        }
      }
    }
    checkHomePageElementsTextLink(homePageElements);
    // Home Page element check function end here 
    // check the candidate header navigation link when not login start here
    var menu = '.links .links-item'; // menu element
    var menuNotLoginElements = [
      { element : menu + ':nth-of-type(1) a', text: 'FOR CANDIDATES', link : '/user/sign_up' },
      { element : menu + ':nth-of-type(2) a', text: 'FOR RECRUITERS', link : '/user/sign_up?is_recruiter=true' }
    ];
    function navigation(menu, menuNotLoginElements) {
      browser.expect.element(menu).to.be.present;
      browser.expect.element(menu).to.be.visible;
      for(i in menuNotLoginElements){
        var currentMenuNotLoginElements = menuNotLoginElements[i];
        browser.expect.element(currentMenuNotLoginElements.element).text.to.contain(currentMenuNotLoginElements.text);
        browser.expect.element(currentMenuNotLoginElements.element).to.have.attribute('href').which.contains(currentMenuNotLoginElements.href);
      }
    }
    navigation(menu, menuNotLoginElements);
    // candidate header navigation link check end here when not login
    browser.click('a.ga-trackable', function(response){
      this.assert.ok(browser === this, 'Candidate signup link is clicked.');
    });
    browser.waitForElementPresent('body', 2000);
    browser.waitForElementVisible('body', 2000);
    browser.click('a.block.text-blue', function(response){
      this.assert.ok(browser === this, 'Redirecting to candidate login page.');
    });
    browser.waitForElementPresent('body', 2000);
    browser.waitForElementVisible('body', 2000);
    browser.setValue('input[type=email]', 'sushilkundu143@gmail.com');
    browser.setValue('input[type=password]', 'goodservice');
    browser.click('input[type=submit]', function(response){
      this.assert.ok(browser === this, 'Candidate login form submitted and redirecting to candidate home page.');
    });
    browser.waitForElementPresent('body', 2000);
    browser.pause(5000);
    // Check the navigation menu elements and corresponding links element after login start here 
    var mainMenuIcon = menu + ' .profile-link a.dropdown-toggle', menuDropdownAfterLogin = menu + ':nth-of-type(1) .profile-link ul.dropdown-menu';
    var menuLoginElements = [
      {selector : menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(1) a', text :  'My Profile', href :  '/profile/edit'},
      {selector : menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(2) a', text :  'Logout', href :  '/user/sign_out'},
      {selector : menu + ':nth-of-type(2) a', text :  'FOR RECRUITERS', href :  '/user/sign_up?is_recruiter=true'}
    ];
    function navigationAfterLogin(mainMenuIcon , menuLoginElements) {
      browser.expect.element(mainMenuIcon).to.be.present;
      browser.expect.element(mainMenuIcon).to.be.visible;
      browser.expect.element(mainMenuIcon + ' span.d-block').text.to.contain('MY PROFILE');
      browser.click(mainMenuIcon, function(response) {
        this.assert.ok(browser === this, 'Candidate dropdown-menu clicked.');
      });
      browser.expect.element(menuDropdownAfterLogin).to.be.present;
      for(i in menuLoginElements){
        var currentMenuLoginElement = menuLoginElements[i];
        browser.expect.element(currentMenuLoginElement.selector).to.present;
        browser.expect.element(currentMenuLoginElement.selector).text.to.equal(currentMenuLoginElement.text);
        browser.expect.element(currentMenuLoginElement.selector).to.have.attribute('href').which.contains(currentMenuLoginElement.href);
      }
    }
    navigationAfterLogin(mainMenuIcon , menuLoginElements);
    // check the navigation menu elements and corresponding links elements after login end here
    browser.end();
  }
};