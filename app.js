const createError = require('http-errors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const apiRouter = require('./routes/Users');
const dashRouter = require('./routes/Dashboard');

const app = express();
const mongoose = require('mongoose');
const mongodbHost = 'ds163650.mlab.com';
const mongodbPort = '63650';
const authenticate = 'ApiAccess:mazel098@'; //admin 'yona321:mazel1419@'
const mongodbDatabase = 'compudime';

// connect string for mongodb server running locally, connecting to a database called test
const url = 'mongodb://'+authenticate+mongodbHost+':'+mongodbPort + '/' + mongodbDatabase;

mongoose.connect(url, { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/dashboardServer')));
app.use('/', express.static(path.join(__dirname, 'dist/dashboardServer')));
app.use('/api', apiRouter);
app.use('/dash', dashRouter);

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
  res.send(err.status);
});

module.exports = app;