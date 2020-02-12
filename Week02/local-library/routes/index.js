var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yay!' });
});

router.get("/wow", function(req, res, next) {
  res.send(`wow wow wow ${req.query.name} !!!`)
});

module.exports = router;
