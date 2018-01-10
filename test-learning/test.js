module.exports = {
  'demoTestGoogle' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 2000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};