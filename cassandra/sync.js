var cassandra = require('cassandra-driver');

var db = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'items'
});

db.execute('drop table if exists items')
  .then(() => {
    return db.execute(`drop type if exists product`)
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