// BDD-style suite with "expect"
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
// var expect = require('chai').expect;
// This test set is for not login condition
module.exports = {
  // Testing the page element like body, search box, logo and link, text, heading, footer and footer links
  'Recruiter-Home': function (browser) {
    browser.url(browser.launch_url + '/recruiter/candidate_infos');
    browser.waitForElementPresent('body', 5000);
    browser.assert.title('Landing');
    browser.expect.element('.header-logo').to.be.present;
    browser.expect.element('.header-logo').to.be.visible;
    browser.expect.element('.full-width.search').to.be.present;
    browser.expect.element('.full-width.search').to.be.visible;
    browser.expect.element('#candidate-info-container').to.be.present;
    browser.expect.element('#candidate-info-container').to.be.visible;
    browser.expect.element('.header-logo a').to.be.present;
    browser.expect.element('.header-logo a').to.be.visible;
    browser.expect.element('.sidebar-filter').to.be.present;
    browser.expect.element('.sidebar-filter').to.be.visible;
    browser.expect.element('.table-data').to.be.present;
    browser.expect.element('.table-data').to.be.visible;
    browser.expect.element('.header-logo a').text.to.contain('LANDING .CO');
    browser.expect.element('.header-logo a').to.have.attribute('href').which.contains('/');
    browser.saveScreenshot('./screenshots/expect-home.png');
    browser.end();
  },
  // Testing the navigation menu elements and corresponding links
  'Navigation': function (browser) {
    var menu = '.links-item a';

    function testMenuItemsNotLogin(items) {
      expect(items.value.length).to.equal(2); // Chai module
      browser.expect.element(menu + ':nth-of-type(1)').text.to.contain('LOG IN');
      browser.expect.element(menu + ':nth-of-type(1)').to.have.attribute('href').which.contains('/user/sign_in?is_recruiter=true');
      browser.expect.element(menu + ':nth-of-type(2)').text.to.contain('SIGN UP');
      browser.expect.element(menu + ':nth-of-type(2)').to.have.attribute('href').which.contains('/user/sign_up?is_recruiter=true');
    }
    browser.url(browser.launch_url + '/recruiter/candidate_infos');
    browser.waitForElementPresent('body', 1000);
    browser.expect.element('.header-link ul li a.btn.btn-sm.blue').to.be.present;
    browser.expect.element('.header-link ul li a.btn.btn-sm.blue').to.be.visible;
    browser.expect.element('.header-link ul li a.btn.btn-sm.blue').text.to.contain('Add Job');
    browser.expect.element('.header-link ul li a.btn.btn-sm.blue').to.have.attribute('href').which.contains('/recruiter/jobs/new');
    browser.expect.element(menu).to.be.present;
    browser.expect.element(menu).to.be.visible;
    browser.elements('css selector', menu, testMenuItemsNotLogin);
    browser.saveScreenshot('./screenshots/expect-home-nav.png');
    browser.end();
  }
};