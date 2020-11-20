const { typeError, lengthFieldError, mailDomainError, requiredFieldError } = require('../errors');

exports.createUser = {
  email: {
    in: ['body'],
    isEmail: { errorMessage: typeError('email', 'email') },
    custom: {
      options: value => {
        const regexMail = /^\w+([.-]?\w+)*(@wolox)*([.]\w{2,3})+$/;
        return !!value.match(regexMail);
      },
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
    isString: { errorMessage: typeError('name', 'string') },
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: requiredFieldError('lastname')
    }
  }
};
