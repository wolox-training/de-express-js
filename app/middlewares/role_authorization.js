const { findUserById } = require('../services/users');
const { unauthenticatedUserError } = require('../errors');

exports.roleAuthorization = roles => (req, _, next) =>
  findUserById(req.userData.id).then(user => {
    if (!roles.includes(user.id_role)) next(unauthenticatedUserError('Unautorizeted user'));
    next();
  });
