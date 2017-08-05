var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/meantest';

var connection = null;

var open = function(){
  MongoClient.connect(url, function(err,db) {
    if(err){
      console.log("Database Connection Failed. Try Again.");
      return;
    }
    connection = db;
    console.log("Database Connection is Working", db);
  });
};


var get = function(){
  return connection;
};

module.exports = {
  open : open,
  get : get
};
