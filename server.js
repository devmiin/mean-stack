var express = require('express');
var apiRouter = require('./routes/book');
var cors = require('cors');

var app = express();

app.use(cors());
app.options('*', cors()); // npm install cors --save

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api', apiRouter);

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});
