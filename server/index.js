require('newrelic');
const express = require('express');

const db = require('../maria/index.js');

const app = express();
const PORT = 3003;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use(express.static(__dirname + '/../dist'));

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(__dirname + '/../dist'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.post('/api/products', (req, res, next) => {
  db.create(req.body)
    .then((results) => {
      res.status(201).json(results);
    })
    .catch(next);
});

app.get('/api/products', function(req, res, next) {
  const id = req.query.id;
  db.find(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});

app.put('/api/products', (req, res, next) => {
  var id = req.query.id;
  db.update(id, req.body)
    .then((results) => {
      res.status(200).json(results);
    })
    .catch(next);
});

app.delete('/api/products', (req, res, next) => {
  var id = req.query.id;
  db.delete(id)
    .then((results) => {
      res.end();
    })
    .catch(next);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
