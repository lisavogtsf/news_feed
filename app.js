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

app.get('/articles', function(req, res){
  // res.render("views/articles/");
  res.send("article summaries");
});

app.get('/articles/new', function(req, res){
  // res.render("views/articles/new");
  res.send("form to submit new articles");
});

// app.post('/articles', function(req, res){
//   // res.render("views/articles");
//   res.send("save an article");
// });

app.get('/articles/:id', function(req, res){
  // res.render("views/articles/:id");
  res.send("show article with given id");
});


app.listen(3000);
