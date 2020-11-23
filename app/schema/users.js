const { typeError, lengthFieldError, mailDomainError, requiredFieldError } = require('../errors');
const { REGEX_EMAIL } = require('../constants');

exports.createUser = {
  email: {
    in: ['body'],
    isEmail: { errorMessage: typeError('email', 'email') },
    custom: {
      options: value => !!value.match(REGEX_EMAIL),
      errorMessage: mailDomainError('email')
    },
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: requiredFieldError('email')
    }
  },
  password: {
    in: ['body'],
    isAlphanumeric: { errorMessage: typeError('password', 'alphanumeric') },
    isLength: {
      options: { min: 8 },
      errorMessage: lengthFieldError('password', 8)
    },
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: requiredFieldError('password')
    }
  },
  name: {
    in: ['body'],
    isString: { errorMessage: typeError('name', 'string') },
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: requiredFieldError('name')
    }
  },
  lastname: {
    in: ['body'],
    isString: { errorMessage: typeError('lastname', 'string') },
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: requiredFieldError('lastname')
    }
  }
};

exports.singInUser = {
  email: {
    in: ['body'],
    isEmail: { errorMessage: typeError('email', 'email') },
    custom: {
      options: value => !!value.match(REGEX_EMAIL),
      errorMessage: mailDomainError('email')
    },
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: requiredFieldError('email')
    }
  },
  password: {
    in: ['body'],
    isAlphanumeric: { errorMessage: typeError('password', 'alphanumeric') },
    isLength: {
      options: { min: 8 },
      errorMessage: lengthFieldError('password', 8)
    },
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: requiredFieldError('password')
    }
  }
};
