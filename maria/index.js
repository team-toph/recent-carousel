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

var addProducts = function(item) {
  item.product = item.product.map((product) => {
    var { reviewsCount, ratings, cost, imageUrl, name } = product;
    return [reviewsCount, ratings, cost, imageUrl, name];
  });
  return pool.batch(`INSERT INTO
    products(reviewsCount, ratings, cost, imageUrl, name, itemId)
    VALUES (?, ?, ? ,?, ?, ${item.id})`, item.product);
};

module.exports.create = function(item) {
  return pool.query(`INSERT INTO items VALUES (${item.id})`)
    .then(() => {
      return addProducts(item);
    })
    .catch((err) => {
      console.log('error adding item: ', err);
    });
};

module.exports.update = function(id, item) {
  return pool.query(`DELETE FROM products WHERE itemId=${id}`)
    .then(() => {
      item.id = id;
      return addProducts(item);
    })
    .catch(() => {
      console.log('error updating item: ', err);
    });
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