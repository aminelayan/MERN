
const mongoose = require('mongoose')
const TeamSchema = new mongoose.Schema({
    playerName:{
        type:String,
        required: [true,
            "Name must be at least 2 charaters in length"
        ]
    },
    preferredPosition:{
        type:String,
    }

},{timestamps:true});
module.exports.Team =mongoose.model('Team',TeamSchema);