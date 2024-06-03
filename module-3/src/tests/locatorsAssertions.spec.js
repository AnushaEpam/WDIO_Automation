describe('Module 3: WebdriverIO Locators and Assertions', () => {
  before(async () => {
    await browser.url('notes/app/');
  });

  it('should use CSS Selector and different assertions', async () => {
    // using CSS selector find Create Account Button Locator
    const createAccountButton = await $('a[data-testid="open-register-view"]');
    // Assertion isDisplayed
    const isDisplayed = await createAccountButton.isDisplayed();
    expect(isDisplayed).toBe(true);
    // Assertion toHaveAttribute
    const href = await createAccountButton.getAttribute('href');
    expect(href).toContain('/notes/app/register');
    // click on the button
    await createAccountButton.click();
    // Assertion toContain
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain(href);
  });

  it('should use Xpath and different assertions', async () => {
    // using xpath verify the register heading
    const registerHeading = await $('//h1[contains(text(),"Register")]');
    // Assertion isExisting
    const isExisting = await registerHeading.isExisting();
    expect(isExisting).toBe(true);
    // Assertion toHaveText
    const headingText = await registerHeading.getText();
    expect(headingText).toBe('Register');
  });

  it('should allow registration with valid details', async () => {
    const emailInput = await $('//input[@data-testid="register-email"]');
    await emailInput.setValue('example@email.com');
    await expect(emailInput).toHaveValue('example@email.com');
    const passwordInput = await $('input[data-testid="register-password"]');
    await passwordInput.setValue('password123');
    const confirmPasswordInput = await $('input[data-testid="register-confirm-password"]');
    await confirmPasswordInput.setValue('password123');
    const nameInput = await $('//input[@data-testid="register-name"]');
    await nameInput.setValue('test');
    const registerButton = await $('button[data-testid="register-submit"]');
    await registerButton.click();
    const alertMessage = await $('//div[@data-testid="alert-message"]');
    const alertMessageText = await alertMessage.getText();
    expect(alertMessageText).toContain('An account already exists with the same email address');
  });

  it('should login with valid credentials', async () => {
    await browser.url('notes/app/');
    const loginButton = await $('//a[text()="Login"]');
    await loginButton.click();
    const loginHeading = await $('//h1[contains(text(),"Login")]');
    const headingText = await loginHeading.getText();
    expect(headingText).toEqual('Login');
    const emailInput = await $('input[data-testid="login-email"]');
    const passwordInput = await $('input[data-testid="login-password"]');
    await emailInput.setValue('example@email.com');
    await passwordInput.setValue('password123');
    const loginSubmit = await $('button[data-testid="login-submit"]');
    await loginSubmit.click();
    const message = await $('//a[@data-testid="home"]');
    const MessageText = await message.getText();
    expect(MessageText.trim()).toEqual('MyNotes');
  });
});
