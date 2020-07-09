var read = require('../readFile.js');
var { sequelize, Item, Product } = require('./index.js');

var done = false;

read((item) => {
  console.log(item.id);
  Item.create({ id: item.id + 1 })
    .then(() => {
      item.product = item.product.map((thing) => {
        thing.itemId = item.id + 1;
        return thing;
      })
      Product.bulkCreate(item.product);
    })
}, () => {
  done = true;
});