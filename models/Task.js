//definig task schemas
const mongoose = require("mongoose");



//defining task schema
const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'   //owner is coming from user collection 
    }
},{
    timestamps:true
});
 


 
const Task = mongoose.model('task',taskSchema);
module.exports = Task;

 //this file is telling : My database will have a users collection and each user must have name, email,password, all strings and required;
