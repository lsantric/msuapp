exports.index = function(req, res){
  res.render('index.jade');
};
/** serve jade enabled partials */
exports.partials = function(req, res) {
    res.render('partials/' + req.params.name);
};
exports.subpartials = function(req, res) {
    res.render('partials/' + req.params.subpath + '/' + req.params.name);
};
exports.sub2partials = function(req, res) {
    res.render('partials/' + req.params.sub2path + '/' + req.params.subpath + '/' + req.params.name);
};