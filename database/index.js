const mongoose = require('mongoose');
const dbconnection = mongoose.connect('mongodb://localhost/bought');

const db = mongoose.connect('dbconnection');
module.exports = db;