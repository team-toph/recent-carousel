const mongoose = require('mongoose');
const dbconnection = mongoose.connect('mongodb://localhost/products');

const db = mongoose.connect('dbconnection');
module.exports = db;