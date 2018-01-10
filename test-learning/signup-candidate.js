module.exports = {
  sections: {
    menu: {
      selector: '#gb',
      elements: {
        mail: {
          selector: 'a[href="mail"]'
        },
        images: {
          selector: 'a[href="imghp"]'
        }
      }
    }
  }
}

module.exports = {
  'Test': function (client) {
    var google = client.page.google();
    google.expect.section('@menu').to.be.visible;

    var menuSection = google.section.menu;
    menuSection.expect.element('@mail').to.be.visible;
    menuSection.expect.element('@images').to.be.visible;

    menuSection.click('@mail');

    client.end();
  }
};