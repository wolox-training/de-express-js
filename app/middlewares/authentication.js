const { decodeJWT } = require('../utiles/token');
const { unauthenticatedUserError } = require('../errors');
const logger = require('../logger');

exports.authetication = (req, _, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) next(unauthenticatedUserError('Authorization token is required'));
    const { id: userId } = decodeJWT(authorization);
    if (!userId) next(unauthenticatedUserError('Invalid token'));
    req.userData = { id: userId };
    next();
  } catch (error) {
    logger.error(error);
    next(unauthenticatedUserError('Invalid token'));
  }
};
