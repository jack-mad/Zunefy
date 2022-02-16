exports.getHome = (req, res) => {
    res.render('index');
}
exports.getAbout = (req, res) => {
    res.render('about');
}
exports.getMyQueue = (req, res) => {
    res.render('myqueue');
}
exports.getRandOmatic = (req, res) => {
    res.render('randomatic');
}
exports.synapSearch = (req, res) => {
    res.render('synapsearch');
}