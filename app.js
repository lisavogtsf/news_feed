// news feed app.js file

var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

// empty article array
// var articles = [];

// sample articles
var articles = [{0}, {1}, {2}];
articles[0] = {
  article.title: "Extra! Extra!",
  article.author: "Lois Lane",
  article.text: "Lorem ipsum blah blah blah."
};
articles[1] = {
  article.title: "Breaking news",
  article.author: "Lana Lane",
  article.text: "Retro Lorem ipsum blah blah blah."
};
articles[2] = {
  article.title: "Local News Update",
  article.author: "Clark Kent",
  article.text: "Boring Lorem ipsum blah blah blah."
};


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

// dynamic articles pages
app.get('/articles', function(req, res){
  res.render("articles/summaries");
});

app.get('/articles/new', function(req, res){
  res.render("articles/new");
});

// app.post('/articles', function(req, res){
//   // res.render("articles");
//   res.send("save an article");
// });

app.get('/articles/:id', function(req, res){
  res.render("articles/show", {article: article});
});


app.listen(3000);
