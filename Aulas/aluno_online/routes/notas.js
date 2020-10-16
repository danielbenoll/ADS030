var express = require('express');
var router = express.Router();

const notasDB = require('../data/notas.json');

/* GET notas listing. */
router.get('/', function(req, res, next) {
  res.render('notas', { title: 'Notas', notas: notasDB.data});
});

module.exports = router;
