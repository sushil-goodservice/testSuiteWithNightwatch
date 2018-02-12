// BDD-style suite with "expect"
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
// var expect = require('chai').expect;
// This test set is for not login condition
module.exports = {
  // Testing the page element like body, search box, logo and link, text, heading, footer and footer links
  'Recruiter forgot Password If Not Exist': function (browser) {
    browser.url(browser.launch_url); // redirect to home page url
    browser.waitForElementPresent('body', 5000); // wait for page body should be loaded.
    browser.assert.title('Landing - the best tech jobs in 1 place'); // match the home page title
    // checkHomePageElementsTextLink: define function to test all the elements present in home page. 
    var homePageElements = [{
        element: '.header-logo',
        text: '',
        link: ''
      },
      {
        element: '#user-header-search',
        text: '',
        link: ''
      },
      {
        element: '.page-heading',
        text: '',
        link: ''
      },
      {
        element: '.header-logo a',
        text: 'LANDING .CO',
        link: '/'
      },
      {
        element: '.page-heading h2',
        text: 'Browse Jobs',
        link: ''
      },
      {
        element: '.popular-tags',
        text: '',
        link: ''
      },
      {
        element: '.popular-tags .popular-tags-title',
        text: 'Popular Search Tags:',
        link: ''
      },
      {
        element: '.pagination',
        text: '',
        link: ''
      },
      {
        element: '.main-footer',
        text: '',
        link: ''
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
    // Home Page element check function start here 
    function checkHomePageElementsTextLink(homePageElements) {
      for (x in homePageElements) {
        var currentHomePageElements = homePageElements[x];
        if (currentHomePageElements.text != '' && currentHomePageElements.link != '') {
          browser.expect.element(currentHomePageElements.element).to.be.present;
          browser.expect.element(currentHomePageElements.element).to.be.visible;
          browser.expect.element(currentHomePageElements.element).text.to.contain(currentHomePageElements.text);
          browser.expect.element(currentHomePageElements.element).to.have.attribute('href').which.contains(currentHomePageElements.link);
        } else if (currentHomePageElements.text != '' && currentHomePageElements.link == '') {
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
    function navigation(items) {
      expect(items.value.length).to.equal(2); // Chai module
      browser.expect.element(menu + ':nth-of-type(1) a span').text.to.contain('FOR CANDIDATES');
      browser.expect.element(menu + ':nth-of-type(1) a').to.have.attribute('href').which.contains('/user/sign_up');
      browser.expect.element(menu + ':nth-of-type(2) a span').text.to.contain('FOR RECRUITERS');
      browser.expect.element(menu + ':nth-of-type(2) a').to.have.attribute('href').which.contains('/user/sign_up?is_recruiter=true');
    }
    browser.expect.element(menu).to.be.present;
    browser.expect.element(menu).to.be.visible;
    browser.elements('css selector', menu, navigation);

    function navigationAfterLogin(items) {
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-toggle .navbar-header .navbar-toggle').to.be.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-toggle .navbar-header .navbar-toggle').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu').to.be.present;
      browser.click(afterLoginMenu + ' .dropdown .dropdown-toggle .navbar-header .navbar-toggle', function (response) {
        this.assert.ok(browser === this, 'Recruiter header-menu dropdown-menu clicked.');
      });
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(1) a').to.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(1) a').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(1) a').text.to.equal('My Jobs');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(1) a').to.have.attribute('href').which.contains('/recruiter/jobs');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(2) a').to.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(2) a').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(2) a').text.to.equal('Add new Jobs');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(2) a').to.have.attribute('href').which.contains('/recruiter/jobs/new');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(3) a').to.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(3) a').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(3) a').text.to.equal('Candidate Database');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(3) a').to.have.attribute('href').which.contains('/recruiter/candidate_infos');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(4) a').to.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(4) a').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(4) a').text.to.equal('My Profile');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(4) a').to.have.attribute('href').which.contains('/profile/edit');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(5) a').to.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(5) a').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(5) a').text.to.equal('My Organisation & Team');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(5) a').to.have.attribute('href').which.contains('/recruiter/organisations');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(6) a').to.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(6) a').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(6) a').text.to.equal('Logout');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(6) a').to.have.attribute('href').which.contains('/user/sign_out');
    }
    browser.click('.recruiter-link a.ga-trackable', function (response) {
      this.assert.ok(browser === this, 'Recruiter link clicked, redirecting into recruiter signup page.');
    });
    browser.waitForElementPresent('body', 2000);
    browser.expect.element('.page-popup-like').to.be.present;
    browser.expect.element('.page-popup-like').to.be.visible;
    browser.expect.element('.page-popup-like .card-box h2.mb-15').text.to.equal('Recruiter Signup');
    browser.expect.element('label[for=user_email]').to.be.present;
    browser.expect.element('label[for=user_email]').to.be.visible;
    browser.expect.element('label[for=user_email]').text.to.contain('Email');
    browser.expect.element('input[id=user_email]').to.be.present;
    browser.expect.element('input[id=user_email]').to.be.visible;
    browser.expect.element('label[for=user_password]').to.be.present;
    browser.expect.element('label[for=user_password]').to.be.visible;
    browser.expect.element('label[for=user_password]').text.to.contain('Set your password');
    browser.expect.element('input[id=user_password]').to.be.present;
    browser.expect.element('input[id=user_password]').to.be.visible;
    browser.expect.element('input[name=commit]').to.be.present;
    browser.expect.element('input[name=commit]').to.be.visible;
    browser.expect.element('input[name=commit]').to.have.value.that.equals('Submit');
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').text.to.contain('Login with Google+');
    browser.assert.attributeContains('.pt-2 a.btn-googleplus', 'href', '/user/auth/google_oauth2?is_recruiter=true');
    browser.expect.element('.pt-2 a:nth-of-type(2)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(2)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(2)').text.to.contain('Already registered? Click here to Login');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(2)', 'href', '/user/sign_in');
    browser.expect.element('.pt-2 a:nth-of-type(3)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(3)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(3)').text.to.contain('Resend Email Confirmation');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(3)', 'href', '/user/confirmation/new');
    browser.expect.element('.pt-2 a:nth-of-type(4)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(4)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(4)').text.to.contain('Candidate Signup');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(4)', 'href', '/user/sign_up');
    browser.click('a.block.text-blue', function (response) {
      this.assert.ok(browser === this, 'Recruiter login page link clicked, redirecting recruiter login page.');
    });
    browser.waitForElementPresent('body', 2000);
    browser.expect.element('.page-popup-like .card-box h2.mb-15').text.to.equal('Recruiter Login');
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
    browser.expect.element('.f-pwd').to.be.present;
    browser.expect.element('.f-pwd').to.be.visible;
    browser.expect.element('.f-pwd').text.to.contain('(Forgot your password?)');
    browser.assert.attributeContains('.f-pwd', 'href', '/user/password/new?is_recruiter=true');
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
    browser.click('.f-pwd', function (response) {
      this.assert.ok(browser === this, 'Recruiter forgot password link clicked.');
    });
    browser.assert.urlEquals(browser.launch_url + '/user/password/new?is_recruiter=true', 'Recruiter Sucessfully redirect to forgot password page.');
    browser.expect.element('.alert.alert_success').to.be.present;
    browser.expect.element('.alert.alert_success').to.be.visible;
    browser.expect.element('.alert.alert_success').to.be.present;
    browser.expect.element('.alert.alert_success').to.be.visible;
    browser.expect.element('label[for=user_email]').to.be.present;
    browser.expect.element('label[for=user_email]').to.be.visible;
    browser.expect.element('.card-box .clearfix h2').to.be.present;
    browser.expect.element('.card-box .clearfix h2').to.be.visible;
    browser.expect.element('.card-box .clearfix h2').text.to.equal('Forgot your password?');
    browser.expect.element('label[for=user_email]').text.to.contain('Email');
    browser.expect.element('input[name=commit]').to.be.present;
    browser.expect.element('input[name=commit]').to.be.visible;
    browser.expect.element('input[name=commit]').to.have.value.that.equals('Email Password Reset Link');
    browser.expect.element('.btn-googleplus').to.be.present;
    browser.expect.element('a.btn-googleplus').to.be.visible;
    browser.expect.element('a.btn-googleplus').text.to.contain('Login with Google+');
    browser.assert.attributeContains('a.btn-googleplus', 'href', '/user/auth/google_oauth2?is_recruiter=true');
    browser.setValue('input[id=user_email]', 'sushilkundu14344@gmail.com');
    browser.click('input[type=submit]');
    browser.pause(5000);
    browser.expect.element('.alert.alert-danger').to.be.present;
    browser.expect.element('.alert.alert-danger').to.be.visible;
    browser.assert.urlContains('/user/password/new?is_recruiter=true', 'Recruiter is not exist.');
    browser.end();
  }
};