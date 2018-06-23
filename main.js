const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
   res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 5000, function(){
   console.log('app ready [' + process.env.PORT || 5000 + ']');
});