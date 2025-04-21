// test/app.test.js
const request = require('supertest');
const app = require('../server');
const { expect } = require('chai');

describe('GET /', () => {
  it('returns Hello, Azure DevOps!', done => {
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

