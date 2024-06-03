describe('Module 4: WebDriverIO Mouse actions', () => {
  it('Drag and drop using mouse', async () => {
    await browser.url('https://practice.expandtesting.com/drag-and-drop');
    // selectors for draggable elements
    const columnA = await $('#column-a');
    const columnB = await $('#column-b');
    // Perform the drag and drop action: dragging Column A to Column B
    await columnA.dragAndDrop(columnB);

    const textAfterDrop = await columnB.getText();
    expect(textAfterDrop).toContain('A');

    console.log('Drag and drop action performed successfully between Column A and Column B');
  });
  it('Double click using mouse', async () => {
    await browser.url('https://practice.expandtesting.com/add-remove-elements');
    // selectors for draggable elements
    const AddElement = await $('button[onclick="addElement()"]');
    // Perform Double Click on Add Element
    await AddElement.doubleClick();
    const deleteButtons = await $$('#elements .btn-info');
    expect(deleteButtons.length).toBe(2);
    console.log('Double click action verified successfully with added elements');
  });
  it('should move to an element and perform keyboard actions', async () => {
    // Navigate to your testing page
    await browser.url('https://practice.expandtesting.com/drag-and-drop-circles');

    // Identify the element to interact with
    const draggable = await $('.red');
    // Move to the draggable element
    await draggable.moveTo();
    // // Mouse down to start dragging
    await browser.performActions([
      {
        // Start of Keyboard Actions
        type: 'key',
        id: 'keyboard',
        actions: [
          {type: 'keyDown', value: '\uE008'},
        ],
      },
      {
        // Start of Mouse Actions
        type: 'pointer',
        id: 'finger1',
        parameters: {pointerType: 'mouse'},
        actions: [
          {type: 'pointerMove', duration: 0, x: 0, y: 0, origin: draggable},
          {type: 'pointerDown', button: 0},
        ],
      },
    ]);
    console.log('Performed drag and drop with SHIFT key held down.');
  });
});
