const { typeError } = require('../errors');

exports.createWeet = {
  fact: {
    in: ['body'],
    isAlpha: { errorMessage: typeError('password', 'alphabetical') }
  }
};
