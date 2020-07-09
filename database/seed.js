const db = require('./index.js');
const View = require('./View.js');
const faker = require('faker');

var imagesArray = [
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/118-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/119-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/12-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/120-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/121-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/122-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/123-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/124-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/125-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/126-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/127-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/128-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/129-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/13-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/130-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/131-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/132-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/133-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/134-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/135-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/136-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/137-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/139-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/14-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/140-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/141-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/142-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/143-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/144-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/145-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/146-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/147-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/149-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/15-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/151-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/152-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/153-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/154-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/155-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/156-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/157-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/158-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/16-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/160-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/161-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/162-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/163-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/164-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/165-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/176-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/177-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/178-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/179-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/18-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/180-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/181-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/182-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/183-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/184-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/185-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/186-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/187-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/188-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/189-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/19-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/190-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/191-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/192-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/193-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/194-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/195-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/196-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/197-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/198-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/199-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/2-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/20-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/200-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/201-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/202-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/203-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/204-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/206-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/208-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/209-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/21-160x160.jpg',
  'https://shrayafec.s3-us-west-1.amazonaws.com/S3/210-160x160.jpg',
];

var makeid = 1;

const generateData = function() {
  var data = [];

  var createImage = function() {
    var randomized = Math.floor(Math.random() * imagesArray.length);
    return imagesArray[randomized];
  };

  var products = [];

  for (var j = 0; j < 8; j++) {
    var randomName = faker.commerce.productName();
    var randomUrl = createImage();
    var randomCost = faker.commerce.price();
    var randomRatings = Math.floor(Math.random() * 6);
    var randomReviewsCount = Math.floor(Math.random() * 100);

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
    product: products
  };
  data.push(entry);
  return data;
};

const insertSampleData = function() {
  var count = 0;
  while (count < 100) {
    View.create(generateData());
    count++;
    makeid++;
  }
};

insertSampleData();