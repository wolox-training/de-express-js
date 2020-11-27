const { duplicatedRegsiterError, unauthenticatedUserError, databaseError } = require('../errors');
const logger = require('../logger');
const { users } = require('../models');
const { cryptPass, checkPass, generateUserJWT } = require('../utiles/token');

const findUserByEmail = email =>
  users.findOne({ where: { email } }).catch(error => {
    logger.error(error);
    throw databaseError('Database error when trying find user by email');
  });

const findUserById = id =>
  users.findByPk(id).catch(error => {
    logger.error(error);
    throw databaseError('Database error when trying find user by Id');
  });

exports.findUserByEmail = findUserByEmail;

exports.findUserById = findUserById;

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

exports.listUsersService = (page, size) =>
  users
    .findAndCountAll({
      attributes: ['id', 'name', 'lastname', 'email'],
      offset: (page - 1) * size,
      limit: size
    })
    .catch(error => {
      logger.error(error);
      throw databaseError('Database error when trying to list all users');
    });

exports.createAdminUserService = data =>
  cryptPass(data.password)
    .then(password =>
      users.findOrCreate({
        where: {
          email: data.email
        },
        defaults: { ...data, id_role: 1, password }
      })
    )
    .catch(error => {
      logger.error(error);
      throw databaseError('Database error when trying to create admin users');
    });
