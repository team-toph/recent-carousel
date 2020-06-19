const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const viewSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  cost: Number,
  reviews: Number,
  reviewsCount: Number
});

const View = mongoose.model('View', viewSchema);

module.exports = View;
