const { validateRequest } = require('./middlewares/request_validations');
const { authetication } = require('./middlewares/authentication');
const { roleAuthorization } = require('./middlewares/role_authorization');
const users = require('./controllers/users');
const weet = require('./controllers/weet');
const userSchemas = require('./schema/users');
const weetSchemas = require('./schema/weet');

exports.init = app => {
  app.post('/users', validateRequest(userSchemas.createUser), users.createUser);
  app.post('/users/sessions', validateRequest(userSchemas.singInUser), users.singInUser);
  app.get('/users', validateRequest(userSchemas.listUsers), authetication, users.listUsers);

  app.post(
    '/admi/users',
    validateRequest(userSchemas.createUser),
    authetication,
    roleAuthorization([1]),
    users.createAdminUser
  );

  app.post('/weets', validateRequest(weetSchemas.createWeet), authetication, weet.createWeet);
};
