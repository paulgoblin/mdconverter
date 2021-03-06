'use strict'


var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var marked = require('marked');


var app = express();
app.set('view engine', 'jade');

var port = process.env.PORT || 3000;


//middleware
app.use( morgan('combined') );
app.use( bodyParser.urlencoded( { extended: true } ) );   // access form data
app.use( bodyParser.json() )  // access json data
app.use( express.static('public') )

//api
app.post('/render', function(req,res) {
  var markdown = req.body.markdown;
  res.send(marked(markdown))
})

//routes
app.get('/',function(req,res){
  console.log('headers: ', req.headers);
  res.render('index');
});


app.listen(port);