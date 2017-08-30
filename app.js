/*global module*/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var session = require('express-session');
// var RedisStore = require('connect-redis')(session);
var compression = require('compression');
// var MongoStore = require('connect-mongo')(session);
// var config = require('./config/config.json');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'ejs');
var partials = require('express-partials');
app.set('x-powered-by', false);
app.use(partials());

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/dist/images/favicon.ico'));
app.use(compression());
app.use(bodyParser.json({
  limit: '150mb'
}));
app.use(bodyParser.urlencoded({
  limit: '150mb',
  extended: false
}));
app.use(express.static(path.join(__dirname, 'dist')));


app.use(cookieParser('some secret'));
// var sessionConfig = require(__dirname + '/config/session.json');
// var redisConfig = require(__dirname + '/config/redis.json');
//设置session使用 redis 或是临时文件
// if (sessionConfig && sessionConfig.store && sessionConfig.store === 'redis') {
//   console.log('---session store in redis---');
//   app.use(session({
//     secret: sessionConfig.secret,
//     store: new RedisStore({
//       host: redisConfig.ip,
//       port: redisConfig.port,
//       ttl: redisConfig.ttl
//     }),
//     cookie: {
//       maxAge: sessionConfig.maxAge,
//       secure: false
//     },
//     resave: false,
//     saveUninitialized: true
//   }));
// } else { //tmp file
//   console.log('---session store in tmp_file---');
//   app.use(session({
//     secret: sessionConfig.secret,
//     cookie: {
//       maxAge: sessionConfig.maxAge,
//       secure: false
//     },
//     resave: false,
//     saveUninitialized: true
//   }));
// }

var routes = require('./routes/index');

//允许跨域
app.use('*',function(req, res, next) {
  //如果设置此项，req.session将无法保存数据
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  // res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use('/', routes);

// catch 404 and forward to error handler

module.exports = app;
