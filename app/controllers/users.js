const bcrypt = require('bcryptjs');
const { users } = require('../models');
const { duplicatedRegsiterError } = require('../errors');

exports.createUser = (req, res, next) => {
  const user = req.body;
  users
    .findOne({
      where: {
        email: user.email
      }
    })
    .then(existUser => {
      if (!existUser) return bcrypt.hash(user.password, 8);
      throw duplicatedRegsiterError(`user with email ${user.email} already exist`);
    })
    .then(password => {
      user.password = password;
      return users.create(user);
    })
    .then(newUser => {
      const message = {
        message: 'User created',
        data: { name: newUser.name, email: newUser.email }
      };
      res.status(200).send(message);
    })
    .catch(error => next(error));
};
