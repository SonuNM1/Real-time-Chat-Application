
const mongoose = require("mongoose") ; 

const userModel = new mongoose.schema({
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

export const User = mongoose.model("User", userModel) ;  