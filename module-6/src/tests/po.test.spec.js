const {LoginPage, HomePage, AddCartPage} = require('../po');
describe('Sauce demo application suite', () => {
  let loginPage; let homePage; let addCartPage;

  before(async () => {
    // Initialize page objects
    loginPage = new LoginPage();
    homePage = new HomePage();
    addCartPage = new AddCartPage();
    await loginPage.open();
  });

  it('should navigate to the login page and log in successfully', async () => {
    await loginPage.login.login('standard_user', 'secret_sauce');
    console.log(await browser.getUrl());
    await browser.waitUntil(
        async () => await browser.getUrl() === 'https://www.saucedemo.com/inventory.html',
        {
          timeout: 5000,
          timeoutMsg: 'Expected URL https://www.saucedemo.com/inventory.html was not reached after login',
        },
    );
    const inventoryContainer = await $('#inventory_container');
    expect(await inventoryContainer.isDisplayed()).toBe(true);
    console.log('Reached the inventory page');
  });

  it('should get the title in inventory page', async () => {
    const primaryTitle = await homePage.home.title;
    await primaryTitle.waitForDisplayed({timeout: 10000});
    const titleText = await primaryTitle.getText();
    expect(titleText).toBe('Swag Labs');
    console.log('Retrieved the text in inventory page');
  });
  it('should sort products by price low to high', async () => {
    expect(await homePage.home.isSortDropdownDisplayed()).toBe(true);
    await homePage.home.selectProductSort('lohi');
    console.log('Selected the dropdown low to high');
  });
  it('should add a product to the cart', async () => {
    await addCartPage.addProductToCart();
  });
});

