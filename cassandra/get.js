var db = require('./index.js');

var start = Date.now();
db.execute('select product from items where id = 9778543')
  .then((results) => {
    // removes meta information from results array
    // results.pop();
    // console.log(results);
    console.log('Time to complete first query: ', Date.now() - start);
    start = Date.now();
    var q = [];
    for (let i = 0; i < 1000; i++) {
      q.push(db.execute(`select product from items where id = ${Math.floor(Math.random() * 10000000)}`));
    }
    Promise.all(q)
      .then((results) => {
        console.log('Time to complete 1000 more: ', Date.now() - start);
        db.shutdown();
        // The following logs total number of secondary results to be sure
        // no requests got skipped over
        // console.log(results.reduce((acc, cur) => {
        //   return acc + cur.rows[0].product.length;
        // }, 0))
      })
      .catch((err) => {
        console.log('error', err);
      });
  });