require('./dbconnect.js').open();
var express = require('express');
var app = express();
// var path = require('path');
// var bodyParser = require('body-parser');
var foodsController = require('./server/foods-controller');

mongoose.connect('mongodb://localhost:27017/foodItems');

// app.get('/',function(req,res){
//   res.send('jiggly');
// })

app.use('/js', express.static(__dirname + '/client/js'));

app.get('/api/foods', foodsController.list);
app.post('/api/foods', foodsController.create);

var server = app.listen(8080, function(){
  console.log('Server running at http://localhost:' + server.address().port);
});
