const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});