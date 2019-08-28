const app = require('../app');
const request = require('supertest')(app);
const UserController = require('../controllers/user');
const expect = require('chai').expect;

describe('test /api/users', () => {
  let mockUser;
  before(done => {
    UserController.createNewUser({
      name: 'john',
      sex: 'Male',
      rank: 'General',
      phone: '000-000-0000',
      email: 'john@gmail.com',
      avatar: 'http://www.test.com/test.png'
    })
      .then(user => {
        mockUser = user;
        done();
      })
      .catch(err => console.log(err));
  });

  describe('get /api/users/:userId', () => {
    it('should return user info', done => {
      request.get('/api/users/' + mockUser._id).end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.code).to.equal(0);
        expect(res.body.data.user.name).to.equal('john');
        done();
      });
    });
  });
});
