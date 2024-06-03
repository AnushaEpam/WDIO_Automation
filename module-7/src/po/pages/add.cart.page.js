const LoginPage = require('./login.page');
const {AddCart} = require('../components');
// const HomePage = require('./home.page');

class AddCartPage extends LoginPage {
  constructor() {
    super('');
    this.addCart = new AddCart();
  }

  async addProductToCart() {
    const buttonText = await this.addCart.verifyButtonText();
    expect(buttonText).toBe('Add to cart', 'The button text does not match');
    await this.addCart.clickAddToCart();
  }
}

module.exports = AddCartPage;
