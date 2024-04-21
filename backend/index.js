
const express = require('express') ; 

const dotenv = require("dotenv") ; 
const  connectDB = require('./config/database.js');
const { connect } = require('mongoose');
const userRouter = require("./routes/userRoute.js") ; 

dotenv.config() ; 

const app = express() ; 

const PORT = process.env.PORT || 8080 ; 

// middleware

app.use(express.json()) ; 

// routes 

app.use("/api/v1/user", userRouter) ; 

app.listen(PORT, async ()=>{
    try{
        await connectDB() ; 
        console.log(`Server listening at port ${PORT}`) ; 
    } catch (error){
        console.log("Failed to connect to database", error) ; 
    }
});

