const animesub = require('../index.js')
const title = 'boruto'
const title2 = 'shokugeki no souma'
const filename = 'boruto_napisy' // output boruto_napisy.zip
const titletype = {
  org: 'org', // oryginalny tytuł
  pl: 'pl', // polski tytuł
  en: 'en' // angielski tytuł
}

let id = 1

animesub.download(title, titletype.org, id, filename)

animesub.search(title2, titletype.org).then(({titles, queries}) => {
  console.log(titles)
  console.log(queries) // first index[0] = id, second index[1] = sh
}).catch((err) => {
  console.log(err)
})
