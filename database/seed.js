const axios = require('axios')
const db = require('./index.js');
const listing = require('./schema.js');
const c = require('../config.js')
const fs = require('fs')
const sample = require('./sampleData')
const test = sample.sample
const Promise = require('bluebird')

const queries = ['table', 'spoon', 'mug', 'fork', 'clock', 'painting', 'headphones', 'pen', 'pencil', 'marker', 'suitcase', 'purse', 'wallet', 'yarn', 'collar', 'paintbursh', 'necklace', 'earring', 'chapstick', 'charger', 'makeup', 'keyboard']


queries.forEach(query => {
  seed = []
  axios.get(`https://api.unsplash.com/search/photos?client_id=${c.unsplash}&query=${query}&per_page=120&page=1`)
    .then(result => {
      //console.log(result.length);
      let items = result.data.results.slice()
      //console.log(items.length);

      if (items.length < 30) {
        while (items.length < 30) {
          items[items.length] = items[0]
        }
      }
      for (var i = 0; i < 6; i++) {
        let index = i * 6;
        let package = items.slice(index, index + 6).map(image => {
          return { "raw": image.urls.raw, "full": image.urls.full, "regular": image.urls.regular, "small": image.urls.small, "thumb": image.urls.thumb }
        })
        if (package.length > 0) {
          listing.addListing({ imageURLs: package })
        }
      }
      // fs.writeFile(`./datastore/${query}.txt`, JSON.stringify(items), (err) => {
      //   if (err) throw err;
      //   console.log('The file has been saved!');
      // });
    })
    .catch(err => console.log(err))

})




// const seedDB = function () {
//   listing.create(samplePosts)
//     .then(() => db.disconnect());
// };

//seedDB();


// listing.addListing({ imageURLs: [{ raw: "test", full: "test", regular: "test", small: "test", thumb: "test" }, { "raw": "HELLO", "full": "HELLO", "regular": "HELLO", "small": "HELLO", "thumb": "HELLO" }] })

