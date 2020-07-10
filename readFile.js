module.exports = (callback, cb2) => {
  var fs = require('fs');
  var stream = fs.createReadStream('./data2.txt');
  var leftover = '';
  stream.on('data', (chunk) => {
    stream.pause();
    var items = [];
    items = items.concat((leftover + chunk.toString()).split('\r\n'));
    leftover = items.pop();
    items = items.map((item) => {
      return JSON.parse(item);
    });
    callback(items, () => stream.resume());
    // while (items.length > 0) {
    //   var item = JSON.parse(items.pop());
    //   callback(item, (bool) => {
    //     bool ? stream.pause() : stream.resume();
    //   });
    // }
  });

  stream.on('end', () => {
    cb2();
  });
};