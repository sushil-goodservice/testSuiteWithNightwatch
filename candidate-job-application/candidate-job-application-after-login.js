// BDD-style suite with "expect"
var chai = require('chai');  
var assert = chai.assert; 
var expect = chai.expect;
var should = chai.should();
// var expect = require('chai').expect;
// This test set is for not login condition
module.exports = {
  // Testing the page element like body, search box, logo and link, text, heading, footer and footer links
  'Candidate job application after login': function (browser) {
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
    function navigationAfterLogin(items) {
      browser.expect.element(menu + ' .profile-link a.dropdown-toggle').to.be.present;
      browser.expect.element(menu + ' .profile-link a.dropdown-toggle').to.be.visible;
      browser.expect.element(menu + ' .profile-link a.dropdown-toggle  > span.d-block').text.to.contain('MY PROFILE');
      browser.click(menu + ' .profile-link a.dropdown-toggle', function(response) {
        this.assert.ok(browser === this, 'Candidate dropdown-menu clicked.');
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
    browser.click('a.ga-trackable');
    browser.waitForElementPresent('body', 2000);
    browser.expect.element('.page-popup-like').to.be.present;
    browser.expect.element('.page-popup-like').to.be.visible;
    browser.expect.element('.page-popup-like .card-box h2.mb-15').text.to.equal('Candidate Signup');
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
    browser.assert.attributeContains('.pt-2 a.btn-googleplus', 'href', '/user/auth/google_oauth2');
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
    browser.expect.element('.pt-2 a:nth-of-type(4)').text.to.contain('Recruiter Signup');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(4)', 'href', '/user/sign_up?is_recruiter=true');
    browser.click('a.block.text-blue');
    browser.waitForElementPresent('body', 2000);
    browser.expect.element('.page-popup-like .card-box h2.mb-15').text.to.equal('Candidate Login');
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
    browser.assert.attributeContains('.f-pwd', 'href', '/user/password/new');
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').text.to.contain('Login with Google+');
    browser.assert.attributeContains('.pt-2 a.btn-googleplus', 'href', '/user/auth/google_oauth2');
    browser.expect.element('.pt-2 a:nth-of-type(2)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(2)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(2)').text.to.contain('New User? Click here to Signup');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(2)', 'href', '/user/sign_up');
    browser.expect.element('.pt-2 a:nth-of-type(3)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(3)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(3)').text.to.contain('Resend Email Confirmation');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(3)', 'href', '/user/confirmation/new');
    browser.expect.element('.pt-2 a:nth-of-type(4)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(4)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(4)').text.to.contain('Recruiter Login');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(4)', 'href', '/user/sign_in?is_recruiter=true');
    browser.setValue('input[type=email]', 'sushilkundu143@gmail.com');
    browser.setValue('input[type=password]', 'goodservice');
    browser.click('input[type=submit]');
    browser.pause(5000);
    browser.elements('css selector', menu, navigationAfterLogin);
    browser.assert.urlEquals(browser.launch_url + '/j', 'Candidate login Sucessful.');
    browser.clearValue('input[name=q]', function(response){
        this.assert.ok(browser === this, 'Clear the search input field.')
    });
    browser.setValue('input[name=q]', [ 'XXX Tester', browser.Keys.ENTER]);
    // match the job id = 74292 which we are going to apply.
    browser.expect.element('.jobs-listings .jobs-list a').to.have.attribute('href').which.contains('74292');
    browser.click('.jobs-listings .jobs-list a', function(response){
        this.assert.ok(browser === this, 'clicked to apply link to redirect job details page.');
    });
    browser.pause(2000);
    browser.waitForElementPresent('body', 3000);
    browser.click('.js-job-apply', function(response){
      this.assert.ok(browser === this, 'job applied and redirecting to candidate home page.');
    });
    browser.pause(5000);
    browser.assert.urlContains(browser.launch_url , 'Job Application Submitted.');
    browser.end();
  }
};