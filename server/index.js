const express = require('express');

const Views = require('../database/View.js');
const db = require('../database/index');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.get('/api/recentlyViewed', function(req, res) {
  Views.find(function(err, data) {
    if (err) {
      console.log('get error in server', err);
    } else {
      res.json(data);
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});