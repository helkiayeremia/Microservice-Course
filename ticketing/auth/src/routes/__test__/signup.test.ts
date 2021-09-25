import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'joker@example.io',
      password: 'test1234',
    })
    .expect(201);
});

it('returns 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'asfasfaf',
      password: 'test1234',
    })
    .expect(400);
});

it('returns 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'joker@example.io',
      password: '1',
    })
    .expect(400);
});

it('returns 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'joker@example.io',
    })
    .expect(400);

  return request(app)
    .post('/api/users/signup')
    .send({
      password: 'test1234',
    })
    .expect(400);
});
