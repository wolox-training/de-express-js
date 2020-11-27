const bcrypt = require('bcryptjs');
const { factory } = require('factory-girl');

const { factoryByModel } = require('./factory_by_models');
const { roles } = require('../fixtures/roles');

const modelName = 'roles';

const options = {
  afterCreate: model =>
    bcrypt.hash(roles.password, 8).then(password => {
      model.password = password;
      return model.save();
    })
};

factoryByModel(modelName, false, options);

module.exports = {
  createMany: () => factory.createMany(modelName, roles.length, roles),
  buildMany: () => factory.buildMany(modelName, roles.length, roles)
};
