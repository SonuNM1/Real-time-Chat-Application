
const express = require('express') ; 

const dotenv = require("dotenv") ; 
const  connectDB = require('./config/database.js');
const { connect } = require('mongoose');

dotenv.config() ; 

const app = express() ; 

const PORT = process.env.PORT || 8080 ; 

app.listen(PORT, async ()=>{
    try{
        await connectDB() ; 
        console.log(`Server listening at port ${PORT}`) ; 
    } catch (error){
        console.log("Failed to connect to database", error) ; 
    }
});

