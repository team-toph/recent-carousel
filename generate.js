var faker = require('faker');
var fs = require('fs');

const generateData = function(makeid) {
  var products = [];
  var max = (Math.random() * 5) + 7;
  for (var j = 0; j < max; j++) {
    products[j] = {
      name: faker.commerce.productName(),
      imageUrl: `https://loremflickr.com/160/160?lock=${Math.floor(Math.random() * 1000)}`,
      cost: faker.commerce.price(),
      ratings: Math.floor(Math.random() * 6),
      reviewsCount: Math.floor(Math.random() * 100)
    };
  }
  return {id: makeid, product: products};
};

var start = Date.now();
var stream = fs.createWriteStream('./data.txt', {flags: 'a'});
var count = 20000000;
var max = count + 1000000;
var write = () => {
  var ready = true;
  while (count <= max && ready) {
    ready = stream.write(JSON.stringify(generateData(count)) + '\r\n');
    count++;
  }
  if (count <= max) {
    stream.once('drain', write);
  } else {
    stream.end();
    console.log('Time to write: ', Date.now() - start);
  }
};
write();

module.exports = generateData;