var express = require('express');
var router = express.Router();
var buildController = require('../controllers/buildController');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  console.log("RESULTS: "+req.body.results);
  var results = JSON.stringify(req.body);
  res.render('index', { results: results});
});*/

router.get('/', buildController.buildList);

router.get('/api/list', buildController.buildListApi);

router.get('/newBuild', function(req, res, next){
  var results = JSON.stringify(req.body);
  console.log("req.body: "+results);
  res.render('newBuild',{});
});

router.post('/', function(req,res,next){
  var results = req.body;
  console.log("POST: req.body: "+results);
  //res.redirect('/')
  res.render('index', {'results': results});
})

module.exports = router;
