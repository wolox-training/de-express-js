const request = require('supertest');

const app = require('../../app.js');
const testUser = require('../fixtures/users');
const userFactory = require('../factory/users');

const VALID_RESPONSE_CODE = 200;
const INVALID_SCHEMA_CODE = 422;
const DUPLICATED_REGISTER_ERROR = 400;

describe('controllers', () => {
  describe('users', () => {
    describe('POST /users', () => {
      it('Sing in user successfully', () =>
        request(app)
          .post('/users')
          .send(testUser.correct)
          .then(res => {
            expect(res.statusCode).toBe(VALID_RESPONSE_CODE);
          }));
      it('Sing in user with an email all ready exist', () =>
        userFactory
          .create()
          .then(() =>
            request(app)
              .post('/users')
              .send(testUser.correct)
          )
          .then(res => {
            expect(res.statusCode).toBe(DUPLICATED_REGISTER_ERROR);
          }));
      it('Sing in user with invalid domain', () =>
        request(app)
          .post('/users')
          .send(testUser.worngMail)
          .then(res => {
            expect(res.statusCode).toBe(INVALID_SCHEMA_CODE);
          }));
      it('Sing in user with no alphanumeric password', () =>
        request(app)
          .post('/users')
          .send(testUser.noAlphanumericPass)
          .then(res => {
            expect(res.statusCode).toBe(INVALID_SCHEMA_CODE);
          }));
      it('Sing in user with short password', () =>
        request(app)
          .post('/users')
          .send(testUser.shortPassword)
          .then(res => {
            expect(res.statusCode).toBe(INVALID_SCHEMA_CODE);
          }));
      it('Sing in epmty user', () =>
        request(app)
          .post('/users')
          .send({})
          .then(res => {
            expect(res.statusCode).toBe(INVALID_SCHEMA_CODE);
          }));
    });
  });
});
