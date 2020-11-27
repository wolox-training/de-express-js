const axios = require('axios');
const logger = require('../logger');
const { serviceError, serviceUnavailable } = require('../errors');
const { numberAPIUrl } = require('../../config').common.service;
const { ALLOWED_FACTS } = require('../constants');

module.exports.numberApi = fact => {
  if (!ALLOWED_FACTS.includes(fact)) {
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
      logger.error(error);
      throw serviceUnavailable('service not available');
    });
};
