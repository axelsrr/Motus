const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fs = require('fs');
const date = new Date();
const dateJour = date.getDate();
var os = require("os");
var hostname = os.hostname();
app.use(express.static('static'));

var array = fs.readFileSync(__dirname+'/data/liste_francais_utf8.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
}).toString().split("\r\n");

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min + dateJour -1);
}

let x = getRandomArbitrary(1, 1000);

app.get('/wordguess', (req, res) => {
    var test="titi"
    res.send({"word":array[x],"coucou":test});
})

app.get('/array',(req,res)=>{
    res.send(["a","b","c"])
})

app.get('/port',(req,res)=>{
  res.send("MOTUS APP working on "+ hostname + " port "+ port)
})

app.get('/health',(req,res)=>{
  res.send("OK")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
