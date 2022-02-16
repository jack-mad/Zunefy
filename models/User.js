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
        type:String,
        default: "cute girl"
    },
    avatar:{
        type:String,
        default: "https://i.pinimg.com/550x/51/0b/fb/510bfb16b32f08aff3938a0cbcb847a2.jpg"
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