const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const listing = new mongoose.Schema({
  imageURLs: [{
    raw: String,
    full: String,
    regular: String,
    small: String,
    thumb: String
  }]
});

const listings = mongoose.model('listing', listing);



module.exports = listing;

