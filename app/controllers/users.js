const bcrypt = require('bcryptjs');
const db = require('../models');
const User = require('../models/user')(db.sequelize, db.Sequelize.DataTypes);
const { duplicatedRegsiterError } = require('../errors');

exports.createUser = (req, res, netx) => {
  const user = req.body;
  User.findOne({
    where: {
      email: user.email
    }
  })
    .then(existUser => {
      if (!existUser) return bcrypt.hash(user.password, 8);
      return null;
    })
    .then(password => {
      if (!password) throw duplicatedRegsiterError(`email: ${user.email} already exist`);
      user.password = password;
      return User.create(user);
    })
    .then(newUser => {
      const message = {
        message: 'User created',
        data: { name: newUser.name, email: newUser.email }
      };
      res.status(200).json(message);
    })
    .catch(error => netx(error));
};
