const LoginPage= require('./login.page');
const HomePage = require('./home.page');
const AddCartPage = require('./add.cart.page');

function page(name) {
  const items = {
    HomePage: new HomePage(),
    LoginPage: new LoginPage(),
    AddCartPage: new AddCartPage(),
  };
  return items[name.toLowerCase()];
}

module.exports = {
  LoginPage,
  HomePage,
  AddCartPage,
  page,
};

