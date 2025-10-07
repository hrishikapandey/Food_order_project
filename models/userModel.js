const mongoose = require('mongoose');

//schema



const userSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required:[true,"Please provide a name"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minLength:[6,"password must be at least 6 characters"]
    },
    address:{
        type:String,
        required:[true,"address is required"],

    },
    userType:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    profile:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
    }
},{timestamps:true});

module.exports = mongoose.model("User",userSchema);