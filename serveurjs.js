const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); 
  const fs = require('fs');
  var array = fs.readFileSync('/home/cytech/motus/data/liste_francais.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    for (i in array){
      res.end(array[i])
    }
    // res.end(array[127]);
    // res.end(data);
  }).toString().split("\n");
  //for (i in array){
  //  console.log(array[i])
  //}
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});