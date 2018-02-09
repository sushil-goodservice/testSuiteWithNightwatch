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
    var menuBeforeLogin = '.links-item a';
    var menu = '.headerlink-with-icon';

    function testMenuItemsAfterLogin(items) {
      expect(items.value.length).to.equal(1); // Chai module
      browser.expect.element(menu + ' .dropdown-menu li:nth-of-type(1) a').text.to.contain('My Jobs');
      browser.expect.element(menu + ' .dropdown-menu li:nth-of-type(1) a').to.have.attribute('href').which.contains('/recruiter/jobs');
      browser.expect.element(menu + ' .dropdown-menu li:nth-of-type(2) a').text.to.contain('Add new Jobs');
      browser.expect.element(menu + ' .dropdown-menu li:nth-of-type(2) a').to.have.attribute('href').which.contains('/recruiter/jobs/new');
      browser.expect.element(menu + ' .dropdown-menu li:nth-of-type(3) a').text.to.contain('Candidate Database');
      browser.expect.element(menu + ' .dropdown-menu li:nth-of-type(3) a').to.have.attribute('href').which.contains('/recruiter/candidate_infos');
      browser.expect.element(menu + ' .dropdown-menu li:nth-of-type(4) a').text.to.contain('My Profile');
      browser.expect.element(menu + ' .dropdown-menu li:nth-of-type(4) a').to.have.attribute('href').which.contains('/profile/edit');
      browser.expect.element(menu + ' .dropdown-menu li:nth-of-type(5) a').text.to.contain('My Organisation & Team');
      browser.expect.element(menu + ' .dropdown-menu li:nth-of-type(5) a').to.have.attribute('href').which.contains('/recruiter/organisations');
      //browser.expect.element(menu + ' .dropdown-menu li:nth-of-type(6) a').text.to.contain('Change Password');
      browser.expect.element(menu + ' .dropdown-menu li:nth-of-type(6) a').text.to.contain('Logout');
      browser.expect.element(menu + ' .dropdown-menu li:nth-of-type(6) a').to.have.attribute('href').which.contains('/user/sign_out');
    }
    browser.url(browser.launch_url + '/recruiter/candidate_infos');
    browser.waitForElementPresent('body', 1000);
    browser.click(menuBeforeLogin + ':nth-of-type(1)', function (response) {
      this.assert.ok(browser === this, 'Open recruiter login page.');
    });
    browser.waitForElementPresent('body', 1000);
    browser.pause(4000);
    browser.assert.urlContains('http://www.landing.co/user/sign_in?is_recruiter=true', 'Sccessfully redirected to recruiter login page.');
    browser.expect.element('.page-popup-like').to.be.present;
    browser.expect.element('.page-popup-like').to.be.visible;
    browser.expect.element('.card-box h2.mb-15').text.to.equal('Recruiter Login');
    browser.expect.element('label[for=user_email]').to.be.present;
    browser.expect.element('label[for=user_email]').to.be.visible;
    browser.expect.element('label[for=user_email]').text.to.contain('Email');
    browser.expect.element('input[id=user_email]').to.be.present;
    browser.expect.element('input[id=user_email]').to.be.visible;
    browser.expect.element('label[for=user_password]').to.be.present;
    browser.expect.element('label[for=user_password]').to.be.visible;
    browser.expect.element('label[for=user_password]').text.to.contain('Password');
    browser.expect.element('input[id=user_password]').to.be.present;
    browser.expect.element('input[id=user_password]').to.be.visible;
    browser.expect.element('input[name=commit]').to.be.present;
    browser.expect.element('input[name=commit]').to.be.visible;
    browser.expect.element('input[name=commit]').to.have.value.that.equals('Login');
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').text.to.contain('Login with Google+');
    browser.assert.attributeContains('.pt-2 a.btn-googleplus', 'href', '/user/auth/google_oauth2?is_recruiter=true');
    browser.expect.element('.pt-2 a:nth-of-type(2)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(2)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(2)').text.to.contain('New User? Click here to Signup');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(2)', 'href', '/user/sign_up?is_recruiter=true');
    browser.expect.element('.pt-2 a:nth-of-type(3)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(3)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(3)').text.to.contain('Resend Email Confirmation');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(3)', 'href', '/user/confirmation/new?is_recruiter=true');
    browser.expect.element('.pt-2 a:nth-of-type(4)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(4)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(4)').text.to.contain('Candidate Login');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(4)', 'href', '/user/sign_in');
    browser.setValue('input[type=email]', 'kapur.r1985@gmail.com');
    browser.setValue('input[type=password]', 'goodservice');
    browser.click('input[type=submit]');
    browser.pause(5000);
    browser.expect.element('.header-link ul li a.btn.btn-sm.blue').to.be.present;
    browser.expect.element('.header-link ul li a.btn.btn-sm.blue').to.be.visible;
    browser.expect.element('.header-link ul li a.btn.btn-sm.blue').text.to.contain('Add Job');
    browser.expect.element('.header-link ul li a.btn.btn-sm.blue').to.have.attribute('href').which.contains('/recruiter/jobs/new');
    browser.expect.element(menu).to.be.present;
    browser.expect.element(menu).to.be.visible;
    browser.expect.element(menu + ' .navbar-toggle').to.be.present;
    browser.expect.element(menu + ' .navbar-toggle').to.be.visible;
    browser.click(menu + ' .navbar-toggle', function (response) {
      this.assert.ok(browser === this, 'Recruiter dropdown-menu open.');
    });
    browser.elements('css selector', menu, testMenuItemsAfterLogin);
    browser.saveScreenshot('./screenshots/expect-home-nav.png');
    browser.end();
  }
};