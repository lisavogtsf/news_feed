// news feed app.js file

var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

// empty article array
var articleDB = [];
// folder/page name is articles plural
// object name in for is article singular

 articleDB = [{
  title: "Extra! Extra!",
  author: "Lois Lane",
  text: "Lorem ipsum blah blah blah."
  },
    {
  title: "Breaking news",
  author: "Lana Lane",
  text: "Retro Lorem ipsum blah blah blah."
  },
   {
  title: "Local News Update",
  author: "Clark Kent",
  text: "Boring Lorem ipsum blah blah blah."
  }];


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
  res.render("articles/summaries", {key: articleDB});
});

app.get('/articles/new', function(req, res){
  res.render("articles/new");
});

// use sample from class
app.post('/articles', function(req, res){
  // use articleDB to access array of articles
  // res.send("save an article");
  console.log(req.body.story);
  articleDB.push(req.body.story);
  console.log(articleDB);
  res.redirect('/articles');  
});

// so far no successfully saved articles to show
app.get('/articles/:id', function(req, res){
  res.render("articles/show", {articleDB: article});
  var id = req.params.id;
});


app.listen(3000);
