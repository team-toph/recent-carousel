const db  = require('./index.js');
const View = require('./View.js');
const faker = require('faker');

var makeid = 1;

const generateData = function() {
  var data = [];

  var createImage = function() {
    var url = 'http://picsum.photos/id/'
    var urlend='/160/160'
    var randomNumber = Math.floor(Math.random() * 200);
    return url+randomNumber+urlend;
  }

  var products = [];

  for (var j = 0; j < 8; j++) {
    var randomName = faker.commerce.productName();
    var randomUrl = createImage();
    var randomCost = faker.commerce.price();
    var randomRatings = Math.floor(Math.random() * 6);
    var randomReviewsCount = Math.floor(Math.random() * 100)

    var productEntry = {
      name: randomName,
      imageUrl: randomUrl,
      cost: randomCost,
      ratings: randomRatings,
      reviewsCount: randomReviewsCount
    };
    products.push(productEntry);
  }
  var entry = {
    id: makeid,
    product: products,
  }
  data.push(entry);
  return data;
};

const insertSampleData = function() {
  var count = 0;
  while(count < 100) {
    View.create(generateData())
    count++
    makeid++
  }
};

insertSampleData();