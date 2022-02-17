const List = require('./../models/List')
const Pool  = require('./../models/Pool')
const Song  = require('./../models/Song')


exports.showPool = async (req, res) => {
    const lists = await List.find({});
    const song = await Song.find({});
    console.log(lists , song);

    res.render('synapsearch', { alllists: lists, allpool: song });
}
exports.postAddSong = async (req, res) => {
    const selectedby = req.session.currentUser.username
    console.log(selectedby)
    const { name, artists, album, cover, preview_url } = req.body
    try {
        const song = await Song.create({ name, artists, album, cover, preview_url, selectedby})
        console.log(song);
        res.redirect(req.get('referer') );
    } catch (error) {
        console.log(error);
    }
}


// exports.postEditList = async (req, res) => {
//     const { id } = req.params;
//     const { name, songs } = req.body;
//     try {
//         const el = await List.findByIdAndUpdate(id, { name, songs }, {new: true});
//         console.log(el)
//         res.redirect('/myqueue')
//     } catch (error) {
//         console.log(error)
//     }
// }

// exports.deleteList = async (req, res) => {
//     const { id } = req.params;
//     await List.findByIdAndDelete(id);
//     res.redirect('/myqueue')
// }