var { Item, Product, sequelize } = require('./index.js');
var start = Date.now();

Product.findAll({ where: { itemId: 9777743 }})
  .then((results) => {
    console.log('Time to complete first query: ', Date.now() - start);
    start = Date.now();
    var q = [];
    for (let i = 0; i < 1000; i++) {
      q.push(Product.findAll({ where: {
        itemId: Math.floor(Math.random() * 10000000)
      }}));
    }
    Promise.all(q)
      .then((results) => {
        console.log('Time to complete 1000 more: ', Date.now() - start);
        sequelize.close();
        // The following logs total number of secondary results to be sure
        // no requests got skipped over
        // console.log(results.reduce((acc, cur) => {
        //   return acc + cur.length
        // }, 0))
      })
      .catch((err) => {
        console.log('error');
      });
  });