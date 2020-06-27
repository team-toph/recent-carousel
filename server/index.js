const express = require('express');

const View = require('../database/View.js');
const db = require('../database/index');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../dist'));

// app.get('/', function(req, res) {
//   res.send('Hello World!')
// });

app.get('/api/bought', function(req, res) {
  View.find(function(err, data) {
    if (err) {
      console.log('get error in server', err);
    } else {
      res.status(200).json(data);
    }
  })
})
// app.get('/api/bought/:id', function(req, res) {
//   View.find({id: req.params.id})
//     .then((data) => {
//       res.status(200).send(data);
//     });
// })

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;