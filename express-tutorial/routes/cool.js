var express = require('express');
var router = express.Router();

/* GET cool page. */
router.get('/', function(req, res, next) {
  res.send('this is cool!');
});

module.exports = router;