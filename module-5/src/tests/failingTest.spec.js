describe('Module 5: Advance Configurations', () => {
  before(async () => {
    await browser.url('/');
  });

  it('Failing test to check screenshot functionality', async () => {
    const emailInput = await $('#user-namet');
    await emailInput.setValue('standard_user');
    const passwordInput = await $('#password');
    await passwordInput.addValue('secret_sauce');
    const loginButton = await $('[data-test="login-button"]');
    await loginButton.click();
    console.log('Logged in Successfully');
  });
});
