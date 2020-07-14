var mariadb = require('mariadb');
var pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'SDC'
});
var start = Date.now();
pool.query('select * from products where itemId = 9778543')
  .then((results) => {
    console.log('Time to complete first query: ', Date.now() - start);
    start = Date.now();
    var q = [];
    for (let i = 0; i < 1000; i++) {
      q.push(pool.query(`select * from products where itemId = ${Math.floor(Math.random() * 10000000)}`));
    }
    Promise.all(q)
      .then((results) => {
        console.log('Time to complete 1000 more: ', Date.now() - start);
        pool.end();
        // The following logs total number of secondary results to be sure
        // no requests got skipped over
        console.log(results.reduce((acc, cur) => {
          return acc + cur.length;
        }, 0));
      })
      .catch((err) => {
        console.log('error');
      });
  });