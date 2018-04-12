const request = require('supertest');
const app = require('../app.js');

beforeAll(() => {
  let server = app.listen(3000, () => console.log(`listening to port 3000`))
});

afterAll(() => {
  server.close();
});

describe('Test the root directory', () => {
  test('should response to the GET method', () => {
      return request(app).get('/').expect(200);
  });
});