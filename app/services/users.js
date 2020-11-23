const bcrypt = require('bcryptjs');
const { duplicatedRegsiterError } = require('../errors');
const logger = require('../logger');

exports.createUserService = (users, data) =>
  users
    .findOne({
      where: {
        email: data.email
      }
    })
    .then(existUser => {
      if (!existUser) return bcrypt.hash(data.password, 8);
      throw duplicatedRegsiterError(`user with email ${data.email} already exist`);
    })
    .then(password => {
      data.password = password;
      return users.create(data);
    })
    .then(newUser => newUser)
    .catch(error => {
      logger.error(error);
      throw error;
    });
