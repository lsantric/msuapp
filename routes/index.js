exports.index = function(req, res){
  res.render('index.jade');
};
/** serve jade enabled partials */
exports.subpartials = function(req, res) {
    res.render('partials/' + req.params.subpath + '/' + req.params.name);
};
exports.partials = function(req, res) {
    res.render('partials/' + req.params.name);
};