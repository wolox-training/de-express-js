const { validateRequest } = require('./middlewares/request_validations');
const { authetication } = require('./middlewares/authentication');
const users = require('./controllers/users');
const userSchemas = require('./schema/users');

exports.init = app => {
  app.post('/users', validateRequest(userSchemas.createUser), users.createUser);
  app.post('/users/sessions', validateRequest(userSchemas.singInUser), users.singInUser);
  app.get('/users', validateRequest(userSchemas.listUsers), authetication, users.listUsers);
};
