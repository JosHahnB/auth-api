'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const { db } = require('../src/models');
const mockserver = supertest(app);
beforeAll(async () => {
  db.sync()
});

afterAll(async () => {
  db.drop();
});

describe('Auth routes work as expected', () => {
  test('we can create a new user', async () => {
    const response = await mockserver.post('/signup').send({ username: 'test', password: '123', role: 'admin' });
    expect(response.status).toEqual(201);
  });

  test('we can sign in as our user', async () => {
    const response = await mockserver.post('/signin').auth('test', '123')
    expect(response.status).toBe(200);
  })
});