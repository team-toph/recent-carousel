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

for (let i = 0; i < 10; i++) {
  var stream = fs.createWriteStream('./data.txt', {flags: 'a'});
  for (let j = 0; j < 10; j++) {
    stream.write(JSON.stringify(generateData(i * 10 + j)) + '\r\n');
  }
  stream.end();
}

module.exports = generateData;