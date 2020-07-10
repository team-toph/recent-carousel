var read = require('../readFile.js');
var { sequelize, Item, Product } = require('./index.js');

var done = false;
var start = Date.now();

var paused = false;

read((items, callback) => {
  var products = [];
  // console.log(item.id);
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
      callback();
      if (done) {
        console.log(`Time to add all: ${Date.now() - start}ms`);
        sequelize.close();
      }
    })
    .catch((err) => {
      console.log(err);
    })
  // items.push(item);
  // item.product.forEach((thing) => {
  //   thing.itemId = item.id;
  //   products.push(thing);
  // });
  // if (items.length >= 10 && !paused) {
  //   callback(true);
  //   Item.bulkCreate(items)
  //   //  .then(() => {
  //   //    return Product.bulkCreate(products);
  //   //   })
  //     .then(() => {
  //       console.log('Done adding 10k, time taken: ', Date.now() - start);
  //       items = [];
  //       callback(false);
  //     })
  //     .catch((err) => {
  //       console.log(err.code);
  //     })
  // }
}, () => {
  done = true;
});