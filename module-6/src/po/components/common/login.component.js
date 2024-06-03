const BaseComponent = require('./base.component');

class LoginComponent extends BaseComponent {
  constructor() {
    super('.login-box');
  }


  get emailInput() {
    return this.rootEl.$('#user-name');
  }

  get passwordInput() {
    return this.rootEl.$('#password');
  }

  get loginButton() {
    return this.rootEl.$('#login-button');
  }

  async login(email, password) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}

module.exports = LoginComponent;
