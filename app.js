// news feed app.js file

var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
