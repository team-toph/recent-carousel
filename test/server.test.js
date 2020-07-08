///////////// example test from jest docs /////////////
const sum = require('../server/sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
///////////////////////////////////////////////////////

const request = require('supertest');
const app = require('../server/index.js');
const mongoose = require('mongoose');

describe('Test to see if api endpoint / works', () => {
  test('It should recieve a status code of 200', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.status).toBe(200);
      });
  });
});

describe('Test to see if api endpoint /recentlyViewed works', () => {
  test('It should recieve a status code of 200', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.status).toBe(200);
      });
  });
});