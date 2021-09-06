var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes/web'));
app.use(express.static(__dirname + '/public')); 

app.listen(3000, function () {
});