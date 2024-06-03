const {Then} = require('@wdio/cucumber-framework');
const {HomePage} = require('../po');
const compareText = require('./utils/compare-test');

const homePage = new HomePage();
// const addCartPage = new AddCartPage();

Then('I should be redirected to the home page', async () => {
  const url = await browser.getUrl();
  expect(url).toContain('inventory.html');
});

Then('the homepage title should be "Swag Labs"', async () => {
  const actualTitle = await homePage.home.title.getText();
  compareText(actualTitle, 'Swag Labs', 'be equal to');
});

