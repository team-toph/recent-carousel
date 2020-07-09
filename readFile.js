module.exports = (callback, cb2) => {
  var fs = require('fs');
  var stream = fs.createReadStream('./data2.txt');
  var items = [];
  var leftover = '';
  stream.on('data', (chunk) => {
    items = items.concat((leftover + chunk.toString()).split('\r\n'));
    leftover = items.pop();
    for (let i = 0; i < items.length; i++) {
      callback(JSON.parse(items[i]));
    }
    items = [];
  });

  stream.on('end', () => {
    cb2();
  });
};