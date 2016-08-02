var request = require('request');
var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");
var async = require("async");
var cookieParser = require("cookie-parser");
var session = require('express-session')
var routes = require("./routes");
var helpers = require("./helpers");

var app = express(),
    env = app.get("env");

app.use(session({
  secret: 'sooper secret',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(__dirname + "/"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

/**
 * DEVELOPMENT MODE
 * If you are running the front end from your IDE or just in your localhost, first start a proxy
 * on the swarm to proxy all your requests. The request module will then proxy all traffic for you.
 *
 * _Docker Command_
 * See the docs
 */
if (env == "development") {
  //request = request.defaults({proxy: "http://192.168.99.101:8888"})
}

routes.init(app);

var server = app.listen(process.env.PORT || 8079, function () {
  var port = server.address().port;
  console.log("App now running in %s mode on port %d", env, port);
});
