var express = require('express');
var router = express.Router();

//GRABS HOMEPAGE
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Express Project!!!' });
});

module.exports = router;
