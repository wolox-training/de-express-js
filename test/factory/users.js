const bcrypt = require('bcryptjs');
const { factory } = require('factory-girl');

const { factoryByModel } = require('./factory_by_models');
const { users } = require('../fixtures/users');

const modelName = 'users';

const options = {
  afterCreate: model =>
    bcrypt.hash(users.password, 8).then(password => {
      model.password = password;
      return model.save();
    })
};

factoryByModel(modelName, false, options);

module.exports = {
  createUser: () => factory.create(modelName, users[1]),
  createAdminUser: () => factory.create(modelName, users[0]),
  createMany: () => factory.createMany(modelName, users.length, users),
  buildUser: () => factory.build(modelName, users[1]),
  buildAdminUser: () => factory.build(modelName, users[0]),
  buildMany: () => factory.buildMany(modelName, users.length, users)
};
