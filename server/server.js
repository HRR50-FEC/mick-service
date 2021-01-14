const express = require('express');
const bp = require('body-parser');
const port = 3333;

const app = express();

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`You are now listening to ${port} radio`)
})