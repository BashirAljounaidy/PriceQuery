var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var app = express();

//connect db
mongoose.connect('mongodb://localhost:27017/Price', { useNewUrlParser: true });

var indexRouter = require('./routes/index');



// view engine setup
app.engine('.hbs',expressHbs({defaultLayout:'layout', extname: '.hbs'}));
app.set('view engine', 'hbs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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
console.log("Server Started Successfully");


module.exports = app;
