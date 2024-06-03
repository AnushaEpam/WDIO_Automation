const {Given, When, Before} = require('@wdio/cucumber-framework');
const {LoginPage, HomePage, AddCartPage} = require('../po');
const loginPage = new LoginPage();
const homePage = new HomePage();
const addCartPage = new AddCartPage();
// Adding a Before hook to log scenario details
Before(function(scenario) {
  console.log(`Starting scenario: ${scenario.pickle.name}`);
});
Given('I am on the login page', async () => {
  await loginPage.open();
});

Given('I log in with {string} and {string}', async (username, password) => {
  await loginPage.login.login(username, password);
  await browser.waitUntil(
      async () => (await browser.getUrl()).includes('inventory.html'),
      {
        timeout: 5000,
        timeoutMsg: 'Expected to be on inventory page after login',
      },
  );
});

When('I sort products by {string}', async (sortMethod) => {
  expect(await homePage.home.isSortDropdownDisplayed()).toBe(true);
  await homePage.home.selectProductSort('lohi');//
});

When('I add a product to the cart', async () => {
  await addCartPage.addProductToCart();
});
