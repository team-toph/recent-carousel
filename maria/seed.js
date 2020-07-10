var read = require('../readFile.js');
var { sequelize, Item, Product } = require('./index.js');

var done = false;
var start = Date.now();

var items = [];
var products = [];

read((item) => {
  // console.log(item.id);
  Item.create({ id: item.id + 1 })
    .then(() => {
      item.product.forEach((thing) => {
        thing.itemId = item.id + 1;
        products.push(thing);
      });
      if (item.id >= 9999) {
        Product.bulkCreate(products)
        .then(() => {
          if (item.id >= 9999) {
            console.log('Done adding, time taken: ', Date.now() - start);
            sequelize.close();
          }
        })
        .catch((err) => {
          console.log('Error bulk adding');
        });
      }
    })
    .catch((err) => {
      console.log('Error adding: ', item.id);
    })
}, () => {
  done = true;
});