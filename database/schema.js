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

const addListing = (objArr) => {
  listings.create(objArr).then(() => console.log('added'))
}



module.exports = listing;
module.exports.addListing = addListing;

