const axios = require('axios');
const logger = require('../logger');
const { defaultError } = require('../errors');

const { numberAPIUrl } = require('../../config').common.service;

module.exports.numberApi = fact =>
  axios({
    url: fact,
    baseURL: numberAPIUrl,
    method: 'get'
  })
    .then(response =>
      Promise.resolve({
        data: response.data,
        status: response.status
      })
    )
    .catch(error => {
      logger.error({ error: error.stack });
      throw defaultError('missing service');
    });
