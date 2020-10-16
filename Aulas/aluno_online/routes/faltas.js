var express = require('express');
var router = express.Router();


/* GET faltas listing. */
router.get('/', function(req, res, next) {
  res.render('faltas', { title: 'Faltas'});
});

module.exports = router;
