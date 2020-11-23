const { validateRequest } = require('./middlewares/request_validations');
const users = require('./controllers/users');
const userSchema = require('./schema/users');

exports.init = app => {
  app.post('/users', validateRequest(userSchema.createUser), users.createUser);
  app.post('/users/sessions', validateRequest(userSchema.singInUser), users.singInUser);
};
