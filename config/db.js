const mongoose = require("mongoose");
const colors = require("colors");

//mongodb database connection

const connectDB = async () => {
try{
await mongoose.connect(process.env.MONGO_URL)
console.log(`MongoDB connected: ${mongoose.connection.host}`.bgCyan.white);
} catch(error){
    console.log('db error',error,colors.bgRed)
}


};

module.exports =  connectDB ;