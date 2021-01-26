var express = require('express');
var vash = require('vash');
var app = express();

app.set('view engine', 'vash');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/index.html', (req, res) => {
    res.render('index');
});
app.get('/about.html', (req, res) => {
    res.render('about');
});
app.get('/services.html', (req, res) => {
    res.render('services');
});
app.get('/blog.html', (req, res) => {
    res.render('blog');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('*', (req, res) => {
    res.render('index');
});
app.listen(8080);