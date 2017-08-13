/*global module*/
var express = require('express');
var router = express.Router();
var request = require('request');
var qs = require('querystring');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('templates/index', {
    user: req.session ? req.session.user : {}
  })
})

router.get('/test', function(req, res) {
  res.render('templates/test');
})

router.get('/mobile/registrationAward', function(req, res) {
  res.render('templates/registrationAward')
})

router.get('/mobile/registerLogin', function(req, res) {
  res.render('templates/registerLogin')
})

router.get('/mobile/registerSuccess', function(req, res) {
  res.render('templates/registerSuccess')
})

var cookie = 'laravel_session=eyJpdiI6IjZaaVpYTlFvdEh4K1lNQkxJNHhqV2c9PSIsInZhbHVlIjoiRzdmMzRObWk2YW9kQUFWdCtyUjl3U252cG84Wkhscit5d0h1akhyNlZJMXZMam04eXhFYXA0T0JpUGdib0VUdlpWamhuUEtqQktUSGRXREpsZ092VVE9PSIsIm1hYyI6IjY0Nzc4MDM2ZTAwZDc1YzE4OGE5ZWNkNzkwMjFhOWFhMzRlNTc3Yzk2MTI1M2FjODNhMTUzNjU5ZWQ2ZWZmZjUifQ%3D%3D; token=eyJpdiI6IkU0SW9YbzZveWk2amVRTGtoblNWM1E9PSIsInZhbHVlIjoibU5mMkpMeUdwMFwvTVRZUnpKTWtsUHpKUWpPY2JEa0Z1TGdjMzVVZlZcL3pEYjQweWZRV0Fheno1Z2lqREdwR0wzOFEwSjEzRXJQZTI0ZTd5OHM3QTR3M1k2MklIVzJSUk5kOE9SdzJFWnJPR3FrZEQwNVE3Y2dKalNxMDJOQVQzOFgrYjBRZWU4UVhhMkZMRlVoWGlwaGpcL3JxTHFUOHpuSzZsUFJ5cTdsWkVtRDVEMU9qZVZQa25DVEtDdkUrMXlma3ZaOEVOeWprZkl0UUlxakJlRjBvb2R5eHJWaGNQUWhjZ0UyYktuREhoK3ZVZVd2akZJeWJ4VE81REY0b3FxUHcrbjJNYjh0TjAyS2lMYmxwcFVWcE9ZMkN5dEYwQ1gwRVBqSElzSm1FK0MyTUo5OWs3ajVrWXNZa1lvR1NQYWtyR25UZk1YejZLZnRsZnJBQ1BKZmZrcVJiRWlEOWhIZHVXMUttSWUrMFh0bjd3ZUkxQmh6U1YzQ21WY1E2RjJDVmVOOUNSeGd1NUpuSlhMSkxkdzhsNkNwdko4aE1JTzJ2NVJQVis0QTVPb01sK2NDeG9yaDlad0pQaGFZUnIrWFd3RkNWXC9wckFUMXVFWW5SM1NHYkJKM1AwR0xpSGd4blN5d3E2VDd0MGZIanVFa3JCdUdzZk9VaTZsWm5RajFQZFZodEg5OUh0UG5MczRLaHBBSVpHZ2ZHMGZ2a3cxRGwrZGExZGx2ckNJOTdoZDN3SVZjd2lSNVo5N1ZUaVFKZ3BTUFl0dUxweUE1NmdVS2I1RnFoUU10bG5zNVNFY25aXC94NFwvdUMwRXVEXC96SGN4enF1eW1EK01xTUxKOUdUWFFtRDdOSFlXQjQ3Um1ndno4T3A0bk8remFybEtJUVhtdmFcL202NjhtdTJMdGxZVlJTdG9ncUNJWjdIVmdOMzNKa3FIWVRTZUhJZWE5QjVqZGVqQ1U0U0g0YnNDTG9sY21HdkdFV2MzSzM0RkpPeHhib3cyWXBUZ0lTeUpYQnJick5DQkszbkN0djVicDBoenRKRzBJNG1nMGZJYTl4Q3FRelVVUHNvVUdqTGVqVGJDcW1HNEtrR1pyYjE1VG1sWTVQRlVjOFA3dlBKYWVNc21Ra2E4b1htaTlUQlo0VzVXNUJcL0VjXC9ldU1Yb2NEUXR5U2drc1pxSXB0NHBGUVRIZVNyZGxkZlBpMUJKRlZLNUhmVVBYNnF4XC91bVU4S0RhYTE3dEpSTVFsVGs3SWRDZnlZZTVHK3dRditiWXI0Vkt6bWoiLCJtYWMiOiI1ODkzMGE2MTU2NTc0NzdmNDI0YWUzOTZhMmE5MWQ3NTg5NmRmNWRjZDIwZTUyYWU2NjRiMGFiOGIyN2ZmOTU5In0%3D'

router.post('/query/queryDataPost', function(req, res) {
  var params = req.body.params;
  var url = req.body.url;
  try {
    params = JSON.parse(params);
  }catch(e) {
    params = params;
  }
  request.post({
    headers: {
      Cookie: cookie
    },
    url: url,
    json: params,
    timeout: 10000
  }, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body);
    } else {
      if (error && error.code && error.code === 'ETIMEDOUT') {
        res.send('{"result":"ServerError", "error": ' + error + '}');
      } else {
        res.send('{"result":"ServerError", "error": "unkown"}');
      }
    }
  });
})

router.post('/query/queryDataGet', function(req, res) {
  var serviceURL = req.body.url;
  console.log(serviceURL);
  request({
    headers: {
      Cookie: cookie
    },
    uri: encodeURI(serviceURL),
    method: 'GET',
    timeout: 10000
  }, function(error, response, body) {
    console.log(error);
    if (!error && response.statusCode === 200) {
      res.send(body);
    } else {
      if (error && error.code && error.code === 'ETIMEDOUT') {
        res.send('{"result":"ServerError", "error": ' + error + '}');
      } else {
        res.send('{"result":"ServerError", "error": "unkown"}');
      }
    }
  });
})

module.exports = router;
