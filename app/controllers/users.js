const { createUserService } = require('../services/users');

exports.createUser = (req, res, next) => createUserService(req, res, next);
