// BDD-style suite with "expect"
var expect = require('chai').expect;
module.exports = {
  // First test case
  'Home': function (browser) {
    function logNav(items) {
      console.log('\nNAVIGATION\n');
      items.value.forEach(function (item) {
        browser.elementIdText(item.ELEMENT, function (res) {
          console.log(res.value);
        });
      });
    }
    browser.url('http://www.landing.co/');
    browser.waitForElementPresent('body', 1000);
    browser.expect.element('title').text.to.equal('Landing - the best tech jobs in  1 place');
    browser.expect.element('.navbar ul.nav').to.be.visible;
    browser.expect.element('.navbar ul.nav').text.to.contain('Contact');
    browser.elements('css selector', '.navbar ul.nav li', logNav);
    browser.expect.element('.navbar ul.nav li:nth-of-type(2) a').to.have.attribute('href').which.contains('/gettingstarted');
    browser.saveScreenshot('./screenshots/expect-home.png');
    browser.click('.navbar ul.nav li:nth-of-type(2)');
    browser.expect.element('title').text.to.equal('Getting Started | Nightwatch.js');
    browser.end();
  },
  // Second test case
  'Nav_Links': function (browser) {
    var sidebarMenu = '#api-container .bs-sidebar > ul > li';
    function testSidebar(items) {
      expect(items.value.length).to.equal(4); // Chai module
      browser.expect.element(sidebarMenu + ':nth-of-type(1)').text.to.contain('Expect');
    }
    browser.url('http://nightwatchjs.org/api');
    browser.waitForElementPresent('body', 1000);
    browser.expect.element('#api-container').to.have.attribute('class').equals('secondary');
    browser.expect.element('#api-container h1').text.to.contain('API Reference');
    browser.elements('css selector', sidebarMenu, testSidebar);
    browser.saveScreenshot('./screenshots/expect-api.png');
    browser.end();
  }
};