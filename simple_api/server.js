var path = require('path');
var express = require('express');
var api = require('./api');
var bodyParser = require('body-parser');
var port = 8080;

var app = express();

app.use(bodyParser.json());
app.use('/', api)

app.listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:' + port);
});
