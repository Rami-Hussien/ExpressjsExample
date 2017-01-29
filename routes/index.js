var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getit', function (req,res) {
  var responseObject = {msg: "GET OK!"};
  res.send(responseObject);

});

router.post('/postit', function (req, res) {
  var responseObject = {msg: "POST OK!"};
  res.send(responseObject);
});


module.exports = router;
