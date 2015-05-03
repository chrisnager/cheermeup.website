'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./.env.' + process.env.NODE_ENV + '.js');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();

var app = express();

app.set('port', config.port);
app.set('views', __dirname + '/dist');
app.use(express.static(path.join(__dirname, 'dist')));
app.use(logger('combined'));

app.get('/', function(req, res) {
  res.render('index.html');
})

// Export server so it can be used with gulp
if(require.main === module) {
    app.listen(app.get('port'), function() {
        console.log('Server started @ localhost:' + app.get('port'));
    })
} else {
    module.exports = app
}
