var fs = require('fs');
var path = require('path');


exports.postPost = function(body, connection, callback) {
    var filename = path.basename(body.image);
    var path_image = './public/post/' + filename;

    fs.readFile(body.files.image.path, function(err, data) {
        fs.writeFile(path_image, data, function(err) {
            if (err) return console.log(err);
            console.log('FILE SAVED');
        });
    })

}