describe('Module 5: Advance Configurations', () => {
  before(async () => {
    await browser.url('/');
  });

  it('should login to application', async () => {
    const emailInput = await $('#user-name');
    await emailInput.setValue('standard_user');
    const passwordInput = await $('#password');
    await passwordInput.addValue('secret_sauce');
    const loginButton = await $('[data-test="login-button"]');
    await loginButton.click();
    console.log('Logged in Successfully');
  });

  it('should select a sorting option and add a product to the cart', async () => {
    // Wait for the dropdown to be visible and interactable
    const dropdown = await $('[data-test="product-sort-container"]');
    await dropdown.waitForDisplayed();
    await dropdown.waitForClickable();

    // Select the option 'Price (high to low)' from the dropdown
    await dropdown.selectByAttribute('value', 'hilo');

    // Wait and click on the 'Add to cart' button for a specific product
    const addToCartButton = await $('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    await addToCartButton.waitForDisplayed();
    await addToCartButton.waitForClickable();
    await addToCartButton.click();
    console.log('Product added to the cart');
  });
  it('should verify the added product in cart', async () => {
    // verify that the product has been added to the cart
    const cart = await $('[data-test="shopping-cart-link"]');
    await cart.waitForDisplayed();
    await cart.click();
    const itemInCart = await $('[data-test="inventory-item-name"]');
    await itemInCart.waitForDisplayed();
    const itemName = await itemInCart.getText();
    expect(itemName).toBe('Sauce Labs Fleece Jacket');
    console.log('Added product is verified in Cart');
  });
  it('should checkout successfully ', async () => {
    const checkoutButton = await $('[data-test="checkout"]');
    await checkoutButton.waitForClickable(); // Ensure the button is clickable
    await checkoutButton.click();
    await browser.waitUntil(
        async () => (await browser.getUrl()).includes('/checkout-step-one.html'),
        {
          timeout: 5000,
          timeoutMsg: 'Did not navigate to the checkout page',
        },
    );
    console.log('Checkout is successful');
  });
  it('should add checkout information', async () => {
    const firstName = await $('[data-test="firstName"]');
    const lastName =await $('[data-test="lastName"]');
    const zipCode = await $('[data-test="postalCode"]');
    const continueButton = await $('[data-test="continue"]');
    const finishButton = await $('[data-test="finish"]');
    const completeHeader = await $('[data-test="complete-header"]');
    await firstName.setValue('test');
    await lastName.setValue('user');
    await zipCode.setValue('90210');
    await continueButton.click();
    await finishButton.click();

    await browser.waitUntil(
        async () => (await browser.getUrl()).includes('/checkout-complete.html'),
        {
          timeout: 5000,
          timeoutMsg: 'Did not navigate to the complete page',
        },
    );
    await completeHeader.waitForDisplayed();
    const completionMessage = await completeHeader.getText();
    expect(completionMessage).toContain('Thank you for your order', 'Order completion message did not match.');

    console.log('Order placed successfully');
  });
});


