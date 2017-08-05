require('./dbconnect.js').open();
var express = require('express');
var app = express();
// var path = require('path');
// var bodyParser = require('body-parser');

app.get('/',function(req,res){
  res.send('jiggly');
})

var server = app.listen(8080, function(){
  console.log('Server running at http://localhost:' + server.address().port);
});
