var mariadb = require('mariadb');
var config = require('./config.js');
var pool = mariadb.createPool({
  host: '172.31.6.138',
  user: config.user,
  password: config.pass,
  database: 'SDC'
});
module.exports.pool = pool;

module.exports.find = function(id) {
  return pool.query(`SELECT * FROM products where itemId = ${id}`)
    .then((product) => {
      if (product.length === 0) {
        return `No items found for itemId ${id}`;
      }
      return [{ id, product }];
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
    });
};

module.exports.update = function(id, item) {
  return pool.query(`DELETE FROM products WHERE itemId=${id}`)
    .then(() => {
      item.id = id;
      return addProducts(item);
    });
};

module.exports.delete = function(id) {
  return pool.query(`DELETE FROM products WHERE itemId=${id}`)
    .then(() => {
      return pool.query(`DELETE FROM items WHERE id=${id}`);
    });
};
