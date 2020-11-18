const axios = require('axios');
const logger = require('../logger');
const { serviceError, serviceUnavailable } = require('../errors');
const { numberAPIUrl } = require('../../config').common.service;

module.exports.numberApi = fact => {
  if (fact !== 'trivia' && fact !== 'year' && fact !== 'date' && fact !== 'math') {
    throw serviceError(`the entered fact ${fact} is not supported`);
  }
  return axios({
    url: fact,
    baseURL: numberAPIUrl,
    method: 'get'
  })
    .then(response => ({
      data: response.data,
      status: response.status
    }))
    .catch(error => {
      logger.error({ error: error.stack });
      throw serviceUnavailable('service not available');
    });
};
