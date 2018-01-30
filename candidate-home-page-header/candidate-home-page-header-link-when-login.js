// BDD-style suite with "expect"
var chai = require('chai');  
var assert = chai.assert; 
var expect = chai.expect;
var should = chai.should();
// var expect = require('chai').expect;
// This test set is for not login condition
module.exports = {
  // Testing the page element like body, search box, logo and link, text, heading, footer and footer links
  'Home': function (browser) {
    browser.url(browser.launch_url);
    browser.waitForElementPresent('body', 5000);
    browser.assert.title('Landing - the best tech jobs in 1 place');
    browser.expect.element('.header-logo').to.be.present;
    browser.expect.element('.header-logo').to.be.visible;
    browser.expect.element('#user-header-search').to.be.present;
    browser.expect.element('#user-header-search').to.be.visible;
    browser.expect.element('.page-heading').to.be.present;
    browser.expect.element('.page-heading').to.be.visible;
    browser.expect.element('.header-logo a').to.be.present;
    browser.expect.element('.header-logo a').to.be.visible;
    browser.expect.element('.header-logo a').text.to.contain('LANDING .CO');
    browser.expect.element('.header-logo a').to.have.attribute('href').which.contains('/');
    browser.expect.element('.page-heading h2').to.be.present;
    browser.expect.element('.page-heading h2').to.be.visible;
    browser.expect.element('.page-heading h2').text.to.contain('Browse Jobs');
    browser.expect.element('.popular-tags').to.be.present;
    browser.expect.element('.popular-tags').to.be.visible;
    browser.expect.element('.popular-tags .popular-tags-title').text.to.equal('Popular Search Tags:');
    browser.expect.element('.pagination').to.be.present;
    browser.expect.element('.pagination').to.be.visible;
    browser.expect.element('.main-footer').to.be.present;
    browser.expect.element('.main-footer').to.be.visible;
    browser.expect.element('.main-footer .container a:nth-of-type(1)').text.to.contain('Browse Jobs');
    browser.expect.element('.main-footer .container a:nth-of-type(1)').to.have.attribute('href').which.contains('/sitemap');
    browser.expect.element('.main-footer .container a:nth-of-type(2)').text.to.contain('LANDING .CO');
    browser.expect.element('.main-footer .container a:nth-of-type(2)').to.have.attribute('href').which.contains('/');
    browser.saveScreenshot('./screenshots/expect-home.png');
    browser.end();
  },
  // Testing the navigation menu elements and corresponding links
  'Navigation': function (browser) {
    var menu = '.links .links-item';
    function testSidebar(items) {
      //expect(items.value.length).to.equal(2); // Chai module
      browser.expect.element(menu + ' .profile-link a.dropdown-toggle  > span.d-block').text.to.contain('MY PROFILE');
       browser.click(menu + ' .profile-link a.dropdown-toggle  > span.d-block', function(response){
         this.assert.ok(browser === this, "Profile dropdown clicked.");
       });
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu').to.be.present;
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(1) a').to.present;
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(1) a').to.have.attribute('href').which.contains('/profile/edit');
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(1) a span').to.present;
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(1) a span').to.be.visible;
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(1) a span').text.to.equal('My Profile');
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(2) a').to.present;
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(2) a').to.have.attribute('href').which.contains('/user/sign_out');
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(2) a span').to.present;
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(2) a > span').to.be.visible;
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(2) a span').text.to.equal('Logout');
      browser.expect.element(menu + ':nth-of-type(2) a span').text.to.contain('FOR RECRUITERS');
      browser.expect.element(menu + ':nth-of-type(2) a').to.have.attribute('href').which.contains('/user/sign_up?is_recruiter=true');
    }
    browser.url(browser.launch_url);
    browser.waitForElementPresent('body', 2000);
    browser.expect.element(menu).to.be.present;
    browser.expect.element(menu).to.be.visible;
    browser.click('a.ga-trackable');
    browser.waitForElementPresent('body', 2000);
    browser.click('a.block.text-blue');
    browser.waitForElementPresent('body', 2000);
    browser.setValue('input[type=email]', 'sushilkundu143@gmail.com');
    browser.setValue('input[type=password]', 'goodservice');
    browser.click('input[type=submit]', function(response){
      this.assert.ok(browser === this, 'Candidate login form submitted.');
    });
    browser.pause(5000);
    browser.waitForElementPresent('body', 2000);
    browser.elements('css selector', menu, testSidebar);
    browser.saveScreenshot('./screenshots/expect-home-nav-login.png');
    browser.end();
  }
};