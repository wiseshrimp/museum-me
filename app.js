var express = require('express');
var app = new express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var path = require('path');

var publicPath = path.join(__dirname, '/public');
var nodeModulesPath = path.join(__dirname, '/node_modules');
var mainPath = path.join(__dirname, '/build');
var port = process.env.PORT || 8080;

var server = app.listen(port, function (err) {
    console.log('Listening on port ', port);
    if (err) throw err;
});

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(publicPath));
app.use(express.static(mainPath));
app.use(express.static(nodeModulesPath));

// Loading page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, "/views", "welcome.html"))
})

app.get("/logout", (req, res) => {
    res.sendFile(path.join(__dirname, "/views", "logout.html"));
})

app.get("/privacy", (req, res) => {
    res.sendFile(path.join(__dirname, "/views", "privacy-policy.html"));
});

module.exports = app;