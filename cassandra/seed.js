var db = require('./index.js');
var read = require('../readFile.js');

var query = 'INSERT INTO items (id, product) VALUES(?, ? )';
var done = false;
var start = Date.now();
var count = 0;
var errors = 0;

read((items, callback) => {
  var promises = items.map((item) => {
    return db.execute(query, [ item.id, item.product ], {prepare: true})
      .then(() => {
        count++;
        if (count % 100000 === 0) {
          console.log('Added 100k items. Time so far: ', Date.now() - start);
        }
        if (count >= 10000000) {
          console.log('Done adding. Time taken: ', Date.now() - start);
          console.log('Errors: ', errors);
          db.shutdown();
        }
      })
      .catch((err) => {
        count++;
        errors++;
        console.log('Error adding item ', item.id);
      });
  });
  Promise.all(promises)
    .then(() => {
      callback();
    });
}, () => {
  done = true;
});