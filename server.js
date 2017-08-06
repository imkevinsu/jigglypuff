var express           = require('express');
var app               = express();
var bodyParser        = require('body-parser');
var mongoose          = require('mongoose');
var foodsController   = require('./server/foods-controller');


mongoose.Promise = global.Promise; //to stop error messages in console
mongoose.connect('mongodb://localhost:27017/foodItems'); //connected to the database

//
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/index.html'); //display the landing page!
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/foods', foodsController.list);
app.post('/api/foods', foodsController.create);

//server address
var server = app.listen(3000, function(){
  console.log('Server running at http://localhost:' + server.address().port);
});
