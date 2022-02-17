const mongoose = require('mongoose')

const poolSchema = mongoose.Schema({
    name:{
        type: String,
    },
    artists: String,
    album: String,
    cover: String,
    preview_url: String
})
const Pool = mongoose.model('Pool', poolSchema);
module.exports = Pool;