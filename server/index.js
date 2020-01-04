const express = require('express');
const bodyParser = require('body-parser');
const helper = require("../helpers/weatherstack");
const db = require("../database-mongo/index");
const users = require("../database-mongo/users");

var app = express();
app.use(bodyParser.json());

 app.use(express.static(__dirname + '/../react-client/dist'));


 /*app.get('/', function (req, res) {
  db.findRepo()
  .then((data)=>{
    res.send(data);
  })
  .catch((err)=>{
    console.log("err get data ",err)
    res.send([]);
  })
});*/
app.post('/signup', function (req, res) {

  var user = req.body;
   users.save(user)
   .then((data)=>{
    console.log(data)
    res.send(data)
  })

  .catch((err)=>{

    res.send(err)
  })

});


app.post('/login', function (req, res) {

  var user = req.body;
   users.finduser(user)
   .then((data)=>{
   if(data[0].password === user.password){
    res.send(data)
   }else{
     res.send ("wrong password")
   }
  })

  .catch((err)=>{

    res.send(err)
  })

});

app.post('/current', function (req, res) {

  var location = req.body.location;

   helper.getCurrentWByLocation(location)
   .then((data)=>{
    console.log(data)
    res.send(data)
  })

  .catch((err)=>{

    res.send(err)
  })

});

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

