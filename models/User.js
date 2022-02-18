const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type: String,
        trim: true,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    name: {
        type:String
    },
    avatar:{
        type:String
    },
    storage:{
        type: Number,
        default: 0,
    },
    connected:{
        type: Boolean,
        default: false
    },
    myqueues: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: "List"
    }]
},
{
    timestamps: true
});
const User = mongoose.model('User', userSchema);
module.exports = User;