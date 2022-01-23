// External dependencies
const supertests = require('supertest');

// Internal dependencies
const app = require('../index');

// Constants
const request = supertests(app);

describe('root endpoint', () => {
  it('should return a message with "Hello World!" as value', async () => {
    const res = await request.get('/');

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello World!');
  });
});
