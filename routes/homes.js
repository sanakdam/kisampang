exports.getHome = function(req, res, next) {
    res.render('home');
}

exports.getGaleri = function(req, res, next) {
    res.render('galeri');
}

exports.getSikapDasar = function(req, res, next) {
    res.render('sikapdasar');
}

exports.getTentangKI = function(req, res, next) {
    res.render('tentangki');
}