var express = require('express');
var router = express.Router();
var FP = require('../controllers/FrontController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', FP.index);
router.get('/about', FP.about);
router.get('/contact', FP.contact);
router.get('/users', FP.users);

module.exports = router;
