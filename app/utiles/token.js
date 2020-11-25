const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const { secret } = require('../../config').common.session;

exports.cryptPass = password => bcrypt.hash(password, 8);

exports.checkPass = (password, hash) => bcrypt.compare(password, hash);

exports.generateUserJWT = payload => jwt.encode(payload, secret);
