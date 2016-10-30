var router = require('express').Router();
var assign = require('object-assign');
var qs = require('querystring');

router.post('/login', function (req, res, next) {
    'use strict';

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    var body = '';
    var validUser = { Username: "User", Password: "Password" };

    req.on('data', function(data){
        body += data;
    });

    req.on('end', function () {
        var post = qs.parse(body);

        if (post.Username == validUser.Username && post.Password == validUser.Password) {
            res.json({ Auth: "Logged", Language: "EN" });
        } else {
            res.json({Auth: "Denied"});
        }
    });
});

module.exports = router;
