// BDD-style suite with "expect"
var chai = require('chai');  
var assert = chai.assert; 
var expect = chai.expect;
var should = chai.should();
// var expect = require('chai').expect;
// This test set is for not login condition
module.exports = {
  // Testing the page element like body, search box, logo and link, text, heading, footer and footer links
  'Recruiter  Add Team Member': function (browser) {
    var menu = '.links .links-item', 
    afterLoginMenu = '.headerlink-with-icon',
    afterLoginMenuItem = '.headerlink-with-icon .dropdown .dropdown-menu li';
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
    // browser.saveScreenshot('./screenshots/expect-home.png');
    // candidate home page menu links test when not login.
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
    // recruiter header links test after login
    function recruiterMenuDropdown(element){
      // each of menu items with in menu dropdown test - presents, visiblity, inner text and link attributes
      for(var i = 0; i < element.length; i++){
        var currentElement = element[i];
        browser.expect.element(currentElement.linkSelector).to.present; // current link item presents test
        browser.expect.element(currentElement.linkSelector).to.be.visible; // current link item visibility test
        browser.expect.element(currentElement.linkSelector).text.to.equal(currentElement.linkText); // current link item inner-text test 
        browser.expect.element(currentElement.linkSelector).to.have.attribute('href').which.contains(currentElement.linkurl); // current link item url attribure test
      }      
    }
    function navigationAfterLogin(items) {
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-toggle .navbar-header .navbar-toggle').to.be.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-toggle .navbar-header .navbar-toggle').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu').to.be.present;
      browser.pause(4000);
      browser.click(afterLoginMenu + ' .dropdown .dropdown-toggle .navbar-header .navbar-toggle', function(response) {
        browser.waitForElementVisible(afterLoginMenu + ' .dropdown .dropdown-menu', 4000);
        this.assert.ok(browser === this, 'Recruiter header-menu dropdown-menu clicked.');
      });
      // make list of array of all link item in recruiter-menu dropdown after login
      var menuItems = [
        { linkSelector : afterLoginMenuItem + ':nth-of-type(1) a', linkText : 'My Jobs', linkurl : '/recruiter/jobs' },
        { linkSelector : afterLoginMenuItem + ':nth-of-type(2) a', linkText : 'Add new Jobs', linkurl : '/recruiter/jobs/new' },
        { linkSelector : afterLoginMenuItem + ':nth-of-type(3) a', linkText : 'Candidate Database', linkurl : '/recruiter/candidate_infos' },
        { linkSelector : afterLoginMenuItem + ':nth-of-type(4) a', linkText : 'My Profile', linkurl : '/profile/edit' },
        { linkSelector : afterLoginMenuItem + ':nth-of-type(5) a', linkText : 'My Organisation & Team', linkurl : '/recruiter/organisations' },
        { linkSelector : afterLoginMenuItem + ':nth-of-type(6) a', linkText : 'Logout', linkurl : '/user/sign_out' }
      ];
      recruiterMenuDropdown(menuItems);
    }
    browser.click('.recruiter-link a.ga-trackable', function(response){
      this.assert.ok(browser === this, 'Recruiter link clicked, redirecting into recruiter signup page.');
    });
    browser.waitForElementPresent('body', 2000);
    browser.expect.element('.page-popup-like').to.be.present; // test the element with following selector is present in page
    browser.expect.element('.page-popup-like').to.be.visible; // test the element with following selector is visible
    browser.expect.element('.page-popup-like .card-box h2.mb-15').text.to.equal('Recruiter Signup'); // test element with following selector is having text equal to 'Recruiter Signup'
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
    browser.click('a.block.text-blue', function(response){
      this.assert.ok(browser === this, 'Recruiter login page link clicked, redirecting recruiter login page.');
    });
    browser.waitForElementPresent('body', 2000);
    // recruiter login form, input element and label test
    browser.expect.element('.page-popup-like .card-box h2.mb-15').text.to.equal('Recruiter Login');
    var recruiterLoginFormElementsSet = [
      {elementSelector : 'input[id=user_email]', labelSelector: 'label[for=user_email]' , elementLabelText: 'Email'},
      {elementSelector : 'input[id=user_password]', labelSelector: 'label[for=user_password]' , elementLabelText: 'Password'},
      {elementSelector : 'input[name=commit]', labelSelector: '' , elementLabelText: ''},
    ];
    function recruiterLoginFormElements(recruiterLoginFormElementsSet){
      for(var i = 0; i < recruiterLoginFormElementsSet.length; i++){
        var currentElements = recruiterLoginFormElementsSet[i];
        if(currentElements.labelSelector !== '' && currentElements.elementLabelText !== ''){
          browser.expect.element(currentElements.labelSelector).to.be.present;
          browser.expect.element(currentElements.labelSelector).to.be.visible;
          browser.expect.element(currentElements.labelSelector).text.to.contain(currentElements.elementLabelText);
          browser.expect.element(currentElements.elementSelector).to.be.present;
          browser.expect.element(currentElements.elementSelector).to.be.visible;
        } else {
          browser.expect.element(currentElements.elementSelector).to.be.present;
          browser.expect.element(currentElements.elementSelector).to.be.visible;
        }
      }
    }
    recruiterLoginFormElements(recruiterLoginFormElementsSet);
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
    browser.setValue('input[type=email]', 'kapur.r1985@gmail.com');
    browser.setValue('input[type=password]', 'goodservice');
    browser.click('input[type=submit]', function(response){
      this.assert.ok(browser === this, 'Recruiter login form clicked.');
    });
    browser.waitForElementVisible('body.layout3.new-design', 2000);
    browser.elements('css selector', menu, navigationAfterLogin);
    browser.assert.urlEquals(browser.launch_url + '/recruiter/candidate_infos', 'Recruiter login Sucessful.');
    browser.waitForElementNotPresent('.loader-modal:nth-of-type(1)', 1000);
    // browser.waitForElementNotVisible('.loader-modal:nth-of-type(1)', 1000);
    // the candidate you want search need to set the full name and candidate id here
    var candidate = 'Rahul Kapur', id = '1304461', url = '/recruiter/candidate_infos/';
    browser.setValue('input.form-control.ui-autocomplete-input',[ candidate ,  browser.Keys.ENTER]);
    // browser.expect.element('a[href="' + url + id + '"]').to.be.present;
    // browser.expect.element('a[href="' + url + id + '"]').to.be.visible;
    browser.pause(3000);
    browser.url( browser.launch_url + url + id, function(response){
      browser.waitForElementPresent('body.layout3.new-design', 3000);
      browser.waitForElementVisible('body.layout3.new-design', 3000);
      browser.waitForElementNotPresent('div.loader-modal:nth-of-type(1)', 1000);
      // browser.waitForElementNotVisible('div.loader-modal:nth-of-type(1)', 1000);
    });
    browser.pause(2000);
    browser.click('button.btn.btn-primary.outline.button-blue.dropdown-toggle', function(response){
      this.assert.ok(browser === this, 'Click on message button in candidate profile.');
    });
    browser.expect.element('ul.dropdown-menu.w-100.dropdown-align').to.be.present;
    browser.expect.element('ul.dropdown-menu.w-100.dropdown-align').to.be.visible;
    browser.click('ul.dropdown-menu.w-100.dropdown-align li:last-child a', function(response){
      this.assert.ok(browser === this, 'Click on custom message link form the dropdown.');
       browser.waitForElementPresent('.modal .modal-dialog.lg-full', 2000);
       browser.waitForElementVisible('.modal .modal-dialog.lg-full', 2000);
    });
    /*
    browser.click('a[href="' + url + id + '"]', function(response){
        this.assert.ok(browser === this, 'Clicked on candidate resume link.');
    });
    */
    browser.expect.element('.modal-content.rightCustom .modal-footer button.btn.btn-primary').to.be.present;
    browser.expect.element('.modal-content.rightCustom .modal-footer button.btn.btn-primary').to.be.visible;
    browser.click('.modal-content.rightCustom button.btn.btn-primary', function(response){
      this.assert.ok(browser === this, 'Message sending.');
      browser.waitForElementPresent('.modal-content.rightCustom .modal-body .alert.alert-danger.mb-0', 2000);
      browser.waitForElementVisible('.modal-content.rightCustom .modal-body .alert.alert-danger.mb-0', 2000);
    });                  
    browser.execute('$(".cke_wysiwyg_frame.cke_reset").contents().find("body").html("Hey this is a test. This mail is sended to you only for test purpose. Please ignore this email.")');
    browser.click('.modal-content.rightCustom button.btn.btn-primary', function(response){
      this.assert.ok(browser === this, 'Custom message sucessfully in sending process.'); 
    });
    browser.pause(2000);
    browser.end();
  }
};