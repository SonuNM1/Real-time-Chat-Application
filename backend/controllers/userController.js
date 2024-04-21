
const User = require('../models/userModel') ; 

const bcrypt = require("bcrypt") ; 

// register

const register = async(req, res)=>{
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body ; 

        if(!fullName || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({message:"All fields are required"}) ; 
        }

        // password and confirm-password field didn't match

        if(password != confirmPassword){
            return res.status(400).json({message:"Password didn't match"}) ; 
        }

        // if user exists already in the database 

        const user = await User.findOne({username}); 

        if(user){
            return res.status(400).json({message:"Username already exists! Try different username"}) ; 
        }

        // Password hashing 

        const hashedPassword = await bcrypt.hash(password, 10) ; 

        // profile photo

        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}` ; 

        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}` ; 

        await User.create({
            fullName, 
            username,
            password: hashedPassword,
            profilePhoto: gender === "Male" ? maleProfilePhoto : femaleProfilePhoto , 
            gender
        }) ;

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        }) ; 

    }catch(error){
        console.log(error) ;
        return res.status(500).json({message:"Internal Server Error"}) ;  
    }
}

// login 

const login = async (req, res)=>{
    try{
        const {username, password} = req.body ; 

        // if user didn't entered his username and password field during logging in 

        if(!username || !password){
            return res.status(400).json({message:"All fields are required"}) ; 
        }

        const user = await User.findOne({username}) ; 

        // if user credentials doesn't exist in database 

        if(!user){
            return res.status(400).json({
                message:"Incorrect username or password",
                success: false
            }) ; 
        } ; 

        // if user credentials exists in database 

        const isPasswordMatch = await bcrypt.compare(password, user.password) ; // will return true or false value depending on whether credentials matched or not (inputs given by the user vs the one stored in the database)

        if(!isPasswordMatch){
            return res.status(400).json({
                message:"Incorrect username or password",
                success: false
            }) ; 
        }

        

    } catch(error){
        console.log(error) ;   
    }
}

module.exports = {register} ; 