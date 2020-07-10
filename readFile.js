module.exports = (callback, cb2) => {
  var fs = require('fs');
  var stream = fs.createReadStream('./data.txt', {encoding: 'utf8'});
  var items = [];
  var chunks = [];
  var done = false;
  var leftover = '';
  stream.on('data', (chunk) => {
    chunks.push(chunk);
    if (chunks.length > 300) {
      stream.pause();
      items = chunks.reduce((acc, chunk) => {
        return acc + chunk;
      }, leftover).split('\r\n');
      leftover = items.pop();
      items = items.map((item) => {
        return JSON.parse(item);
      });
      callback(items, () => stream.resume());
      items = [];
      chunks = [];
    }
  });

  stream.on('end', () => {
    chunks.forEach((chunk) => {
      items = items.concat((leftover + chunk.toString()).split('\r\n'));
      leftover = items.pop();
    });
    items = items.map((item) => {
      return JSON.parse(item);
    });
    callback(items, () => stream.resume());
    items = [];
    chunks = [];
    cb2();
  });
};