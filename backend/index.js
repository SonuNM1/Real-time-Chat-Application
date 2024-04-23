
const express = require('express') ; 

const dotenv = require("dotenv") ; 
const  connectDB = require('./config/database.js');
const { connect } = require('mongoose');
const userRouter = require("./routes/userRoute.js") ; 
const messageRoute = require("./routes/messageRoute.js") ; 
const cookieParser = require("cookie-parser") ; 
const cors = require("cors") ; 

dotenv.config() ; 

const app = express() ; 

const PORT = process.env.PORT || 8080 ; 

// middleware

app.use(express.urlencoded({extended:true})) ; 
app.use(express.json()) ; 
app.use(cookieParser()) ; 

const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true
} ; 

app.use(cors(corsOption)) ; 

// routes 

app.use("/api/v1/user", userRouter) ; 
app.use("/api/v1/message", messageRoute) ; 

// app listening on

app.listen(PORT, async ()=>{
    try{
        await connectDB() ; 
        console.log(`Server listening at port ${PORT}`) ; 
    } catch (error){
        console.log("Failed to connect to database", error) ; 
    }
});

