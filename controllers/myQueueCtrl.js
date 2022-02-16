const List = require('./../models/List')
const Song = require('./../models/Song')


exports.getLists = async (req, res) => {
    const lists = await List.find({});
    res.render('myqueue', { all: lists});
}

exports.getViewList = async (req, res) => {
    const { id } = req.params;
    const getOneList = await List.findById( id ).populate('songs');
    res.render('myqueue', { details: getOneList });
}

exports.getNewList = (req, res) => {
    res.render('myqueue', { newlist: true });
}

exports.postNewList = async (req, res) => {
    const { name } = req.body;
    try {
        const nl = await List.create({ name, type: 'myQueue' });
        console.log(nl)
        res.redirect('/myqueue')
    } catch (error) {
        console.log(error)
    }
}


exports.getEditList = async (req, res) => {
    const { id } = req.params;
    const getOneList = await List.findById( id ).populate('songs');
    res.render('myqueue', { editlist: getOneList , edit: true });
}

exports.postEditList = async (req, res) => {
    const { id } = req.params;
    const { name, songs } = req.body;
    try {
        const el = await List.findByIdAndUpdate(id, { name, songs }, {new: true});
        console.log(el)
        res.redirect('/myqueue')
    } catch (error) {
        console.log(error)
    }
}
exports.deleteList = async (req, res) => {
    const { id } = req.params;
    await List.findByIdAndDelete(id);
    res.redirect('/myqueue')
}