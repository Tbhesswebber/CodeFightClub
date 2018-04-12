const request = require('supertest');
const app = require('./app.js');

beforeAll(() => {
  let server = app.listen(3000, () => console.log(`listening to port 3000`))
});

afterAll(() => {
  server.close();
});

describe('Test the root directory', () => {
  test('should respond to the GET method with 200', () => {
      return request(app).get('/').expect(200);
  });

  test('should respond to the POST method with 404', () => {
    return request(app).post('/').expect(404);
  });
});

describe('Test the signup endpoint', () => {
  test('should respond to the GET method with 404', () => {
      return request(app).get('/signup').expect(404);
  });

  test('should respond to the POST method with 300', () => {
    return request(app).post('/signup').expect(300);
  });
});