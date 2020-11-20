const bcrypt = require('bcryptjs');
const { factory } = require('factory-girl');

const { factoryByModel } = require('./factory_by_models');
const users = require('../fixtures/users');

const modelName = 'users';

const options = {
  afterCreate: model =>
    bcrypt.hash(users.correct.password, 8).then(password => {
      model.password = password;
      return model.save();
    })
};

factoryByModel(modelName, false, options);

module.exports = {
  create: () => factory.create(modelName, users.correct),
  build: () => factory.build(modelName, users.correct)
};
