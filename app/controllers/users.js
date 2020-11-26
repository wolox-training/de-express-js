const {
  createUserService,
  singInUserService,
  listUsersService,
  createAdminUserService
} = require('../services/users');

exports.createUser = (req, res, next) =>
  createUserService(req.body)
    .then(newUser => {
      const message = {
        message: 'User created',
        data: { name: newUser.name, email: newUser.email }
      };
      res.status(200).send(message);
    })
    .catch(error => next(error));

exports.singInUser = (req, res, next) =>
  singInUserService(req.body)
    .then(token => {
      const message = {
        message: 'authenticated user',
        data: { token }
      };
      res.status(200).send(message);
    })
    .catch(error => next(error));

exports.listUsers = (req, res, next) => {
  const { page, size } = req.query;
  listUsersService(page || 1, size || 20)
    .then(({ count, rows }) => {
      const message = {
        message: 'Users list',
        data: rows,
        pagination: {
          page,
          totalReg: count
        }
      };
      res.status(200).send(message);
    })
    .catch(error => next(error));
};

exports.createAdminUser = (req, res, next) =>
  createAdminUserService(req.body)
    .then(newUser => {
      const message = {
        message: 'Admi user created',
        data: { name: newUser.name, email: newUser.email }
      };
      res.status(200).send(message);
    })
    .catch(error => next(error));
