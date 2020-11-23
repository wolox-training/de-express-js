const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const { jwtSecret } = require('../../config').common.jwt;

exports.findUserByEmail = (model, email) => model.findOne({ where: { email } });

exports.cryptPass = password => bcrypt.hash(password, 8);

exports.checkPass = (password, hash) => bcrypt.compare(password, hash);

exports.generateUserJWT = payload => jwt.encode(payload, jwtSecret);
