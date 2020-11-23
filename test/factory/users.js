const bcrypt = require('bcryptjs');
const { factory } = require('factory-girl');

const { factoryByModel } = require('./factory_by_models');
const { user } = require('../fixtures/users');

const modelName = 'users';

const options = {
  afterCreate: model =>
    bcrypt.hash(user.password, 8).then(password => {
      model.password = password;
      return model.save();
    })
};

factoryByModel(modelName, false, options);

module.exports = {
  create: () => factory.create(modelName, user),
  build: () => factory.build(modelName, user)
};
