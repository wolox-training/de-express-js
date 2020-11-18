// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const user = require('./controllers/user');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/users', user.singUp);
  // app.get('/endpoint/get/path', [], controller.methodGET);
  // app.put('/endpoint/put/path', [], controller.methodPUT);
  // app.post('/endpoint/post/path', [], controller.methodPOST);
};
