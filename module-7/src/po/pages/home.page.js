const LoginPage = require('./login.page');
const {Home} = require('../components');

class HomePage extends LoginPage {
  constructor() {
    super();
    this.home = new Home();
  }
}

module.exports = HomePage;
