var express = require('express');
var router = express.Router();


/* GET boletos listing. */
router.get('/', function(req, res, next) {
  res.render('boletos', { title: 'Boletos'});
});

module.exports = router;
