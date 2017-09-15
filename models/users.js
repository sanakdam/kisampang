exports.getUser = function(req, connection, callback) {
    connection.query('SELECT * FROM users', function(err, rows) {
        if (err) {
            callback(false);
        } else {
            callback(rows);
        }
    })
}