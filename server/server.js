var express = require('express');
var app = express();

app.get('/',function(req,res){
  res.send('jiggly');
})

var server = app.listen(8080, function(){
  console.log('Server running at http://localhost:' + server.address().port);
});
