const mongoose = require('mongoose')

const ListSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: "Song"
    }],
    type: String,
    createdby: String,
},
{
    timestamps: true
});
const List = mongoose.model('List', ListSchema);
module.exports = List;