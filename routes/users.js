var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  res.render('home',{user: req.user});
});

router.get('/login', function(req,res,next){
  res.render('login');
});

router.get('/login/twitter', passport.authenticate('twitter'));

router.get('/login/twitter/return', passport.authenticate('twitter', {failureRedirect: '/login'}), function(req,res,next){
  res.redirect('/');
})

module.exports = router;
