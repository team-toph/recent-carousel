const db  = require('./index.js');
const View = require('./View.js');
const faker = require('faker');

const generateData = function() {
  var data = [];

  var randomName = faker.commerce.productName();
  var randomUrl = 'https://picsum.photos/200/300?random';
  var randomCost = faker.commerce.price();
  var randomReviews = Math.floor(Math.random() * 5);
  var randomReviewsCount = Math.floor(Math.random() * 100)

  var entry = {
    name: randomName,
    imageUrl: randomUrl,
    cost: randomCost,
    reviews: randomReviews,
    reviewsCount: randomReviewsCount
  }
  data.push(entry);

  return data;
};

const insertSampleData = function() {
  var count = 0;
  while(count < 100) {
      View.create(generateData())
      count++
      // .then(() => db.disconnect());
  }
};

insertSampleData();