module.exports = (callback, cb2) => {
  var fs = require('fs');
  var stream = fs.createReadStream('./data2.txt');
  var items = [];
  var leftover = '';
  stream.on('data', (chunk) => {
    stream.pause();
    items = items.concat((leftover + chunk.toString()).split('\r\n'));
    leftover = items.pop();
    if (items.length > 10000 || leftover === '') {
      items = items.map((item) => {
        return JSON.parse(item);
      });
      callback(items, () => stream.resume());
      items = [];
    } else {
      stream.resume();
    }
  });

  stream.on('end', () => {
    cb2();
  });
};