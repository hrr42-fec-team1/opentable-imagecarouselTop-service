const express = require ('express');
const parser = require('body-parser');
const Image = require('../database/Image.js');
const cors = require('cors');

let port = process.env.PORT || 3005;

let app = express();

app.use(parser.json());
app.use(express.static(__dirname + '/../public'));
app.use(cors());

app.get('/restaurantid/:id', (req, res) => {
  const restaurantId = Number(req.params.id);
  Image.findById(restaurantId)
    .then((data) => {
      res.send(JSON.stringify(data));
    })
    .catch((err) => {
      res.end();
    });
});

app.listen(port, () => {
  console.log('Port 3005 is listening');
});


