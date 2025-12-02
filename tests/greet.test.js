const request = require('supertest');
const app = require('../src/app');

describe('GET /api/greet', () => {
  it('should greet "World" when no name is provided', async () => {
    const res = await request(app)
      .get('/api/greet')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.body.message).toBe('Hello, World!');
  });

  it('should greet the provided name', async () => {
    const res = await request(app)
      .get('/api/greet?name=Tiago')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.body.message).toBe('Hello, Tiago!');
  });
});

describe('POST /api/greet', () => {
  it('should greet the provided name', async () => {
    const res = await request(app)
      .post('/api/greet')
      .send({ name: 'Tiago' })
      .expect('Content-Type', /json/)
      .expect(201);

    expect(res.body.message).toBe('Hello, Tiago!');
  });

  it('should return 400 if name is missing', async () => {
    const res = await request(app)
      .post('/api/greet')
      .send({})
      .expect('Content-Type', /json/)
      .expect(400);

    expect(res.body.error).toBe('Name is required');
  });
});
