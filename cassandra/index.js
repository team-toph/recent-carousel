var cassandra = require('cassandra-driver');
var faker = require('faker');

var db = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'items'
});

const generateData = function(makeid) {
  var products = [];
  var max = (Math.random() * 5) + 7;
  for (var j = 0; j < max; j++) {
    products[j] = {
      name: faker.commerce.productName(),
      imageUrl: `https://loremflickr.com/160/160?lock=${Math.floor(Math.random() * 1000)}`,
      cost: faker.commerce.price(),
      ratings: Math.floor(Math.random() * 6),
      reviewsCount: Math.floor(Math.random() * 100)
    };
  }
  return {id: makeid, product: products};
};

var item = generateData(47);
var query = `INSERT INTO items (id, product) VALUES(${item.id}, ? )`;
db.execute(query, [ item.product ], {prepare: true})
  .then((results) => {
    db.shutdown();
  });