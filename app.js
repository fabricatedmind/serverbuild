var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const passport = require('passport');
var Strategy = require('passport-twitter');


var index = require('./routes/index');
var users = require('./routes/users');
var test = require('./routes/test');

///Twitter passport stuff
passport.use(new Strategy({
    //consumerKey: process.env.CONSUMER_KEY,
    consumerKey: '7M2R6PccQXpyj4PY1RpWVadOz',
    //consumerSecret: process.env.CONSUMER_SECRET,
    consumerSecret: 'jyQuFb7ekB8QlNPb5WNlJap8oi2tWeQbPzLmdGPnT44GFmFVwY',
    callbackURL: 'http://localhost:3000/users/login/twitter/return'
  },
  function(token, tokenSecret, profile, cb) {
    // In this example, the user's Twitter profile is supplied as the user
    // record.  In a production-quality application, the Twitter profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile);
  }));

  passport.serializeUser(function(user,cb){
    cb(null,user);
  });
  passport.deserializeUser(function(user,cb){
    cb(null,user);
  });




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({
  secret: 'blah blah', 
  resave: true, 
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/users', users);
app.use('/test',test);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
