const { numberApi } = require('./numbers');
const { weets } = require('../models');
const { databaseError, schemaError } = require('../errors');
const logger = require('../logger');

const createWeet = data =>
  weets.create(data).catch(error => {
    logger.error(error);
    throw databaseError('Database error when trying create weet');
  });

exports.createWeetService = (userId, fact) =>
  numberApi(fact)
    .then(({ data }) => {
      if (data.length > 141) {
        throw schemaError('The weet must be more than 140 characters');
      }
      return createWeet({
        content: data,
        user_id: userId
      });
    })
    .catch(error => {
      throw error;
    });
