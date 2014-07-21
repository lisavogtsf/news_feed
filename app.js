// news feed app.js file

var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();


// Routes
app.get('/', function(req, res){
  res.render("views/site/index");
});

app.get('/about', function(req, res){
  res.render("views/site/about");
});

app.get('/contact', function(req, res){
  res.render("views/site/contact");
});

app.listen(3000);
