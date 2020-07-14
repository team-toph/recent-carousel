var mariadb = require('mariadb');
var config = require('./config.js');
var pool = mariadb.createPool({
  host: 'localhost',
  user: config.user,
  password: config.pass,
  database: 'SDC'
});

module.exports.find = function(id) {
  return pool.query(`SELECT * FROM products where itemId = ${id}`)
    .then((product) => {
      if (product.length === 0) {
        return 'No items found';
      }
      return [{ id, product }];
    })
    .catch((err) => {
      console.log('error retrieving item: ', err);
    });
};

module.exports.create = function(item) {
  return pool.query(`INSERT INTO items VALUES (${item.id})`)
    .then(() => {
      item.product = item.product.map((product) => Object.values(product));
      return pool.batch(`INSERT INTO products(reviewsCount, ratings, cost, imageUrl, name, itemId) VALUES (?, ?, ? ,?, ?, ${item.id})`, item.product);
    })
    .catch((err) => {
      console.log('error adding item: ', err);
    });
};

module.exports.update = function(id, values) {
  return;
};

module.exports.delete = function(id) {
  return pool.query(`DELETE FROM products WHERE itemId=${id}`)
    .then(() => {
      return pool.query(`DELETE FROM items WHERE id=${id}`);
    })
    .catch((err) => {
      console.log('error deleting item: ', err);
    });
};