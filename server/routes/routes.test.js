var request = require('supertest');
const app = require('../index.js').app;


beforeAll(function() {
  if (server) {
    server.close()
  } else {

  }
});

describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../index.js').server;
  });
  afterEach(function () {
    server.close();
  });
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});