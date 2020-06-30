const db  = require('./index.js');
const View = require('./View.js');
const faker = require('faker');

var imagesArray = [
  'https://picsum.photos/id/1/160/160/',
  'https://picsum.photos/id/1082/160/160/',
  'https://picsum.photos/id/117/160/160/',
  'https://picsum.photos/id/119/160/160/',
  'https://picsum.photos/id/158/160/160/',
  'https://picsum.photos/id/180/160/160/',
  'https://picsum.photos/id/20/160/160/',
  'https://picsum.photos/id/250/160/160/',
  'https://picsum.photos/id/252/160/160/',
  'https://picsum.photos/id/26/160/160/',
  'https://picsum.photos/id/319/160/160/',
  'https://picsum.photos/id/355/160/160/',
  'https://picsum.photos/id/357/160/160/',
  'https://picsum.photos/id/36/160/160/',
  'https://picsum.photos/id/366/160/160/',
  'https://picsum.photos/id/367/160/160/',
  'https://picsum.photos/id/370/160/160/',
  'https://picsum.photos/id/39/160/160/',
  'https://picsum.photos/id/403/160/160/',
  'https://picsum.photos/id/435/160/160/',
  'https://picsum.photos/id/452/160/160/',
  'https://picsum.photos/id/453/160/160/',
  'https://picsum.photos/id/454/160/160/',
  'https://picsum.photos/id/486/160/160/',
]
var makeid = 1;

const generateData = function() {
  var data = [];
  var randomized = Math.floor(Math.random() * imagesArray.length);

  var products = [];

  for (var j = 0; j < 8; j++) {
    var randomName = faker.commerce.productName();
    var randomUrl = imagesArray[randomized];
    var randomCost = faker.commerce.price();
    var randomRatings = Math.floor(Math.random() * 5);
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