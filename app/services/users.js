const { duplicatedRegsiterError, unauthenticatedUserError } = require('../errors');
const logger = require('../logger');
const { users } = require('../models');
const { cryptPass, checkPass, generateUserJWT } = require('../utiles/token');

const findUserByEmail = email => users.findOne({ where: { email } });

exports.createUserService = data =>
  findUserByEmail(data.email)
    .then(existUser => {
      if (!existUser) return cryptPass(data.password);
      throw duplicatedRegsiterError(`user with email ${data.email} already exist`);
    })
    .then(password => users.create({ ...data, password }))
    .catch(error => {
      logger.error(error);
      throw error;
    });

exports.singInUserService = data =>
  findUserByEmail(data.email)
    .then(existUser => {
      if (!existUser) throw unauthenticatedUserError(`user with email ${data.email} is not registred`);
      return [checkPass(data.password, existUser.password), existUser.id];
    })
    .then(([checkedPass, userId]) => {
      if (checkedPass) return generateUserJWT({ id: userId });
      throw unauthenticatedUserError('unauthenticated user');
    })
    .catch(error => {
      logger.error(error);
      throw error;
    });
