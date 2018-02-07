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
    // check the candidate header navigation link when not login start here
    var menu = '.links .links-item'; // menu element
    var menuNotLoginElements = [{
        element: menu + ':nth-of-type(1) a',
        text: 'FOR CANDIDATES',
        link: '/user/sign_up'
      },
      {
        element: menu + ':nth-of-type(2) a',
        text: 'FOR RECRUITERS',
        link: '/user/sign_up?is_recruiter=true'
      }
    ];

    function navigation(menu, menuNotLoginElements) {
      browser.expect.element(menu).to.be.present;
      browser.expect.element(menu).to.be.visible;
      for (i in menuNotLoginElements) {
        var currentMenuNotLoginElements = menuNotLoginElements[i];
        browser.expect.element(currentMenuNotLoginElements.element).text.to.contain(currentMenuNotLoginElements.text);
        browser.expect.element(currentMenuNotLoginElements.element).to.have.attribute('href').which.contains(currentMenuNotLoginElements.href);
      }
    }
    navigation(menu, menuNotLoginElements);
    // candidate header navigation link check end here when not login
    browser.click('a.ga-trackable', function (response) {
      this.assert.ok(browser === this, 'Candidate signup page link clicked.');
    });
    // candidate signup page elements, form elements, links, inner text and buttons check - start here
    browser.waitForElementPresent('body', 2000);
    // check candidate signup should be present and visible
    browser.expect.element('form#new_user').to.be.present;
    browser.expect.element('form#new_user').to.be.visible;
    // candidate signup page elements, links and button
    var signupPageElements = [{
        selector: '.page-popup-like',
        text: '',
        link: ''
      },
      {
        selector: '.page-popup-like .card-box h2.mb-15',
        text: 'Candidate Signup',
        link: ''
      },
      {
        selector: '.pt-2 a:nth-of-type(1).btn-googleplus',
        text: 'Login with Google+',
        link: '/user/auth/google_oauth2'
      },
      {
        selector: '.pt-2 a:nth-of-type(2)',
        text: 'Already registered? Click here to Login',
        link: '/user/sign_in'
      },
      {
        selector: '.pt-2 a:nth-of-type(3)',
        text: 'Resend Email Confirmation',
        link: '/user/confirmation/new'
      },
      {
        selector: '.pt-2 a:nth-of-type(4)',
        text: 'Recruiter Signup',
        link: '/user/sign_up?is_recruiter=true'
      },
    ];
    // candidate singup page elements should be present and visible. Match the link and inner text of anchor tags.
    function candidateSignupPageElements(signupPageElements) {
      for (x in signupPageElements) {
        var currentSignupPageElements = signupPageElements[x];
        if (currentSignupPageElements.text !== '' && currentSignupPageElements.link !== '') {
          browser.expect.element(currentSignupPageElements.selector).to.be.present;
          browser.expect.element(currentSignupPageElements.selector).to.be.visible;
          browser.expect.element(currentSignupPageElements.selector).text.to.equal(currentSignupFormElements.text);
          browser.assert.attributeContains(currentSignupPageElements.selector, 'href', currentSignupFormElements.link);
        } else if (currentSignupPageElements.text !== '' && currentSignupPageElements.link == '') {
          browser.expect.element(currentSignupPageElements.selector).to.be.present;
          browser.expect.element(currentSignupPageElements.selector).to.be.visible;
          browser.expect.element(currentSignupPageElements.selector).text.to.equal(currentSignupPageElements.text);
        } else {
          browser.expect.element(currentSignupPageElements.selector).to.be.present;
          browser.expect.element(currentSignupPageElements.selector).to.be.visible;
        }
      }
    }
    candidateSignupPageElements(signupPageElements);
    // Candidate signup form elements, labels, innter text and inputs
    var signupFormElements = [{
        label: 'label[for=user_email]',
        labelText: 'Email',
        labelInput: 'input[id=user_email]'
      },
      {
        label: 'label[for=user_password]',
        labelText: 'Set your password',
        labelInput: 'input[id=user_password]'
      },
      {
        label: '',
        labelText: 'Submit',
        labelInput: 'input[name=commit]'
      }
    ];
    // candidate signup form elements, labelsm inner text and input check
    function candidateSignupFormElements(signupFormElements) {
      for (x in signupFormElements) {
        var currentSignupFormElement = signupFormElements[x];
        if (currentSignupFormElement.label !== '') {
          browser.expect.element(currentSignupFormElement.label).to.be.present;
          browser.expect.element(currentSignupFormElement.label).to.be.visible;
          browser.expect.element(currentSignupFormElement.label).text.to.contain(currentSignupFormElement.labelText);
          browser.expect.element(currentSignupFormElement.labelInput).to.be.present;
          browser.expect.element(currentSignupFormElement.labelInput).to.be.visible;
        } else {
          browser.expect.element(currentSignupFormElement.labelInput).to.be.present;
          browser.expect.element(currentSignupFormElement.labelInput).to.be.visible;
          browser.expect.element(currentSignupFormElement.labelInput).to.have.value.that.equals(currentSignupFormElement.labelText);
        }
      }
    }
    candidateSignupFormElements(signupFormElements);
    // candidate signup page elements, form elements, links and buttons check - end here
    browser.click('a.block.text-blue', function (response) {
      this.assert.ok(browser === this, 'Candidate login page link clicked and redirect to candidate login page.');
    });
    // candidate login page elements, form elements, links and button check - start here
    browser.waitForElementPresent('body', 2000);
    // candidate login page elements, selector, inner text and link check
    var loginPageElements = [{
        selector: '.page-popup-like',
        text: '',
        link: ''
      },
      {
        selector: '.page-popup-like .card-box h2.mb-15',
        text: 'Candidate Login',
        link: ''
      },
      {
        selector: '.f-pwd',
        text: '(Forgot your password?)',
        link: '/user/password/new'
      },
      {
        selector: '.pt-2 a:nth-of-type(1).btn-googleplus',
        text: 'Login with Google+',
        link: '/user/auth/google_oauth2'
      },
      {
        selector: '.pt-2 a:nth-of-type(2)',
        text: 'New User? Click here to Signup',
        link: '/user/sign_up'
      },
      {
        selector: '.pt-2 a:nth-of-type(3)',
        text: 'Resend Email Confirmation',
        link: '/user/confirmation/new'
      },
      {
        selector: '.pt-2 a:nth-of-type(4)',
        text: 'Recruiter Login',
        link: '/user/sign_in?is_recruiter=true'
      },
    ];
    // candidate login page elements should be present and visible. Match the link and inner text of anchor tags.
    function candidateSignupPageElements(loginPageElements) {
      for (x in loginFormElements) {
        var currentLoginPageElements = loginFormElements[x];
        if (currentLoginPageElements.text !== '' && currentLoginPageElements.link !== '') {
          browser.expect.element(currentLoginPageElements.selector).to.be.present;
          browser.expect.element(currentLoginPageElements.selector).to.be.visible;
          browser.expect.element(currentLoginPageElements.selector).text.to.equal(currentLoginPageElements.text);
          browser.assert.attributeContains(currentLoginPageElements.selector, 'href', currentLoginPageElements.link);
        } else if (currentLoginPageElements.text !== '' && currentLoginPageElements.link == '') {
          browser.expect.element(currentLoginPageElements.selector).to.be.present;
          browser.expect.element(currentLoginPageElements.selector).to.be.visible;
          browser.expect.element(currentLoginPageElements.selector).text.to.equal(currentLoginPageElements.text);
        } else {
          browser.expect.element(currentLoginPageElements.selector).to.be.present;
          browser.expect.element(currentLoginPageElements.selector).to.be.visible;
        }
      }
    }
    candidateSignupPageElements(loginPageElements);
    // candidate login page element tesing end here
    // candidate login form testing - start here
    var loginFormElements = [{
        label: 'label[for=user_email]',
        labelText: 'Email',
        labelInput: 'input[id=user_email]'
      },
      {
        label: 'label[for=user_password]',
        labelText: 'Password',
        labelInput: 'input[id=user_password]'
      },
      {
        label: '',
        labelText: 'Login',
        labelInput: 'input[name=commit]'
      }
    ];
    // candidate signup form elements, labelsm inner text and input check
    function candidateLoginFormElements(loginFormElements) {
      for (x in loginFormElements) {
        var currentLoginFormElement = loginFormElements[x];
        if (currentLoginFormElement.label !== '') {
          browser.expect.element(currentLoginFormElement.label).to.be.present;
          browser.expect.element(currentLoginFormElement.label).to.be.visible;
          browser.expect.element(currentLoginFormElement.label).text.to.contain(currentLoginFormElement.labelText);
          browser.expect.element(currentLoginFormElement.labelInput).to.be.present;
          browser.expect.element(currentLoginFormElement.labelInput).to.be.visible;
        } else {
          browser.expect.element(currentLoginFormElement.labelInput).to.be.present;
          browser.expect.element(currentLoginFormElement.labelInput).to.be.visible;
          browser.expect.element(currentLoginFormElement.labelInput).to.have.value.that.equals(currentLoginFormElement.labelText);
        }
      }
    }
    candidateLoginFormElements(loginFormElements);
    // candidate login form testing - end here
    // candidate login page elements, form elements, links and button check - end here
    // candidate login start here
    function candidateLogin() {
      browser.setValue('input[type=email]', 'sushilkundu143@gmail.com');
      browser.setValue('input[type=password]', 'goodservice');
      browser.click('input[type=submit]');
    }
    candidateLogin();
    browser.pause(5000);
    // candidate login sucessfully here
    // Check the navigation menu elements and corresponding links element after login start here 
    var mainMenuIcon = menu + ' .profile-link a.dropdown-toggle',
      menuDropdownAfterLogin = menu + ':nth-of-type(1) .profile-link ul.dropdown-menu';
    var menuLoginElements = [{
        selector: menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(1) a',
        text: 'My Profile',
        href: '/profile/edit'
      },
      {
        selector: menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(2) a',
        text: 'Logout',
        href: '/user/sign_out'
      },
      {
        selector: menu + ':nth-of-type(2) a',
        text: 'FOR RECRUITERS',
        href: '/user/sign_up?is_recruiter=true'
      }
    ];
    function navigationAfterLogin(mainMenuIcon, menuLoginElements) {
      browser.expect.element(mainMenuIcon).to.be.present;
      browser.expect.element(mainMenuIcon).to.be.visible;
      browser.expect.element(mainMenuIcon + ' span.d-block').text.to.contain('MY PROFILE');
      browser.click(mainMenuIcon, function (response) {
        this.assert.ok(browser === this, 'Candidate dropdown-menu clicked.');
      });
      browser.expect.element(menuDropdownAfterLogin).to.be.present;
      for (i in menuLoginElements) {
        var currentMenuLoginElement = menuLoginElements[i];
        browser.expect.element(currentMenuLoginElement.selector).to.present;
        browser.expect.element(currentMenuLoginElement.selector).text.to.equal(currentMenuLoginElement.text);
        browser.expect.element(currentMenuLoginElement.selector).to.have.attribute('href').which.contains(currentMenuLoginElement.href);
      }
    }
    navigationAfterLogin(mainMenuIcon, menuLoginElements);
    // check the navigation menu elements and corresponding links elements after login end here
    browser.assert.urlEquals(browser.launch_url + '/j', 'Candidate login Sucessful.');
    // Click on Candidate Profile link and redirect to candidate profile edit page
    /*
    browser.click(menuLoginElements[0].selector, function(response){
      this.assert.ok(browser === this, 'Redirecting to candidate profile edit page wait..');
    });
    */
    browser.url(browser.launch_url + menuLoginElements[0].href, 'Redirect to candidate profile edit page.');
    browser.waitForElementPresent('body.desktop-visible', 2000);
    browser.waitForElementVisible('body.desktop-visible', 2000);
    // check the page heading element
    browser.pause(2000);
    browser.expect.element('.content-box .page-heading h2').to.be.present;
    browser.expect.element('.content-box .page-heading h2').to.be.visible;
    browser.expect.element('.content-box .page-heading h2').text.to.contain('My Profile');
    // all form labels visible in page and inner text
    /*
    var jobApplicationFormLabels = [{
        selector: '.edit_candidate_info #personal .column .row:nth-of-type(1) .form-group:nth-of-type(1) .col-md-3 label.label-control',
        text: 'Name'
      },
      {
        selector: '.edit_candidate_info #personal .column .row:nth-of-type(2) .form-group:nth-of-type(1) .col-md-3 label.label-control',
        text: 'Current City'
      },
      {
        selector: '.edit_candidate_info #personal .column .row:nth-of-type(3) .form-group:nth-of-type(1) .col-md-3 label.label-control',
        text: 'Phone'
      },
      {
        selector: '.edit_candidate_info #personal .column .row:nth-of-type(4) .forcm-group:nth-of-type(1) .col-md-3 label.label-control',
        text: 'Email'
      },
      {
        selector: '.edit_candidate_info #personal .column .row:nth-of-type(5) .form-group:nth-of-type(1) .col-md-3 label.label-control',
        text: 'Total work experience'
      },
      {
        selector: '.edit_candidate_info #personal .column .row:nth-of-type(6) .form-group:nth-of-type(1) .col-md-3 label.label-control',
        text: 'Annual Salary'
      },
      {
        selector: '.edit_candidate_info #personal .column .row:nth-of-type(7) .form-group:nth-of-type(1) .col-md-3 label.label-control',
        text: 'Skills'
      },
      {
        selector: '.edit_candidate_info #resume .column .form-group label',
        text: 'Resume Upload'
      },
    ];
    */
    // check label presents, visibility and inner text
    /*
    function jobApplicationFormLabelsTest(jobApplicationFormLabels) {
      for (x in jobApplicationFormLabels) {
        var currentLabel = jobApplicationFormLabels[x];
        browser.expect.element(currentLabel.selector).to.be.present;
        browser.expect.element(currentLabel.selector).to.be.visible;
        browser.expect.element(currentLabel.selector).text.to.contain(currentLabel.text);
      }
    }
    jobApplicationFormLabelsTest(jobApplicationFormLabels);
    */
    // Candidate Job Application form label check - end here   
    // Candidate Profile Edit sections ids checking start here
    var checkSectionIDJobApplicationFormElements = ['#personal', '#education', '#resume'];

    function checkSectionIDJobApplicationForm(checkSectionIDJobApplicationFormElements) {
      for (i in checkSectionIDJobApplicationFormElements) {
        var currentElement = checkSectionIDJobApplicationFormElements[i];
        browser.expect.element(currentElement).to.be.present;
        browser.expect.element(currentElement).to.be.visible;
      }
    }
    checkSectionIDJobApplicationForm(checkSectionIDJobApplicationFormElements); 
    // candidate profile Edit sections ids checking end here

    // all form elements present in job application page
    var jobApplicationFormInputs = [
      '.edit_candidate_info #personal .column .row:nth-of-type(1) .form-group .col-md-6 input[id=candidate_info_name]',
      '.edit_candidate_info #personal .column .row:nth-of-type(2) .form-group .col-md-6 input[name=location_empl]',
      '.edit_candidate_info #personal .column .row:nth-of-type(3) .form-group .col-md-6 input[id=candidate_info_phone]',
      '.edit_candidate_info #personal .column .row:nth-of-type(4) .form-group .col-md-6 select[id=experience]',
      '.edit_candidate_info #personal .column .row:nth-of-type(5) .form-group .col-md-6 select[id=candidate_info_function_id]',
      '.edit_candidate_info #personal .column .row:nth-of-type(6) .form-group .col-md-6 select[id=candidate_info_industry_id]',
      '.edit_candidate_info #personal .column .row:nth-of-type(7) .form-group .col-md-3 input[id=candidate_info_salary]',
      '.edit_candidate_info #personal .column .row:nth-of-type(8) .form-group .col-md-6 textarea[id=candidate_info_title]',
      '.edit_candidate_info #personal .column .row:nth-of-type(9) .form-group .col-md-6 .tokenfield .token-input.ui-autocomplete-input',
      '.edit_candidate_info #personal .column .row:nth-of-type(10) .form-group .col-md-6 select[id=candidate_info_gender]',
      '.edit_candidate_info #resume .column .form-group input#candidate_info_resume_attributes_original',
      'input[type=submit]'
    ];
    // Candidate Profile form element check - start here 
    function jobApplicationFormLabelsTest(jobApplicationFormInputs) {
      for (i in jobApplicationFormInputs) {
        var currentInput = jobApplicationFormInputs[i];
        browser.expect.element(currentInput).to.be.present;
        browser.expect.element(currentInput).to.be.visible;
      }
    }
    jobApplicationFormLabelsTest(jobApplicationFormInputs);
    // Candidate Profile form element check - end here 
    // candidate pofile form - start here
    function submitingJobApplication(jobApplicationFormInputs){
      browser.clearValue(jobApplicationFormInputs[0]); // clear input field name
      browser.setValue(jobApplicationFormInputs[0], 'Sushil Kundu'); // set input name value to 'Sushil Kundu'
      browser.clearValue(jobApplicationFormInputs[1]); // clear value of current city
      browser.setValue(jobApplicationFormInputs[1], 'New Delhi, India'); // set input value for the location 
      browser.pause(1000);
      browser.waitForElementPresent('.pac-container.pac-logo', 2000);
      browser.waitForElementPresent('.pac-container.pac-logo .pac-item:nth-of-type(1)', 2000);
      browser.click('.pac-container.pac-logo .pac-item:nth-of-type(1)', function(response){
        this.assert.ok(browser === this, 'City name selected.');
      });
      browser.clearValue(jobApplicationFormInputs[2]); // clear the phone number
      browser.setValue(jobApplicationFormInputs[2], '+919821634189'); // Phone number value set
      // selecting the experience
      browser.click(jobApplicationFormInputs[3] ,function(response){
        this.assert.ok(browser === this, 'Experience dropdown clicked.');
      });
      browser.pause(1000);
      browser.waitForElementPresent( jobApplicationFormInputs[3] + ' option:nth-of-type(2)', 2000);     
      browser.waitForElementVisible( jobApplicationFormInputs[3] + ' option:nth-of-type(2)', 2000);
      browser.click(jobApplicationFormInputs[4] + ' option:nth-of-type(2)', function(response){
        this.assert.ok(browser === this, 'Job function dropdown clicked and option value selected.');
      });
      // experience selected
      // selecting the function
      browser.click(jobApplicationFormInputs[4] ,function(response){
        this.assert.ok(browser === this, 'Experience dropdown clicked.');
      });
      browser.pause(1000);
      browser.waitForElementPresent( jobApplicationFormInputs[4] + ' option[value="1"]', 2000);     
      browser.waitForElementVisible( jobApplicationFormInputs[4] + ' option[value="1"]', 2000);
      browser.click(jobApplicationFormInputs[4] + ' option[value="1"]', function(response){
        this.assert.ok(browser === this, 'Job function dropdown clicked and option value selected.');
      });
      // end the function
      // selecting the industry
      browser.click(jobApplicationFormInputs[5] ,function(response){
        this.assert.ok(browser === this, 'Experience dropdown clicked.');
      });
      browser.pause(1000);
      browser.waitForElementPresent( jobApplicationFormInputs[5] + ' option[value="68"]', 2000);     
      browser.waitForElementVisible( jobApplicationFormInputs[5] + ' option[value="68"]', 2000);
      browser.click(jobApplicationFormInputs[5] + ' option[value="68"]', function(response){
        this.assert.ok(browser === this, 'Job function dropdown clicked and option value selected.');
      });
      // end the industry
      browser.clearValue(jobApplicationFormInputs[6]); // clear the expected ctc field
      browser.setValue(jobApplicationFormInputs[6], '440000'); // set the value of CTC
      browser.clearValue(jobApplicationFormInputs[7]); // clear the resume headline textarea
      browser.setValue(jobApplicationFormInputs[7], 'Looking for frontend Developer opening'); // Set the Resume Headline  
      browser.clearValue(jobApplicationFormInputs[8]); // clear the skills
      browser.setValue(jobApplicationFormInputs[8], 'HTML, CSS, LESS, SASS, jQuery, JavaScript, '); // submiting the skills
      // selecting Preferred Job Function
      browser.expect.element('select#candidate_info_function_id.form-control').to.be.present;
      browser.expect.element('select#candidate_info_function_id.form-control').to.be.visible;
      browser.click('select#candidate_info_function_id.form-control', function(response){
        this.assert.ok(browser === this, 'Preffered function clicked.');
      });
      browser.pause(2000);
      browser.waitForElementVisible('select#candidate_info_function_id.form-control option[value="1"]', 2000);
      browser.click('select#candidate_info_function_id.form-control option[value="1"]', function(response){
        this.assert.ok(browser === this, 'Job function option value selected.');
      });
      // end Preferred Function
      // selecting the Preferred Industry
      browser.expect.element('select#candidate_info_industry_id.form-control').to.be.present;
      browser.expect.element('select#candidate_info_industry_id.form-control').to.be.visible;
      browser.click('select#candidate_info_industry_id.form-control', function(response){
        this.assert.ok(browser === this, 'Preffered function clicked.');
      });
      browser.pause(2000);
      browser.waitForElementVisible('select#candidate_info_industry_id.form-control option[value="68"]', 2000);
      browser.click('select#candidate_info_industry_id.form-control option[value="68"]', function(response){
        this.assert.ok(browser === this, 'Job function option value selected.');
      });
      // end the Preferred Industry
      // add education button clicked and adding the education details
      browser.element('css selector', '#education .js-education-row', function(result){
        if(result.value && result.value.ELEMENT) {
          browser.click('#mpstep4', function(response){
            this.assert.ok(browser === this, 'Job Application form submitted.');
          })
        } else {
          browser.click('.js-add-education', function(response){
            this.assert.ok(browser === this, 'Add education button clicked.');
            browser.pause(1000);
            browser.waitForElementPresent('.add-education-box', 2000);
            browser.waitForElementVisible('.add-education-box', 2000);
          });
          browser.expect.element('.js-educations-remove').to.be.present;
          browser.expect.element('.js-educations-remove').to.be.visible;
          // unversity name selected
          browser.expect.element('.js-educations-remove .row:nth-of-type(1) .form-group .col-md-7 input.js-autocomplete-college').to.be.visible;
          browser.setValue('.js-educations-remove .row:nth-of-type(1) .form-group .col-md-7 input.js-autocomplete-college', 'Burdwan University');
          browser.waitForElementPresent('ul.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content:nth-of-type(2)', 1000);
          browser.waitForElementVisible('ul.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content:nth-of-type(2)', 1000);
          browser.click('ul.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content:nth-of-type(2) li:nth-of-type(1)', function(response){
            this.assert.ok(browser === this, 'University name selected.');
          });
          // university name added
          // Year of Graduation selected
          browser.expect.element('.js-educations-remove .row:nth-of-type(1) .form-group .col-md-5 select.gradyear').to.be.present;
          browser.expect.element('.js-educations-remove .row:nth-of-type(1) .form-group .col-md-5 select.gradyear').to.be.visible;
          browser.click('.js-educations-remove .row:nth-of-type(1) .form-group .col-md-5 select.gradyear', function(response){
            this.assert.ok(browser === this, 'Preffered function clicked.');
          });
          browser.pause(2000);
          browser.waitForElementVisible('js-educations-remove .row:nth-of-type(1) .form-group .col-md-5 select.gradyear option[value="1967"]', 2000);
          browser.click('js-educations-remove .row:nth-of-type(1) .form-group .col-md-5 select.gradyear option[value="1967"]', function(response){
            this.assert.ok(browser === this, 'Job function option value selected.');
          });
          // Year of Graduation added
          // Degree Name Selected
          browser.expect.element('.js-educations-remove .row:nth-of-type(2) .form-group .col-md-12 input.js-autocomplete-lect').to.be.visible;
          browser.setValue('.js-educations-remove .row:nth-of-type(2) .form-group .col-md-12 input.js-autocomplete-lect', 'B.E');
          browser.waitForElementPresent('ul.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content:nth-of-type(3)' , 1000);
          browser.waitForElementVisible('ul.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content:nth-of-type(3)', 1000);
          browser.click('ul.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content:nth-of-type(3) li:nth-of-type(1)', function(response){
            this.assert.ok(browser === this, 'University name selected.');
          });
          // Degree name Added
          // click button to save the education details
          browser.click('.js-apply-education', function(response){
            this.assert.ok(browser === this, 'Education added.');
          });
          browser.click('#mpstep4', function(response){
            this.assert.ok(browser === this, 'Job Application form submitted.');
          })
        }
      });
      // end the education details
      browser.saveScreenshot('./screenshots/jobapplication.png');
    }
    submitingJobApplication(jobApplicationFormInputs);
    // candidate profile form - end here
    browser.pause(5000);
    browser.assert.urlContains(browser.launch_url, 'Job Application Submitted.');
    browser.end();
  }
};