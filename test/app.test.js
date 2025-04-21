// test/app.test.js
const request = require('supertest');
const app = require('../server');
const { expect } = require('chai');

describe('GET /', () => {
  it('should return 200 and the Hello message', done => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello, Azure DevOps!');
        done();
      });
  });
});

