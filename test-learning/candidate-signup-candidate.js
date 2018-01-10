

module.exports = {
  url: 'http://www.landing.co/user/sign_up',
  sections: {
    candidateSignupForm: {
      selector: '.card-box',
      elements: {
        email: {
          selector: 'input[id="user_email"]'
        },
        password: {
          selector: 'input[id="user_password"]'
        }
      }
    }
  }
};

module.exports = {
  'Candidate Signup Form Test': function (client) {
    client.url('http://www.landing.co/user/sign_up').pause(1000);
    client.expect.section('@candidateSignupForm').to.be.visible;

    var menuSection = client.section.menu;
    menuSection.expect.element('@email').to.be.visible;
    menuSection.expect.element('@password').to.be.visible;

    menuSection.click('@mail');

    client.end();
  }
};

