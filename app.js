// news feed app.js file

var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();


// Routes
app.get('/', function(req, res){
  // res.render("views/site/index");
  res.send("home");
});

app.get('/about', function(req, res){
  // res.render("views/site/about");
  res.send("about");
});

app.get('/contact', function(req, res){
  // res.render("views/site/contact");
  res.send("contact");
});

app.listen(3000);
