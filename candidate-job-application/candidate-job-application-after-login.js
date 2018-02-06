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
    browser.clearValue('input[name=q]', function (response) {
      this.assert.ok(browser === this, 'Clear the search input field.')
    });
    browser.setValue('input[name=q]', ['XXX Tester', browser.Keys.ENTER]);
    // match the job id = 74292 which we are going to apply.
    browser.expect.element('.jobs-listings .jobs-list a').to.have.attribute('href').which.contains('74292');
    browser.click('.jobs-listings .jobs-list a', function (response) {
      this.assert.ok(browser === this, 'clicked to apply link to redirect job details page.');
    });
    browser.pause(2000);
    browser.waitForElementPresent('body', 3000);
    browser.click('.js-job-apply', function (response) {
      this.assert.ok(browser === this, 'job applied and redirecting to candidate home page.');
    });
    browser.pause(5000);
    browser.expect.element('#desktop-visible').to.be.present;
    browser.expect.element('#desktop-visible').to.be.visible;
    // match job details page job title and company name
    browser.expect.element('.job-details .column h2').to.be.present;
    browser.expect.element('.job-details .column h2').to.be.visible;
    // check company name, job title and company id
    var companyName = 'XXX Tester',
      jobTitle = 'UI Test Automation Engineer',
      companyID = '670483';
    browser.expect.element('.job-details .column h2').text.to.contain(jobTitle);
    browser.expect.element('.job-details .column a div.company-name').text.to.contain(companyName);
    browser.expect.element('.job-details .column a').to.have.attribute('href').which.contains('670483');
    browser.expect.element('.edit_candidate_info').to.be.present;
    browser.expect.element('.edit_candidate_info').to.be.visible;
    // Candidate Job Application form label and email - start here
    var checkSectionIDJobApplicationFormElements = ['#personal', '#employment', '#education', '#resume'];

    function checkSectionIDJobApplicationForm(checkSectionIDJobApplicationFormElements) {
      for (i in checkSectionIDJobApplicationFormElements) {
        var currentElement = checkSectionIDJobApplicationFormElements[i];
        browser.expect.element(currentElement).to.be.present;
        browser.expect.element(currentElement).to.be.visible;
      }
    }
    checkSectionIDJobApplicationForm(checkSectionIDJobApplicationFormElements);
    // all form labels visible in page and inner text
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
    // check label presents, visibility and inner text
    function jobApplicationFormLabelsTest(jobApplicationFormLabels) {
      for (x in jobApplicationFormLabels) {
        var currentLabel = jobApplicationFormLabels[x];
        browser.expect.element(currentLabel.selector).to.be.present;
        browser.expect.element(currentLabel.selector).to.be.visible;
        browser.expect.element(currentLabel.selector).text.to.contain(currentLabel.text);
      }
    }
    jobApplicationFormLabelsTest(jobApplicationFormLabels);
    // Candidate Job Application form label check - end here    
    // all form elements present in job application page
    var jobApplicationFormInputs = [
      '.edit_candidate_info #personal .column .row:nth-of-type(1) .form-group .col-md-6 input[id=candidate_info_name]',
      '.edit_candidate_info #personal .column .row:nth-of-type(2) .form-group .col-md-6 input[name=location_empl]',
      '.edit_candidate_info #personal .column .row:nth-of-type(3) .form-group .col-md-6 input',
      '.edit_candidate_info #personal .column .row:nth-of-type(4) .form-group .col-md-6 input',
      '.edit_candidate_info #personal .column .row:nth-of-type(5) .form-group .col-md-6 select',
      '.edit_candidate_info #personal .column .row:nth-of-type(6) .form-group .col-md-3 select',
      '.edit_candidate_info #personal .column .row:nth-of-type(6) .form-group .col-md-3 input',
      '.edit_candidate_info #personal .column .row:nth-of-type(7) .form-group .col-md-6 .tokenfield',
      '.edit_candidate_info #resume .column .form-group input#candidate_info_resume_attributes_original',
      'input[type=submit]'
    ];
    // Candidate Job Application form input elements check - start here 
    function jobApplicationFormLabelsTest(jobApplicationFormInputs) {
      for (i in jobApplicationFormInputs) {
        var currentInput = jobApplicationFormInputs[i];
        browser.expect.element(currentInput).to.be.present;
        browser.expect.element(currentInput).to.be.visible;
      }
    }
    jobApplicationFormLabelsTest(jobApplicationFormInputs);
    // candidate job Applciation form input elements check - end here
    // candidate job application form input filling - start here
    function submitingJobApplication(jobApplicationFormInputs){
      
    }
    submitingJobApplication(jobApplicationFormInputs);
    // end cadidate job application form input filled - end here
    browser.assert.urlContains(browser.launch_url, 'Job Application Submitted.');
    browser.end();
  }
};