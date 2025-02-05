const axios = require('axios');
const {TEST_URL} = require('../config/endpoint');

const sendRequest = async (url, data = null, method = 'get') => {
  try {
    const response = await axios({
      method,
      url: `${TEST_URL}/${url}`,
      headers: {'Content-Type': 'application/json'},
      data,
    });
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response.status,
    };
  }
};

module.exports = {
  sendRequest,
};
