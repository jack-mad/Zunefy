const mongoose = require('mongoose')

const songSchema = mongoose.Schema({
    name:{
        type: String,
    },
    artists: String,
    album: String,
    cover: String,
    preview_url: String,
    selectedby: String
},
{
    timestamps: true
});
const Song = mongoose.model('Song', songSchema);
module.exports = Song;