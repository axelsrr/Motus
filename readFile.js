const fs = require('fs');
const port = 3000

fs.readFile('/data/liste_francais.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
