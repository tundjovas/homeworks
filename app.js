var express = require('express');
var app = express();

app.use(require('./routes/web'));

app.listen(3000, function () {
});