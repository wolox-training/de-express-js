const { createUserService } = require('../services/users');
const { users } = require('../models');

exports.createUser = (req, res, next) =>
  createUserService(users, req.body)
    .then(newUser => {
      const message = {
        message: 'User created',
        data: { name: newUser.name, email: newUser.email }
      };
      res.status(200).send(message);
    })
    .catch(error => next(error));
