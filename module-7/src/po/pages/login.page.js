const {Login} = require('../components');

class LoginPage {
  constructor(url) {
    this.url = '/';
    this.login = new Login();
  }

  open() {
    return browser.url(this.url);
  }
}

module.exports = LoginPage;
