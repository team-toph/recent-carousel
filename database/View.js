const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const viewSchema = new mongoose.Schema({
  id: Number,
  product: [{
    name: String,
    imageUrl: String,
    cost: Number,
    ratings: Number,
    reviewsCount: Number
  }]
});

const View = mongoose.model('View', viewSchema);

module.exports = View;
