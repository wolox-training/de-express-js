const { validateRequest } = require('./middlewares/request_validations');
const { healthCheck } = require('./controllers/healthCheck');
const users = require('./controllers/users');
const userSchema = require('./schema/users');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/users', validateRequest(userSchema.createUser), users.createUser);
};
