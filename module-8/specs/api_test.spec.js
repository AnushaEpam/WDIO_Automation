const {expect} = require('chai');
const {sendRequest} = require('../helpers/api.helper');
const testData = require('../config/data.json');

describe('API Test Suite for CRUD Operations', () => {
  let postId;

  // Create a new post
  it('should create a new post', async () => {
    const response = await sendRequest('posts', testData, 'post');
    expect(response.status).to.equal(201);
    expect(response.data).to.include(testData);
    postId = response.data.userId;
    console.log(postId);
  });


  // Read a specific post by ID
  it('should read a specific post by ID', async () => {
    const response = await sendRequest(`posts/${postId}`);
    expect(response.status).to.equal(200);
    expect(response.data.id).to.equal(postId);
  });

  // Negative test for reading a non-existing post
  it('should return 500 for a non-existing post', async () => {
    const response = await sendRequest('posts/9999');
    expect(response.status).to.equal(500);
  });

  // Update a post
  it('should update a post', async () => {
    const updateData = {...testData, title: 'updated title'};
    const response = await sendRequest(`posts/${postId}`, updateData, 'put');
    expect(response.status).to.equal(200);
    expect(response.data.title).to.equal('updated title');
  });

  // Negative test for updating a non-existing post
  it('should return 500 when updating a non-existing post', async () => {
    const response = await sendRequest('posts/9999', testData, 'put');
    expect(response.status).to.equal(500);
  });

  // Delete a post
  it('should delete a post', async () => {
    const response = await sendRequest(`posts/${postId}`, 'delete');
    expect(response.status).to.equal(200);
  });

  // Negative test for deleting a non-existing post
  it('should return 500 when deleting a non-existing post', async () => {
    const response = await sendRequest('posts/9999', null, 'delete');
    expect(response.status).to.equal(500);
  });

  // List all posts
  it('should get() all posts', async () => {
    const response = await sendRequest('posts');
    expect(response.status).to.equal(200);
    expect(response.data.length).to.be.greaterThan(0);
    expect(response.data[0].id).to.be.a('number');
  });

  // Filtering resources
  /* it('should filter posts by userId', async () => {
    const response = await sendRequest('posts?userId=1');
    expect(response.status).to.equal(200);
    expect(response.data.every((post) => post.userId === 1)).to.be.true;
  });*/
});

