const axios = require('axios');
const logger = require('../logger');

const baseUrl = 'http://numbersapi.com/random/';

const numberApi = fact =>
  new Promise((resolve, reject) => {
    axios({
      url: fact,
      baseURL: baseUrl,
      method: 'get'
    })
      .then(response => {
        if (response.status === 200) {
          // logger.info(response.data);
          resolve(response);
        } else {
          // logger.error({ response });
          reject(response);
        }
      })
      .catch(error => {
        logger.error({ error: error.stack });
        reject(error);
      });
  });

module.exports.trivia = async () => {
  try {
    return (await numberApi('trivia')).data;
  } catch (error) {
    return error.stack;
  }
};
module.exports.year = async () => {
  try {
    return (await numberApi('year')).data;
  } catch (error) {
    return error.stack;
  }
};
module.exports.date = async () => {
  try {
    return (await numberApi('date')).data;
  } catch (error) {
    return error.stack;
  }
};
module.exports.math = async () => {
  try {
    return (await numberApi('math')).data;
  } catch (error) {
    return error.stack;
  }
};
