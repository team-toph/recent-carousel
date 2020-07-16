var axios = require('axios');

var end = Date.now() + 10000;
var count = 0;
var request = function() {
  axios.get(`http://localhost:3003/api/products/?id=${Math.floor(Math.random() * 10000000)}`)
    .then((results) => {
      // console.log('got stuff', results.data[0].product.length);
    });
  count++;
  if (Date.now() < end) {
    setTimeout(request, 4);
  } else {
    console.log(count);
  }
};
request();