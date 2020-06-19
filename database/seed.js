const db  = require('./index.js');
const View = require('./View.js');

const sampleData = [
  {
    name: "Squier Stratocaster Electric Guitar Pack with Fender Frontman 10G",
    imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/L25659000001000-00-160x160.jpg',
    cost: 219.99,
    reviews: 4.5,
    reviewsCount: 31
  },
  {
    name: "Squier Affinity Serires Stratocaster HSS Electric Guitar Pack with Fender",
    imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/L25739000001000-00-160x160.jpg',
    cost: 329.99,
    reviews: 4,
    reviewsCount: 18
  },
  {
    name: "Squier Bullet Telecaster Limited Edition Electric Guitar Surf Green",
    imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/L20490000001000-00-160x160.jpg',
    cost: 179.99,
    reviews: 4.5,
    reviewsCount: 81
  },
  {
    name: "Rogue Rocketeer Electric Guitar Pack Wine Burst",
    imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/430930000002000-00-160x160.jpg',
    cost: 179.99,
    reviews: 4,
    reviewsCount: 119
  },
  {
    name: "Epiphone Limited Edition Les Paul Special-I Electric Guitar Worn Black",
    imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/H71861000002000-00-160x160.jpg',
    cost: 159.99,
    reviews: 4.5,
    reviewsCount: 197
  },
  {
    name: "Squier Bullet Stratocaster HSS with Tremolo Limited Edition Electric Guitar",
    imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/L20489000001000-00-160x160.jpg',
    cost: 129.99,
    reviews: 4,
    reviewsCount: 72
  },
  {
    name: "Fender Player Stratocaster HSS Plus Maple Fingerboard",
    imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/L46829000001000-00-160x160.jpg',
    cost: 724.99,
    reviews: 4.5,
    reviewsCount: 58
  },
  {
    name: "Gibson Les Paul Studio Electric Guitar Wine Red",
    imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/L54490000001000-00-160x160.jpg',
    cost: 1499.00,
    reviews: 5,
    reviewsCount: 14
  },
  {
    name: "Squier Limited Edition Bullet Telecaster Electric Guitar Lake Placid Blue",
    imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/L21128000002000-00-160x160.jpg',
    cost: 179.99,
    reviews: 4.5,
    reviewsCount: 90
  },
]

const insertSampleData = function() {
  View.create(sampleData)
    .then(() => db.disconnect());
};

insertSampleData();