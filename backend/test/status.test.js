const request = require('supertest');
const app = require('../index');

describe('GET /status', () => {
  test('responds with json status ok', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});
