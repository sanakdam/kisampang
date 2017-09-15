var express = require('express');
var router = express.Router();
var user = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
    req.getConnection(function(err, connection) {
        user.getUser(req, connection, function(callback) {
            if (callback != false) {
                res.render('index', { title: callback[0].name });
            } else {
                res.render('index', { title: 'ERRORS' });
            }
        })
    })
});

module.exports = router;