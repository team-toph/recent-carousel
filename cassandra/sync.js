var cassandra = require('cassandra-driver');

var db = require('./index.js');

db.execute('drop table if exists items')
  .then(() => {
    return db.execute('drop type if exists product');
  })
  .then(() => {
    return db.execute(`CREATE TYPE product (
      name text,
      "imageUrl" text,
      cost int,
      ratings int,
      "reviewsCount" int
    )`);
  })
  .then(() => {
    return db.execute(`CREATE TABLE items (
      id int PRIMARY KEY,
      product list<frozen<product>>
    )`);
  })
  .then(() => {
    db.shutdown();
  });