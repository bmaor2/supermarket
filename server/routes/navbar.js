var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/img', function(req, res) {
  res.sendFile(req.query.imgUrl)
});

module.exports = router;
