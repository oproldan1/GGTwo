const supertest = require('supertest');

const server = 'http://localhost:3000';

describe('route integration', () => {

  describe('/', () => {
    describe('GET', () => {
      // should return html file 
      it('responds with 200 status and text/html content type', () => {
        return supertest(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200)
      })
    })
  })

  // other tests here
  describe('/', () => {
    describe('POST', () => {
      it('responds with html', (done) => {
        return supertest(server)
          .post('/user/login')
          .send({ username: "lexy", password: 'password' })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);
            done();
          });
      })
    })


    // describe('GET USER', () => {
    //   return supertest(server)
    //     .post('/signup')
    // })
  })
})