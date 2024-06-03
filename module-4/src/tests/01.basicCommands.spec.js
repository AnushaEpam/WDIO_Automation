describe('Module 4: Basic Commands examples', () => {
  before(async () => {
    await browser.url('/');
  });

  it('should fetch element with $ command', async () => {
    // Select the parent element containing login credentials
    const loginCredentials= await $('.login_credentials');
    // Use the $ command to select the <h4> tag under the login credentials
    const acceptedUserHeading = await loginCredentials.$('h4');
    const accepetedUserNameText=await acceptedUserHeading.getText();
    expect(accepetedUserNameText).toContain('Accepted usernames are:');
    console.log(acceptedUserHeading);
    console.log(accepetedUserNameText);
  });

  it('should fetch multiple elements with $$ command', async () => {
    // Select the parent element containing login credentials
    const loginCredentials= await $('.login_credentials');
    // Use the $$ command to select all <br> tags under the login credentials, each after usernames
    const acceptedUserNames = await loginCredentials.$$('br');
    console.log(acceptedUserNames);
  });

  // function for CustomClick - WaitForDisplayed,waitForExist
  async function customClick(selector) {
    const element = await $(selector);
    await element.waitForDisplayed({timeout: 5000});
    await element.waitForExist({timeout: 5000});
    await element.waitForClickable({timeout: 5000});
    await element.click();
  }
  it('should setValue for username,addValue for passord and Custom method for click', async () => {
    // setvalue method for username
    const emailInput = await $('#user-name');
    await emailInput.setValue('standard_user');
    // addvalue method for password
    const passwordInput = await $('#password');
    await passwordInput.addValue('secret_sauce');
    // custom click for login button click
    const loginButton = await $('[data-test="login-button"]');
    // Assertion isDisplayed
    const isDisplayed = await loginButton.isDisplayed();
    expect(isDisplayed).toBe(true);
    // Assertion isExisting
    const isExisting = await loginButton.isExisting();
    expect(isExisting).toBe(true);
    await customClick(loginButton);
    console.log('Logged in Successfully');
  });
});
