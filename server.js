var express = require('express');
var vash = require('vash');
var app = express();

app.set('view engine', 'vash');
app.use(express.static(__dirname + '/public'));
app.listen(8080);