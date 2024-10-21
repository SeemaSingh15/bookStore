import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
  console.log('Connection to MongoDB is successful!!');

}).catch((err)=>{
console.log(err);
});


