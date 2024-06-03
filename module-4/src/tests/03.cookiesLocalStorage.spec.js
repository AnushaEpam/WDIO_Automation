describe('Module 4: Cookies and Local Storage Manipulations', () => {
  before(async () => {
    await browser.url('/');
  });

  it('should manipulate cookies', async () => {
    await browser.setCookies({
      name: 'testCookie',
      value: 'testValue',
    });
    // Retrieve a cookie and verify its value
    const cookie = await browser.getCookies(['testCookie']);
    console.log(cookie[0].value);
    expect(cookie[0].value).toBe('testValue');

    // Delete the cookie and verify it's no longer available
    await browser.deleteCookie('testCookie');
    const cookiesAfterDeletion = await browser.getCookies(['testCookie']);
    expect(cookiesAfterDeletion.length).toBe(0);
    console.log('Cookie manipulation was successful');
  });
  it('should manipulate local storage', async () => {
    // Set a local storage item
    await browser.execute(function() {
      localStorage.setItem('testKey', 'testValue');
    });

    // Retrieve and verify the local storage item
    const result = await browser.execute(function() {
      return localStorage.getItem('testKey');
    });
    console.log('Local Storage Item:', result);
    expect(result).toBe('testValue');

    // Clear local storage and verify it's empty
    await browser.execute(function() {
      localStorage.clear();
    });
    const isLocalStorageEmpty = await browser.execute(function() {
      return localStorage.length === 0;
    });
    expect(isLocalStorageEmpty).toBe(true);

    console.log('Local storage manipulation was successful');
  });
});
