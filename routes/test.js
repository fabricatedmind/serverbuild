var express = require('express');
var router = express.Router();
var testController = require('../controllers/testController');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  console.log("RESULTS: "+req.body.results);
  var results = JSON.stringify(req.body);
  res.render('index', { results: results});
});*/

router.get('/', function(req,res,next){
    res.render('test');
});

router.post('/', testController.testPost)


module.exports = router;
