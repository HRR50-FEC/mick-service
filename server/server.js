const express = require('express');
const bp = require('body-parser');
const port = 3333;
const listings = require('../database/schema.js');

const app = express();

app.use(express.static('public'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/listing', (req, res) => {
  listings.getRandom(item => {
    res.json(item)
  })
})

app.listen(port, () => {
  console.log(`You are now listening to ${port} radio`)
})