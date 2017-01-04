var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var path = require('path');

var port = process.env.PORT || 3000;

http.listen(port, function(){
  console.log('server up on', port);
});

app.get('/', function(req,res){
  res.sendFile(path.resolve('public/index.html'));
});

app.use(express.static('public'));
