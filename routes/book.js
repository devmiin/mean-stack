var express = require('express');
var auth = require('http-auth');

var router = express.Router();

var basic = auth.basic({ realm: "Protected Area" }, 
  (username, password, callback) => { 
    console.log(username, password);
    // Custom authentication
    // myAsyncAuthorizer(username, password, callback)
  callback(username === "nayar" && password === "mydumbpassword");
});

var authorization = auth.connect(basic);

/* GET home page. */
router.get('/', authorization, function (req, res, next) {
  res.send({ test: 123 });
});

module.exports = router;
