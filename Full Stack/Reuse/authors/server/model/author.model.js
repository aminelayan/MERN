const mongoose = require('mongoose')
const AuthorzSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[
            true,"Name is Required"
        ]
    }
},{timestamps:true});
module.exports.Authorz =mongoose.model('Authorz',AuthorzSchema);