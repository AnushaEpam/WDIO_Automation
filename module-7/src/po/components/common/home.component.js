const BaseComponent = require('./base.component');

class HomeComponent extends BaseComponent {
  constructor() {
    super('.header_container');
  }

  get title() {
    return this.rootEl.$('.app_logo');
  }
  async isSortDropdownDisplayed() {
    const dropdown = await this.rootEl.$('.product_sort_container');
    return dropdown.isDisplayed();
  }
  async selectProductSort(method) {
    const dropdown = await this.rootEl.$('[data-test="product-sort-container"]');
    await dropdown.selectByAttribute('value', method);
  }
}

module.exports = HomeComponent;
