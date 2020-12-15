var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var port = 2014;
const AWS = require('aws-sdk');
const fs = require('fs');
AWS.config.update({
  region: 'us-east-2',
  //endpoint : 'http://localhost:8000'
  accessKeyId:'AKIA4X52LXILVULPVPVZ',
  secretAccessKey:'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'
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

var day = new Date();
cday = day.getUTCDay();
console.log("Thu ",cday);
app.listen(port,()=>{
  console.log("Listen port ",port);
})
module.exports = app;
