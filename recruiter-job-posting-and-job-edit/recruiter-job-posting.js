// BDD-style suite with "expect"
var chai = require('chai');  
var assert = chai.assert; 
var expect = chai.expect;
var should = chai.should();
// var expect = require('chai').expect;
// This test set is for not login condition
module.exports = {
  // Testing the page element like body, search box, logo and link, text, heading, footer and footer links
  'Recruiter Job Posting': function (browser) {
    var menu = '.links .links-item', afterLoginMenu = '.headerlink-with-icon';
    browser.url(browser.launch_url); // open url https://landing.co
    browser.waitForElementPresent('body', 5000); //check if the body is to be present
    browser.assert.title('Landing - the best tech jobs in 1 place'); // match the page title
    // test home page element to be present and visible
    var home = ['.header-logo', '#user-header-search', '.page-heading', '.header-logo a', '.page-heading h2', '.pagination', '.main-footer'];
    function homeElement(){
      for(var i = 0; i < home.length; i++){
        currentElement = home[i];
        browser.expect.element(currentElement).to.be.present;
        browser.expect.element(currentElement).to.be.visible;
      }
    }
    homeElement();
    // page element text contain
    var pageTextElement = [
    { element : '.header-logo a', text : 'LANDING .CO' },
    { element : '.main-footer .container a:nth-of-type(2)', text : 'LANDING .CO' },
    { element : '.page-heading h2', text : 'Browse Jobs' },
    { element : '.popular-tags .popular-tags-title',  text : 'Popular Search Tags:' },
    { element : '.main-footer .container a:nth-of-type(1)', text : 'Browse Jobs' }
    ];
    function pageTextElementFn(){
      for(var i = 0; i < pageTextElement.length; i++){
        var current = pageTextElement[i];
        browser.expect.element(current.element).text.to.contain(current.text);
      }
    }
    pageTextElementFn();
    // page element link test
    var pagelinkElement = [
    { element : '.header-logo a', link : '/' },
    { element : '.main-footer .container a:nth-of-type(1)', link : '/sitemap' },
    { element : '.main-footer .container a:nth-of-type(2)', link : '/' }
    ];
    function pagelinkElementEn(){
      for(var i = 0; i < pagelinkElement.length; i++){
        var currentPageElement = pagelinkElement[i];
        browser.expect.element(currentPageElement.element).to.have.attribute('href').which.contains(currentPageElement.link);
      }
    }
    pagelinkElementEn();
    // menu links check when not login
    var notLogin = [
     { element : menu + ':nth-of-type(1) a',  text : 'FOR CANDIDATES',  link : '/user/sign_up' },
     { element : menu + ':nth-of-type(2) a', text : 'FOR RECRUITERS', link : '/user/sign_up?is_recruiter=true' }
    ];
    //
    function navigation(items) {
      expect(items.value.length).to.equal(2); // Chai module
      for(var i; i < notLogin.length; i++){
        var current = notLogin[i];
        browser.expect.element(current.element).text.to.contain(current.text);
      browser.expect.element(current.element).to.have.attribute('href').which.contains(current.link);
      }
    }
    browser.expect.element(menu).to.be.present;
    browser.expect.element(menu).to.be.visible;
    browser.elements('css selector', menu, navigation);
    // after login menu testing
    var el = [
        { linkTag : afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(1) a', linkTitle : 'My Jobs', linkHref : '/recruiter/jobs' },
        { linkTag : afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(2) a', linkTitle : 'Add new Jobs', linkHref : '/recruiter/jobs/new' },
        { linkTag : afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(3) a', linkTitle : 'Candidate Database', linkHref : '/recruiter/candidate_infos' },
        { linkTag : afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(4) a', linkTitle : 'My Profile', linkHref : '/profile/edit' },
        { linkTag : afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(5) a', linkTitle : 'My Organisation & Team', linkHref : '/recruiter/organisations' },
        { linkTag : afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(6) a', linkTitle : 'Logout', linkHref : '/user/sign_out' }
      ];
    function navigationAfterLogin(el) {
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-toggle .navbar-header .navbar-toggle').to.be.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-toggle .navbar-header .navbar-toggle').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu').to.be.present;
      browser.click(afterLoginMenu + ' .dropdown .dropdown-toggle .navbar-header .navbar-toggle', function(response) {
        this.assert.ok(browser === this, 'Recruiter header-menu dropdown-menu clicked.');
      });
      for(var i = 0; i < el.length; i++){
       // console.log(el[i].linkTag , el[i].linkTitle , el[i].linkHref);
        browser.expect.element(el[i].linkTag).to.present;
        browser.expect.element(el[i].linkTag).to.be.visible;
        browser.expect.element(el[i].linkTag).text.to.equal(el[i].linkTitle);
        browser.expect.element(el[i].linkTag).to.have.attribute('href').which.contains(el[i].linkHref);
      }
    }
    browser.click('.recruiter-link a.ga-trackable', function(response){
      this.assert.ok(browser === this, 'Recruiter link clicked, redirecting into recruiter signup page.');
    });
    browser.waitForElementPresent('body', 2000);
    browser.expect.element('.page-popup-like').to.be.present;
    browser.expect.element('.page-popup-like').to.be.visible;
    browser.expect.element('.page-popup-like .card-box h2.mb-15').text.to.equal('Recruiter Signup');
    function formInputElementsLabelCheck(element, text){
      browser.expect.element(element).to.be.present;
      browser.expect.element(element).to.be.visible;
      browser.expect.element(element).text.to.contain(text);
    }
    formInputElementsLabelCheck('label[for=user_email]', 'Email');
    formInputElementsLabelCheck('label[for=user_password]', 'Set your password');
    formInputElementsLabelCheck('label[for=designation]', 'Your Name');
    formInputElementsLabelCheck('label[for=company]', 'Company Name');
    formInputElementsLabelCheck('label[for=phone]', 'Mobile Number');
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
    browser.setValue('input[type=email]', 'kapur.r1985@gmail.com');
    browser.setValue('input[type=password]', 'goodservice');
    browser.click('input[type=submit]');
    browser.pause(5000);
    navigationAfterLogin(el);
    //browser.elements('css selector', afterLoginMenu, navigationAfterLogin);
    browser.assert.urlEquals(browser.launch_url + '/recruiter/candidate_infos', 'Recruiter login Sucessful.');
    browser.click(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(2) a', function(response){
      this.assert.ok(browser === this, 'Add New Job link clicked. Redirecting to create new job page');
      browser.waitForElementPresent('body', 1000);
      browser.expect.element('body').to.be.visible;
      browser.expect.element('.forms-box-desktop').to.be.present;
      browser.expect.element('.forms-box-desktop').to.be.visible;
      browser.assert.urlEquals( browser.launch_url + '/recruiter/jobs/new');
    });
    browser.expect.element('.card-box h2').text.to.contain('Add a Job');
    browser.expect.element('#new_job_posting').to.be.present;
    browser.expect.element('#new_job_posting').to.be.visible;
    // job posting form element label check
    var elementForm =  '#new_job_posting .form-group';
    var el = [
      { tag : elementForm + ':nth-of-type(1) .row .col-md-4.col-sm-4 label.control-label', text : 'Who can access this job' },
      { tag: elementForm + ':nth-of-type(2) .row .col-md-4.col-sm-4 label.control-label', text : 'Select your company' },
      { tag: elementForm + ':nth-of-type(3) .row .col-md-4.col-sm-4 label.control-label', text : 'Role' },
      { tag : elementForm + ':nth-of-type(4) .row .col-md-4.col-sm-4 label.control-label', text : 'Job Title' },
      { tag : elementForm + ':nth-of-type(5) .row .col-md-4.col-sm-4 label.control-label', text : 'Skills' },
      { tag : elementForm + ':nth-of-type(6) .row .col-md-4.col-sm-4 label.control-label', text : 'Function' },
      { tag : elementForm + ':nth-of-type(7) .row .col-md-4.col-sm-4 label.control-label', text : 'City' },
      { tag: elementForm + ':nth-of-type(8) .row .col-md-4 label.control-label', text : 'Work Experience' },
      { tag : elementForm + ':nth-of-type(9) .row .col-md-4 label.control-label',  text : 'Salary Range' },
      { tag : elementForm + ':nth-of-type(10) .row .col-md-4 label.control-label',  text : 'Job Description' }
    ];
    function checkFormElementLavels(el){
      for(var i = 0; i < el.length; i++){
        var currentEl = el[i];
        browser.expect.element(currentEl.tag).to.be.present;
        browser.expect.element(currentEl.tag).to.be.visible;
        browser.expect.element(currentEl.tag).text.to.equal(currentEl.text);
      }
    }
    checkFormElementLavels(el);
    browser.pause(2000);
    // check form input element presents
    var input = [
      'job_posting_is_visible_to_all_team_members', 
      'job_posting_recruiter_team_id',
      'js-complete-algoliadesignation',
      'job_posting_title',
      'job_posting_skills_text-tokenfield',
      'job_posting_function_name',
      'location',
      'job_posting_min_experience',
      'job_posting_max_experience',
      'job_posting_min_salary',
      'job_posting_max_salary',
      'cke_job_posting_job_description'
    ];
    function testFormElements(){
      for(var i = 0; i < input.length; i++){
        var currentInput = input[i];
        browser.expect.element('#' + currentInput).to.be.present;
        browser.expect.element('#' + currentInput).to.be.visible;
      }
    }
    testFormElements();
    browser.click('select[id="job_posting_is_visible_to_all_team_members"]', function(response){
      this.assert.ok(browser === this, 'Select job visibility dropdown clicked.');
    });
    browser.waitForElementVisible("option[value='true']", 2000);
    browser.click("option[value='true']", function(response){
      this.assert.ok(browser === this, 'Select job visibility dropdown clicked and option value selected.');
    });
    browser.click('select[id="job_posting_recruiter_team_id"]', function(response){
      this.assert.ok(browser === this, 'Select team dropdown clicked.');
    });
    // set company id form the option value. For example here is : 670483.
    browser.waitForElementVisible("option[value='670483']", 2000);
    browser.click("option[value='670483']", function(response){
      this.assert.ok(browser === this, 'Select team dropdown clicked and value selected.');
    });
    browser.setValue('#' + input[2], 'UI Test Automation Engineer');
    browser.setValue('#' + input[3], 'UI Test Automation Engineer');
    browser.setValue('#' + input[4], 'Selenium, Nightwatch, Chai, Node.js, npm, End To End Testing,');
    browser.click('#' + input[5], function(response){
      this.assert.ok(browser === this, 'Job function dropdown clicked.');
    });
    browser.waitForElementVisible("option[value='Software Development']", 2000);
    browser.click("option[value='Software Development']", function(response){
      this.assert.ok(browser === this, 'Job function dropdown clicked and option value selected.');
    });
    browser.clearValue('#' + input[6]);
    browser.setValue('#' + input[6], 'Delhi, India');
    browser.pause(1000);
    browser.waitForElementPresent('.pac-container.pac-logo', 2000);
    browser.waitForElementPresent('.pac-container.pac-logo .pac-item:nth-of-type(1)', 2000);
    browser.click('.pac-container.pac-logo .pac-item:nth-of-type(1)', function(response){
      this.assert.ok(browser === this, 'City name selected.');
    });
    browser.click('#' + input[7], function(response){
      this.assert.ok(browser === this, 'Job function dropdown clicked.');
    });
    browser.waitForElementVisible('#' + input[7] + " option[value='2']", 2000);
    browser.click('#' + input[7] + " option[value='2']", function(response){
      this.assert.ok(browser === this, 'Job function dropdown clicked and option value selected.');
    });
    browser.click('#' + input[8], function(response){
      this.assert.ok(browser === this, 'Job function dropdown clicked.');
    });
    browser.waitForElementVisible('#' + input[8] + " option[value='3']", 2000);
    browser.click('#' + input[8] + " option[value='3']", function(response){
      this.assert.ok(browser === this, 'Job function dropdown clicked and option value selected.');
    });
    browser.click('#' + input[9], function(response){
      this.assert.ok(browser === this, 'Job function dropdown clicked.');
    });
    browser.waitForElementVisible('#' + input[9] + " option[value='2']", 2000);
    browser.click('#' + input[9] + " option[value='2']", function(response){
      this.assert.ok(browser === this, 'Job function dropdown clicked and option value selected.');
    });
    browser.click('#' + input[10], function(response){
      this.assert.ok(browser === this, 'Job function dropdown clicked.');
    });
    browser.waitForElementVisible('#' + input[10] + " option[value='4']", 2000);
    browser.click('#' + input[10] + " option[value='4']", function(response){
      this.assert.ok(browser === this, 'Job function dropdown clicked and option value selected.');
    });
    browser.expect.element('#cke_1_contents').to.be.present;
    browser.expect.element('#cke_1_contents').to.be.visible;
    browser.execute('$(".cke_wysiwyg_frame.cke_reset").contents().find("body").html("Good analytical skills; Good in SQL, Coding and scripting with one or more of the following tool Coded UI, HP QTP/UFT. Knowledge of tools like Quality Center/MS TFS for Test repository and defect reporting and tracking; DB2 concepts; SQL; Automation tools like Coded UI, QTP.")');
    browser.expect.element('input[name=commit]').to.be.present;
    browser.expect.element('input[name=commit]').to.be.visible;
    browser.click('input[name=commit]');
    browser.pause(10000);
    browser.assert.urlContains('candidate_infos', 'Redirect to candidate listing page. Job sucessfully posted.');
    browser.pause(3000);
    browser.end();
  }
};