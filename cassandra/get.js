var db = require('./index.js');

var start = Date.now();
db.execute('select * from items where id = 9876543')
  .then((results) => {
    console.log(results.rows);
    console.log('Retrieved in: ', Date.now() - start);
    db.shutdown();
  });