const request = require('supertest');

const app = require('../../app.js');
const { users } = require('../fixtures/users');
const userFactory = require('../factory/users');
const roleFactory = require('../factory/roles');

const VALID_RESPONSE_CODE = 200;
const SERVICE_ERROR = 400;
const UNAUTHENTICATED_USER_ERROR = 401;

describe('controllers', () => {
  describe('weet', () => {
    beforeEach(() => roleFactory.createMany());
    describe('POST /users', () => {
      it('create weeet successfully', () =>
        userFactory
          .createMany()
          .then(() =>
            request(app)
              .post('/users/sessions')
              .send({ email: users[2].email, password: users[2].password })
          )
          .then(res =>
            request(app)
              .post('/weets')
              .set({ authorization: res.body.data.token })
              .send({ fact: 'trivia' })
          )
          .then(res => {
            expect(res.statusCode).toBe(VALID_RESPONSE_CODE);
          }));
      it('create weeet with invalid token', () =>
        userFactory
          .createMany()
          .then(() =>
            request(app)
              .post('/users/sessions')
              .send({ email: users[2].email, password: users[2].password })
          )
          .then(res =>
            request(app)
              .post('/weets')
              .set({ authorization: `as${res.body.data.token}as` })
              .send({ fact: 'trivia' })
          )
          .then(res => {
            expect(res.statusCode).toBe(UNAUTHENTICATED_USER_ERROR);
          }));
      it('create weeet with invalid fact', () =>
        userFactory
          .createMany()
          .then(() =>
            request(app)
              .post('/users/sessions')
              .send({ email: users[2].email, password: users[2].password })
          )
          .then(res =>
            request(app)
              .post('/weets')
              .set({ authorization: `${res.body.data.token}` })
              .send({ fact: 'live' })
          )
          .then(res => {
            expect(res.statusCode).toBe(SERVICE_ERROR);
          }));
    });
  });
});
