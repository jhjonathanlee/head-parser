'use strict'

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.enable('trust proxy');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
  var headers = {};
  headers.ipaddress = req.ips;
  headers.user_agent = req.get('User-Agent');
  headers.language = req.get('Accept-Language');
  res.json(headers);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});