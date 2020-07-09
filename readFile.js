module.exports = (callback, cb2) => {
  var fs = require('fs');
  var stream = fs.createReadStream('./data2.txt');
  var items = [];
  var leftover = '';
  stream.on('data', (chunk) => {
    items = items.concat((leftover + chunk.toString()).split('\r\n'));
    leftover = items.pop();
    while (items.length > 0) {
      callback(JSON.parse(items.pop()));
    }
  });

  stream.on('end', () => {
    cb2();
  });
};