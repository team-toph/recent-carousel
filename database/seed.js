const db = require('./index.js');
const View = require('./View.js');
const faker = require('faker');

var makeid = 1;

const generateData = require('../generate.js');

const insertSampleData = function() {
  var count = 0;
  while(count < 100) {
    View.create(generateData(makeid))
    count++
    makeid++
  }
};

insertSampleData();