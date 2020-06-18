const mongoose = require('mongoose');
const dbconnection = mongoose.connect('mongodb://localhost/recentlyViewed');

const db = mongoose.connect('dbconnection');
module.exports = db;