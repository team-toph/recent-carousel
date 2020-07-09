var fs = require('fs');

var stream = fs.createReadStream('./data.txt');
var items = [];
var leftover = '';
stream.on('data', (chunk) => {
  items = items.concat((leftover + chunk.toString()).split('\r\n'));
  leftover = items.pop();
  console.log(leftover);
});

stream.on('end', () => {
  // console.log('Result: ', items);
  var total = 0;
  // console.log(items.map((item) => {
  //   return JSON.parse(item);
  // }))
  // console.log()
  console.log('Leftover: ', leftover);
});