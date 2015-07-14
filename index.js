var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || 3000;

var hellobot = require('./hellobot');
var bot = require('./bot');



// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!') });

app.post('/hello', hellobot);

app.post('/bot', function(req, res){bot.handle(req, res)});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('Slack bot listening on port ' + port);
});

