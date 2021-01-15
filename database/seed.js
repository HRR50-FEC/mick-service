const axios = require('axios')
const db = require('./index.js');
const listing = require('./schema.js');
const c = require('../config.js')

const queries = ['table', 'spoon', 'mug', 'fork']

queries.forEach(query => {
  seed = []
  for (var i = 0; i < 16; i++) {
    axios.get(`https://api.unsplash.com/search/photos?client_id=${c.unsplash}&query=${query}&page=${i}`)
      .then(result => {
        //console.log(result.length);
        let items = result.data.results.slice()
        //console.log(items.length);
        items.forEach(image => {
          seed.push({ "raw": image.urls.raw, "full": image.urls.full, "regular": image.urls.regular, "small": image.urls.small, "thumb": image.urls.thumb })
        });
      })
      .catch(err => console.log(err))

  }
  console.log(seed.length)
})




// const seedDB = function () {
//   listing.create(samplePosts)
//     .then(() => db.disconnect());
// };

//seedDB();


