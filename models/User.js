//schema for user
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


//defining schema here for user
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});


//whenever password is changed then before saving hashed it 
//middleware- with this no matter wher you save password gets hashed automatically
userSchema.pre('save', async function(next){
    const user = this;
    
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }

    // next(); it is causing error so for now not using this
    // //this tells that middleware is finished, continue saving to db
})

//this line is converting schema to model and model is used to interact with db and User is model name and mongodb automatically creates collection with name as users
 const User = mongoose.model('User',userSchema);
 module.exports = User;
 


 //this file is telling : My database will have a users collection and each user must have name, email,password, all strings and required;
