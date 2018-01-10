module.exports = {
  'Login Page Initial Render': function( browser ) {
    browser
    .url('http://www.landing.co/user/sign_up')
    .waitForElementVisible( 'body', 1000 )
    .verify.visible('#user_email')
    .verify.visible('#user_password')
    .verify.value( 'input[type=submit]', 'Submit' )
    .verify.elementNotPresent('.error')
    .end();
  }
}