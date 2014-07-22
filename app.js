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
  // res.send("home");
});

app.get('/about', function(req, res){
  res.render("site/about");
  // res.send("site/about");
});

app.get('/contact', function(req, res){
  res.render("site/contact");
  // res.send("contact");
});

// dynamic articles pages
app.get('/articles', function(req, res){
  res.render("articles/summaries");
  // res.send("article summaries");
});

app.get('/articles/new', function(req, res){
  res.render("articles/new");
  // res.send("form to submit new articles");
});

// app.post('/articles', function(req, res){
//   // res.render("articles");
//   res.send("save an article");
// });

app.get('/articles/:id', function(req, res){
  res.render("articles/show", {article: article});
  // res.send("show article with given id");
});


app.listen(3000);
