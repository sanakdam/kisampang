var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var formidable = require('formidable');
var admins = require('../models/admins');

exports.getPost = function(req, res, next) {
    res.render('admin/post');
}

exports.postPost = function(req, res, next) {
    var filename = path.basename(req.files.image);
    var path_image = './public/post/' + filename;

    console.log(filename);
    // if (!req.files)
    //     return res.status(400).send('No files were uploaded.');

    // // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    // let sampleFile = req.files.image;

    // // Use the mv() method to place the file somewhere on your server
    // sampleFile.mv(path_image, function(err) {
    //     if (err)
    //         return res.status(500).send(err);
    //     res.send('File uploaded!');
    // });

    // fs.readFile(req.files.image.path, function(err, data) {
    //     fs.writeFile(path_image, data, function(err) {
    //         if (err) return console.log(err);
    //         console.log('FILE SAVED');
    //     });
    // })

    // req.getConnection(function(err, connection) {
    //     admins.postPost(body, connection, function(callback) {
    //         if (callback != false) {

    //         }
    //     })
    // })
}