var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // Viser server data
  console.log(req.params);
  // Viser form data
  console.log(req.body);
  // Viser URL'en
  console.log(req.url);
  // Viser query strengen
  console.log(req.query);
});

module.exports = router;
