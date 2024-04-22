
const User = require('../models/userModel') ; 
const jwt = require("jsonwebtoken") ; 
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

        // create an object contaiing user data to be included in the JWT payload

        const tokenData = {
            userId: user._id
         } ;
        
         // Generate a JSON Web Token (JWT) using the user data, a secret key, and an expiration day of 1 day

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn:'1d'});

         // set the generated JWT as a cookie named "token" in the HTTP response

        return res.status(200).cookie("token", token, {maxAge:1*24*60*60*1000, httpOnly: true, sameSite: 'strict'}).json({
            _id:user._id , 
            username: user.username,
            fullName: user.fullName,
            profilePhoto: user.profilePhoto
        }) ; 

         // maxAge -> specifies the max age of the cookie (in ms). Determines how long the cookie will remain valid before it expires

    } catch(error){
        console.log(error) ;   
    }
}

// logout

const logout = (req, res)=>{
    try{
        return res.status(200).cookie("token", "", {maxAge: 0}).json({
            message: "Logged Out successfully"
        })
    } catch(error){
        console.log(error) ; 
    }
}

// show other users - retrieves other users excluding the currently logged-in user

const getOtherUsers = async(req, res)=>{
    try{
        const loggedInUserId = req.id ; // extract the ID of the logged-in user from the req.

        const otherUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password") ; // find other users excluding the logged-in user by querying the user collection. Select all fields except the "password" field for security reasons

        return res.status(200).json(otherUsers) ; // sending a JSON response contaiing the retrieved other user's information

    }catch(error){
        console.log(error) ; 
    }
}

module.exports = {register, login, logout, getOtherUsers} ; 