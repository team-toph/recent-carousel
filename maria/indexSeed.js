var { Sequelize, DataTypes } = require('sequelize');
var { user, pass } = require('./config.js');
var sequelize = new Sequelize('SDC', user, pass, {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false
});
var modelOptions = { timestamps: false };

var Item = sequelize.define('item', {}, modelOptions);

var Product = sequelize.define('product', {
  cost: DataTypes.INTEGER,
  imageUrl: DataTypes.STRING,
  name: DataTypes.STRING,
  ratings: DataTypes.INTEGER,
  reviewsCount: DataTypes.INTEGER
}, modelOptions);

Item.hasMany(Product);

module.exports = { Item, Product, sequelize };