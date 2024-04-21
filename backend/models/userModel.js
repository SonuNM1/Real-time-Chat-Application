
const mongoose = require("mongoose") ; 

const userModel = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true 
    },
    profilePhoto: {
        type: String,
        default:""
    },
    gender:{
        type: String,
        enum:["Male", "Female"],
        required: true
    }
}, {timestamps: true} ) ; 

module.exports = mongoose.model("User", userModel) ;  