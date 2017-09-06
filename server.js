/**
 * Module dependencies.
 */
process.title = "msuapp";

var express = require('express'),
    routes = require('./routes'),
    fs = require('fs'),
    http = require('https'),
    pem = require('pem'),
    path = require('path'),
    favicon = require('serve-favicon'),
    methodOverride = require('method-override'),
    multer = require('multer'),
    logger = require('morgan'),
    errorHandler = require('errorhandler');

pem.createCertificate({
    days: 365,
    selfSigned: true
}, function(err, keys) {

    app = express();

    // all environments
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

    app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(logger('dev'));
    app.use(methodOverride());
    app.use(express.static(path.join(__dirname, 'public')));

    // development only
    if ('development' == app.get('env')) {
        app.use(errorHandler());
    }

    app.get('/', routes.index);
    app.get('/:message', routes.index);
    app.get('/partials/:name', routes.partials);
    app.get('/partials/:subpath/:name', routes.subpartials);
    app.get('/partials/:sub2path/:subpath/:name', routes.sub2partials);

    httpsOptions = {
        key: keys.serviceKey,
        cert: keys.certificate
    };

    http.createServer(httpsOptions, app).listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });
});