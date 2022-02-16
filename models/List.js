const mongoose = require('mongoose')

const ListSchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: "Song"
    }],
    urlSpotify: String,
    type: String
},
{
    timestamps: true
});
const List = mongoose.model('List', ListSchema);
module.exports = List;