const BaseComponent = require('../common/base.component');
class AddCartComponent extends BaseComponent {
  constructor() {
    super('.inventory_list');
  }

  get addToCartButton() {
    return this.rootEl.$('[data-test="add-to-cart-sauce-labs-onesie"]');
  }

  async clickAddToCart() {
    await this.addToCartButton.waitForDisplayed({timeout: 5000});
    await this.addToCartButton.click();
  }

  /**
   * Verifies the text on the 'Add to cart' button.
   * @returns {Promise<string>} The text of the button.
   */
  async verifyButtonText() {
    await this.addToCartButton.waitForDisplayed({timeout: 5000});
    return this.addToCartButton.getText();
  }
}
module.exports = AddCartComponent;

