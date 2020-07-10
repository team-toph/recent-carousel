var read = require('../readFile.js');
var { sequelize, Item, Product } = require('./index.js');

var done = false;
var start = Date.now();

read((items, callback) => {
  var products = [];
  items.forEach((item) => {
    item.product.forEach((product) => {
      product.itemId = item.id;
      products.push(product);
    });
  });
  Item.bulkCreate(items)
    .then(() => {
      return Product.bulkCreate(products);
    })
    .then(() => {
      console.log(`Added ${items.length} items. Total time: ${Date.now() - start}ms`);
      if (done) {
        console.log(`Time to add all: ${Date.now() - start}ms`);
        sequelize.close();
      } else {
        callback();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}, () => {
  done = true;
});