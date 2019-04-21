var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/profile', function(req, res) {
  res.render('profile');
});
router.get('/profile2', function(req, res) {
  res.render('profile2');
});
router.get('/profile3', function(req, res) {
  res.render('profile3');
});
router.get('/profile4', function(req, res) {
  res.render('profile4');
});
module.exports = router;
