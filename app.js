// news feed app.js file

var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

// empty article array
var articleDB = [];
// folder/page name is articles plural
// object name in for is article singular

// select view engine, ejs
app.set('view engine', 'ejs');

// Routes
// static site pages
app.get('/', function(req, res){
  res.render("site/index");
});

app.get('/about', function(req, res){
  res.render("site/about");
});

app.get('/contact', function(req, res){
  res.render("site/contact");
});

// dynamic articles pages -- right term?
app.get('/articles', function(req, res){
  res.render("articles/summaries");
});

app.get('/articles/new', function(req, res){
  res.render("articles/new");
});

app.post('/articles', function(req, res){
  // use articleDB to access array of articles
  res.send("save an article");
});

// so far no successfully saved articles to show
app.get('/articles/:id', function(req, res){
  res.render("articles/show", {article: article});
});


app.listen(3000);
