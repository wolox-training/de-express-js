const { createUserService, singInUserService } = require('../services/users');

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
