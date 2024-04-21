
/*
thirdSemesterProject

 username -> sonumahto362000
 password -> OJ9sVU2LoZlSBRLc
 */

 const mongoose = require('mongoose');

 const connectDB = async () => {
     try {
         await mongoose.connect(process.env.MONGO_URI);
         console.log('Database connected');
     } catch (error) {
         console.error(error);
     }
 };
 
 module.exports = connectDB;
 
