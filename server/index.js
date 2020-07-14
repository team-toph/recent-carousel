const express = require('express');

const db = require('../maria/index.js');

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../dist'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.post('/api/products', (req, res) => {
  req.body.id = req.query.id;
  db.create(req.body)
    .then((results) => {
      res.status(201).json(results);
    });
});

app.get('/api/products', function(req, res) {
  const id = req.query.id;
  var start = Date.now();
  db.find(id)
    .then((data) => {
      console.log('Time to fetch from db: ', Date.now() - start);
      res.status(200).json(data);
    });
});

// app.put('/api/products', (req, res) => {
//   var id = req.query.id;
//   View.findOneAndUpdate({id: id}, req.body, {new: true})
//     .then((results) => {
//       res.status(200).json(results._doc);
//     });
// });

// app.delete('/api/products', (req, res) => {
//   var id = req.query.id;
//   View.deleteOne({id: id})
//     .then((results) => {
//       res.end();
//     });
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;